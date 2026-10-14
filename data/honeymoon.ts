
export type HoneymoonItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type HoneymoonPackage = {
  id: string;
  slug: string;
  title: string;
  destination: string;
  duration: string;
  description: string;
  image: string;
  coveredPlaces: string[];
  itinerary: HoneymoonItineraryDay[];
  inclusions: string[];
  exclusions: string[];
};

const commonInclusions = [
  "Accommodation as per the confirmed itinerary",
  "Meals specifically mentioned in the booking",
  "Transfers specified in the package",
  "Sightseeing listed in the confirmed itinerary",
];

const commonExclusions = [
  "Flights or train tickets unless specified",
  "Personal expenses and shopping",
  "Optional activities and entry tickets unless specified",
  "Travel insurance unless specified",
  "Anything not explicitly mentioned in the inclusions",
];

export const honeymoonPackages: HoneymoonPackage[] = [
  {
    id: "kerala-delight",
    slug: "kerala-delight-honeymoon",
    title: "Kerala Delight Honeymoon",
    destination: "Kerala",
    duration: "3 Nights / 4 Days",
    description:
      "A Kerala honeymoon circuit covering backwaters and hills.",
    image: "/images/honeymoon/kerala.jpg",
    coveredPlaces: ["Cochin", "Munnar", "Thekkady"],
    itinerary: [
      {
        day: 1,
        title: "Cochin to Munnar",
        description:
          "Arrive in Cochin and travel to Munnar through scenic landscapes. Check in to your hotel and enjoy leisure time.",
      },
      {
        day: 2,
        title: "Munnar Sightseeing",
        description:
          "Explore Munnar's tea gardens, scenic viewpoints and local attractions as per the confirmed itinerary.",
      },
      {
        day: 3,
        title: "Munnar to Thekkady",
        description:
          "Travel to Thekkady and explore its natural surroundings. Optional activities are subject to availability and additional charges.",
      },
      {
        day: 4,
        title: "Thekkady to Cochin",
        description:
          "Travel back towards Cochin for your onward journey.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },

  {
    id: "love-in-kerala",
    slug: "love-in-kerala",
    title: "Love in Kerala",
    destination: "Kerala",
    duration: "6 Nights / 7 Days",
    description:
      "A full-week Kerala honeymoon itinerary.",
    image: "/images/honeymoon/kerala.jpg",
    coveredPlaces: ["Cochin", "Munnar", "Alleppey"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        description:
          "Arrive in Cochin, transfer to your hotel and enjoy the rest of the day at leisure.",
      },
      {
        day: 2,
        title: "Journey to Munnar",
        description:
          "Travel to Munnar through scenic landscapes and check in to your accommodation.",
      },
      {
        day: 3,
        title: "Explore Munnar",
        description:
          "Discover tea gardens, viewpoints and local sightseeing attractions.",
      },
      {
        day: 4,
        title: "Munnar Leisure",
        description:
          "Enjoy a relaxed day or explore additional attractions according to your itinerary.",
      },
      {
        day: 5,
        title: "Journey to Alleppey",
        description:
          "Travel to Alleppey and explore the beautiful backwater region.",
      },
      {
        day: 6,
        title: "Alleppey Leisure",
        description:
          "Enjoy leisure time and the local surroundings.",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Complete checkout and transfer for your onward journey.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },

  {
    id: "romantic-kerala",
    slug: "romantic-kerala-tour",
    title: "Romantic Kerala Tour",
    destination: "Kerala",
    duration: "5 Nights / 6 Days",
    description:
      "Another Kerala-focused honeymoon package.",
    image: "/images/honeymoon/kerala.jpg",
    coveredPlaces: ["Cochin", "Munnar", "Alleppey"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        description:
          "Arrive in Cochin and transfer to your accommodation.",
      },
      {
        day: 2,
        title: "Cochin to Munnar",
        description:
          "Travel through green landscapes to Munnar and enjoy a relaxed evening.",
      },
      {
        day: 3,
        title: "Munnar Sightseeing",
        description:
          "Explore tea gardens and scenic viewpoints around Munnar.",
      },
      {
        day: 4,
        title: "Munnar to Alleppey",
        description:
          "Travel to Alleppey and discover the backwater region.",
      },
      {
        day: 5,
        title: "Alleppey Leisure",
        description:
          "Enjoy a relaxed day and activities confirmed in your itinerary.",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Transfer for your onward journey as per the confirmed travel plan.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },

  {
    id: "romance-gods-own-country",
    slug: "romance-in-gods-own-country",
    title: "Romance in God's Own Country",
    destination: "Munnar · Kochi",
    duration: "3 Nights / 4 Days",
    description:
      "A Munnar and Kochi honeymoon circuit.",
    image: "/images/honeymoon/kerala.jpg",
    coveredPlaces: ["Cochin", "Munnar", "Thekkady"],
    itinerary: [
      {
        day: 1,
        title: "Cochin to Munnar",
        description:
          "Begin your journey in Cochin and travel to Munnar. Check in and enjoy the scenic surroundings.",
      },
      {
        day: 2,
        title: "Munnar Sightseeing",
        description:
          "Explore tea plantations, scenic viewpoints and local attractions.",
      },
      {
        day: 3,
        title: "Munnar and Nearby Attractions",
        description:
          "Enjoy sightseeing or leisure time according to your confirmed travel plan.",
      },
      {
        day: 4,
        title: "Departure via Cochin",
        description:
          "Return towards Cochin for your onward journey.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },

  {
    id: "voluptuous-kerala",
    slug: "voluptuous-kerala-beauty",
    title: "Voluptuous Kerala Beauty",
    destination: "Kerala",
    duration: "5 Nights / 6 Days",
    description:
      "A scenic Kerala honeymoon package.",
    image: "/images/honeymoon/kerala.jpg",
    coveredPlaces: ["Cochin", "Munnar", "Alleppey"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        description:
          "Arrive in Cochin and transfer to your hotel.",
      },
      {
        day: 2,
        title: "Cochin to Munnar",
        description:
          "Travel to Munnar and enjoy the green landscapes along the route.",
      },
      {
        day: 3,
        title: "Munnar Exploration",
        description:
          "Visit selected tea gardens and viewpoints according to your itinerary.",
      },
      {
        day: 4,
        title: "Munnar to Alleppey",
        description:
          "Travel to Alleppey and explore its backwater surroundings.",
      },
      {
        day: 5,
        title: "Alleppey Leisure",
        description:
          "Enjoy a relaxed day with optional activities subject to availability.",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Transfer for your onward journey.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },

  {
    id: "honeymoon-goa",
    slug: "honeymoon-in-goa",
    title: "Honeymoon in Goa",
    destination: "Goa",
    duration: "4 Nights / 5 Days",
    description:
      "A Goa beach-resort honeymoon package.",
    image: "/images/honeymoon/goa.jpg",
    coveredPlaces: ["North Goa", "South Goa"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description:
          "Arrive in Goa, transfer to your accommodation and enjoy the rest of the day at leisure.",
      },
      {
        day: 2,
        title: "North Goa Exploration",
        description:
          "Explore selected beaches and attractions in North Goa as per your itinerary.",
      },
      {
        day: 3,
        title: "South Goa Exploration",
        description:
          "Discover South Goa's coastal scenery and local attractions.",
      },
      {
        day: 4,
        title: "Beach and Leisure Day",
        description:
          "Enjoy free time at the beach or choose optional activities.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Check out and transfer for your onward journey.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },

  {
    id: "loving-goa-beaches",
    slug: "loving-goa-beaches-tour",
    title: "Loving Goa Beaches Tour",
    destination: "Goa",
    duration: "4 Nights / 5 Days",
    description:
      "Another Goa beach-focused honeymoon itinerary.",
    image: "/images/honeymoon/goa.jpg",
    coveredPlaces: ["North Goa", "South Goa"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Check-in",
        description:
          "Arrive in Goa and settle into your accommodation.",
      },
      {
        day: 2,
        title: "North Goa Beaches",
        description:
          "Explore selected North Goa beaches and nearby attractions.",
      },
      {
        day: 3,
        title: "South Goa Tour",
        description:
          "Discover South Goa's scenic coastline and peaceful surroundings.",
      },
      {
        day: 4,
        title: "Leisure and Local Experiences",
        description:
          "Enjoy free time or choose optional activities based on availability.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Check out and transfer for your onward journey.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },

  {
    id: "manali-volvo",
    slug: "mesmerize-manali-volvo-tour",
    title: "Mesmerize Manali Volvo Tour",
    destination: "Manali",
    duration: "5 Nights / 6 Days",
    description:
      "A Manali honeymoon package with Volvo coach travel.",
    image: "/images/honeymoon/manali.jpg",
    coveredPlaces: ["Manali", "Solang Valley", "Local Sightseeing"],
    itinerary: [
      {
        day: 1,
        title: "Volvo Journey",
        description:
          "Begin your overnight Volvo journey according to the confirmed departure schedule.",
      },
      {
        day: 2,
        title: "Arrival in Manali",
        description:
          "Arrive in Manali, check in to your accommodation and enjoy leisure time.",
      },
      {
        day: 3,
        title: "Manali Local Sightseeing",
        description:
          "Explore selected local attractions and scenic viewpoints.",
      },
      {
        day: 4,
        title: "Solang Valley Excursion",
        description:
          "Visit Solang Valley when accessible and according to local weather and road conditions.",
      },
      {
        day: 5,
        title: "Leisure and Return Journey",
        description:
          "Enjoy available leisure time before the scheduled return journey.",
      },
      {
        day: 6,
        title: "Arrival Back",
        description:
          "Complete your return journey according to the confirmed Volvo schedule.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },

  {
    id: "shimla-volvo",
    slug: "shimmering-shimla-volvo-tour",
    title: "Shimmering Shimla Volvo Tour",
    destination: "Shimla",
    duration: "4 Nights / 5 Days",
    description:
      "A Shimla honeymoon package with Volvo coach travel.",
    image: "/images/honeymoon/shimla.jpg",
    coveredPlaces: ["Shimla", "Kufri", "Local Sightseeing"],
    itinerary: [
      {
        day: 1,
        title: "Volvo Journey",
        description:
          "Begin your journey according to the confirmed Volvo departure schedule.",
      },
      {
        day: 2,
        title: "Arrival in Shimla",
        description:
          "Arrive in Shimla, check in to your accommodation and enjoy the surroundings.",
      },
      {
        day: 3,
        title: "Shimla Sightseeing",
        description:
          "Explore selected local attractions, viewpoints and the town centre.",
      },
      {
        day: 4,
        title: "Kufri and Leisure",
        description:
          "Visit Kufri if included in your confirmed itinerary and conditions permit.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Complete your return journey or transfer according to the confirmed booking.",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
];
