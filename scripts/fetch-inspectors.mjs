// Pulls real licensed pest-control businesses for each of the 4 counties
// we serve, via Google Places API (Text Search, v1).
//
// Usage:
//   GOOGLE_PLACES_API_KEY=your_key npm run fetch:inspectors
//
// Overwrites src/data/inspectors.ts. Git diff before committing so you can
// hand-curate the roster (drop ones you don't trust, tweak names, etc.).
//
// Free tier: Places API gives ~$200/month in free credits, which covers
// thousands of these queries. Refreshing quarterly is plenty.

import fs from 'node:fs/promises';
import path from 'node:path';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error('Missing GOOGLE_PLACES_API_KEY env var');
  console.error('Get a key from https://console.cloud.google.com/ → APIs & Services → Credentials');
  process.exit(1);
}

const QUERIES = [
  { textQuery: 'pest control Westchester County NY', state: 'NY' },
  { textQuery: 'pest control Rockland County NY', state: 'NY' },
  { textQuery: 'pest control Putnam County NY', state: 'NY' },
  { textQuery: 'pest control Fairfield County CT', state: 'CT' },
];

const MIN_RATING = 4.0;
const MIN_REVIEWS = 10;
const MAX_PER_COUNTY = 20;

async function searchPlaces(textQuery) {
  const resp = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': [
        'places.id',
        'places.displayName',
        'places.shortFormattedAddress',
        'places.nationalPhoneNumber',
        'places.rating',
        'places.userRatingCount',
        'places.addressComponents',
        'places.websiteUri',
      ].join(','),
    },
    body: JSON.stringify({ textQuery, languageCode: 'en' }),
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Places API ${resp.status}: ${text}`);
  }
  const data = await resp.json();
  return data.places || [];
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function extractCity(place) {
  const components = place.addressComponents || [];
  const locality = components.find((c) => (c.types || []).includes('locality'));
  if (locality) return locality.shortText || locality.longText;
  const sublocality = components.find((c) => (c.types || []).includes('sublocality'));
  if (sublocality) return sublocality.shortText || sublocality.longText;
  const addr = place.shortFormattedAddress || '';
  return addr.split(',')[0]?.trim() || 'Unknown';
}

async function main() {
  const seen = new Set();
  const inspectors = [];

  for (const { textQuery, state } of QUERIES) {
    console.log(`Fetching: ${textQuery}`);
    let added = 0;
    let candidates = [];
    try {
      candidates = await searchPlaces(textQuery);
    } catch (err) {
      console.error(`  ✗ ${err.message}`);
      continue;
    }
    for (const place of candidates) {
      if (added >= MAX_PER_COUNTY) break;
      const id = place.id;
      if (!id || seen.has(id)) continue;
      seen.add(id);

      const rating = place.rating || 0;
      const reviewCount = place.userRatingCount || 0;
      if (rating < MIN_RATING || reviewCount < MIN_REVIEWS) continue;

      const name = place.displayName?.text;
      const phone = place.nationalPhoneNumber;
      if (!name || !phone) continue;

      inspectors.push({
        id: `${slugify(name)}-${id.slice(-6)}`,
        name,
        category: 'treatment', // Google Places doesn't expose this; default + hand-edit
        state,
        city: extractCity(place),
        responseTime: 'Same day', // placeholder; we don't display this currently
        rating: Math.round(rating * 10) / 10,
        phone,
      });
      added++;
    }
    console.log(`  → ${added} kept (rating ≥ ${MIN_RATING}, reviews ≥ ${MIN_REVIEWS})`);
  }

  console.log(`\nTotal businesses: ${inspectors.length}`);

  if (inspectors.length === 0) {
    console.error('No inspectors found. Not writing file.');
    process.exit(1);
  }

  // Sort alphabetically by city then name for stable diffs
  inspectors.sort((a, b) => a.city.localeCompare(b.city) || a.name.localeCompare(b.name));

  const fileContent = `export type Inspector = {
  id: string;
  name: string;
  category: 'independent' | 'free' | 'treatment';
  state: 'NY' | 'CT';
  city: string;
  responseTime: string;
  rating: number;
  phone: string;
  contactName?: string;
};

export const inspectors: Inspector[] = ${JSON.stringify(inspectors, null, 2)};
`;

  const outPath = path.resolve('src/data/inspectors.ts');
  await fs.writeFile(outPath, fileContent);
  console.log(`\nWrote ${outPath}`);
  console.log(`\nNext steps:`);
  console.log(`  1. git diff src/data/inspectors.ts — review the entries`);
  console.log(`  2. Drop any you don't trust, or rename for consistency`);
  console.log(`  3. Optional: call each and set category to 'independent' / 'free' / 'treatment'`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
