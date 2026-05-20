#!/usr/bin/env bash
# Pulls one species photo per bug from Wikipedia REST API.
# Wikipedia images are CC-licensed (per-image). Records license per bug.
set -euo pipefail

OUT_DIR="public/illustrations"
CREDITS_FILE="src/data/illustrationCredits.json"

mkdir -p "$OUT_DIR"

# bug-id|primary_wiki_title|fallback_wiki_title
ENTRIES=(
  "carpenter-ants|Camponotus_pennsylvanicus|Carpenter_ant"
  "odorous-house-ants|Tapinoma_sessile|Odorous_house_ant"
  "pavement-ants|Tetramorium_immigrans|Pavement_ant"
  "subterranean-termite-workers|Reticulitermes_flavipes|Subterranean_termite"
  "termite-swarmers|Alate|Reticulitermes_flavipes"
  "flying-ants|Nuptial_flight|Ant"
  "spotted-lanternflies|Lycorma_delicatula|Spotted_lanternfly"
  "brown-marmorated-stink-bugs|Halyomorpha_halys|Brown_marmorated_stink_bug"
  "boxelder-bugs|Boisea_trivittata|Boxelder_bug"
  "house-centipedes|Scutigera_coleoptrata|House_centipede"
  "silverfish|Lepisma_saccharinum|Silverfish"
  "cellar-spiders|Pholcus_phalangioides|Cellar_spider"
  "wolf-spiders|Wolf_spider|Lycosidae"
  "pantry-moths|Plodia_interpunctella|Indianmeal_moth"
  "fruit-flies|Drosophila_melanogaster|Fruit_fly"
  "drain-flies|Clogmia_albipunctata|Drain_fly"
  "cluster-flies|Pollenia_rudis|Cluster_fly"
  "earwigs|Forficula_auricularia|European_earwig"
)

UA="you-buggin-app/0.1 (https://github.com/bobbykenner/you-buggin) Claude Code"

fetch_summary() {
  local title="$1"
  curl -sSL -A "$UA" "https://en.wikipedia.org/api/rest_v1/page/summary/${title}" 2>/dev/null
  sleep 0.3
}

# Strip ?utm_... tracking params off Wikimedia image URLs.
clean_url() {
  printf '%s' "$1" | sed 's/?utm_.*$//'
}

echo "[" > "$CREDITS_FILE.tmp"
FIRST=1

for entry in "${ENTRIES[@]}"; do
  IFS='|' read -r bug_id primary fallback <<< "$entry"
  resp=""
  used_title=""

  for title in "$primary" "$fallback"; do
    [ -z "$title" ] && continue
    candidate=$(fetch_summary "$title")
    # Skip if the response isn't valid JSON
    if ! printf '%s' "$candidate" | jq -e . >/dev/null 2>&1; then
      continue
    fi
    img=$(printf '%s' "$candidate" | jq -r '.originalimage.source // empty' 2>/dev/null || true)
    if [ -n "$img" ] && [ "$img" != "null" ]; then
      resp="$candidate"
      used_title="$title"
      break
    fi
  done

  if [ -z "$resp" ]; then
    echo "  [skip] $bug_id — no Wikipedia image found"
    continue
  fi

  img_url=$(clean_url "$(printf '%s' "$resp" | jq -r '.originalimage.source')")
  page_url=$(printf '%s' "$resp" | jq -r '.content_urls.desktop.page')
  display_title=$(printf '%s' "$resp" | jq -r '.title')

  # Derive extension from the actual URL
  ext=$(printf '%s' "$img_url" | grep -oE '\.(jpg|jpeg|png|gif|webp|JPG|JPEG|PNG)$' | tr 'A-Z' 'a-z' | head -1)
  [ -z "$ext" ] && ext=".jpg"

  out_path="$OUT_DIR/${bug_id}${ext}"
  if ! curl -sSLf -A "$UA" "$img_url" -o "$out_path" 2>/dev/null; then
    echo "  [fail] $bug_id — download failed"
    rm -f "$out_path"
    sleep 0.3
    continue
  fi
  sleep 0.3
  bytes=$(wc -c < "$out_path" | tr -d ' ')
  if [ "$bytes" -lt 10000 ]; then
    echo "  [fail] $bug_id — image too small ($bytes bytes, likely rate-limit page)"
    rm -f "$out_path"
    continue
  fi

  echo "  [ok]   $bug_id ← $used_title ($bytes bytes)"

  if [ $FIRST -eq 0 ]; then echo "," >> "$CREDITS_FILE.tmp"; fi
  FIRST=0
  cat >> "$CREDITS_FILE.tmp" <<EOF
  {
    "bugId": "$bug_id",
    "wikipediaTitle": $(printf '%s' "$display_title" | jq -Rs .),
    "wikipediaUrl": "$page_url",
    "imageUrl": "$img_url",
    "localPath": "/illustrations/${bug_id}${ext}",
    "source": "Wikipedia / Wikimedia Commons",
    "licenseNote": "See Wikimedia page for per-file license"
  }
EOF
done

echo "" >> "$CREDITS_FILE.tmp"
echo "]" >> "$CREDITS_FILE.tmp"
mv "$CREDITS_FILE.tmp" "$CREDITS_FILE"

echo ""
echo "Done. Images in $OUT_DIR, credits in $CREDITS_FILE."
