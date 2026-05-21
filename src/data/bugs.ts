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
  whatToLookFor: string[];
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
      'Big ants, dark brown to black, a quarter to half an inch long',
      'Single bump waist and bent antennae (termites have neither)',
      'The winged ones are bigger, up to three-quarters of an inch',
    ],
    whatItMeans: 'They like damp wood.',
    whatToLookFor: [
      'Usually seen at night, often near the kitchen sink or counters',
      'Piles of sawdust-like crumbs near baseboards or windowsills',
      'Active where wood got wet: leaks, old windows, decks, roof eaves',
      'Carpenter ant sawdust has bug parts in it; termite damage does not',
      'Tap the wood near where you saw them. Hollow sound means a gallery inside',
    ],
    whatItMeansLong:
      'Carpenter ants do not eat wood like termites do. They hollow it out to make nests, and they only do that to wood that has already gotten wet. If you are seeing them inside, the parent colony is within 100 feet of the house, and there is wood somewhere that got wet at some point. A leak, a roof issue, an old sill. The good news is that fixing the moisture usually solves the ant problem too. Ignore the water and the damage adds up over years.',
    whenToCall:
      'A few ants now and then, you can probably handle it yourself. Find the damp wood, dry it out, see if they stop coming back. If you keep seeing them, or you find sawdust piles by baseboards, or you hear them rustling in walls, call a pro. They will find the nest you cannot, and they will spot the water damage before it spreads.',
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
      'Tiny ants, all the same size, about a sixteenth of an inch',
      'Dull brown to black with a slightly greasy look',
      'Move fast in single file along counters and baseboards',
    ],
    whatItMeans: 'They follow sugar and moisture.',
    whatToLookFor: [
      'Quick trails along counters, baseboards, and pipes',
      'Often near dishwashers, sinks, or anywhere damp',
      'Surge after rain washes out their outdoor food sources',
      'Crush one. They smell like rotten coconut',
      'Trails branch and shift around. They have many queens, not one',
    ],
    whatItMeansLong:
      'Odorous house ants are the most common indoor ant in Northeast homes. They nest outside under rocks and mulch, but slip indoors when it gets wet or cold. Inside, they nest in voids, behind cabinets, or any spot that stays warm and damp. The reason these infestations feel like they explode: each colony has many queens, not one, so spraying visible trails just scatters them into more nests. They go for sweets but will also eat grease and dead insects. They do not damage anything, but the sheer numbers wear people down.',
    whenToCall:
      'A small trail you can handle at home with slow-acting sugar baits from the hardware store. Skip the sprays. Sprays just scatter the colony into more sub-nests. If trails keep coming back after two weeks of baiting, or you find ants in multiple rooms at once, call a pro. They will treat the actual nest and the exterior perimeter.',
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
      'Small dark ants, about an eighth of an inch',
      'Move slower and more sluggish than other indoor ants',
      'Tiny upward spines on the rear (you need a magnifier to see them)',
    ],
    whatItMeans: 'They nest under slabs and pavement.',
    whatToLookFor: [
      'Trails coming up through cracks in concrete slabs or basements',
      'Small piles of sand or soil at sidewalk joints and slab seams',
      'In spring, sometimes mass swarms of winged ones near heated buildings',
      'Way slower and more sluggish than odorous house ants',
      'Always coming from a slab seam or foundation crack, not a wall void',
    ],
    whatItMeansLong:
      'Pavement ants nest under pavement, foundation slabs, sidewalks, and stones. They are not picky eaters: sweets, grease, seeds, dead insects, pet food, all attract them. If you see them inside, there are cracks or expansion joints in the slab that the colony is using as a highway. They do not damage wood or structure but can show up in big stubborn numbers, especially in ground-floor rooms. Heated buildings can also trigger off-season swarms inside, which throws people because it looks like termites at first glance.',
    whenToCall:
      'Light activity usually responds to baits placed along foundation cracks and sealing the visible entry points. Call a pro when trails keep coming back after two weeks of baiting, when you get swarmers indoors, or when ants show up in multiple ground-floor rooms at once. That points to a big under-slab colony you cannot reach yourself.',
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
      'Soft and creamy white, about a quarter inch long',
      'No wings, straight waist (no pinch)',
      'Straight bead-like antennae',
    ],
    whatItMeans: 'They eat wood from inside, near soil.',
    whatToLookFor: [
      'Inside pencil-thick mud tubes on foundation walls or sills',
      'In hollowed wood near basements or where wood meets concrete',
      'Around warm, moist spots near furnaces, pipes, and chimneys',
      'Push a screwdriver into suspect wood. If it goes in easily and pale workers spill out, you have them',
      'Break open one of the mud tubes. Creamy white movement inside means it is active',
    ],
    whatItMeansLong:
      'Subterranean termites live in soil-based colonies and send workers up through hidden mud tubes to feed on the wood in your home. They are the most common wood-destroying insect in the lower Hudson Valley and Fairfield County. The workers are the only ones that actually eat wood, and they do it silently, often for ten years or more before the damage shows. They need constant contact with soil moisture, which is why almost every infestation starts in the basement, the crawlspace, or wherever wood touches concrete. Live workers right now means the colony is active right now, not historical. One colony can have tens of thousands of workers feeding around the clock.',
    whenToCall:
      'If you see live termite workers, call a licensed pest control inspector today. This is not a DIY situation. Subterranean termites take soil treatment or bait systems to handle, and homeowners cannot legally or effectively apply them. A pro also needs to assess the actual damage, because what you can see is usually a fraction of what is going on.',
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
      'Dark brown to black body, about three-eighths to half an inch',
      'Two pairs of wings, all the same length, almost twice the body length',
      'Straight waist (no pinch) and straight antennae',
    ],
    whatItMeans: 'They swarm from mature termite colonies.',
    whatToLookFor: [
      'Swarming indoors near windows and lights, especially in spring',
      'Piles of equal-length wings shed on windowsills or floors',
      'Most common from February through June in the Northeast',
      'Compare a shed wing to an ant wing. Termite wings are equal length; ant wings are not',
      'Look at the waist with a hand lens. Termite waists are thick and straight; ants are pinched',
    ],
    whatItMeansLong:
      'Swarmers are the reproductive caste a mature termite colony sends out to start new colonies. A termite colony usually does not produce swarmers until it has been growing for several years, so seeing them inside means there is a long-standing infestation, not a fresh one. They emerge in spring on warm humid days, fly briefly, then drop their wings and try to mate. Indoors, most of them die quickly because they cannot reach soil. But the colony that sent them out is still active inside your structure. The piles of identical shed wings on a windowsill are often the first thing a homeowner notices about a termite problem.',
    whenToCall:
      'Indoor swarmers or shed wings get a same-day call to a licensed termite inspector. Do not wait, do not spray, do not seal anything up first. The inspector will locate the colony entry points and recommend soil treatment or bait systems. Those are the only treatments that actually work.',
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
      'Pinched, wasp-like waist (termites have a thick straight waist)',
      'Bent, L-shaped antennae (termites have straight beadlike ones)',
      'Front wings clearly longer than hind wings, usually tinted brown',
    ],
    whatItMeans: 'They swarm from mature ant colonies.',
    whatToLookFor: [
      'Indoor swarms at windows and light fixtures, especially spring or late summer',
      'Piles of mismatched wings on sills after the swarm clears out',
      'Often coming from a single crack, vent, or wall void',
      'Check the wings. If two pairs are the same length, it is a termite. If they are not, it is an ant',
      'Hand lens on the waist. Pinched means ant. Thick means termite',
    ],
    whatItMeansLong:
      'Flying ants are not their own species. They are the winged reproductives that a mature ant colony sends out to start new colonies. Most often in this region, the colony behind a flying ant swarm is carpenter ants, pavement ants, or citronella ants. An indoor swarm means there is a mature nest somewhere in or right next to the building. The mated queens shed their wings, burrow into soil or wood voids, and try to start new colonies. The males die within a day or two. The swarm itself is harmless. The piles of dropped wings on a sill are usually the diagnostic clue homeowners find first.',
    whenToCall:
      'A one-time small swarm at a window after a warm humid day is fine to vacuum up and monitor. If you find them indoors with no obvious outside source, or you get repeated flights over multiple days, call a pro to figure out which species is behind it. Carpenter ant swarmers indoors usually mean a satellite colony in the structure, which is a bigger conversation.',
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
      'Shield-shaped, mottled brown adult about 17mm long',
      'Light and dark bands on the antennae and the edges of the abdomen',
      'Smooth shoulders, not toothed or spined like native stink bugs',
    ],
    whatItMeans: 'They overwinter inside walls and attics.',
    whatToLookFor: [
      'Gathered on sunny south- and west-facing walls in September and October',
      'Crawling out from baseboards, window trim, and ceiling fixtures',
      'Bumping into windows and lights on warm winter and early-spring days',
      'Banded antennae and banded abdomen edges under good light',
      'Smooth, rounded shoulders rule out most native stink bugs',
    ],
    whatItMeansLong:
      'Brown marmorated stink bugs are an invasive species. First found in Pennsylvania in 1998 and now everywhere across the Northeast. In fall they leave host plants and look for protected places to overwinter, which often means the walls, attics, and voids of your house. Once inside they do not feed, reproduce, lay eggs, bite, or chew on anything. They just wait out winter. On warm days, especially in late winter, they get disoriented by indoor heat and crawl out toward windows. That is when most homeowners see them. Crushing them releases a strong cilantro smell and can attract carpet beetles to the carcasses, so vacuum instead of squashing.',
    whenToCall:
      'Vacuum the ones you see and dump them outside. Seal entry points around windows, siding, utility lines, and fascia with silicone caulk in late summer before they enter for the next winter. Call a pro only if sealing is impractical on a complex structure. A licensed applicator can do an exterior perimeter treatment in early fall before they get in.',
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
      'Brownish-black adult about 12mm long, elongated oval shape',
      'Three red-orange stripes running lengthwise down the back',
      'Bright red abdomen; nymphs are bright red with black legs',
    ],
    whatItMeans: 'They overwinter on sunny walls.',
    whatToLookFor: [
      'Massing on south-facing walls and tree trunks in fall sun',
      'Clustered around boxelder, maple, or ash trees during the growing season',
      'Coming out of baseboards, window trim, and ceiling fixtures on warm winter days',
      'Three red stripes down the back are the dead giveaway',
      'Bright red nymphs near a boxelder, maple, or ash tree confirm the species',
    ],
    whatItMeansLong:
      'Boxelder bugs feed on the seeds of boxelder, maple, and ash trees. They become a nuisance around homes near those host trees. In fall they gather in huge numbers on sun-warmed south sides of buildings and squeeze through cracks in siding, foundation, and trim to find a protected spot to overwinter in wall voids and attics. They do not bite, do not reproduce indoors, and do not damage anything. They can leave reddish fecal stains on light-colored curtains and walls, and crushed bugs give off a sharp smell. So vacuum, do not squash. On warm winter days they wander out of wall voids into living spaces, which is when people notice them.',
    whenToCall:
      'Almost always a DIY situation. Vacuum the ones you see and caulk gaps around windows, siding, utility lines, and fascia in late summer. Call a pro only for severe recurring infestations where an exterior perimeter treatment in early fall makes sense, or to talk about removing a heavily infested female boxelder tree near the house.',
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
      'Dirty yellow body, an inch to an inch and a half long, with three dark stripes',
      'Total appearance 3 to 4 inches including legs and antennae',
    ],
    whatItMeans: 'They hunt other indoor bugs.',
    whatToLookFor: [
      'Darting across bathroom, basement, or laundry floors at night',
      'In damp spots: floor drains, crawl spaces, cement block walls',
      'Year-round indoors; they cannot survive winters outside up here',
      'Count the leg pairs. Fifteen, with light-and-dark banding',
      'Adult females have a back pair of legs nearly twice the body length',
    ],
    whatItMeansLong:
      'House centipedes are fast nocturnal hunters that eat silverfish, cockroaches, carpet beetle larvae, and spiders. If you are seeing them regularly, it usually means there is a hidden food supply of other bugs inside the house, plus moisture somewhere. They are technically beneficial. They will not damage anything and they basically never bite people in any meaningful way. Females can live several years and lay up to 150 eggs, which is why populations build up quietly behind walls without anyone noticing.',
    whenToCall:
      'Occasional centipedes are not a problem. Relocate them outside or ignore them. If you see them often, the move is to dehumidify, seal cracks, and figure out what other bugs are feeding them. A pro is only worth it if you cannot find the moisture or the other bugs yourself.',
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
      'Silvery-metallic scales over a flat teardrop body',
      'Up to about half an inch long, head to tail',
      'Three tail-like bristles trailing from the rear, antennae as long as the body',
    ],
    whatItMeans: 'They like humid spots and paper.',
    whatToLookFor: [
      'In cool damp basements, bathrooms, and under sinks',
      'Darting fast (including sideways) when a light flips on',
      'Around books, paper, cardboard, wallpaper, or stored cereals',
      'Three rear bristles plus silvery scales are unmistakable',
      'Look for irregular holes or yellow stains on paper and book bindings',
    ],
    whatItMeansLong:
      'Silverfish are primitive wingless insects that need humid dark indoor space. They eat starches: paper, glue, wallpaper paste, cereals, book bindings. They are more nuisance than threat, but a slow damage pest if you let them go. They live two to three years and can survive long periods without food as long as it is humid, so they tend to stick around once established. Their presence almost always points to a humidity issue somewhere.',
    whenToCall:
      'A few silverfish you can handle with a dehumidifier, sealing cracks, and getting rid of stored paper and cardboard piles. Call a pro if you keep seeing them in multiple rooms, find feeding damage on books or wallpaper, or the dehumidifier does not knock the population back within a few weeks.',
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
      'Extremely long, thin legs (forelegs up to about 50mm)',
      'Pale tan or yellow body with a gray central marking',
      'Cylindrical abdomen, three times longer than wide',
    ],
    whatItMeans: 'They web in quiet corners.',
    whatToLookFor: [
      'Hanging upside down in messy webs in corners',
      'In basements, garages, closets, and quiet ceiling corners',
      'Indoors year-round in heated buildings',
      'Poke the web. The spider vibrates rapidly in a blur as a defense',
      'Note the pale color and disproportionately long spindly legs',
    ],
    whatItMeansLong:
      'Cellar spiders are not the native daddy long-legs everyone calls them. They are true spiders, common in basements, garages, and ceiling corners across the Northeast. They build messy tangled webs in protected indoor spots and live two or more years as adults. They eat flies, mosquitoes, and other small insects, including sometimes other spiders, so they are actually working in your favor. They do not pose any medical risk to people or pets despite long-running internet rumors. Their dusty webs and shed skins are usually what people notice first.',
    whenToCall:
      'These rarely justify a pro. Knock down the webs with a vacuum or broom and reduce clutter in basements and garages to discourage them. Worth a pro call only if the webs keep coming back in big numbers, which usually means there is an underlying fly or insect problem feeding them.',
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
      'Large, robust hunting spiders; females up to 35mm, males up to 20mm',
      'Dark brown carapace with scattered gray hairs',
      'Eight eyes with two big ones facing forward, stout hairy legs',
    ],
    whatItMeans: 'They wander in from outside in fall.',
    whatToLookFor: [
      'Running across floors, basements, or garages at night',
      'Most often indoors in fall as they look for somewhere to overwinter',
      'No web. Found on the ground or along baseboards, not in corners',
      'Female sometimes carries a round egg sac or even spiderlings on her back',
      'Two big forward-facing eyes above a row of smaller eyes confirm it',
    ],
    whatItMeansLong:
      'Wolf spiders are active ground hunters. They do not build webs, they chase down prey at night. They live mostly outdoors in leaf litter, mulch, and along foundations, and slip inside through gaps in fall as it gets cold or during mating season. The mom carries her egg sac attached to her body and later carries her spiderlings around on her back, which is the part that freaks people out. They will bite only if trapped against skin, and the reactions are short-lived pain and redness, nothing serious. They are scary-looking but actually helpful pest controllers.',
    whenToCall:
      'A single wolf spider is a cup-and-card relocation outside. This almost never warrants a pro. Repeated indoor sightings mean there are gaps in the foundation or door sweeps and a need to seal up the entry points and reduce mulch and debris against the house. Call a pro only if you are finding multiple wolf spiders weekly, or you have a confirmed bite reaction that needs perimeter treatment.',
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
      'Small narrow moth, about three-quarters of an inch wingspan',
      'Two-tone wings: pale gray inner half, coppery reddish-brown outer half',
      'Larvae are cream-colored caterpillars, half an inch long, with brown heads',
    ],
    whatItMeans: 'They hatch inside pantry goods.',
    whatToLookFor: [
      'Adults fluttering weakly around kitchen walls and ceilings at night',
      'Larvae crawling up walls or along ceiling edges',
      'In pantry food: flour, cereal, nuts, dried fruit, pet food, birdseed',
      'Open a suspect package. Look for silken webbing clumping the food',
      'Live cream-colored worms inside grain, cereal, or pet food confirm it',
    ],
    whatItMeansLong:
      'Pantry moths are the most common pantry pest in North America. They almost always arrive inside a sealed package of dry goods from the store. Eggs hatch into caterpillars that feed on flour, cereal, nuts, dried fruit, birdseed, or pet food, leaving silken webbing in the food as they go. The grown larvae wander far from the food to find a place to pupate, which is why you see worms on the ceiling far from the pantry. One female lays up to 300 eggs and the full cycle finishes in about a month indoors, so populations build fast. They do not damage anything in the house itself, but they contaminate food.',
    whenToCall:
      'Most infestations are DIY. Throw out all infested or exposed dry goods, vacuum the pantry shelves and corners, and store anything you keep in airtight containers. Call a pro if moths keep coming back after a thorough pantry purge. That usually means larvae pupated in cracks, crown molding, or a source you have not found yet.',
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
      'Very small, about a sixteenth of an inch (2mm)',
      'Tan to beige body with a darker rear',
      'Distinctive bright red eyes',
    ],
    whatItMeans: "They're drawn to fermenting food.",
    whatToLookFor: [
      'Hovering in clouds over ripe bananas, tomatoes, or onions on the counter',
      'Around recycling, trash, compost, beer or wine glasses',
      'Lingering near damp mop heads, sponges, and rarely-used drains',
      'Set out apple cider vinegar with a drop of dish soap. They pile in within hours',
      'Use your phone camera to zoom in. The bright red eyes are the giveaway',
    ],
    whatItMeansLong:
      'Fruit flies, properly called vinegar flies, are drawn to the yeast on fermenting fruit and vegetables, not to the produce itself. They usually ride into the kitchen as eggs already laid on store-bought or garden produce, then explode in number because one female can lay 500 eggs and the full life cycle takes only about ten days at room temperature. The hidden breeding sites are usually onions or potatoes sprouting in a bin, a forgotten piece of fruit behind the counter, sugary residue in the recycling, or a damp mop head. They do not bite or transmit serious disease, but they walk on rotting material and then on clean food, so worth dealing with.',
    whenToCall:
      'Almost always a DIY problem. Find and toss the fermenting source, rinse the recycling bin, run the disposal with ice and vinegar, and set vinegar traps for stragglers. Call a pro only if flies persist for more than a couple weeks after removing every visible food source. The breeding site is probably inside a drain or appliance you cannot easily reach.',
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
      'Tiny, about a tenth of an inch long, a third the size of a housefly',
      'Dark gray fuzzy body with lighter wings, mothlike look',
      'Wings held roof-shaped over the body at rest',
    ],
    whatItMeans: 'They breed in drain gunk.',
    whatToLookFor: [
      'Resting motionless on bathroom walls, ceilings, or beside drains',
      'Around floor drains, shower drains, and rarely-used sinks',
      'Weak fluttery flight in short hops when disturbed',
      'Tape a clear plastic bag over a suspect drain overnight. Adults emerge and stick to it',
      'Scrape the drain slime. Thin tan worm-like larvae in there confirm it',
    ],
    whatItMeansLong:
      'Drain flies, also called moth flies, breed in the gelatinous biofilm that builds up inside drains, traps, and overflow tubes. The larvae feed on this organic film and on standing water in sewage and floor drains, so seeing adults indoors almost always points to a specific plumbing fixture, not a sanitation problem with the room itself. Common sources are seldom-used guest bath drains, basement floor drains, sump pits, and pipes with a slow leak under a slab. Adults only live about two weeks, but the cycle keeps going as long as the slime layer is there. They do not bite or transmit disease in homes.',
    whenToCall:
      'Most cases get solved by mechanically scrubbing the drain with a long stiff brush and following with an enzyme drain cleaner. Bleach alone usually does not work because it does not remove the biofilm. Call a plumber or pest pro if flies keep coming out after repeated cleanings. That can mean a broken sewer line, a cracked drain pipe, or a breeding site under a slab.',
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
      'Slightly larger than a housefly, about 8 to 10mm long',
      'Dark gray to olive thorax with short golden-yellow hairs',
      'Sluggish, clumsy flight compared to a housefly',
    ],
    whatItMeans: 'They overwinter in wall and attic voids.',
    whatToLookFor: [
      'Clustered on sunny windows and warm walls on mild fall and late-winter days',
      'Buzzing in attics, behind curtains, around recessed lights and window frames',
      'Active indoors in October-November and again in March-April',
      'Short golden hairs on the thorax and overlapping wings at rest',
      'Movement is slow and bumbling. They do not dart like houseflies',
    ],
    whatItMeansLong:
      'Cluster flies are a parasite of earthworms. Their larvae develop in earthworms in lawn and garden soil, so homes near pasture, lawn, or open ground see the most of them. This is why they are a regular spring nuisance in older farmhouses around Putnam and northern Westchester. In early fall the new generation of adults works its way into attics, wall voids, and around window frames to overwinter. On warm winter days they get disoriented by indoor heat and crawl out toward light, which is why they pile up on sunny windows. They do not bite, do not breed indoors, and do not damage food or fabric. But the dead bodies stain surfaces and can attract carpet beetles.',
    whenToCall:
      'A handful, vacuum them up and seal the obvious gaps around windows, soffits, utility lines, and attic vents in late summer before they enter. Call a pro for an exterior perimeter treatment in late August or early September if you get hundreds emerging each spring. Interior sprays after they are inside the walls almost never help.',
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
      'About 16mm long, dark reddish-brown body',
      'Claw-like pincers at the rear (males curved, females straighter)',
      'Flattened body with short leathery wing covers',
    ],
    whatItMeans: 'They wander in from damp spots outside.',
    whatToLookFor: [
      'Active at night, hiding in cracks and crevices by day',
      'In damp spots: basements, bathrooms, under sinks, door thresholds',
      'Peak indoor sightings in warm humid summer weather',
      'The pincers at the rear are unmistakable',
      'Flat reddish-brown body with short leathery wing covers confirm it',
    ],
    whatItMeansLong:
      'Earwigs were introduced to North America in the early 1900s and are now everywhere in the Northeast. They live outdoors in mulch, leaf litter, and damp soil and wander inside during hot, dry, or wet weather looking for moisture. Despite the name and the intimidating pincers, they do not crawl into ears, do not transmit disease, and almost never bite. Indoors they eat almost anything organic but usually do no real damage. One generation a year, with the females guarding their eggs in underground nests outside the home.',
    whenToCall:
      'Small numbers, vacuum them and cut back mulch, leaf litter, and moisture around the foundation. Call a pro for ongoing daily invasions across multiple rooms. That usually needs a perimeter treatment and some habitat correction. A few summer earwigs do not need professional service.',
    locations: ['bathroom', 'basement', 'exterior'],
    groupSize: ['few', 'group'],
    hasWings: 'sometimes',
    shedsWings: false,
    seasonalPeak: [5, 6, 7, 8, 9],
    source: { url: 'https://extension.psu.edu/european-earwigs', name: 'Penn State Extension' },
  },
];

export const bugById = (id: string) => bugs.find((b) => b.id === id);
