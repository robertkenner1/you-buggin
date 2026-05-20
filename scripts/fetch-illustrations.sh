#!/usr/bin/env bash
# Pulls one silhouette per bug from PhyloPic (https://www.phylopic.org).
# Saves SVGs to public/illustrations/ and writes attribution metadata to
# src/data/illustrationCredits.json.
#
# PhyloPic images are CC0 or CC-BY licensed; credits are recorded for each.
set -euo pipefail

BUILD=538
OUT_DIR="public/illustrations"
CREDITS_FILE="src/data/illustrationCredits.json"

mkdir -p "$OUT_DIR"

# bug-id|query1|query2|query3 — first match wins, fallback chain widens.
ENTRIES=(
  "carpenter-ants|Camponotus pennsylvanicus|Camponotus|Formicidae"
  "odorous-house-ants|Tapinoma sessile|Tapinoma|Formicinae"
  "pavement-ants|Tetramorium immigrans|Tetramorium|Myrmicinae"
  "subterranean-termite-workers|Reticulitermes flavipes|Reticulitermes|Isoptera"
  "termite-swarmers|Reticulitermes flavipes|Reticulitermes|Termitidae"
  "flying-ants|Formicidae|Formicinae|Hymenoptera"
  "spotted-lanternflies|Lycorma delicatula|Lycorma|Fulgoridae"
  "brown-marmorated-stink-bugs|Halyomorpha halys|Halyomorpha|Pentatomidae"
  "boxelder-bugs|Boisea trivittata|Boisea|Rhopalidae"
  "house-centipedes|Scutigera coleoptrata|Scutigera|Scutigeridae"
  "silverfish|Lepisma saccharinum|Lepisma|Zygentoma"
  "cellar-spiders|Pholcus phalangioides|Pholcus|Pholcidae"
  "wolf-spiders|Lycosidae|Hogna|Araneae"
  "pantry-moths|Plodia interpunctella|Plodia|Pyralidae"
  "fruit-flies|Drosophila melanogaster|Drosophila|Drosophilidae"
  "drain-flies|Psychodidae|Psychodinae|Diptera"
  "cluster-flies|Pollenia rudis|Pollenia|Calliphoridae"
  "earwigs|Forficula auricularia|Forficula|Dermaptera"
)

echo "[" > "$CREDITS_FILE.tmp"
FIRST=1

find_image() {
  local query="$1"
  # PhyloPic filter_name is case-sensitive and lowercase. URL-encode spaces.
  local q=$(printf '%s' "$query" | tr '[:upper:]' '[:lower:]' | sed 's/ /%20/g')
  curl -sSL "https://api.phylopic.org/images?build=${BUILD}&filter_name=${q}&page=0&embed_items=true" 2>/dev/null
}

for entry in "${ENTRIES[@]}"; do
  IFS='|' read -r bug_id q1 q2 q3 <<< "$entry"
  found_json=""
  used_query=""

  for query in "$q1" "$q2" "$q3"; do
    [ -z "$query" ] && continue
    resp=$(find_image "$query")
    count=$(printf '%s' "$resp" | jq -r '._embedded.items | length // 0')
    if [ "$count" != "0" ] && [ "$count" != "null" ]; then
      found_json="$resp"
      used_query="$query"
      break
    fi
  done

  if [ -z "$found_json" ]; then
    echo "  [skip] $bug_id — no image found across fallbacks"
    continue
  fi

  uuid=$(printf '%s' "$found_json" | jq -r '._embedded.items[0].uuid')
  svg_url=$(printf '%s' "$found_json" | jq -r '._embedded.items[0].vectorFile.href')
  license=$(printf '%s' "$found_json" | jq -r '._embedded.items[0]._links.license.href')
  attribution=$(printf '%s' "$found_json" | jq -r '._embedded.items[0].attribution // "Unknown"')
  taxon=$(printf '%s' "$found_json" | jq -r '._embedded.items[0]._links.specificNode.title // .["_embedded"].items[0]._links.generalNode.title // "Unknown"')

  out_path="$OUT_DIR/${bug_id}.svg"
  curl -sSL "$svg_url" -o "$out_path"
  if [ ! -s "$out_path" ]; then
    echo "  [fail] $bug_id — SVG download empty"
    rm -f "$out_path"
    continue
  fi

  echo "  [ok]   $bug_id ← $used_query (taxon: $taxon, $attribution)"

  if [ $FIRST -eq 0 ]; then echo "," >> "$CREDITS_FILE.tmp"; fi
  FIRST=0
  cat >> "$CREDITS_FILE.tmp" <<EOF
  {
    "bugId": "$bug_id",
    "uuid": "$uuid",
    "taxon": "$taxon",
    "matchedQuery": "$used_query",
    "attribution": $(printf '%s' "$attribution" | jq -Rs .),
    "license": "$license",
    "source": "https://www.phylopic.org/images/$uuid"
  }
EOF
done

echo "" >> "$CREDITS_FILE.tmp"
echo "]" >> "$CREDITS_FILE.tmp"
mv "$CREDITS_FILE.tmp" "$CREDITS_FILE"

echo ""
echo "Done. SVGs in $OUT_DIR, credits in $CREDITS_FILE."
