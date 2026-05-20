#!/usr/bin/env bash
# Pulls one silhouette per bug from PhyloPic (https://www.phylopic.org).
# Saves SVGs to public/illustrations/ as <bug-id>-silhouette.svg.
# PhyloPic images are CC0 or CC-BY licensed (per-image).
set -uo pipefail

BUILD=538
OUT_DIR="public/illustrations"
CREDITS_FILE="src/data/silhouetteCredits.json"

mkdir -p "$OUT_DIR"

# bug-id|query1|query2|query3|query4 — first match wins.
# PhyloPic filter_name is case-sensitive and expects lowercase.
ENTRIES=(
  "carpenter-ants|camponotus pennsylvanicus|camponotus|formicidae|hymenoptera"
  "odorous-house-ants|tapinoma sessile|tapinoma|formicidae|hymenoptera"
  "pavement-ants|tetramorium immigrans|tetramorium|formicidae|hymenoptera"
  "subterranean-termite-workers|reticulitermes flavipes|reticulitermes|isoptera|blattodea"
  "termite-swarmers|reticulitermes flavipes|reticulitermes|isoptera|blattodea"
  "flying-ants|formicidae|formicinae|hymenoptera|"
  "spotted-lanternflies|lycorma delicatula|lycorma|fulgoridae|hemiptera"
  "brown-marmorated-stink-bugs|halyomorpha halys|halyomorpha|pentatomidae|hemiptera"
  "boxelder-bugs|boisea trivittata|boisea|rhopalidae|hemiptera"
  "house-centipedes|scutigera coleoptrata|scutigera|scutigeridae|chilopoda"
  "silverfish|lepisma saccharinum|lepisma|zygentoma|"
  "cellar-spiders|pholcus phalangioides|pholcus|pholcidae|araneae"
  "wolf-spiders|lycosidae|hogna|araneae|"
  "pantry-moths|plodia interpunctella|plodia|pyralidae|lepidoptera"
  "fruit-flies|drosophila melanogaster|drosophila|drosophilidae|diptera"
  "drain-flies|psychodidae|psychodinae|diptera|"
  "cluster-flies|pollenia rudis|pollenia|calliphoridae|diptera"
  "earwigs|forficula auricularia|forficula|dermaptera|"
)

find_image() {
  local query="$1"
  local q
  q=$(printf '%s' "$query" | sed 's/ /%20/g')
  curl -sSL "https://api.phylopic.org/images?build=${BUILD}&filter_name=${q}&page=0&embed_items=true" 2>/dev/null
}

echo "[" > "$CREDITS_FILE.tmp"
FIRST=1

for entry in "${ENTRIES[@]}"; do
  IFS='|' read -r bug_id q1 q2 q3 q4 <<< "$entry"
  found_json=""
  used_query=""

  for query in "$q1" "$q2" "$q3" "$q4"; do
    [ -z "$query" ] && continue
    resp=$(find_image "$query")
    # Only proceed if response is valid JSON with at least one item.
    if ! printf '%s' "$resp" | jq -e . >/dev/null 2>&1; then
      continue
    fi
    count=$(printf '%s' "$resp" | jq -r '._embedded.items | length' 2>/dev/null || echo 0)
    if [ "$count" -gt 0 ] 2>/dev/null; then
      svg_url=$(printf '%s' "$resp" | jq -r '._embedded.items[0].vectorFile.href // ._embedded.items[0]._links.vectorFile.href // empty')
      if [ -n "$svg_url" ] && [ "$svg_url" != "null" ]; then
        found_json="$resp"
        used_query="$query"
        break
      fi
    fi
  done

  if [ -z "$found_json" ]; then
    echo "  [skip] $bug_id — no silhouette across fallbacks"
    continue
  fi

  uuid=$(printf '%s' "$found_json" | jq -r '._embedded.items[0].uuid')
  svg_url=$(printf '%s' "$found_json" | jq -r '._embedded.items[0].vectorFile.href // ._embedded.items[0]._links.vectorFile.href')
  license=$(printf '%s' "$found_json" | jq -r '._embedded.items[0]._links.license.href')
  attribution=$(printf '%s' "$found_json" | jq -r '._embedded.items[0].attribution // "Unknown"')
  taxon=$(printf '%s' "$found_json" | jq -r '._embedded.items[0]._links.specificNode.title // ._embedded.items[0]._links.generalNode.title // "Unknown"')

  out_path="$OUT_DIR/${bug_id}-silhouette.svg"
  if ! curl -sSLf "$svg_url" -o "$out_path" 2>/dev/null; then
    echo "  [fail] $bug_id — SVG download failed"
    rm -f "$out_path"
    continue
  fi
  bytes=$(wc -c < "$out_path" | tr -d ' ')
  if [ "$bytes" -lt 200 ]; then
    echo "  [fail] $bug_id — SVG suspiciously small ($bytes bytes)"
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
    "taxon": $(printf '%s' "$taxon" | jq -Rs .),
    "matchedQuery": "$used_query",
    "attribution": $(printf '%s' "$attribution" | jq -Rs .),
    "license": "$license",
    "source": "https://www.phylopic.org/images/$uuid"
  }
EOF

  sleep 0.2
done

echo "" >> "$CREDITS_FILE.tmp"
echo "]" >> "$CREDITS_FILE.tmp"
mv "$CREDITS_FILE.tmp" "$CREDITS_FILE"

echo ""
echo "Done. Silhouettes in $OUT_DIR, credits in $CREDITS_FILE."
