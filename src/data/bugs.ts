export type BugLocation =
  | 'kitchen'
  | 'bathroom'
  | 'basement'
  | 'attic'
  | 'living-area'
  | 'exterior';
export type BugGroupSize = 'few' | 'group' | 'trail' | 'swarm';
export type BugWings = 'yes' | 'no' | 'sometimes';

export type BugSource = {
  url: string;
  name: string;
};

export type Bug = {
  id: string;
  commonName: string;
  scientificName: string;
  urgent: boolean;
  recommendPro: boolean;
  keyFeatures: string[];
  whatItMeans: string;
  howToSpotIt: string[];
  howToBeSure: string[];
  whatItMeansLong: string;
  whenToCall: string;
  locations: BugLocation[];
  groupSize: BugGroupSize[];
  hasWings: BugWings;
  shedsWings: boolean;
  seasonalPeak: number[];
  source: BugSource;
};

export const bugs: Bug[] = [
  {
    id: 'carpenter-ants',
    commonName: 'Carpenter ants',
    scientificName: 'Camponotus pennsylvanicus',
    urgent: false,
    recommendPro: true,
    keyFeatures: [
      'Large ants, 1/4 to 1/2 inch; winged reproductives up to 3/4 inch',
      'Dark brown to shiny black, sometimes reddish on thorax',
      'Single node between thorax and abdomen with evenly rounded thorax',
      'Elbowed antennae; front wings longer than hind wings on swarmers',
    ],
    whatItMeans: 'They like damp wood.',
    howToSpotIt: [
      'Foraging at night along trails, often on counters or near sinks',
      'Coarse sawdust-like frass piled near baseboards, sills, or voids',
      'Active near moisture-damaged wood: window frames, roof leaks, decks',
    ],
    howToBeSure: [
      'Frass contains insect parts and wood shavings, not powdery like termite',
      'Tap suspect wood: hollow sound or faint rustling from inside the wall',
    ],
    whatItMeansLong:
      "Camponotus pennsylvanicus is the black carpenter ant common across the Northeast, including the older homes throughout Westchester, Rockland, Putnam, and Fairfield County. Parent colonies typically live outside in dead trees, stumps, or wet logs within about 100 yards of the house, and they push satellite colonies into homes through voids, hollow doors, or moisture-damaged framing. They do not eat wood the way termites do, they excavate galleries to nest, preferring wood that's already softened by water or rot. Indoor sightings, especially of large workers at night, point to a moisture problem in the structure as much as a pest problem. Damage builds slowly but can be significant in chronically wet wood like roof eaves, sill plates, or around leaking plumbing.",
    whenToCall:
      'A handful of foragers can sometimes be traced and the moisture source fixed yourself, but repeated indoor sightings, frass piles, or rustling in walls warrant a pest professional who can locate the satellite nest and the parent colony. Carpenter ants share space with hidden water damage, so a pro inspection often pays for itself by surfacing rot before it spreads.',
    locations: ['kitchen', 'basement', 'living-area'],
    groupSize: ['few', 'group', 'trail'],
    hasWings: 'sometimes',
    shedsWings: false,
    seasonalPeak: [4, 5, 6, 7, 8, 9],
    source: { url: 'https://extension.psu.edu/carpenter-ants', name: 'Penn State Extension' },
  },
  {
    id: 'odorous-house-ants',
    commonName: 'Odorous house ants',
    scientificName: 'Tapinoma sessile',
    urgent: false,
    recommendPro: true,
    keyFeatures: [
      'Tiny workers, 1/16 to 1/8 inch (2.4 to 3.3 mm), all one size',
      'Uniform brown to black body with a dull, slightly greasy look',
      '12-segmented antennae with no club and uneven, humped thorax profile',
      'Single hidden node on the petiole, tucked under the abdomen',
    ],
    whatItMeans: 'They follow sugar and moisture.',
    howToSpotIt: [
      'Fast-moving single-file trails along counters, baseboards, and pipes',
      'Indoors near moisture: dishwashers, sinks, water heaters, wall voids',
      'Surge after rain when outdoor honeydew sources get washed out',
    ],
    howToBeSure: [
      'Crushed workers give off a rotten or rancid coconut smell',
      'Colonies have many queens; trails branch and shift locations often',
    ],
    whatItMeansLong:
      'Tapinoma sessile is a native Northeast ant and one of the most common indoor invaders in Westchester, Rockland, Putnam, and Fairfield homes. Outside they tend honeydew-producing aphids and nest under rocks, boards, and mulch. Inside they nest near warmth and moisture, often in voids, behind cabinets, or in termite-damaged wood. Colonies can contain thousands of workers and many queens, which is why infestations seem to explode and why spraying visible trails rarely fixes the problem. They prefer sweets but will also take grease and dead insects, contaminating pantry items as they forage. They do not damage structure or sting, but their numbers and persistence are the issue.',
    whenToCall:
      'Small, isolated trails can be handled at home with slow-acting sugar baits (avoid sprays, which scatter the colony into more sub-nests). If trails keep reappearing for more than two weeks of baiting, or you find multiple entry points across rooms, call a pro who can treat the harborage and exterior perimeter.',
    locations: ['kitchen', 'bathroom'],
    groupSize: ['group', 'trail'],
    hasWings: 'no',
    shedsWings: false,
    seasonalPeak: [4, 5, 6, 7, 8, 9, 10],
    source: { url: 'https://extension.psu.edu/odorous-house-ant', name: 'Penn State Extension' },
  },
  {
    id: 'pavement-ants',
    commonName: 'Pavement ants',
    scientificName: 'Tetramorium immigrans',
    urgent: false,
    recommendPro: true,
    keyFeatures: [
      'Small workers, 2.5 to 4 mm long, dark brown to nearly black',
      'Parallel grooves or furrows etched into head and thorax',
      'Two-segment petiole and two small upward spines on rear thorax',
      'Has a functional stinger, though rarely uses it on people',
    ],
    whatItMeans: 'They nest under slabs and pavement.',
    howToSpotIt: [
      'Trails coming up through cracks in concrete slabs, garages, basements',
      'Small piles of sand or soil pushed up at slab seams and sidewalk joints',
      'Mass swarms of winged ants near heated buildings in spring',
    ],
    howToBeSure: [
      'Hand-lens shows parallel lines on head and thorax plus paired spines',
      'Workers are slow and sluggish compared to fast odorous house ants',
    ],
    whatItMeansLong:
      'Tetramorium immigrans (formerly grouped under T. caespitum) is an introduced European ant now common from New England through the Mid-Atlantic. They are soil-nesters that strongly prefer to live beneath pavement, foundation slabs, sidewalks, and stones, which is why basements and ground-floor kitchens are typical entry points. They are not picky eaters: sweets, grease, seeds, dead insects, and pet food all attract them. Indoor sightings indicate cracks or expansion joints in the slab that the colony is using as a highway. They do not damage wood or structure but can show up in large, persistent numbers, and heated buildings can trigger off-season swarmer flights inside.',
    whenToCall:
      'Light indoor activity usually responds to perimeter baits placed along foundation cracks and sealing visible entry points. Call a pro when trails persist after a couple weeks of baiting, when swarmers emerge indoors, or when ants appear simultaneously across multiple ground-floor rooms, since that points to a large under-slab colony.',
    locations: ['kitchen', 'basement'],
    groupSize: ['group', 'trail'],
    hasWings: 'sometimes',
    shedsWings: false,
    seasonalPeak: [4, 5, 6, 7, 8, 9],
    source: { url: 'https://extension.psu.edu/pavement-ant', name: 'Penn State Extension' },
  },
  {
    id: 'subterranean-termite-workers',
    commonName: 'Subterranean termite workers',
    scientificName: 'Reticulitermes flavipes',
    urgent: true,
    recommendPro: true,
    keyFeatures: [
      'Creamy-white, soft-bodied, about 1/4 inch long',
      'Wingless with a broad waist (no pinched midsection)',
      'Straight bead-like antennae, not elbowed',
      'Blind, pale, and translucent compared to ants',
    ],
    whatItMeans: 'They eat wood from inside, near soil.',
    howToSpotIt: [
      'Inside pencil-thick mud tubes on foundation walls or sills',
      'In hollowed wood near basements, crawlspaces, or slab edges',
      'Around warm, moist areas near furnaces, pipes, and chimneys',
    ],
    howToBeSure: [
      'Probe suspect wood with a screwdriver and find pale workers inside',
      'Break open a mud tube and see creamy-white workers actively moving',
    ],
    whatItMeansLong:
      "Eastern subterranean termites live in soil-based colonies and send workers up through hidden mud tubes to feed on cellulose in your home's framing, subfloor, and trim. They are the most common wood-destroying insect in lower Hudson Valley and Fairfield County homes. Workers are the only caste that actually eats wood, and they do so silently, often for 10+ years before damage becomes visible. They need constant contact with soil moisture, which is why infestations almost always start in basements, crawlspaces, or where wood touches concrete. Finding live workers means the colony is currently active, not historical. A single colony can contain tens of thousands of workers feeding 24/7.",
    whenToCall:
      'Any confirmed worker sighting warrants a licensed pest control inspection, not DIY treatment. Subterranean termites require soil treatment or bait systems that homeowners cannot legally or effectively apply. Damage assessment by a pro is also essential because what you can see is usually a fraction of the actual infestation.',
    locations: ['basement'],
    groupSize: ['few', 'group'],
    hasWings: 'no',
    shedsWings: false,
    seasonalPeak: [3, 4, 5, 6, 7, 8, 9, 10],
    source: { url: 'https://extension.psu.edu/eastern-subterranean-termites', name: 'Penn State Extension' },
  },
  {
    id: 'termite-swarmers',
    commonName: 'Termite swarmers',
    scientificName: 'Reticulitermes flavipes (alates)',
    urgent: true,
    recommendPro: true,
    keyFeatures: [
      'Dark brown to black body, about 3/8 to 1/2 inch long',
      'Two pairs of translucent wings of equal length',
      'Wings nearly twice as long as the body',
      'Broad waist and straight (not elbowed) antennae',
    ],
    whatItMeans: 'They swarm from mature termite colonies.',
    howToSpotIt: [
      'Swarming indoors near windows and doors, drawn to light',
      'Piles of shed, equal-length wings on sills or floors',
      'Most often seen February through June in the Northeast',
    ],
    howToBeSure: [
      'Check shed wings: termite wings are equal length, ant wings are not',
      'Confirm straight antennae and broad waist vs. ant pinched waist and elbowed antennae',
    ],
    whatItMeansLong:
      'Swarmers (alates) are the reproductive caste sent out by an established colony to pair off and start new colonies. A colony typically does not produce swarmers until it has been growing for several years, so finding them inside is a strong indicator of a long-standing infestation, not a new one. They emerge in spring on warm humid days, fly briefly, then shed their wings and try to mate. Indoors, they usually die quickly because they cannot reach soil, but the colony that sent them is still active in the structure. The piles of identical shed wings they leave on windowsills are often the first sign a homeowner ever notices.',
    whenToCall:
      'Indoor swarmers or shed wings warrant an immediate professional termite inspection. Do not wait or try to treat with sprays. A licensed inspector can locate the colony entry points and recommend soil treatment or baiting, which are the only effective controls.',
    locations: ['basement', 'attic', 'living-area'],
    groupSize: ['group', 'swarm'],
    hasWings: 'yes',
    shedsWings: true,
    seasonalPeak: [3, 4, 5, 6],
    source: { url: 'https://extension.psu.edu/eastern-subterranean-termites', name: 'Penn State Extension' },
  },
  {
    id: 'flying-ants',
    commonName: 'Flying ants',
    scientificName: 'Formicidae (alates)',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'Narrow, wasp-like pinched waist (termites have a broad, straight waist)',
      'Elbowed, L-shaped antennae (termites have straight, beadlike antennae)',
      'Front wings clearly longer than hind wings; usually tinted brown',
      'Body color varies by species: black, brown, or reddish',
    ],
    whatItMeans: 'They swarm from mature ant colonies.',
    howToSpotIt: [
      'Sudden indoor swarms at windows and light fixtures in spring or late summer',
      'Piles of discarded wings on sills after a swarm has dispersed',
      'Often emerge from a single crack, vent, or wall void in one room',
    ],
    howToBeSure: [
      'Check waist with a hand lens: pinched = ant, thick = termite',
      'Ant wings are unequal length and tinted; termite wings are equal and milky',
    ],
    whatItMeansLong:
      "Flying ants are not a separate species, they are the winged reproductive caste (alates) of an established ant colony, most often carpenter, pavement, or citronella ants in our region. Colonies must be several years old before they produce swarmers, so a flight inside the house indicates a mature nest somewhere in or adjacent to the building. Mated queens shed their wings, burrow into soil or wood voids, and try to start new colonies, while males die within a day or two. The swarm itself is harmless, but the discarded wings on a windowsill are the diagnostic clue homeowners usually find. The species behind the swarm determines whether it's a nuisance or a structural concern.",
    whenToCall:
      'A one-time, small swarm at a window after a warm humid day is usually fine to vacuum up and monitor. If you find swarmers indoors with no obvious outside source, or repeated flights over multiple days, call a pro to identify the species and locate the nest, since carpenter ant swarmers indoors strongly suggest a satellite colony in the structure.',
    locations: ['attic', 'living-area'],
    groupSize: ['group', 'swarm'],
    hasWings: 'yes',
    shedsWings: true,
    seasonalPeak: [4, 5, 6, 7, 8, 9],
    source: { url: 'https://extension.psu.edu/eastern-subterranean-termites', name: 'Penn State Extension' },
  },
  {
    id: 'brown-marmorated-stink-bugs',
    commonName: 'Brown marmorated stink bugs',
    scientificName: 'Halyomorpha halys',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'Shield-shaped, mottled brown adult about 17 mm long',
      'Alternating light and dark bands on the last two antennal segments',
      'Light and dark banding on exposed edges of the abdomen',
      'Smooth shoulders (not toothed or spined like some native species)',
    ],
    whatItMeans: 'They overwinter inside walls and attics.',
    howToSpotIt: [
      'Gathering on sunny south- and west-facing walls in September and October',
      'Crawling out from baseboards, window trim, and ceiling fixtures',
      'Bumping into windows and lights on warm winter and early-spring days',
    ],
    howToBeSure: [
      'Look for the banded antennae and banded abdomen edges under good light',
      'Note the smooth, rounded shoulders, which rules out most native stink bugs',
    ],
    whatItMeansLong:
      'Brown marmorated stink bugs are an invasive species first identified in Allentown, PA in 1998 and are now established across the Northeast, including Westchester, Rockland, Putnam, and Fairfield County. In fall they leave host plants and seek protected overwintering sites, which often means the walls, attics, and voids of nearby houses. Once inside they do not feed, reproduce, lay eggs, bite, or chew structural materials. They simply wait out winter and become active again when interior or exterior temperatures rise, which is why people see them at windows on sunny winter days. Crushing them releases a strong cilantro-like odor and can attract carpet beetles to the carcasses.',
    whenToCall:
      'Most homeowners can manage BMSB by vacuuming live bugs and sealing entry points around windows, siding, utility penetrations, and fascia with silicone caulk. Call a pest professional only if sealing is impractical on a large or complex structure, where a licensed applicator can do an exterior perimeter treatment in early fall before bugs enter.',
    locations: ['attic', 'kitchen', 'living-area', 'exterior'],
    groupSize: ['few', 'group'],
    hasWings: 'yes',
    shedsWings: false,
    seasonalPeak: [3, 4, 5, 9, 10, 11],
    source: { url: 'https://extension.psu.edu/brown-marmorated-stink-bug', name: 'Penn State Extension' },
  },
  {
    id: 'boxelder-bugs',
    commonName: 'Boxelder bugs',
    scientificName: 'Boisea trivittata',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'Brownish-black adult about 12 mm long, elongated oval shape',
      'Three distinct red-orange longitudinal stripes on the thorax',
      'Red-orange margins on the basal half of the wings',
      'Bright red abdomen; nymphs are bright red with black legs',
    ],
    whatItMeans: 'They overwinter on sunny walls.',
    howToSpotIt: [
      'Massing on south-facing walls, rocks, and tree trunks in fall sun',
      'Clustered around boxelder, ash, and maple trees in the growing season',
      'Emerging from baseboards, window trim, and ceiling fixtures in winter',
    ],
    howToBeSure: [
      'Three red stripes running lengthwise down the black thorax are diagnostic',
      'Bright red nymphs near a boxelder, maple, or ash tree confirm the species',
    ],
    whatItMeansLong:
      'Boxelder bugs feed on the seeds of boxelder, maple, and ash trees and become a nuisance around homes near those hosts. In fall they congregate in huge numbers on sun-warmed south sides of buildings and squeeze through cracks in siding, foundations, and trim to find protected overwintering spots in wall voids and attics. They do not bite, do not reproduce indoors, and do not feed on or damage structures, furnishings, or stored food. They can, however, leave reddish fecal stains on light-colored curtains, walls, and fabrics, and crushed bugs give off a sharp odor. On warm winter days they wander out of wall voids into living spaces, which is when most homeowners notice them.',
    whenToCall:
      'Boxelder bugs are almost always a DIY situation: vacuum the bugs you see and caulk gaps around windows, siding, utility lines, and fascia in late summer before they enter. Call a pro only for severe, recurring infestations where exterior perimeter treatment in early fall is warranted, or to evaluate removing a heavily infested female boxelder tree near the house.',
    locations: ['attic', 'exterior', 'living-area'],
    groupSize: ['group', 'swarm'],
    hasWings: 'sometimes',
    shedsWings: false,
    seasonalPeak: [9, 10, 11, 3, 4],
    source: { url: 'https://extension.psu.edu/boxelder-bug', name: 'Penn State Extension' },
  },
  {
    id: 'house-centipedes',
    commonName: 'House centipedes',
    scientificName: 'Scutigera coleoptrata',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      '15 pairs of long banded light-and-dark legs',
      'Dirty yellow body, 1 to 1.5 inches long with 3 dark stripes',
      "Females' last leg pair nearly twice the body length",
      'Total appearance 3 to 4 inches including legs and antennae',
    ],
    whatItMeans: 'They hunt other indoor bugs.',
    howToSpotIt: [
      'Darting across bathroom, basement, or laundry floors at night',
      'In damp areas: floor drains, crawl spaces, cement block walls',
      'Year-round indoors; cannot overwinter outside in the Northeast',
    ],
    howToBeSure: [
      'Count 15 leg pairs with distinctive light/dark banding',
      'Note the dramatically elongated rear legs on adult females',
    ],
    whatItMeansLong:
      'House centipedes are Mediterranean natives that reproduce only inside heated structures in the Northeast. They are fast nocturnal hunters that feed on silverfish, cockroaches, carpet beetle larvae, and spiders. Seeing them regularly usually means a hidden food supply of other bugs and consistent moisture somewhere in the home. They are technically beneficial and never damage the house or bite people in any meaningful way. Females can live several years and produce up to 150 young, so populations build quietly behind walls.',
    whenToCall:
      'Occasional centipedes are not a problem and can be ignored or relocated. Repeated sightings should prompt you to dehumidify, seal cracks, and check for the prey insects feeding them. A pro is only warranted if you cannot locate the underlying moisture or pest source yourself.',
    locations: ['basement', 'bathroom', 'kitchen'],
    groupSize: ['few'],
    hasWings: 'no',
    shedsWings: false,
    seasonalPeak: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    source: { url: 'https://extension.psu.edu/house-centipedes', name: 'Penn State Extension' },
  },
  {
    id: 'silverfish',
    commonName: 'Silverfish',
    scientificName: 'Lepisma saccharinum',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'Silvery-metallic scales over a flat, teardrop body',
      'Up to about 12 mm long, head to abdomen tip',
      'Antennae as long as the body',
      'Three tail-like bristles trailing from the rear',
    ],
    whatItMeans: 'They like humid spots and paper.',
    howToSpotIt: [
      'In cool, damp basements, bathrooms, and under sinks',
      'Darting rapidly (including sideways) when a light flips on',
      'Around books, paper, cardboard, wallpaper, or stored cereals',
    ],
    howToBeSure: [
      'Look for the three rear bristles and silvery scales together',
      'Check for irregular holes or yellow stains on paper and book bindings',
    ],
    whatItMeansLong:
      'Silverfish are primitive, wingless insects that thrive in humid, dark indoor spaces and feed on starches like paper, glue, wallpaper paste, cereals, and book bindings. They are mainly a nuisance and a slow-acting damage pest rather than a health threat. They live two to three years and can survive long periods without food as long as moisture is present, so they tend to persist once established. Eggs hatch in tucked-away crevices over a few weeks, and populations build slowly behind baseboards and inside wall voids. Their presence almost always points to a humidity issue.',
    whenToCall:
      'A few silverfish can be handled with dehumidifiers, sealing cracks, and removing stored paper and cardboard. Call a pro if you see them regularly in multiple rooms, find feeding damage to books or wallpaper, or if dehumidifying does not knock the population back within a few weeks.',
    locations: ['bathroom', 'basement', 'attic', 'kitchen'],
    groupSize: ['few', 'group'],
    hasWings: 'no',
    shedsWings: false,
    seasonalPeak: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    source: { url: 'https://extension.psu.edu/bristletails-silverfish-and-firebrats', name: 'Penn State Extension' },
  },
  {
    id: 'cellar-spiders',
    commonName: 'Cellar spiders',
    scientificName: 'Pholcus phalangioides',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'Extremely long, thin legs (forelegs up to about 50 mm)',
      'Pale tan or yellow body with a gray central marking',
      'Cylindrical abdomen about three times longer than wide',
      'Two clusters of light eyes plus small dark eyes in front',
    ],
    whatItMeans: 'They web in quiet corners.',
    howToSpotIt: [
      'Hanging upside down in loose, irregular webs in corners',
      'In cellars, garages, closets, and quiet ceiling corners',
      'Present year-round inside heated buildings',
    ],
    howToBeSure: [
      'When disturbed, the spider vibrates rapidly in a blur in its web',
      'Note the pale color and disproportionately long, spindly legs',
    ],
    whatItMeansLong:
      'Longbodied cellar spiders are not native daddy long-legs but true spiders in the family Pholcidae, common in basements, garages, and ceiling corners across the Northeast. They build messy, tangled webs in protected indoor spots and live two or more years as adults. They feed on flies, mosquitoes, and other small arthropods, including sometimes other spiders, so they actually help cut down on household pests. They pose no known medical risk to people or pets despite long-standing internet myths. Their webs accumulate dust and shed skins, which is usually what homeowners notice first.',
    whenToCall:
      'These spiders rarely warrant a professional. Knock down webs with a vacuum or broom and reduce clutter in basements and garages to discourage them. A pro is only reasonable if webs are constantly returning in large numbers, which usually means there is an underlying fly or insect issue worth investigating.',
    locations: ['basement', 'bathroom', 'living-area'],
    groupSize: ['few'],
    hasWings: 'no',
    shedsWings: false,
    seasonalPeak: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    source: { url: 'https://extension.psu.edu/longbodied-cellar-spider', name: 'Penn State Extension' },
  },
  {
    id: 'wolf-spiders',
    commonName: 'Wolf spiders',
    scientificName: 'Lycosidae',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'Large, robust hunting spiders; females 22-35 mm, males 18-20 mm',
      'Dark brown carapace with scattered gray hairs',
      'Stout, hairy legs, sometimes faintly banded',
      'Eight eyes with two large prominent ones facing forward',
    ],
    whatItMeans: 'They wander in from outside in fall.',
    howToSpotIt: [
      'Running across floors, basements, or garages at night',
      'Most often seen indoors in fall as they seek overwintering shelter',
      'No web; found on the ground or along baseboards, not in corners',
    ],
    howToBeSure: [
      'Watch for a female carrying a round egg sac or spiderlings on her back',
      'Confirm two large forward-facing eyes above a row of smaller eyes',
    ],
    whatItMeansLong:
      'Wolf spiders are active ground hunters that do not build webs and instead chase down prey at night. They live mostly outdoors in leaf litter, mulch, and along foundations, and slip inside through gaps in fall as temperatures drop or during mating season. Females are notable for carrying their egg sac attached to their spinnerets and later carrying spiderlings on their backs. They will bite only if trapped against skin, and reactions are limited to short-lived pain, redness, and mild swelling with no serious medical consequences. Their size is alarming, but they are functionally beneficial pest controllers.',
    whenToCall:
      'A single wolf spider can be cup-and-card relocated outside; this almost never warrants a pro. Repeated indoor sightings suggest gaps in the foundation or door sweeps and a need to seal entry points and reduce mulch and debris against the house. Consider a pest professional only if you are finding multiple wolf spiders weekly or have a confirmed bite reaction needing perimeter treatment.',
    locations: ['basement', 'living-area', 'exterior'],
    groupSize: ['few'],
    hasWings: 'no',
    shedsWings: false,
    seasonalPeak: [4, 5, 6, 7, 8, 9, 10],
    source: { url: 'https://extension.psu.edu/wolf-spiders', name: 'Penn State Extension' },
  },
  {
    id: 'pantry-moths',
    commonName: 'Pantry moths',
    scientificName: 'Plodia interpunctella',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'Wingspan about 3/4 inch; small narrow moth',
      'Forewings two-toned: pale gray inner half, coppery reddish-brown outer half',
      'Mature larvae 1/2 to 5/8 inch, cream to pinkish or greenish with brown head',
      'Larvae produce loose silken webbing in infested food',
    ],
    whatItMeans: 'They hatch inside pantry goods.',
    howToSpotIt: [
      'Adults flutter weakly around kitchen walls and ceilings at night',
      'Larvae crawl up walls or along ceiling edges seeking pupation sites',
      'Found in pantry foods: flour, cereal, nuts, dried fruit, pet food, birdseed',
    ],
    howToBeSure: [
      'Open suspect packages and look for silken webbing clumping the food',
      'Find live cream-colored caterpillars inside grain, cereal, or pet food',
    ],
    whatItMeansLong:
      'Indianmeal moths are the most common pantry moth in North America and almost always arrive inside a sealed package of dry goods bought from the store. Eggs hatch into caterpillars that feed on flour, cereal, nuts, dried fruit, birdseed, or pet food, spinning silken webbing as they go. Mature larvae wander far from the food source to pupate, which is why you often see worms on the ceiling far from the pantry. A female lays 100 to 300 eggs and the cycle completes in roughly a month indoors, so populations build quickly. They do not damage the home itself but contaminate food with webbing and droppings.',
    whenToCall:
      'Most infestations are solved by the homeowner: throw out all infested and exposed dry goods, vacuum pantry shelves and corners, and store remaining food in airtight containers. Call a pro if moths keep reappearing after a thorough pantry purge, which usually means larvae have pupated in cracks, crown molding, or an unfound source.',
    locations: ['kitchen'],
    groupSize: ['few', 'group'],
    hasWings: 'yes',
    shedsWings: false,
    seasonalPeak: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    source: { url: 'https://extension.psu.edu/indian-meal-moth', name: 'Penn State Extension' },
  },
  {
    id: 'fruit-flies',
    commonName: 'Fruit flies',
    scientificName: 'Drosophila melanogaster',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'Very small, about 1/16 inch (2 mm) long',
      'Tan to beige body with a darker rear end',
      'Distinctive bright red eyes',
      'Slow, hovering flight rather than darting',
    ],
    whatItMeans: "They're drawn to fermenting food.",
    howToSpotIt: [
      'Hovering in clouds over ripe bananas, tomatoes, or onions on the counter',
      'Around recycling bins, trash cans, compost, beer or wine glasses',
      'Lingering near damp mop heads, sponges, and rarely-used drains',
    ],
    howToBeSure: [
      'Set out apple cider vinegar with a drop of dish soap; fruit flies will pile in',
      'Confirm red eyes and tiny tan body under a phone-camera zoom',
    ],
    whatItMeansLong:
      'Fruit flies, properly called vinegar flies, are drawn to the yeast on fermenting fruit and vegetables rather than to the produce itself. They typically ride into the kitchen as eggs already laid on store-bought or garden produce, then explode in number because one female can lay up to 500 eggs and the full life cycle takes only about ten days at room temperature. Common hidden breeding sites include onions or potatoes sprouting in a bin, a forgotten piece of fruit behind the counter, sugary residue in the recycling, and damp mop heads or dish rags. They do not bite or transmit serious disease but they do walk on rotting material and then on clean food.',
    whenToCall:
      'This is almost always a do-it-yourself problem: find and toss the fermenting source, rinse the recycling bin, run the disposal with ice and vinegar, and set vinegar traps for stragglers. Consider a pro only if flies persist for more than a couple of weeks after removing every visible food source, since the breeding site may be inside a drain or appliance.',
    locations: ['kitchen', 'bathroom'],
    groupSize: ['group', 'swarm'],
    hasWings: 'yes',
    shedsWings: false,
    seasonalPeak: [5, 6, 7, 8, 9, 10],
    source: { url: 'https://cals.cornell.edu/new-york-state-integrated-pest-management/outreach-education/whats-bugging-you/fruit-flies', name: 'Cornell NYSIPM' },
  },
  {
    id: 'drain-flies',
    commonName: 'Drain flies',
    scientificName: 'Psychodidae',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'Tiny, about 1/10 inch long, roughly a third the size of a housefly',
      'Dark gray fuzzy body with lighter wings',
      'Body and wings densely covered in long hairs, giving a mothlike look',
      'Wings held roof-like over the body at rest',
    ],
    whatItMeans: 'They breed in drain gunk.',
    howToSpotIt: [
      'Resting motionless on bathroom walls, ceilings, or beside drains',
      'Around floor drains, shower drains, and rarely-used sinks',
      'Weak fluttery flight in short hops when disturbed',
    ],
    howToBeSure: [
      'Tape a clear plastic bag over a suspect drain overnight; adults emerge and stick',
      'Scrape drain slime and look for thin tan, worm-like larvae',
    ],
    whatItMeansLong:
      'Moth flies, also called drain flies or sewer flies, breed in the gelatinous biofilm that builds up inside drains, traps, and overflow tubes. The larvae feed on this organic film and on standing water in sewage and floor drains, so finding adults indoors almost always points to a specific plumbing fixture rather than a sanitation problem with the room itself. Common sources are seldom-used guest bath drains, basement floor drains, sump pits, and pipes with a slow leak under a slab. Adults live only about two weeks but the cycle continues as long as the slime layer remains. They are a nuisance and not known to bite or transmit disease in homes.',
    whenToCall:
      'Most cases are solved by mechanically scrubbing the drain with a long stiff brush and following with an enzyme drain cleaner; bleach alone usually fails because it does not remove the biofilm. Call a plumber or pest professional if flies keep emerging after repeated cleanings, which can indicate a broken sewer line, cracked drain pipe, or breeding site under a slab.',
    locations: ['bathroom', 'kitchen', 'basement'],
    groupSize: ['few', 'group'],
    hasWings: 'yes',
    shedsWings: false,
    seasonalPeak: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    source: { url: 'https://extension.psu.edu/moth-flies-in-the-home', name: 'Penn State Extension' },
  },
  {
    id: 'cluster-flies',
    commonName: 'Cluster flies',
    scientificName: 'Pollenia rudis',
    urgent: false,
    recommendPro: true,
    keyFeatures: [
      'Slightly larger than a housefly, about 8 to 10 mm long',
      'Dark gray to olive thorax with short golden-yellow hairs',
      'Wings overlap flat across the back at rest',
      'Sluggish, clumsy flight compared to a housefly',
    ],
    whatItMeans: 'They overwinter in wall and attic voids.',
    howToSpotIt: [
      'Clustered on sunny windows and warm walls on mild fall and late-winter days',
      'Buzzing in attics, behind curtains, around recessed lights and window frames',
      'Active indoors in October-November and again in March-April',
    ],
    howToBeSure: [
      'Look for short golden hairs on the thorax and overlapping wings at rest',
      'Movement is slow and bumbling; they do not dart like houseflies',
    ],
    whatItMeansLong:
      'Cluster flies are a parasite of earthworms; larvae develop in worms in lawn and garden soil, so homes near pasture, lawn, or open ground see the most. This makes them a regular spring nuisance in the older farmhouses around Putnam and northern Westchester. In early fall the new generation of adults seeks sheltered cracks on sunny sides of buildings and works its way into attics, wall voids, and around window frames to overwinter. On warm winter days and again at first thaw they get disoriented by interior heat and crawl out toward light, which is why they pile up on sunny windows. They do not bite, do not breed indoors, and do not damage food or fabric, but the dead bodies can stain surfaces and attract carpet beetles.',
    whenToCall:
      'If only a handful appear, vacuum them up and seal obvious gaps around windows, soffits, utility penetrations, and attic vents in late summer before they enter. Call a pest professional for an exterior perimeter treatment in late August or early September if hundreds emerge each spring, since interior sprays after they are inside the walls rarely help.',
    locations: ['attic', 'living-area'],
    groupSize: ['group', 'swarm'],
    hasWings: 'yes',
    shedsWings: false,
    seasonalPeak: [2, 3, 4, 10, 11],
    source: { url: 'https://extension.psu.edu/cluster-flies', name: 'Penn State Extension' },
  },
  {
    id: 'earwigs',
    commonName: 'Earwigs',
    scientificName: 'Forficula auricularia',
    urgent: false,
    recommendPro: false,
    keyFeatures: [
      'About 5/8 inch (16 mm) long, dark reddish-brown body',
      'Reddish head and yellow-brown legs',
      'Claw-like forceps (cerci) at the tip of the abdomen',
      'Males have curved pincers; females have straighter ones',
    ],
    whatItMeans: 'They wander in from damp spots outside.',
    howToSpotIt: [
      'Active at night; hiding in cracks and crevices by day',
      'In damp spots: basements, bathrooms, under sinks, door thresholds',
      'Peak indoor sightings in warm, humid summer weather',
    ],
    howToBeSure: [
      'The pincer-like forceps at the rear are unmistakable',
      'Flattened reddish-brown body with short leathery wing covers',
    ],
    whatItMeansLong:
      'European earwigs are non-native scavengers introduced to North America in the early 1900s and now widespread in the Northeast. They live outdoors in mulch, leaf litter, and damp soil and wander inside during hot, dry, or wet weather looking for moisture. Despite the name and intimidating pincers, they do not crawl into ears, do not transmit disease, and rarely bite. Indoors they eat almost anything organic but usually do no meaningful damage. They produce one generation a year, with females guarding eggs and young in underground nests outside the home.',
    whenToCall:
      'Small numbers can be vacuumed up and managed by reducing mulch, leaf litter, and moisture around the foundation. Call a pro if you have ongoing daily invasions in multiple rooms, which usually calls for a perimeter treatment and habitat correction. One-off summer earwigs do not require professional service.',
    locations: ['bathroom', 'basement', 'exterior'],
    groupSize: ['few', 'group'],
    hasWings: 'sometimes',
    shedsWings: false,
    seasonalPeak: [5, 6, 7, 8, 9],
    source: { url: 'https://extension.psu.edu/european-earwigs', name: 'Penn State Extension' },
  },
];

export const bugById = (id: string) => bugs.find((b) => b.id === id);
