#!/usr/bin/env bash
# Hand-picked image pairs per bug.
# Photos: direct Wikimedia Commons filenames.
# Silhouettes: PhyloPic queries selected so the matched taxon is actually correct.
set -uo pipefail

BUILD=538
OUT_DIR="public/illustrations"
UA="you-buggin-app/0.1 (https://github.com/bobbykenner/you-buggin) Claude Code"

mkdir -p "$OUT_DIR"

# bug-id|wikimedia_filename|phylopic_query
ENTRIES=(
  "carpenter-ants|Camponotus_pennsylvanicus_casent0103692_profile_1.jpg|camponotus"
  "odorous-house-ants|Tapinoma_sessile_casent0005329_profile_1.jpg|tapinoma"
  "pavement-ants|Tetramorium_immigrans_casent0173173_profile_1.jpg|myrmicinae"
  "subterranean-termite-workers|Reticulitermes_flavipes_worker.jpg|rhinotermitidae"
  "termite-swarmers|Reticulitermes_flavipes_-_swarmer_-_ventral_view%2C_crop.jpg|rhinotermitidae"
  "flying-ants|Lasius_niger_winged.jpg|camponotus"
  "brown-marmorated-stink-bugs|Pentatomidae_-_Halyomorpha_halys-001.JPG|halyomorpha halys"
  "boxelder-bugs|Boisea_trivittata_-_Eastern_Boxelder_Bug_-_Tucson%2C_Arizona%2C_USA.jpg|boisea trivittata"
  "house-centipedes|Scutigera_coleoptrata_MHNT_.jpg|scutigera coleoptrata"
  "silverfish|Lepisma_saccharina_PJ_Smith.jpg|lepisma"
  "cellar-spiders|Pholcus_phalangioides_MHNT_dos.jpg|pholcus phalangioides"
  "wolf-spiders|Hogna_carolinensis_-_Carolina_Wolf_Spider.jpg|lycosidae"
  "pantry-moths|Plodia.interpunctella.7218.jpg|lepidoptera"
  "fruit-flies|Drosophila_melanogaster_-_side_%28aka%29.jpg|drosophila melanogaster"
  "drain-flies|Clogmia_albipunctatus.jpg|psychodidae"
  "cluster-flies|Pollenia.rudis.jpg|calliphoridae"
  "earwigs|Forficula_auricularia_-_Common_earwig.jpg|forficula auricularia"
)

phylopic_svg_url() {
  local query="$1"
  local q
  q=$(printf '%s' "$query" | sed 's/ /%20/g')
  local resp
  resp=$(curl -sSL "https://api.phylopic.org/images?build=${BUILD}&filter_name=${q}&page=0&embed_items=true" 2>/dev/null)
  if ! printf '%s' "$resp" | jq -e . >/dev/null 2>&1; then
    return 1
  fi
  printf '%s' "$resp" | jq -r '._embedded.items[0]._links.vectorFile.href // empty' 2>/dev/null
}

phylopic_taxon() {
  local query="$1"
  local q
  q=$(printf '%s' "$query" | sed 's/ /%20/g')
  curl -sSL "https://api.phylopic.org/images?build=${BUILD}&filter_name=${q}&page=0&embed_items=true" 2>/dev/null \
    | jq -r '._embedded.items[0]._links.specificNode.title // ._embedded.items[0]._links.generalNode.title // "Unknown"' 2>/dev/null
}

for entry in "${ENTRIES[@]}"; do
  IFS='|' read -r bug_id wm_file pp_query <<< "$entry"

  # === PHOTO ===
  photo_url="https://commons.wikimedia.org/wiki/Special:FilePath/${wm_file}"
  photo_out="$OUT_DIR/${bug_id}.jpg"
  if curl -sSLf -A "$UA" "$photo_url" -o "$photo_out" 2>/dev/null; then
    bytes=$(wc -c < "$photo_out" | tr -d ' ')
    if [ "$bytes" -lt 10000 ]; then
      echo "  [photo fail] $bug_id ($bytes bytes from $wm_file)"
      rm -f "$photo_out"
    else
      echo "  [photo  ok] $bug_id ← $wm_file ($bytes bytes)"
    fi
  else
    echo "  [photo fail] $bug_id (could not download $wm_file)"
  fi
  sleep 0.3

  # === SILHOUETTE ===
  svg_url=$(phylopic_svg_url "$pp_query")
  if [ -n "$svg_url" ] && [ "$svg_url" != "null" ]; then
    silh_out="$OUT_DIR/${bug_id}-silhouette.svg"
    if curl -sSLf "$svg_url" -o "$silh_out" 2>/dev/null; then
      taxon=$(phylopic_taxon "$pp_query")
      echo "  [silh   ok] $bug_id ← $pp_query (taxon: $taxon)"
    else
      echo "  [silh fail] $bug_id ($pp_query SVG download failed)"
    fi
  else
    echo "  [silh fail] $bug_id (no PhyloPic match for $pp_query)"
  fi
  sleep 0.3
done

echo ""
echo "Done."
