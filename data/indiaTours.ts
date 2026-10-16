export type IndiaTourDestination = {
  id: string;
  name: string;
  slug: string;
  packageCount: number;
  image: string;
};

export const indiaTourDestinations: IndiaTourDestination[] = [
  {
    id: "kashmir",
    name: "Kashmir",
    slug: "kashmir",
    packageCount: 11,
    image: "/images/india-tours/kashmir.jpg",
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    packageCount: 30,
    image: "/images/india-tours/himachal.jpg",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    slug: "rajasthan",
    packageCount: 8,
    image: "/images/india-tours/rajasthan.jpg",
  },
  {
    id: "goa",
    name: "Goa",
    slug: "goa",
    packageCount: 7,
    image: "/images/india-tours/goa.jpg",
  },
  {
    id: "kerala",
    name: "Kerala",
    slug: "kerala",
    packageCount: 7,
    image: "/images/india-tours/kerala.jpg",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    slug: "uttarakhand",
    packageCount: 18,
    image: "/images/india-tours/uttarakhand.jpg",
  },
  {
    id: "andaman",
    name: "Andaman Islands Holiday Packages",
    slug: "andaman-islands",
    packageCount: 4,
    image: "/images/india-tours/andaman.jpg",
  },
  {
    id: "chardham",
    name: "Chardham Yatra Packages",
    slug: "chardham-yatra",
    packageCount: 6,
    image: "/images/india-tours/chardham.jpg",
  },
  {
    id: "golden-triangle",
    name: "Golden Triangle Tour Packages",
    slug: "golden-triangle",
    packageCount: 6,
    image: "/images/india-tours/golden-triangle.jpg",
  },
  {
    id: "leh-ladakh",
    name: "Leh-Ladakh Holiday Packages",
    slug: "leh-ladakh",
    packageCount: 4,
    image: "/images/india-tours/leh-ladakh.jpg",
  },
  {
    id: "darjeeling-sikkim",
    name: "Darjeeling & Sikkim Holiday Packages",
    slug: "darjeeling-sikkim",
    packageCount: 19,
    image: "/images/india-tours/darjeeling-sikkim.jpg",
  },
  {
    id: "india-honeymoon",
    name: "India Honeymoon Packages",
    slug: "honeymoon",
    packageCount: 12,
    image: "/images/india-tours/honeymoon.jpg",
  },
  {
    id: "south-india",
    name: "South India Holiday Packages",
    slug: "south-india",
    packageCount: 9,
    image: "/images/india-tours/south-india.jpg",
  },
  {
    id: "gujarat",
    name: "Gujarat Holiday Packages",
    slug: "gujarat",
    packageCount: 7,
    image: "/images/india-tours/gujarat.jpg",
  },
  {
    id: "auli",
    name: "Auli Holiday Packages",
    slug: "auli",
    packageCount: 5,
    image: "/images/india-tours/auli.jpg",
  },
  {
    id: "mussoorie",
    name: "Mussoorie Holiday Packages",
    slug: "mussoorie",
    packageCount: 5,
    image: "/images/india-tours/mussoorie.jpg",
  },
  {
  id: "munsiyari",
  name: "Munsiyari Holiday Packages",
  slug: "munsiyari",
  packageCount: 5,
  image: "/images/india-tours/munsiyari.jpg",
},
{
  id: "dhanaulti",
  name: "Dhanaulti Holiday Packages",
  slug: "dhanaulti",
  packageCount: 5,
  image: "/images/india-tours/dhanaulti.jpg",
},
{
  id: "coorg",
  name: "Coorg Holiday Packages",
  slug: "coorg",
  packageCount: 8,
  image: "/images/india-tours/coorg.jpg",
},
{
  id: "ooty",
  name: "Ooty Holiday Packages",
  slug: "ooty",
  packageCount: 6,
  image: "/images/india-tours/ooty.jpg",
},
{
  id: "kanyakumari",
  name: "Kanyakumari Holiday Packages",
  slug: "kanyakumari",
  packageCount: 5,
  image: "/images/india-tours/kanyakumari.jpg",
},
{
  id: "mysore",
  name: "Mysore Holiday Packages",
  slug: "mysore",
  packageCount: 5,
  image: "/images/india-tours/mysore.jpg",
},
{
  id: "bandhavgarh-tiger-reserve",
  name: "Bandhavgarh Tiger Reserve Packages",
  slug: "bandhavgarh-tiger-reserve",
  packageCount: 3,
  image: "/images/india-tours/bandhavgarh-tiger-reserve.jpg",
},
{
  id: "kaziranga-national-park",
  name: "Kaziranga National Park Packages",
  slug: "kaziranga-national-park",
  packageCount: 3,
  image: "/images/india-tours/kaziranga-national-park.jpg",
},
{
  id: "tadoba-national-park",
  name: "Tadoba National Park Packages",
  slug: "tadoba-national-park",
  packageCount: 3,
  image: "/images/india-tours/tadoba-national-park.jpg",
},
{
  id: "kanha-national-park",
  name: "Kanha National Park Packages",
  slug: "kanha-national-park",
  packageCount: 3,
  image: "/images/india-tours/kanha-national-park.jpg",
},
{
  id: "mount-abu",
  name: "Mount Abu Holiday Packages",
  slug: "mount-abu",
  packageCount: 3,
  image: "/images/india-tours/mount-abu.jpg",
},
{
  id: "jaisalmer",
  name: "Jaisalmer Holiday Packages",
  slug: "jaisalmer",
  packageCount: 3,
  image: "/images/india-tours/jaisalmer.jpg",
},
{
  id: "ranthambore-national-park",
  name: "Ranthambore National Park Packages",
  slug: "ranthambore-national-park",
  packageCount: 3,
  image: "/images/india-tours/ranthambore-national-park.jpg",
},
];

export type DestinationPackage = {
  id: string;
  title: string;
  duration: string;
  places: string[];
  description: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
};

export type DestinationInfo = {
  slug: string;
  name: string;
  image: string;
  heroTitle: string;
  heroDescription: string;
  whyVisit: string;
  bestTime: string;
  idealDuration: string;
  howToReach: string;
  packageCount: number;
  packages: DestinationPackage[];
  honeymoonText: string;
  familyText: string;
  groupText: string;
  faqs: { question: string; answer: string }[];
};

export const destinationDetails: DestinationInfo[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    image: "/images/india-tours/kashmir.jpg",
    heroTitle: "Discover the Beauty of Kashmir",
    heroDescription:
      "Explore Kashmir's scenic valleys, peaceful lakes, mountain landscapes and memorable holiday experiences with LV Sky High.",
    whyVisit:
      "Discover Srinagar, Dal Lake, Gulmarg, Pahalgam and Sonamarg. Choose a relaxing valley holiday or combine multiple destinations in one itinerary.",
    bestTime:
      "March to October is popular for gardens, greenery and pleasant sightseeing. Winter trips offer snow experiences, subject to weather and road conditions.",
    idealDuration:
      "A 5–6 night trip is a useful starting point for Srinagar, Gulmarg and Pahalgam. Longer trips can include additional destinations.",
    howToReach:
      "Srinagar Airport is the main air gateway. Jammu Tawi is another rail option, followed by a road journey. Routes depend on your travel dates and conditions.",
    packageCount: 11,
    honeymoonText:
      "Couple-friendly stays, scenic valley views and relaxed sightseeing can be planned according to your preferences.",
    familyText:
      "Family itineraries can combine Srinagar, Gulmarg and Pahalgam with suitable sightseeing breaks.",
    groupText:
      "Group itineraries can be arranged with transport, accommodation and sightseeing based on group size.",
    packages: [
      {
        id: "kashmir-valley-honeymoon",
        title: "5N/6D Kashmir Valley Honeymoon Tour",
        duration: "5 Nights / 6 Days",
        places: ["Srinagar", "Gulmarg", "Pahalgam"],
        description: "A classic honeymoon-oriented Kashmir Valley circuit.",
        itinerary: [
          {
            day: 1,
            title: "Arrival in Srinagar",
            description:
              "Arrive in Srinagar, transfer to your accommodation and enjoy leisure time.",
          },
          {
            day: 2,
            title: "Srinagar Sightseeing",
            description:
              "Explore selected local attractions and Dal Lake surroundings.",
          },
          {
            day: 3,
            title: "Gulmarg Excursion",
            description:
              "Explore Gulmarg subject to weather, road conditions and activity availability.",
          },
          {
            day: 4,
            title: "Journey to Pahalgam",
            description: "Travel to Pahalgam and enjoy the valley scenery.",
          },
          {
            day: 5,
            title: "Return to Srinagar",
            description:
              "Return according to the confirmed itinerary and enjoy available leisure time.",
          },
          {
            day: 6,
            title: "Departure",
            description:
              "Transfer to Srinagar Airport for your onward journey.",
          },
        ],
        inclusions: [
          "Accommodation as confirmed in the booking",
          "Transfers listed in the itinerary",
          "Meals specifically mentioned in the package",
          "Sightseeing included in the confirmed plan",
        ],
        exclusions: [
          "Flights unless specified",
          "Personal expenses",
          "Optional activities and entry fees unless specified",
          "Travel insurance unless specified",
        ],
      },
      {
        id: "kashmir-vaishno-devi",
        title: "8N/9D Kashmir Tour with Mata Vaishno Devi",
        duration: "8 Nights / 9 Days",
        places: ["Kashmir Valley", "Katra"],
        description:
          "A longer trip combining a Kashmir Valley holiday with a Vaishno Devi visit.",
        itinerary: [
          {
            day: 1,
            title: "Arrival",
            description:
              "Arrive at the confirmed arrival point and transfer to your accommodation.",
          },
          {
            day: 2,
            title: "Srinagar",
            description: "Explore Srinagar as per the itinerary.",
          },
          {
            day: 3,
            title: "Gulmarg",
            description: "Visit Gulmarg, subject to local conditions.",
          },
          {
            day: 4,
            title: "Pahalgam",
            description: "Explore Pahalgam and its surrounding scenery.",
          },
          {
            day: 5,
            title: "Kashmir Valley",
            description:
              "Continue the confirmed sightseeing and transfer plan.",
          },
          {
            day: 6,
            title: "Transfer towards Katra",
            description:
              "Travel towards Katra according to the confirmed transport plan.",
          },
          {
            day: 7,
            title: "Vaishno Devi Visit",
            description:
              "Plan the pilgrimage subject to registration, access and local arrangements.",
          },
          {
            day: 8,
            title: "Leisure and Transfer",
            description:
              "Follow the confirmed itinerary for the final overnight stay.",
          },
          {
            day: 9,
            title: "Departure",
            description:
              "Depart according to your confirmed travel arrangements.",
          },
        ],
        inclusions: [
          "Accommodation as confirmed",
          "Specified transfers",
          "Meals and sightseeing as listed in the booking",
        ],
        exclusions: [
          "Travel tickets unless specified",
          "Personal expenses",
          "Optional activities and unlisted entry fees",
        ],
      },
      {
        id: "kashmir-3-night",
        title: "Kashmir 3-Night Package",
        duration: "3 Nights / 4 Days",
        places: ["Srinagar"],
        description:
          "A short Srinagar-based trip for a quick Kashmir introduction.",
        itinerary: [
          {
            day: 1,
            title: "Arrival in Srinagar",
            description:
              "Arrive in Srinagar and transfer to your accommodation.",
          },
          {
            day: 2,
            title: "Srinagar Sightseeing",
            description: "Explore selected Srinagar attractions.",
          },
          {
            day: 3,
            title: "Local Experiences",
            description:
              "Enjoy local sightseeing and leisure according to your itinerary.",
          },
          {
            day: 4,
            title: "Departure",
            description: "Transfer for your onward journey.",
          },
        ],
        inclusions: [
          "Accommodation as confirmed",
          "Specified transfers and meals",
        ],
        exclusions: [
          "Flights unless specified",
          "Personal expenses and optional activities",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Kashmir suitable for a family holiday?",
        answer:
          "Kashmir can suit families with a suitable itinerary. Check current travel advisories and local conditions before departure.",
      },
      {
        question: "Can Kashmir be combined with Vaishno Devi?",
        answer:
          "Yes, a longer itinerary can combine Kashmir Valley with Katra, subject to travel dates and arrangements.",
      },
      {
        question: "Is a houseboat stay included?",
        answer:
          "It depends on the selected package. Confirm the accommodation details before booking.",
      },
      {
        question: "What should I pack for Kashmir?",
        answer:
          "Pack according to the season, including layers, comfortable footwear and suitable rain or winter protection.",
      },
      {
        question: "Can the itinerary be customised?",
        answer:
          "Yes, request a personalised itinerary based on your dates, budget and travel preferences.",
      },
    ],
  },

  {
    slug: "goa",
    name: "Goa",
    image: "/images/india-tours/goa.jpg",
    heroTitle: "Explore the Beaches of Goa",
    heroDescription:
      "Plan a Goa holiday with beautiful beaches, coastal scenery, local experiences and relaxing stays.",
    whyVisit:
      "Goa offers beach escapes, heritage attractions, local cuisine and leisure experiences. The right itinerary depends on your interests and trip length.",
    bestTime:
      "November to February is popular for beach holidays. Weather and seasonal conditions should be checked before booking.",
    idealDuration:
      "A 3–5 night stay is a practical starting point for selected North Goa and South Goa experiences.",
    howToReach:
      "Goa is accessible by air, rail and road. Choose the arrival airport or railway station according to your itinerary.",
    packageCount: 7,
    honeymoonText:
      "Plan a relaxed couple's escape with beach time and selected local experiences.",
    familyText:
      "Family trips can include suitable beaches, sightseeing and comfortable travel times.",
    groupText:
      "Group holidays can be tailored around accommodation, transport and shared activities.",
    packages: [
      {
        id: "goa-beach-escape",
        title: "Goa Beach Holiday",
        duration: "4 Nights / 5 Days",
        places: ["North Goa", "South Goa"],
        description:
          "A beach-focused Goa holiday with time for sightseeing and leisure.",
        itinerary: [
          {
            day: 1,
            title: "Arrival in Goa",
            description:
              "Arrive, transfer to your accommodation and enjoy free time.",
          },
          {
            day: 2,
            title: "North Goa",
            description: "Explore selected beaches and local attractions.",
          },
          {
            day: 3,
            title: "South Goa",
            description:
              "Discover coastal scenery and selected sightseeing locations.",
          },
          {
            day: 4,
            title: "Leisure Day",
            description: "Enjoy free time or optional activities.",
          },
          {
            day: 5,
            title: "Departure",
            description: "Check out and transfer for your onward journey.",
          },
        ],
        inclusions: [
          "Accommodation as confirmed",
          "Specified transfers",
          "Meals listed in the booking",
        ],
        exclusions: [
          "Flights or train tickets unless specified",
          "Personal expenses",
          "Optional activities and unlisted entry fees",
        ],
      },
    ],
    faqs: [
      {
        question: "How many days are enough for Goa?",
        answer:
          "Three to five nights can work well for a first visit. Choose a longer stay if you want a more relaxed itinerary.",
      },
      {
        question: "Can North Goa and South Goa be combined?",
        answer:
          "Yes. The itinerary can include both areas depending on your stay duration and transport arrangements.",
      },
      {
        question: "Can I customise a Goa holiday?",
        answer:
          "Yes, you can request changes according to your travel dates, budget and interests.",
      },
    ],
  },

  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    image: "/images/india-tours/himachal.jpg",

    heroTitle: "Discover Himachal Pradesh",
    heroDescription:
      "Explore Shimla, Manali, Dharamshala, Dalhousie, Kinnaur and Spiti with customised mountain holiday packages from LV Sky High.",

    whyVisit:
      "Himachal Pradesh offers scenic mountain towns, pine forests, colonial architecture, Tibetan culture and spectacular Himalayan landscapes. Explore Shimla's Mall Road, Manali's mountain surroundings, Dharamshala and McLeod Ganj, Dalhousie and Khajjiar, or the high-altitude landscapes of Kinnaur and Spiti.",

    bestTime:
      "March to June is popular for pleasant weather and sightseeing. July to September is the monsoon season, when heavy rain and landslides may affect travel. October and November offer clear autumn views. December to February is suitable for snow experiences, subject to road access and weather conditions.",

    idealDuration:
      "A 3–4 day trip can focus on Shimla or Manali. Allow 5–6 days for a Shimla–Manali holiday and 8–12 days for longer journeys covering Dharamshala, Dalhousie, Kinnaur or Spiti.",

    howToReach:
      "Travellers can reach Himachal Pradesh through suitable air and rail connections followed by road transfers. Chandigarh is a common gateway, with road journeys to Shimla and Manali depending on traffic and weather. Kalka connects to Shimla by the scenic narrow-gauge toy train. Flight availability to Bhuntar and Shimla is limited and should be checked before booking.",

    packageCount: 31,

    packages: [
      {
        id: "shimla-3-days",
        title: "3 Days Shimla Tour Package",
        duration: "3 Days",
        places: ["Shimla"],
        description:
          "A short getaway to explore Shimla, its colonial charm, Mall Road and beautiful mountain views.",

        itinerary: [
          {
            day: 1,
            title: "Arrival in Shimla",
            description:
              "Arrive in Shimla, check in to your accommodation and enjoy leisure time exploring Mall Road, subject to arrival time.",
          },
          {
            day: 2,
            title: "Shimla Sightseeing",
            description:
              "Explore popular local attractions, enjoy mountain views and experience Shimla's hill-station atmosphere.",
          },
          {
            day: 3,
            title: "Departure",
            description:
              "Enjoy breakfast and some free time before departing according to your onward travel arrangements.",
          },
        ],

        inclusions: [
          "Accommodation as confirmed in the booking",
          "Transfers included in the confirmed itinerary",
          "Sightseeing specifically listed in the package",
          "Travel assistance from LV Sky High",
        ],

        exclusions: [
          "Flights or train tickets unless specified",
          "Meals not mentioned in the package",
          "Personal expenses and optional activities",
          "Entry fees and travel insurance unless specified",
        ],
      },

      {
        id: "kullu-manali-5-days",
        title: "5 Days Kullu Manali Tour",
        duration: "5 Days",
        places: ["Kullu", "Manali"],
        description:
          "A classic Kullu-Manali holiday featuring mountain scenery, local sightseeing and time to enjoy the region.",

        itinerary: [
          {
            day: 1,
            title: "Arrival in Manali",
            description:
              "Arrive in Manali, check in to your accommodation and relax after your journey.",
          },
          {
            day: 2,
            title: "Manali Local Sightseeing",
            description:
              "Explore selected local attractions, market areas and scenic surroundings according to the itinerary.",
          },
          {
            day: 3,
            title: "Solang Valley Excursion",
            description:
              "Visit Solang Valley for mountain views and optional seasonal activities, subject to weather and local conditions.",
          },
          {
            day: 4,
            title: "Kullu Excursion",
            description:
              "Explore the Kullu region and enjoy the valley scenery. Activities and stops depend on the confirmed travel plan.",
          },
          {
            day: 5,
            title: "Departure",
            description:
              "Check out and depart for your onward journey according to the confirmed arrangements.",
          },
        ],

        inclusions: [
          "Accommodation as confirmed in the booking",
          "Transfers listed in the itinerary",
          "Sightseeing specifically included in the package",
          "Travel assistance from LV Sky High",
        ],

        exclusions: [
          "Flights or train tickets unless specified",
          "Meals not mentioned in the package",
          "Adventure activities and optional excursions",
          "Personal expenses and unlisted entry fees",
        ],
      },

      {
        id: "manali-shimla-6-days",
        title: "6 Days Manali Shimla Tour Package",
        duration: "6 Days",
        places: ["Manali", "Shimla"],
        description:
          "Combine two of Himachal Pradesh's best-known hill destinations in one memorable mountain holiday.",

        itinerary: [
          {
            day: 1,
            title: "Arrival in Shimla",
            description:
              "Arrive in Shimla, settle into your accommodation and enjoy free time according to your arrival schedule.",
          },
          {
            day: 2,
            title: "Shimla Sightseeing",
            description:
              "Explore Mall Road and selected local attractions while enjoying the hill-station atmosphere.",
          },
          {
            day: 3,
            title: "Transfer to Manali",
            description:
              "Travel from Shimla towards Manali by road, enjoying mountain scenery along the route.",
          },
          {
            day: 4,
            title: "Manali Local Sightseeing",
            description:
              "Discover selected local attractions and enjoy time exploring Manali.",
          },
          {
            day: 5,
            title: "Mountain Excursion",
            description:
              "Visit Solang Valley or another suitable nearby attraction, depending on weather, road access and the confirmed itinerary.",
          },
          {
            day: 6,
            title: "Departure",
            description:
              "Check out and continue to your departure point according to your confirmed travel arrangements.",
          },
        ],

        inclusions: [
          "Accommodation as confirmed in the booking",
          "Intercity transfers included in the itinerary",
          "Listed sightseeing arrangements",
          "Travel assistance from LV Sky High",
        ],

        exclusions: [
          "Flights or train tickets unless specified",
          "Meals not mentioned in the package",
          "Optional activities and entry fees unless specified",
          "Personal expenses and additional transfers",
        ],
      },

      {
        id: "dalhousie-dharamshala-5-days",
        title: "Dalhousie & Dharamshala 5 Days Tour",
        duration: "5 Days",
        places: ["Dalhousie", "Dharamshala"],
        description:
          "Explore charming hill stations, peaceful mountain scenery and Tibetan cultural attractions around McLeod Ganj.",

        itinerary: [
          {
            day: 1,
            title: "Arrival in Dharamshala",
            description:
              "Arrive in Dharamshala, check in to your accommodation and enjoy the surrounding mountain views.",
          },
          {
            day: 2,
            title: "Dharamshala and McLeod Ganj",
            description:
              "Explore selected local attractions and experience the Tibetan cultural atmosphere of McLeod Ganj.",
          },
          {
            day: 3,
            title: "Transfer to Dalhousie",
            description:
              "Travel to Dalhousie and enjoy its scenic surroundings and colonial-era hill-station character.",
          },
          {
            day: 4,
            title: "Dalhousie and Khajjiar",
            description:
              "Explore Dalhousie and, where practical, visit Khajjiar depending on road and weather conditions.",
          },
          {
            day: 5,
            title: "Departure",
            description:
              "Check out and depart according to your confirmed transport arrangements.",
          },
        ],

        inclusions: [
          "Accommodation as confirmed in the booking",
          "Transfers listed in the itinerary",
          "Sightseeing specifically included in the package",
          "Travel assistance from LV Sky High",
        ],

        exclusions: [
          "Flights or train tickets unless specified",
          "Meals not mentioned in the package",
          "Personal expenses and optional activities",
          "Entry fees and additional transport unless specified",
        ],
      },

      {
        id: "kinnaur-7-days",
        title: "7 Days Kinnaur Tour Package",
        duration: "7 Days",
        places: ["Kinnaur Valley"],
        description:
          "A scenic journey through Kinnaur's mountain valleys, traditional settlements and remote Himalayan landscapes.",

        itinerary: [
          {
            day: 1,
            title: "Arrival and Journey Towards Kinnaur",
            description:
              "Begin the journey towards the Kinnaur region, with the overnight stop based on the confirmed route.",
          },
          {
            day: 2,
            title: "Travel Through the Mountain Valleys",
            description:
              "Continue through scenic mountain roads and enjoy suitable sightseeing stops along the route.",
          },
          {
            day: 3,
            title: "Explore Kinnaur",
            description:
              "Discover selected villages and valley viewpoints according to the itinerary and local conditions.",
          },
          {
            day: 4,
            title: "Kinnaur Sightseeing",
            description:
              "Enjoy regional scenery and explore accessible attractions selected for your trip.",
          },
          {
            day: 5,
            title: "Local Experiences",
            description:
              "Spend time exploring the region at a comfortable pace, depending on weather and road conditions.",
          },
          {
            day: 6,
            title: "Return Journey",
            description:
              "Begin the return journey with suitable overnight arrangements according to the route.",
          },
          {
            day: 7,
            title: "Departure",
            description:
              "Continue to your departure point and conclude the trip according to the confirmed itinerary.",
          },
        ],

        inclusions: [
          "Accommodation as confirmed in the booking",
          "Road transfers included in the itinerary",
          "Listed sightseeing stops",
          "Travel assistance from LV Sky High",
        ],

        exclusions: [
          "Flights or train tickets unless specified",
          "Meals not mentioned in the package",
          "Personal expenses and optional activities",
          "Additional costs caused by route changes or unforeseen conditions",
        ],
      },

      {
        id: "kinnaur-spiti-11-days",
        title: "11 Days Kinnaur & Lahaul Spiti Holiday",
        duration: "11 Days",
        places: ["Kinnaur", "Lahaul", "Spiti"],
        description:
          "A longer high-altitude Himalayan journey through Kinnaur, Lahaul and Spiti, planned around seasonal road access and local conditions.",

        itinerary: [
          {
            day: 1,
            title: "Journey Towards Kinnaur",
            description:
              "Begin the mountain journey and stay at the confirmed overnight stop along the route.",
          },
          {
            day: 2,
            title: "Explore Kinnaur",
            description:
              "Travel through Kinnaur's mountain scenery and visit accessible attractions as planned.",
          },
          {
            day: 3,
            title: "Kinnaur Valley Sightseeing",
            description:
              "Explore selected villages and viewpoints, allowing time for the mountain roads.",
          },
          {
            day: 4,
            title: "Journey Towards Spiti",
            description:
              "Continue towards the Spiti region if the route is open and conditions permit.",
          },
          {
            day: 5,
            title: "Explore Spiti Valley",
            description:
              "Discover selected valley landscapes and local attractions according to the confirmed plan.",
          },
          {
            day: 6,
            title: "Spiti Sightseeing",
            description:
              "Visit accessible places of interest, subject to road access, weather and local advice.",
          },
          {
            day: 7,
            title: "Local Exploration",
            description:
              "Enjoy additional time in the Spiti region, with the day's route adapted to altitude and conditions.",
          },
          {
            day: 8,
            title: "Lahaul Region",
            description:
              "Explore the Lahaul region if the selected route is accessible and conditions are suitable.",
          },
          {
            day: 9,
            title: "Mountain Journey",
            description:
              "Continue the journey through the planned mountain route, with overnight arrangements as confirmed.",
          },
          {
            day: 10,
            title: "Return Journey",
            description:
              "Travel towards the designated departure area, allowing for road and weather conditions.",
          },
          {
            day: 11,
            title: "Departure",
            description:
              "Conclude the trip and continue with your onward travel arrangements.",
          },
        ],

        inclusions: [
          "Accommodation as confirmed in the booking",
          "Road transfers listed in the itinerary",
          "Sightseeing specifically included in the package",
          "Travel assistance from LV Sky High",
        ],

        exclusions: [
          "Flights or train tickets unless specified",
          "Meals not mentioned in the package",
          "Personal expenses and optional activities",
          "Permits, entry fees and additional charges unless specified",
        ],
      },
    ],

    honeymoonText:
      "Plan a romantic mountain escape with scenic views, comfortable stays and a relaxed itinerary in Shimla or Manali. LV Sky High can help tailor the trip to your travel dates and preferences.",

    familyText:
      "Enjoy a family holiday with flexible sightseeing, comfortable travel and suitable rest breaks. Longer trips can combine multiple destinations at a relaxed pace, depending on the needs of children and older travellers.",

    groupText:
      "Plan group holidays, school trips and mountain road journeys with transport and accommodation arrangements tailored to your group size and preferred destinations.",

    faqs: [
      {
        question: "Is Rohtang Pass included in Manali packages?",
        answer:
          "It depends on the selected itinerary, travel season and applicable permits. Access can be restricted, so confirm availability and any additional charges with LV Sky High before booking.",
      },
      {
        question: "Can I visit Spiti Valley in winter?",
        answer:
          "Winter travel can be challenging because of snow, extreme weather and possible road closures. Check current road conditions and local travel advice before finalising your trip.",
      },
      {
        question: "Which is better for a short trip — Shimla or Manali?",
        answer:
          "Shimla is a good choice for a short hill-station getaway, while Manali offers mountain scenery and access to nearby outdoor attractions. Choose according to your dates, interests and travel time.",
      },
      {
        question: "What should I pack for Himachal Pradesh?",
        answer:
          "Pack comfortable walking shoes, layered clothing, a warm jacket and rain protection. Winter and high-altitude trips may require extra cold-weather clothing.",
      },
      {
        question: "How do I book a customised Himachal trip?",
        answer:
          "Contact LV Sky High with your travel dates, group size, budget and preferred destinations. The team can help plan an itinerary around your requirements and seasonal travel conditions.",
      },
    ],
  },

{
  slug: "rajasthan",
  name: "Rajasthan",
  image: "/images/india-tours/rajasthan.jpg",

  heroTitle: "Discover the Royal Heritage of Rajasthan",
  heroDescription:
    "Explore Jaipur, Jodhpur, Udaipur, Jaisalmer, Pushkar and Bikaner with customised Rajasthan holiday packages from LV Sky High.",

  whyVisit:
    "Rajasthan's circuits are usually built around a handful of historic cities: Jaipur, the Pink City, home to Amber Fort, City Palace and Hawa Mahal; Udaipur, the City of Lakes, known for Lake Pichola and the City Palace; Jodhpur, the Blue City, dominated by the hilltop Mehrangarh Fort; Jaisalmer, the Golden City on the edge of the Thar Desert, with its living fort and camel-safari dunes; Pushkar, a holy town on a sacred lake known for its annual camel fair; and Bikaner, a quieter desert city built around Junagarh Fort. Most Rajasthan itineraries combine two to five of these destinations depending on trip length.",

  bestTime:
    "October to March is the classic travel window, with cooler, dry weather suited to fort-hopping and desert excursions. April to June can be very hot, especially in Jaisalmer and Bikaner, and is generally less suitable for outdoor sightseeing. July to September brings the monsoon, with warmer conditions across much of the state. Pushkar's camel fair, Kartik Purnima, usually falls in October or November and is a popular time to visit.",

  idealDuration:
    "A focused Jaipur-only trip works well in 2–3 nights. A classic Jaipur–Jodhpur or Jaipur–Jodhpur–Udaipur circuit needs around 5–7 nights. Adding Jaisalmer's desert and Bikaner or a Pushkar stopover extends a full Rajasthan circuit to 8–10 nights. Longer itineraries can also combine Rajasthan with Delhi and Agra for a Golden Triangle and desert trip.",

  howToReach:
    "Jaipur International Airport is the main gateway, with flights from many Indian cities. Udaipur, Jodhpur and Jaisalmer also have airports with domestic connectivity. By rail, Jaipur, Jodhpur and Udaipur are well connected to Delhi and Mumbai. Jaipur is also reachable by road from Delhi in roughly 5–6 hours, depending on traffic.",

  packageCount: 8,

  packages: [
    {
      id: "jaipur-tour",
      title: "Jaipur Tour",
      duration: "2 Nights / 3 Days",
      places: ["Jaipur"],
      description:
        "A quick Pink City introduction featuring Jaipur's royal heritage, Amber Fort, City Palace and Hawa Mahal.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur",
          description:
            "Arrive in Jaipur, check in to your accommodation and enjoy leisure time or explore nearby markets."
        },
        {
          day: 2,
          title: "Jaipur Sightseeing",
          description:
            "Explore Amber Fort, City Palace, Hawa Mahal and other selected attractions according to your itinerary."
        },
        {
          day: 3,
          title: "Local Exploration and Departure",
          description:
            "Enjoy breakfast and available free time before departing according to your travel arrangements."
        }
      ],

      inclusions: [
        "Accommodation as confirmed in the booking",
        "Transfers listed in the itinerary",
        "Sightseeing specifically included in the package",
        "Travel assistance from LV Sky High"
      ],

      exclusions: [
        "Flights or train tickets unless specified",
        "Meals not mentioned in the package",
        "Fort entry fees and optional activities unless specified",
        "Personal expenses and travel insurance unless specified"
      ]
    },

    {
      id: "jaipur-jodhpur-tour",
      title: "Jaipur Jodhpur Tour",
      duration: "4 Nights / 5 Days",
      places: ["Jaipur", "Jodhpur"],
      description:
        "Combine the Pink City with the Blue City and explore the impressive Mehrangarh Fort.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur",
          description:
            "Arrive in Jaipur, transfer to your accommodation and enjoy free time."
        },
        {
          day: 2,
          title: "Jaipur Sightseeing",
          description:
            "Visit selected heritage attractions, including Amber Fort, City Palace and Hawa Mahal."
        },
        {
          day: 3,
          title: "Transfer to Jodhpur",
          description:
            "Travel to Jodhpur and spend the remaining time exploring the city, depending on arrival time."
        },
        {
          day: 4,
          title: "Jodhpur Sightseeing",
          description:
            "Explore Mehrangarh Fort, the Blue City and selected local attractions."
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Check out and depart according to your confirmed onward travel arrangements."
        }
      ],

      inclusions: [
        "Accommodation as confirmed in the booking",
        "Intercity transfers listed in the itinerary",
        "Sightseeing included in the confirmed plan",
        "Travel assistance from LV Sky High"
      ],

      exclusions: [
        "Flights or train tickets unless specified",
        "Meals not mentioned in the package",
        "Entry fees and optional activities unless specified",
        "Personal expenses and additional transfers"
      ]
    },

    {
      id: "jaipur-jodhpur-udaipur-tour",
      title: "Jaipur Jodhpur Udaipur Tour",
      duration: "6 Nights / 7 Days",
      places: ["Jaipur", "Jodhpur", "Udaipur"],
      description:
        "A classic three-city royal Rajasthan circuit featuring historic forts, colourful streets and the City of Lakes.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur",
          description:
            "Arrive in Jaipur, check in to your accommodation and relax."
        },
        {
          day: 2,
          title: "Jaipur Heritage Tour",
          description:
            "Explore Jaipur's famous forts, palaces and selected local attractions."
        },
        {
          day: 3,
          title: "Journey to Jodhpur",
          description:
            "Travel to Jodhpur and enjoy free time after reaching your accommodation."
        },
        {
          day: 4,
          title: "Explore Jodhpur",
          description:
            "Discover Mehrangarh Fort, the Blue City and selected heritage attractions."
        },
        {
          day: 5,
          title: "Transfer to Udaipur",
          description:
            "Travel to Udaipur and enjoy the scenic surroundings on arrival."
        },
        {
          day: 6,
          title: "Udaipur Sightseeing",
          description:
            "Explore City Palace, Lake Pichola surroundings and other selected attractions."
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Check out and depart according to your onward travel schedule."
        }
      ],

      inclusions: [
        "Accommodation as confirmed in the booking",
        "Intercity transfers included in the itinerary",
        "Listed sightseeing arrangements",
        "Travel assistance from LV Sky High"
      ],

      exclusions: [
        "Flights or train tickets unless specified",
        "Meals not mentioned in the package",
        "Boat rides, entry fees and optional activities unless specified",
        "Personal expenses and travel insurance unless specified"
      ]
    },

    {
      id: "jodhpur-jaisalmer-tour",
      title: "Jodhpur, Jaisalmer Tour",
      duration: "4 Nights / 5 Days",
      places: ["Jodhpur", "Jaisalmer"],
      description:
        "Discover the Blue City and the Golden City, with Thar Desert scenery and optional camel-safari experiences.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Jodhpur",
          description:
            "Arrive in Jodhpur, settle into your accommodation and explore nearby areas if time permits."
        },
        {
          day: 2,
          title: "Jodhpur Sightseeing",
          description:
            "Visit Mehrangarh Fort and explore selected heritage attractions around the Blue City."
        },
        {
          day: 3,
          title: "Journey to Jaisalmer",
          description:
            "Travel to Jaisalmer and explore the local area according to your arrival time."
        },
        {
          day: 4,
          title: "Jaisalmer and Desert Experience",
          description:
            "Explore Jaisalmer Fort and selected attractions. Desert excursions and camel rides depend on the confirmed package."
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Check out and depart according to your confirmed travel arrangements."
        }
      ],

      inclusions: [
        "Accommodation as confirmed in the booking",
        "Transfers listed in the itinerary",
        "Sightseeing included in the confirmed plan",
        "Travel assistance from LV Sky High"
      ],

      exclusions: [
        "Flights or train tickets unless specified",
        "Meals not mentioned in the package",
        "Desert activities and camel rides unless specified",
        "Personal expenses and optional entry fees"
      ]
    },

    {
      id: "jaipur-bikaner-pushkar-tour",
      title: "Jaipur Bikaner Pushkar Tour",
      duration: "5 Nights / 6 Days",
      places: ["Jaipur", "Bikaner", "Pushkar"],
      description:
        "Discover Jaipur's royal heritage, Bikaner's desert-city character and Pushkar's sacred lake and cultural attractions.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur",
          description:
            "Arrive in Jaipur and transfer to your accommodation."
        },
        {
          day: 2,
          title: "Jaipur Sightseeing",
          description:
            "Explore selected forts, palaces and local attractions in the Pink City."
        },
        {
          day: 3,
          title: "Journey to Bikaner",
          description:
            "Travel to Bikaner and enjoy local exploration according to your arrival time."
        },
        {
          day: 4,
          title: "Bikaner Heritage",
          description:
            "Visit Junagarh Fort and explore selected attractions in Bikaner."
        },
        {
          day: 5,
          title: "Travel to Pushkar",
          description:
            "Continue to Pushkar and explore the lake area and local markets."
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Check out and depart according to your onward travel arrangements."
        }
      ],

      inclusions: [
        "Accommodation as confirmed in the booking",
        "Transfers included in the itinerary",
        "Sightseeing specifically listed in the package",
        "Travel assistance from LV Sky High"
      ],

      exclusions: [
        "Flights or train tickets unless specified",
        "Meals not mentioned in the package",
        "Entry fees and optional activities unless specified",
        "Personal expenses and additional transport"
      ]
    },

    {
      id: "jaipur-agra-delhi-tour",
      title: "Jaipur Agra Delhi Tour",
      duration: "5 Nights / 6 Days",
      places: ["Jaipur", "Agra", "Delhi"],
      description:
        "Combine Rajasthan's royal heritage with the Taj Mahal and India's capital on a Golden Triangle circuit.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur",
          description:
            "Arrive in Jaipur, check in to your accommodation and enjoy free time."
        },
        {
          day: 2,
          title: "Jaipur Sightseeing",
          description:
            "Explore selected forts, palaces and heritage attractions in Jaipur."
        },
        {
          day: 3,
          title: "Travel to Agra",
          description:
            "Travel to Agra and explore the city according to your arrival time and itinerary."
        },
        {
          day: 4,
          title: "Agra Sightseeing",
          description:
            "Visit the Taj Mahal and other selected attractions, subject to opening hours and ticket arrangements."
        },
        {
          day: 5,
          title: "Explore Delhi",
          description:
            "Travel to Delhi and explore selected historic or modern city attractions."
        },
        {
          day: 6,
          title: "Departure from Delhi",
          description:
            "Check out and continue to your airport, railway station or other departure point."
        }
      ],

      inclusions: [
        "Accommodation as confirmed in the booking",
        "Intercity transfers listed in the itinerary",
        "Sightseeing included in the confirmed plan",
        "Travel assistance from LV Sky High"
      ],

      exclusions: [
        "Flights or train tickets unless specified",
        "Meals not mentioned in the package",
        "Monument tickets and optional activities unless specified",
        "Personal expenses and additional transfers"
      ]
    }
  ],

  honeymoonText:
    "Plan a romantic Rajasthan escape with Udaipur's lakeside scenery, Jaisalmer's desert landscapes and charming heritage stays. LV Sky High can help tailor a couple's itinerary to your dates and preferences.",

  familyText:
    "Enjoy a family holiday across Rajasthan's forts, palaces, cultural attractions and desert landscapes. Longer multi-city circuits can be paced around children's and older travellers' needs, with suitable stops and transport arrangements.",

  groupText:
    "Plan group holidays and school-trip itineraries across Rajasthan with transport, accommodation and sightseeing arrangements tailored to group size and travel requirements.",

  faqs: [
    {
      question: "How many days are enough for a Rajasthan trip?",
      answer:
        "A Jaipur-focused trip can work in 2–3 nights. Allow around 5–7 nights for a Jaipur–Jodhpur or Jaipur–Jodhpur–Udaipur circuit. Adding Jaisalmer, Bikaner or Pushkar may require 8–10 nights."
    },
    {
      question: "What is the best time to visit Rajasthan?",
      answer:
        "October to March is generally popular for sightseeing because temperatures are cooler. Summer can be very hot, particularly in desert destinations, so plan outdoor activities carefully."
    },
    {
      question: "Can I include a desert safari in my Rajasthan package?",
      answer:
        "Yes, a desert excursion around Jaisalmer can be requested. Camel rides, desert camps and other activities depend on the selected package, availability and season."
    },
    {
      question: "Can Rajasthan be combined with Agra and Delhi?",
      answer:
        "Yes. A Golden Triangle itinerary can combine Jaipur with Agra and Delhi. Allow enough travel time between cities when choosing your package duration."
    },
    {
      question: "How can I book a customised Rajasthan tour?",
      answer:
        "Contact LV Sky High with your travel dates, group size, budget and preferred cities. Your itinerary can then be planned around your travel preferences and available arrangements."
    }
  ]
},


{
  slug: "kerala",
  name: "Kerala",
  image: "/images/india-tours/kerala.jpg",
  heroTitle: "Discover the Beauty of Kerala",
  heroDescription:
    "Explore Kerala's lush tea gardens, tranquil backwaters, beautiful beaches and rich cultural heritage with thoughtfully planned holiday packages from LV SKY HIGH.",
  whyVisit:
    "Kerala combines hill stations, wildlife, backwaters, beaches and cultural experiences in one destination. Explore Munnar's tea plantations, Thekkady's wildlife, Alleppey's houseboats, Kochi's heritage and Kovalam's coastline.",
  bestTime:
    "September to March is generally popular for sightseeing, with comparatively pleasant conditions across many destinations. April and May can be hot and humid, while June to August brings monsoon weather. Conditions vary by region and travel preferences.",
  idealDuration:
    "A short Munnar or Alleppey trip may take 2–3 nights. A more complete itinerary covering Munnar, Thekkady, Alleppey and Kochi usually needs around 5–7 nights.",
  howToReach:
    "Kerala is accessible by air through Kochi, Thiruvananthapuram and Kozhikode airports. Rail connections serve major towns and cities, while road networks connect hill stations, backwater destinations and coastal areas.",
  packageCount: 6,

  packages: [
    {
      id: "kerala-nature-tour",
      title: "Beauty of the Nature in Kerala Tour",
      duration: "2 Nights 3 Days",
      places: ["Munnar"],
      description:
        "A short Kerala introduction for travellers short on time, with scenic landscapes and relaxing hill-station experiences.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Transfer to Munnar",
          description:
            "Arrive in Kerala and travel towards Munnar. Enjoy scenic views along the route and check in to your accommodation.",
        },
        {
          day: 2,
          title: "Explore Munnar",
          description:
            "Discover tea gardens, viewpoints and selected local attractions around Munnar.",
        },
        {
          day: 3,
          title: "Departure",
          description:
            "Enjoy breakfast, check out and transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as per confirmed package",
        "Transfers as specified in the itinerary",
        "Sightseeing listed in the confirmed package",
      ],
      exclusions: [
        "Airfare and train tickets unless specified",
        "Personal expenses and meals not mentioned",
        "Entry tickets and activities not listed in inclusions",
      ],
    },

    {
      id: "kerala-best-tour",
      title: "Kerala at its Best Tour",
      duration: "3 Nights 4 Days",
      places: ["Munnar", "Alleppey"],
      description:
        "A well-rounded short Kerala circuit combining hill-station scenery with a relaxing backwater experience.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Transfer to Munnar",
          description:
            "Arrive in Kerala and travel to Munnar. Check in and enjoy the surrounding scenery.",
        },
        {
          day: 2,
          title: "Munnar Sightseeing",
          description:
            "Explore selected tea gardens, viewpoints and attractions around Munnar.",
        },
        {
          day: 3,
          title: "Munnar to Alleppey",
          description:
            "Travel to Alleppey and enjoy the backwater surroundings. Houseboat stays depend on the confirmed package.",
        },
        {
          day: 4,
          title: "Departure",
          description:
            "Check out and transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as per confirmed package",
        "Transfers between included destinations",
        "Listed sightseeing activities",
      ],
      exclusions: [
        "Flights and train tickets unless specified",
        "Optional houseboat upgrades and activities",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "kerala-expedition-tour",
      title: "Kerala Expedition Tour",
      duration: "4 Nights 5 Days",
      places: ["Munnar", "Thekkady", "Alleppey"],
      description:
        "Explore Munnar's hills, Thekkady's nature experiences and Alleppey's famous backwaters on one trip.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Transfer to Munnar",
          description:
            "Arrive in Kerala and travel to Munnar for check-in and leisure time.",
        },
        {
          day: 2,
          title: "Munnar Exploration",
          description:
            "Visit selected local viewpoints, tea-growing areas and attractions.",
        },
        {
          day: 3,
          title: "Munnar to Thekkady",
          description:
            "Travel to Thekkady and explore available nature and local experiences.",
        },
        {
          day: 4,
          title: "Thekkady to Alleppey",
          description:
            "Continue to Alleppey for a backwater experience. Confirm houseboat arrangements separately.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Check out and transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers in the itinerary",
        "Specified sightseeing arrangements",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Boating, wildlife activities and entry fees unless specified",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "kerala-extended-tour",
      title: "Extended Kerala Vacations Tour",
      duration: "5 Nights 6 Days",
      places: ["Munnar", "Thekkady", "Alleppey", "Kochi"],
      description:
        "A longer Kerala circuit with more time across the state's hill stations, nature destinations and heritage areas.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kerala",
          description:
            "Arrive and transfer to Munnar. Check in and relax.",
        },
        {
          day: 2,
          title: "Munnar Sightseeing",
          description:
            "Explore tea gardens, scenic viewpoints and local attractions.",
        },
        {
          day: 3,
          title: "Munnar to Thekkady",
          description:
            "Travel to Thekkady and explore suitable local nature experiences.",
        },
        {
          day: 4,
          title: "Thekkady to Alleppey",
          description:
            "Continue to Alleppey and enjoy the backwater region.",
        },
        {
          day: 5,
          title: "Alleppey to Kochi",
          description:
            "Travel to Kochi and explore selected heritage and cultural areas.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Check out and transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as per selected category",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Airfare and train tickets unless specified",
        "Optional activities and entrance fees unless listed",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "kerala-gods-own-country",
      title: "Week Amidst God's Own Country Tour",
      duration: "6 Nights 7 Days",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey", "Kovalam"],
      description:
        "A more comprehensive Kerala itinerary covering hills, backwaters, wildlife experiences and the coast.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kochi",
          description:
            "Arrive in Kochi and explore selected local attractions, depending on arrival time.",
        },
        {
          day: 2,
          title: "Kochi to Munnar",
          description:
            "Travel to Munnar through scenic landscapes and check in.",
        },
        {
          day: 3,
          title: "Munnar Sightseeing",
          description:
            "Discover tea gardens, viewpoints and local attractions.",
        },
        {
          day: 4,
          title: "Munnar to Thekkady",
          description:
            "Continue to Thekkady for nature and local experiences.",
        },
        {
          day: 5,
          title: "Thekkady to Alleppey",
          description:
            "Travel to Alleppey and enjoy the backwater surroundings.",
        },
        {
          day: 6,
          title: "Continue to Kovalam",
          description:
            "Travel towards Kovalam and enjoy time around the coast.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Check out and transfer to the confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as per confirmed itinerary",
        "Transfers between listed destinations",
        "Sightseeing specifically mentioned in the package",
      ],
      exclusions: [
        "Airfare and train tickets unless specified",
        "Optional activities, entry fees and water sports unless listed",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "kerala-rejuvenating-tour",
      title: "Kerala Rejuvenating Tour",
      duration: "As per selected itinerary",
      places: ["Munnar", "Alleppey", "Kovalam"],
      description:
        "A Kerala holiday concept centred on relaxation and optional Ayurvedic wellness experiences, subject to availability.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Relaxation",
          description:
            "Arrive at the selected destination, check in and relax.",
        },
        {
          day: 2,
          title: "Leisure and Wellness Options",
          description:
            "Explore suitable leisure activities or separately arranged wellness services.",
        },
        {
          day: 3,
          title: "Scenic Experiences",
          description:
            "Enjoy local sightseeing or leisure time based on your selected itinerary.",
        },
        {
          day: 4,
          title: "Departure or Extended Stay",
          description:
            "Depart or continue your holiday according to the confirmed itinerary.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed transfers and sightseeing",
        "Wellness services only when explicitly included",
      ],
      exclusions: [
        "Ayurvedic treatments unless specifically confirmed",
        "Flights and train tickets unless included",
        "Personal expenses and unlisted services",
      ],
    },
  ],

  honeymoonText:
    "Kerala is a popular option for couples, with Munnar's tea-garden resorts and Alleppey's backwater stays. Accommodation and special experiences can be discussed according to your dates and budget.",

  familyText:
    "Kerala offers a mix of hill stations, wildlife experiences, backwaters and coastal destinations. Families can discuss a suitable pace, accommodation category and activities based on their group.",

  groupText:
    "Kerala itineraries can be planned for groups and fixed-departure enquiries. Dates, group size, transport and accommodation depend on the selected arrangement.",

  faqs: [
    {
      question: "Is a houseboat stay included in the backwaters packages?",
      answer:
        "It depends on the selected itinerary. Confirm whether an Alleppey houseboat night is included or available as an add-on for your travel dates.",
    },
    {
      question: "Which airport should I fly into?",
      answer:
        "Kochi, Thiruvananthapuram and Kozhikode serve different parts of Kerala. The most suitable airport depends on your arrival city and itinerary.",
    },
    {
      question: "Is Kerala worth visiting during the monsoon?",
      answer:
        "Kerala has green landscapes during the monsoon, but heavy rain may affect travel and outdoor activities. Check the local forecast and travel conditions for your dates.",
    },
    {
      question: "Can Ayurvedic treatments be added to a regular sightseeing package?",
      answer:
        "Wellness treatments may be arranged separately depending on the provider and itinerary. Confirm services, costs and suitability directly before booking.",
    },
    {
      question: "How do I book or request a custom itinerary?",
      answer:
        "Contact LV SKY HIGH with your preferred dates, group size, budget and destinations. Our team can discuss available options and a suitable itinerary.",
    },
  ],
},

// Uttarakhand


{
  slug: "uttarakhand",
  name: "Uttarakhand",
  image: "/images/india-tours/uttarakhand.jpg",
  heroTitle: "Discover the Beauty of Uttarakhand",
  heroDescription:
    "Explore Uttarakhand's scenic hill stations, wildlife reserves, sacred river towns and Himalayan landscapes with thoughtfully planned holiday packages from LV SKY HIGH.",

  whyVisit:
    "Uttarakhand offers a diverse mix of Nainital's lakes, Corbett National Park's wildlife, Rishikesh's river experiences, Haridwar's spiritual heritage and the quieter Kumaon hills, including Ranikhet. Travellers can combine nature, adventure, culture and relaxation in one itinerary.",

  bestTime:
    "March to June is popular for pleasant hill-station weather and sightseeing. July to September brings monsoon conditions that may affect roads and outdoor activities. October to February offers cooler weather, with possible snowfall in some higher-altitude areas during winter.",

  idealDuration:
    "A short Corbett or Nainital getaway may take 2–3 nights. A Nainital and Corbett combination or Haridwar–Rishikesh circuit may need 4–5 nights. A wider Kumaon and Uttarakhand itinerary can take 7–10 nights or more.",

  howToReach:
    "Dehradun's Jolly Grant Airport serves the Dehradun, Haridwar and Rishikesh region. Pantnagar Airport may be useful for parts of Kumaon. Rail services connect cities including Haridwar, Dehradun, Kathgodam and Ramnagar. Road transfers connect the main hill stations and wildlife destinations.",

  packageCount: 11,

  packages: [
    {
      id: "uttarakhand-corbett-2n3d",
      title: "2 Nights 3 Days Corbett Package",
      duration: "2 Nights 3 Days",
      places: ["Jim Corbett National Park", "Ramnagar"],
      description:
        "A short wildlife getaway with time to relax and explore the Corbett region.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Corbett",
          description:
            "Arrive in the Corbett region, transfer to your accommodation and enjoy leisure time.",
        },
        {
          day: 2,
          title: "Corbett Nature Experience",
          description:
            "Explore available local activities. A wildlife safari can be arranged subject to permits, availability and park rules.",
        },
        {
          day: 3,
          title: "Departure",
          description:
            "Check out and transfer to your onward destination.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the selected package",
        "Meals and activities only as specified",
      ],
      exclusions: [
        "Travel to and from the destination unless specified",
        "Safari permits and fees unless explicitly included",
        "Personal expenses and unlisted activities",
      ],
    },

    {
      id: "uttarakhand-nainital-tour",
      title: "Nainital Tour Packages",
      duration: "Nainital-focused",
      places: ["Nainital"],
      description:
        "A classic lake-town introduction with scenic viewpoints and relaxed sightseeing.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Nainital",
          description:
            "Arrive, check in and enjoy time around Nainital Lake and the local market.",
        },
        {
          day: 2,
          title: "Nainital Sightseeing",
          description:
            "Explore selected viewpoints, nearby attractions and local experiences.",
        },
        {
          day: 3,
          title: "Departure or Extension",
          description:
            "Depart after breakfast or extend your trip according to your plans.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed local transfers",
        "Sightseeing specified in the itinerary",
      ],
      exclusions: [
        "Airfare and train tickets unless specified",
        "Boating and attraction tickets unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "uttarakhand-corbett-nainital",
      title: "Corbett Nainital Package",
      duration: "5 Days",
      places: ["Jim Corbett National Park", "Nainital"],
      description:
        "Combines the Corbett wildlife region with the relaxing lake-town atmosphere of Nainital.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Corbett",
          description:
            "Arrive in the Corbett region and check in to your accommodation.",
        },
        {
          day: 2,
          title: "Corbett Experience",
          description:
            "Enjoy available local activities or a safari if confirmed in advance.",
        },
        {
          day: 3,
          title: "Transfer to Nainital",
          description:
            "Travel to Nainital and spend time exploring the town.",
        },
        {
          day: 4,
          title: "Nainital Sightseeing",
          description:
            "Visit selected local attractions and scenic viewpoints.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Check out and transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers between listed destinations",
        "Specified sightseeing arrangements",
      ],
      exclusions: [
        "Safari charges unless confirmed",
        "Entry tickets and optional activities unless listed",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "uttarakhand-haridwar-rishikesh",
      title: "Haridwar Rishikesh Tour",
      duration: "Haridwar and Rishikesh",
      places: ["Haridwar", "Rishikesh"],
      description:
        "Experience the spiritual atmosphere of Haridwar alongside the riverfront and scenic surroundings of Rishikesh.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Haridwar",
          description:
            "Arrive in Haridwar and explore the local ghats. Visit the evening Ganga Aarti if timing permits.",
        },
        {
          day: 2,
          title: "Haridwar to Rishikesh",
          description:
            "Travel to Rishikesh and explore selected riverfront and cultural attractions.",
        },
        {
          day: 3,
          title: "Rishikesh and Departure",
          description:
            "Enjoy leisure time or an optional activity before departure.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed intercity transfers",
        "Sightseeing specified in the itinerary",
      ],
      exclusions: [
        "Adventure activities unless included",
        "Entry fees and personal expenses",
        "Travel tickets unless specified",
      ],
    },

    {
      id: "uttarakhand-rishikesh-tour",
      title: "Rishikesh Tour Packages",
      duration: "Rishikesh-focused",
      places: ["Rishikesh"],
      description:
        "A flexible Rishikesh holiday with riverfront sightseeing, yoga experiences and optional adventure activities.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Rishikesh",
          description:
            "Arrive, check in and explore the surrounding area.",
        },
        {
          day: 2,
          title: "Explore Rishikesh",
          description:
            "Visit selected attractions and consider optional activities according to local conditions.",
        },
        {
          day: 3,
          title: "Departure",
          description:
            "Enjoy free time before checking out and departing.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed transfers",
        "Specified sightseeing activities",
      ],
      exclusions: [
        "Rafting, yoga classes and other activities unless included",
        "Personal expenses",
        "Unlisted meals and transport",
      ],
    },

    {
      id: "uttarakhand-rishikesh-adventure",
      title: "Adventure in Rishikesh Tour",
      duration: "Adventure-focused",
      places: ["Rishikesh"],
      description:
        "An adventure-oriented stay with optional outdoor activities and time to explore Rishikesh.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Orientation",
          description:
            "Arrive in Rishikesh, check in and review the available activities.",
        },
        {
          day: 2,
          title: "Adventure Experiences",
          description:
            "Participate in pre-booked activities where available and suitable for local conditions.",
        },
        {
          day: 3,
          title: "Local Exploration and Departure",
          description:
            "Enjoy local sightseeing before departure.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers specified in the package",
        "Activities explicitly listed in the final booking",
      ],
      exclusions: [
        "Adventure activities unless confirmed",
        "Equipment or guide charges unless specified",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "uttarakhand-nainital-corbett",
      title: "Nainital with Corbett",
      duration: "Nainital and Corbett",
      places: ["Nainital", "Jim Corbett National Park"],
      description:
        "A combined itinerary offering Nainital sightseeing and a visit to the Corbett region.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Nainital",
          description:
            "Arrive and explore the lake town at your own pace.",
        },
        {
          day: 2,
          title: "Nainital Sightseeing",
          description:
            "Discover selected attractions and viewpoints.",
        },
        {
          day: 3,
          title: "Transfer to Corbett",
          description:
            "Travel to the Corbett region and check in.",
        },
        {
          day: 4,
          title: "Corbett Nature Experience",
          description:
            "Enjoy local experiences or a separately confirmed safari.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Check out and transfer to your onward destination.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers between destinations",
        "Sightseeing listed in the package",
      ],
      exclusions: [
        "Safari fees unless included",
        "Entry tickets and optional activities",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "uttarakhand-nainital-ranikhet",
      title: "Nainital with Ranikhet",
      duration: "Nainital and Ranikhet",
      places: ["Nainital", "Ranikhet"],
      description:
        "Combine Nainital's lake scenery with Ranikhet's quieter landscapes and relaxed hill-town atmosphere.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Nainital",
          description:
            "Arrive, check in and explore the town.",
        },
        {
          day: 2,
          title: "Nainital Exploration",
          description:
            "Visit selected local attractions and viewpoints.",
        },
        {
          day: 3,
          title: "Transfer to Ranikhet",
          description:
            "Travel to Ranikhet and enjoy the surrounding scenery.",
        },
        {
          day: 4,
          title: "Explore Ranikhet",
          description:
            "Enjoy local sightseeing and leisure time.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Check out and transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed intercity transfers",
        "Sightseeing mentioned in the itinerary",
      ],
      exclusions: [
        "Travel tickets unless specified",
        "Entry fees and optional activities unless included",
        "Personal expenses",
      ],
    },

    {
      id: "uttarakhand-colours-kumaon",
      title: "Colours of Kumaon Tour",
      duration: "Kumaon region",
      places: ["Nainital", "Ranikhet", "Kumaon"],
      description:
        "Explore a wider selection of Kumaon's scenic hill towns and landscapes beyond Nainital.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Nainital",
          description:
            "Arrive and settle into your accommodation.",
        },
        {
          day: 2,
          title: "Nainital Sightseeing",
          description:
            "Explore the lake town and selected viewpoints.",
        },
        {
          day: 3,
          title: "Journey Through Kumaon",
          description:
            "Travel to a selected Kumaon destination and enjoy local scenery.",
        },
        {
          day: 4,
          title: "Kumaon Exploration",
          description:
            "Discover local attractions and enjoy a relaxed day.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed road transfers",
        "Sightseeing specified in the itinerary",
      ],
      exclusions: [
        "Travel tickets unless included",
        "Optional activities and entry fees unless listed",
        "Personal expenses",
      ],
    },

    {
      id: "uttarakhand-best-kumaon",
      title: "The Best of Kumaon Hills",
      duration: "Kumaon region",
      places: ["Nainital", "Ranikhet", "Kumaon"],
      description:
        "A Kumaon-focused holiday with time for scenic drives, local sightseeing and quieter hill destinations.",
      itinerary: [
        {
          day: 1,
          title: "Arrival",
          description:
            "Arrive at the confirmed starting destination and check in.",
        },
        {
          day: 2,
          title: "Hill Town Exploration",
          description:
            "Visit selected viewpoints and local attractions.",
        },
        {
          day: 3,
          title: "Scenic Kumaon Drive",
          description:
            "Travel through the region and enjoy the surrounding landscapes.",
        },
        {
          day: 4,
          title: "Local Experiences",
          description:
            "Enjoy sightseeing and leisure time according to the itinerary.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Check out and transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Travel tickets unless included",
        "Optional experiences and entrance fees unless listed",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "uttarakhand-magical-tour",
      title: "Magical Uttarakhand Tour",
      duration: "10 Days",
      places: [
        "Haridwar",
        "Rishikesh",
        "Nainital",
        "Ranikhet",
        "Jim Corbett National Park",
      ],
      description:
        "A longer Uttarakhand itinerary combining spiritual towns, Kumaon hill scenery and a wildlife-focused region.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Haridwar",
          description:
            "Arrive and explore selected local attractions.",
        },
        {
          day: 2,
          title: "Haridwar and Rishikesh",
          description:
            "Explore the spiritual and riverfront highlights of the region.",
        },
        {
          day: 3,
          title: "Travel to Kumaon",
          description:
            "Transfer towards the selected Kumaon destination.",
        },
        {
          day: 4,
          title: "Nainital Exploration",
          description:
            "Discover the lake town and nearby viewpoints.",
        },
        {
          day: 5,
          title: "Nainital to Ranikhet",
          description:
            "Travel to Ranikhet and enjoy the hill scenery.",
        },
        {
          day: 6,
          title: "Explore Kumaon",
          description:
            "Visit selected local attractions and enjoy leisure time.",
        },
        {
          day: 7,
          title: "Travel to Corbett",
          description:
            "Transfer to the Corbett region and check in.",
        },
        {
          day: 8,
          title: "Corbett Nature Experience",
          description:
            "Enjoy local experiences or a separately confirmed safari.",
        },
        {
          day: 9,
          title: "Leisure and Local Exploration",
          description:
            "Enjoy free time or sightseeing according to your confirmed route.",
        },
        {
          day: 10,
          title: "Departure",
          description:
            "Check out and transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Specified sightseeing arrangements",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Safari permits and optional activities unless confirmed",
        "Personal expenses and unlisted services",
      ],
    },
  ],

  honeymoonText:
    "Uttarakhand offers couples scenic lake towns, peaceful hill retreats and relaxing stays. Nainital and the Kumaon region can be considered for a short domestic honeymoon. Accommodation and special arrangements depend on the selected package.",

  familyText:
    "Uttarakhand offers family-friendly options including Nainital sightseeing, wildlife experiences around Corbett and relaxed stays in Kumaon. The itinerary can be discussed around children's ages, travel pace and group requirements.",

  groupText:
    "Uttarakhand can be explored through group travel arrangements covering hill towns, spiritual destinations and outdoor experiences. Group size, departure dates, transport and activities need to be confirmed in advance.",

  faqs: [
    {
      question: "Is a Corbett safari guaranteed to spot a tiger?",
      answer:
        "No safari can guarantee a tiger sighting because Corbett is a wildlife reserve. Sightings depend on natural conditions, wildlife movement, the selected zone and the season.",
    },
    {
      question: "Is Corbett open all year?",
      answer:
        "Access and safari availability vary by zone and season. Check current official park guidance and permit availability for your travel dates.",
    },
    {
      question: "Is river rafting in Rishikesh included in every package?",
      answer:
        "No. Rafting is included only when explicitly mentioned in the confirmed package. Availability also depends on seasonal conditions and applicable safety restrictions.",
    },
    {
      question: "Which is better for a short trip — Nainital or Rishikesh?",
      answer:
        "Nainital is a good option for lake scenery and hill-town sightseeing, while Rishikesh may suit travellers interested in riverfront experiences, yoga and optional adventure activities.",
    },
    {
      question: "How do I book or ask for a custom itinerary?",
      answer:
        "Contact LV SKY HIGH with your preferred travel dates, group size, budget and destinations. Our team can discuss suitable itinerary options and confirm availability.",
    },
  ],
},

// Andaman Islands


{
  slug: "andaman-islands",
  name: "Andaman Islands",
  image: "/images/india-tours/andaman-islands.jpg",
  heroTitle: "Discover the Beauty of Andaman Islands",
  heroDescription:
    "Experience turquoise waters, tropical beaches, island adventures and unforgettable coastal scenery with thoughtfully planned Andaman holiday packages from LV SKY HIGH.",

  whyVisit:
    "The Andaman Islands offer a combination of Port Blair's history and cultural attractions, Havelock Island (Swaraj Dweep) with its famous beaches and water activities, and Neil Island (Shaheed Dweep) for a quieter island escape. Inter-island travel is generally by ferry, so itineraries should allow time for transfers.",

  bestTime:
    "October to May is generally a popular period for visiting the Andaman Islands. January to March can offer favourable sea conditions for many water activities. June to September is the monsoon period, when rain and rough seas may affect ferry schedules and outdoor plans.",

  idealDuration:
    "A short Port Blair and Havelock itinerary can work in around 3 nights. A more relaxed island-hopping holiday that includes Neil Island usually needs 4–5 nights or longer, depending on ferry schedules and activities.",

  howToReach:
    "Veer Savarkar International Airport in Port Blair is the main air gateway to the Andaman Islands, with flights connecting through major Indian cities. Port Blair, Havelock Island and Neil Island are connected by government or private ferry services, subject to schedules and availability.",

  packageCount: 4,

  packages: [
    {
      id: "andaman-3-nights",
      title: "3 Nights in Andaman",
      duration: "3 Nights 4 Days",
      places: ["Port Blair", "Havelock Island"],
      description:
        "A quick Port Blair and Havelock introduction for travellers looking for a short island getaway.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Port Blair",
          description:
            "Arrive in Port Blair, transfer to your accommodation and explore a local attraction if time permits.",
        },
        {
          day: 2,
          title: "Port Blair to Havelock",
          description:
            "Take a pre-booked ferry to Havelock Island and enjoy its beach scenery, subject to ferry availability.",
        },
        {
          day: 3,
          title: "Explore Havelock Island",
          description:
            "Enjoy beach time or choose optional water activities, depending on weather and availability.",
        },
        {
          day: 4,
          title: "Departure",
          description:
            "Return to Port Blair according to the confirmed ferry schedule and continue to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Ferry transfers only as specified in the package",
        "Sightseeing and local transfers listed in the itinerary",
      ],
      exclusions: [
        "Flights unless specifically included",
        "Scuba diving, snorkelling and other optional activities unless listed",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "andaman-exotic-tour",
      title: "Exotic Andamans Tour",
      duration: "Port Blair and Havelock",
      places: ["Port Blair", "Havelock Island"],
      description:
        "A well-rounded Andaman circuit covering the main island attractions and relaxing beach experiences.",
      itinerary: [
        {
          day: 1,
          title: "Arrive in Port Blair",
          description:
            "Arrive, check in and explore selected local attractions according to your arrival time.",
        },
        {
          day: 2,
          title: "Port Blair Sightseeing",
          description:
            "Discover selected historical and cultural attractions. Entry tickets and show timings should be confirmed separately.",
        },
        {
          day: 3,
          title: "Ferry to Havelock",
          description:
            "Travel by ferry to Havelock Island and enjoy the coastal surroundings.",
        },
        {
          day: 4,
          title: "Havelock Island Experience",
          description:
            "Enjoy beach time and consider optional water activities when conditions permit.",
        },
        {
          day: 5,
          title: "Return and Departure",
          description:
            "Transfer according to your confirmed ferry and onward travel schedule.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Ferry transfers listed in the final package",
        "Specified local transfers and sightseeing",
      ],
      exclusions: [
        "Flights unless included",
        "Water sports and entry tickets unless specified",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "andaman-magic-neil",
      title: "Magical Andamans with Neil Island",
      duration: "Port Blair, Havelock and Neil Island",
      places: ["Port Blair", "Havelock Island", "Neil Island"],
      description:
        "Add Neil Island to your holiday for a fuller three-island circuit with beaches and relaxed coastal experiences.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Port Blair",
          description:
            "Arrive in Port Blair, check in and enjoy the local surroundings.",
        },
        {
          day: 2,
          title: "Port Blair to Havelock",
          description:
            "Travel by ferry to Havelock Island and explore a selected beach.",
        },
        {
          day: 3,
          title: "Havelock Island",
          description:
            "Enjoy beach time and optional activities according to local conditions.",
        },
        {
          day: 4,
          title: "Havelock to Neil Island",
          description:
            "Take a confirmed ferry to Neil Island and enjoy its relaxed island atmosphere.",
        },
        {
          day: 5,
          title: "Neil Island to Port Blair",
          description:
            "Return by ferry according to the available schedule and your onward travel arrangements.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Depart from Port Blair according to your confirmed flight schedule.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Inter-island ferry tickets only where specified",
        "Local transfers and sightseeing listed in the package",
      ],
      exclusions: [
        "Flights unless included",
        "Optional water activities and entry fees unless listed",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "andaman-marvels",
      title: "Marvels of Andaman",
      duration: "Extended Circuit",
      places: ["Port Blair", "Havelock Island", "Neil Island"],
      description:
        "A more complete Andaman itinerary for travellers wanting additional time for island exploration and beach experiences.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Port Blair",
          description:
            "Arrive, transfer to your accommodation and relax after your journey.",
        },
        {
          day: 2,
          title: "Port Blair Exploration",
          description:
            "Explore selected local and historical attractions according to the confirmed itinerary.",
        },
        {
          day: 3,
          title: "Port Blair to Havelock",
          description:
            "Travel to Havelock Island by ferry and enjoy the coastal scenery.",
        },
        {
          day: 4,
          title: "Havelock Island Experiences",
          description:
            "Enjoy beaches, leisure time or optional water activities subject to availability.",
        },
        {
          day: 5,
          title: "Havelock to Neil Island",
          description:
            "Transfer to Neil Island and explore selected local beaches.",
        },
        {
          day: 6,
          title: "Neil Island Leisure",
          description:
            "Enjoy a relaxed day on the island and explore the local surroundings.",
        },
        {
          day: 7,
          title: "Return to Port Blair",
          description:
            "Return by ferry according to the confirmed schedule.",
        },
        {
          day: 8,
          title: "Departure",
          description:
            "Check out and transfer to the airport according to your flight time.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Ferry tickets listed in the package",
        "Specified sightseeing and transfers",
      ],
      exclusions: [
        "Flights unless specified",
        "Scuba diving, snorkelling and other optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },
  ],

  honeymoonText:
    "The Andaman Islands can be a memorable honeymoon choice for couples who enjoy tropical beaches, island scenery and relaxed coastal stays. Havelock and Neil Island can be considered depending on travel dates, ferry connections and accommodation preferences.",

  familyText:
    "Families can enjoy Andaman's beaches, island sightseeing and selected marine experiences. Activity suitability, ferry schedules and travel time should be considered while planning for children and older travellers.",

  groupText:
    "Andaman group holidays can combine Port Blair, Havelock and Neil Island, subject to ferry availability and group arrangements. Group size, travel dates, accommodation and activities should be confirmed before booking.",

  faqs: [
    {
      question: "Is scuba diving included in the packages?",
      answer:
        "It depends on the selected itinerary. Confirm with LV SKY HIGH whether scuba diving or snorkelling is included or available as an additional activity.",
    },
    {
      question: "How do I get between the islands?",
      answer:
        "Inter-island travel is generally by ferry. Schedules, journey times and availability depend on the route, operator, weather and travel date.",
    },
    {
      question: "Is the Cellular Jail light-and-sound show included?",
      answer:
        "The show is included only if specified in your confirmed package. Check the latest timings, ticket availability and inclusions before travelling.",
    },
    {
      question: "Is Andaman good to visit during the monsoon?",
      answer:
        "Rain and rough seas may affect ferry schedules and outdoor activities during the monsoon. Check current weather and transport conditions before confirming your itinerary.",
    },
    {
      question: "How do I book or request a custom itinerary?",
      answer:
        "Contact LV SKY HIGH with your travel dates, group size, preferred islands and budget. Our team can discuss suitable itinerary options and confirm availability.",
    },
  ],
},

// Chardham Yatra


{
  slug: "chardham-yatra",
  name: "Chardham Yatra",
  image: "/images/india-tours/chardham-yatra.jpg",
  heroTitle: "Experience the Sacred Chardham Yatra",
  heroDescription:
    "Plan a spiritual journey through Uttarakhand's revered Himalayan shrines with LV SKY HIGH. Explore pilgrimage packages, road itineraries and helicopter options subject to availability.",

  whyVisit:
    "The Chardham Yatra covers four important pilgrimage sites in Uttarakhand: Yamunotri, Gangotri, Kedarnath and Badrinath. Travellers can choose the complete four-shrine circuit or shorter combinations such as Kedarnath–Badrinath and Gangotri–Yamunotri, depending on available time, route conditions and personal preferences.",

  bestTime:
    "The shrines generally open during the pilgrimage season, with dates announced each year and varying by shrine. May to June and September to October are commonly considered for travel, while monsoon rain, landslides, snow and changing mountain conditions can affect journeys. Confirm current opening dates and official travel advisories before booking.",

  idealDuration:
    "A Kedarnath–Badrinath or Gangotri–Yamunotri combination may take around 4–5 nights. A complete four-shrine pilgrimage from Haridwar generally requires around 9 nights or longer, depending on the route. A Kedarnath helicopter itinerary may be shorter, subject to the operator's schedule and confirmed arrangements.",

  howToReach:
    "Jolly Grant Airport near Dehradun is a common air gateway for Uttarakhand. Haridwar and Rishikesh are common starting points for road journeys. Access to the shrines involves mountain roads and, for Kedarnath by the traditional route, a trek from the designated roadhead. Helicopter services, where available, operate subject to permissions, weather and booking confirmation.",

  packageCount: 6,

  packages: [
    {
      id: "chardham-kedarnath-helicopter",
      title: "Kedarnath Yatra by Helicopter",
      duration: "2 Nights",
      places: ["Kedarnath", "Guptkashi", "Helipad"],
      description:
        "A shorter Kedarnath pilgrimage option for travellers considering helicopter access instead of the traditional trek.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Uttarakhand",
          description:
            "Arrive at the confirmed starting point and transfer to the designated accommodation or departure location.",
        },
        {
          day: 2,
          title: "Kedarnath Darshan",
          description:
            "Proceed with the helicopter journey and darshan arrangements if services are operating and confirmed. Weather can affect schedules.",
        },
        {
          day: 3,
          title: "Return and Departure",
          description:
            "Return according to the confirmed flight and transfer arrangements.",
        },
      ],
      inclusions: [
        "Accommodation as specified in the confirmed itinerary",
        "Helicopter service only if explicitly included and confirmed",
        "Transfers and meals listed in the final package",
      ],
      exclusions: [
        "Services not listed in the confirmed package",
        "Personal expenses and additional accommodation",
        "Additional costs arising from weather-related delays unless covered by the provider",
      ],
    },

    {
      id: "chardham-kedarnath-badrinath",
      title: "Kedarnath Badrinath Yatra",
      duration: "4 Nights",
      places: ["Kedarnath", "Badrinath", "Guptkashi"],
      description:
        "A pilgrimage combination covering two of Uttarakhand's most visited Himalayan shrines.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Transfer",
          description:
            "Arrive at the agreed starting point and travel towards the confirmed overnight destination.",
        },
        {
          day: 2,
          title: "Journey to Kedarnath",
          description:
            "Proceed towards the Kedarnath route and complete the trek or separately confirmed helicopter arrangements.",
        },
        {
          day: 3,
          title: "Kedarnath to the Next Destination",
          description:
            "Complete the planned return journey and continue towards the next overnight stop, depending on road conditions.",
        },
        {
          day: 4,
          title: "Badrinath Darshan",
          description:
            "Travel to Badrinath and visit the shrine subject to opening hours and local conditions.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Begin the return journey to the confirmed drop-off point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Road transfers listed in the itinerary",
        "Meals and sightseeing only as specified",
      ],
      exclusions: [
        "Helicopter services unless confirmed",
        "Personal expenses and additional meals",
        "Services not explicitly included in the package",
      ],
    },

    {
      id: "chardham-gangotri-yamunotri",
      title: "Gangotri Yamunotri Yatra",
      duration: "5 Nights",
      places: ["Yamunotri", "Gangotri", "Uttarkashi"],
      description:
        "A pilgrimage itinerary focused on the source regions associated with the Yamuna and Ganga rivers.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Uttarakhand",
          description:
            "Arrive at the confirmed starting point and transfer to your overnight destination.",
        },
        {
          day: 2,
          title: "Journey towards Yamunotri",
          description:
            "Travel towards the designated route and prepare for the local trek to Yamunotri.",
        },
        {
          day: 3,
          title: "Yamunotri Darshan",
          description:
            "Complete the planned visit and continue to the next overnight destination as road conditions permit.",
        },
        {
          day: 4,
          title: "Journey towards Gangotri",
          description:
            "Travel through the mountain region towards Gangotri.",
        },
        {
          day: 5,
          title: "Gangotri Darshan",
          description:
            "Visit Gangotri according to shrine timings and local conditions.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Return to the confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Meals specified in the package",
      ],
      exclusions: [
        "Travel services not listed in inclusions",
        "Personal expenses and optional services",
        "Additional accommodation due to delays unless specified",
      ],
    },

    {
      id: "chardham-from-haridwar",
      title: "Chardham Yatra from Haridwar",
      duration: "9 Nights",
      places: [
        "Yamunotri",
        "Gangotri",
        "Kedarnath",
        "Badrinath",
        "Haridwar",
      ],
      description:
        "A complete four-shrine pilgrimage circuit starting from Haridwar, with travel paced around mountain routes and shrine visits.",
      itinerary: [
        {
          day: 1,
          title: "Haridwar to Barkot Region",
          description:
            "Meet at the confirmed departure point and travel towards the Yamunotri route.",
        },
        {
          day: 2,
          title: "Yamunotri Darshan",
          description:
            "Travel to the designated roadhead and complete the trek according to local conditions.",
        },
        {
          day: 3,
          title: "Travel towards Uttarkashi",
          description:
            "Continue the mountain journey towards the Gangotri region.",
        },
        {
          day: 4,
          title: "Gangotri Darshan",
          description:
            "Visit Gangotri and return to the confirmed overnight destination.",
        },
        {
          day: 5,
          title: "Travel towards Kedarnath Route",
          description:
            "Proceed along the planned road route towards the Kedarnath region.",
        },
        {
          day: 6,
          title: "Kedarnath Darshan",
          description:
            "Complete the traditional trek or use separately confirmed helicopter services.",
        },
        {
          day: 7,
          title: "Return from Kedarnath Region",
          description:
            "Return along the designated route and continue according to road conditions.",
        },
        {
          day: 8,
          title: "Badrinath Darshan",
          description:
            "Travel to Badrinath and visit the shrine, subject to opening hours.",
        },
        {
          day: 9,
          title: "Return Journey",
          description:
            "Begin the return journey towards the confirmed overnight stop.",
        },
        {
          day: 10,
          title: "Departure",
          description:
            "Complete the return transfer and depart.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Road transfers specified in the itinerary",
        "Meals and services listed in the package",
      ],
      exclusions: [
        "Helicopter services unless included",
        "Personal expenses and unlisted meals",
        "Additional services not stated in inclusions",
      ],
    },

    {
      id: "chardham-from-delhi",
      title: "Chardham Yatra from Delhi",
      duration: "10 Nights",
      places: [
        "Delhi",
        "Yamunotri",
        "Gangotri",
        "Kedarnath",
        "Badrinath",
      ],
      description:
        "A complete pilgrimage circuit starting and ending in Delhi, with road travel and shrine visits arranged around the confirmed schedule.",
      itinerary: [
        {
          day: 1,
          title: "Delhi to Uttarakhand",
          description:
            "Depart from Delhi and travel towards the confirmed overnight destination.",
        },
        {
          day: 2,
          title: "Journey towards Yamunotri",
          description:
            "Continue by road towards the Yamunotri route.",
        },
        {
          day: 3,
          title: "Yamunotri Darshan",
          description:
            "Complete the planned shrine visit and continue as route conditions allow.",
        },
        {
          day: 4,
          title: "Travel towards Gangotri",
          description:
            "Proceed through the mountain region towards the Gangotri area.",
        },
        {
          day: 5,
          title: "Gangotri Darshan",
          description:
            "Visit Gangotri and return to the confirmed overnight stop.",
        },
        {
          day: 6,
          title: "Travel towards Kedarnath",
          description:
            "Transfer towards the designated Kedarnath roadhead.",
        },
        {
          day: 7,
          title: "Kedarnath Darshan",
          description:
            "Complete the trek or separately confirmed helicopter arrangements.",
        },
        {
          day: 8,
          title: "Journey towards Badrinath",
          description:
            "Return along the route and continue towards Badrinath according to conditions.",
        },
        {
          day: 9,
          title: "Badrinath Darshan",
          description:
            "Visit Badrinath and begin the planned return journey.",
        },
        {
          day: 10,
          title: "Return towards Delhi",
          description:
            "Continue the road journey towards Delhi or the confirmed overnight stop.",
        },
        {
          day: 11,
          title: "Departure",
          description:
            "Complete the transfer to Delhi and conclude the trip.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Road transfers from Delhi where specified",
        "Meals and sightseeing listed in the final itinerary",
      ],
      exclusions: [
        "Helicopter services unless explicitly included",
        "Personal expenses and unlisted meals",
        "Services not stated in the package inclusions",
      ],
    },

    {
      id: "chardham-delhi-11-nights",
      title: "Chardham Yatra from Delhi (11 Nights)",
      duration: "11 Nights",
      places: [
        "Delhi",
        "Yamunotri",
        "Gangotri",
        "Kedarnath",
        "Badrinath",
      ],
      description:
        "An extended Delhi-based Chardham circuit with additional travel flexibility for the mountain journey.",
      itinerary: [
        {
          day: 1,
          title: "Delhi Departure",
          description:
            "Depart from Delhi and travel to the confirmed overnight destination in Uttarakhand.",
        },
        {
          day: 2,
          title: "Journey towards Yamunotri",
          description:
            "Continue towards the designated Yamunotri roadhead.",
        },
        {
          day: 3,
          title: "Yamunotri Darshan",
          description:
            "Complete the planned trek and shrine visit as local conditions permit.",
        },
        {
          day: 4,
          title: "Travel towards Gangotri",
          description:
            "Travel to the Gangotri region through the mountain roads.",
        },
        {
          day: 5,
          title: "Gangotri Darshan",
          description:
            "Visit Gangotri and return to the confirmed overnight stop.",
        },
        {
          day: 6,
          title: "Transfer towards Kedarnath",
          description:
            "Proceed towards the designated Kedarnath route.",
        },
        {
          day: 7,
          title: "Kedarnath Darshan",
          description:
            "Complete the trek or separately confirmed helicopter journey.",
        },
        {
          day: 8,
          title: "Return and Recovery Day",
          description:
            "Return from the Kedarnath region and use the scheduled rest or transfer time.",
        },
        {
          day: 9,
          title: "Travel towards Badrinath",
          description:
            "Continue along the planned route towards Badrinath.",
        },
        {
          day: 10,
          title: "Badrinath Darshan",
          description:
            "Visit the shrine and continue towards the scheduled overnight stop.",
        },
        {
          day: 11,
          title: "Return Journey",
          description:
            "Continue the road journey towards the planned return destination.",
        },
        {
          day: 12,
          title: "Arrival in Delhi",
          description:
            "Complete the return transfer to Delhi, subject to road and weather conditions.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Road transfers specified in the itinerary",
        "Meals and services listed in the final package",
      ],
      exclusions: [
        "Helicopter services unless included",
        "Personal expenses and unlisted meals",
        "Additional accommodation or services not stated in inclusions",
      ],
    },
  ],

  honeymoonText:
    "Chardham Yatra is primarily a pilgrimage rather than a conventional honeymoon. Couples can discuss a spiritual journey combined with relaxing stays in nearby destinations, depending on travel dates, route conditions and personal preferences.",

  familyText:
    "Families can plan Chardham Yatra according to the fitness, mobility and age of their members. Mountain travel and the Kedarnath trek can be demanding, so consider route difficulty and consult your travel expert before confirming arrangements for children or older travellers.",

  groupText:
    "Chardham Yatra can be arranged for family groups, pilgrimage groups and community travel, subject to accommodation and transport availability. Group size, dates, route and any helicopter arrangements must be confirmed in advance.",

  faqs: [
    {
      question: "Is a Kedarnath helicopter ride included in every package?",
      answer:
        "No. Helicopter services are included only when explicitly stated in the confirmed itinerary. Services depend on permits, operator availability, weather and operational conditions.",
    },
    {
      question: "When does the Chardham Yatra season begin?",
      answer:
        "Opening dates are announced each year and vary by shrine. Check official announcements and local travel advisories before booking.",
    },
    {
      question: "How physically demanding is the Chardham Yatra?",
      answer:
        "The journey involves mountain roads, changing weather and walking or trekking at certain shrines. Kedarnath's traditional route requires a trek. Travellers should assess their fitness and seek medical advice if needed before undertaking strenuous travel.",
    },
    {
      question: "Can I book only Kedarnath and Badrinath?",
      answer:
        "Yes, a shorter shrine combination may be planned depending on your dates, route conditions, accommodation and transport availability.",
    },
    {
      question: "How do I request a customised Chardham itinerary?",
      answer:
        "Contact LV SKY HIGH with your preferred travel dates, starting city, group size and whether you want road travel or to enquire about helicopter options. Your itinerary and availability can then be discussed.",
    },
  ],
},

// Golden Triangle


{
  slug: "golden-triangle",
  name: "Golden Triangle",
  image: "/images/india-tours/golden-triangle.jpg",
  heroTitle: "Explore India's Iconic Golden Triangle",
  heroDescription:
    "Discover Delhi's vibrant heritage, Agra's timeless Taj Mahal and Jaipur's royal architecture with thoughtfully planned Golden Triangle holidays from LV SKY HIGH.",

  whyVisit:
    "The Golden Triangle connects three of India's most recognised destinations: Delhi, Agra and Jaipur. Explore historic monuments, Mughal architecture, traditional markets, royal forts and colourful cultural experiences. Its connected road and rail routes make it a popular introduction to India's heritage.",

  bestTime:
    "October to March is generally a comfortable period for sightseeing, with cooler weather across the circuit. April to June can be very hot, particularly in Agra and Jaipur. Check local weather conditions when planning outdoor visits.",

  idealDuration:
    "A compact Golden Triangle trip can be planned over 3–4 nights. A more relaxed itinerary may take 5–6 nights, allowing additional time in Delhi, Agra and Jaipur or an extension to a hill destination or wildlife reserve.",

  howToReach:
    "Delhi is the main gateway to the Golden Triangle, with Indira Gandhi International Airport and major railway connections. Agra and Jaipur can be reached from Delhi by road or train. The best travel sequence depends on your arrival time, preferred transport and itinerary.",

  packageCount: 6,

  packages: [
    {
      id: "golden-triangle-3-nights",
      title: "3 Nights 4 Days Golden Triangle Tour",
      duration: "3 Nights 4 Days",
      places: ["Delhi", "Agra", "Jaipur"],
      description:
        "A compact Delhi–Agra–Jaipur introduction for travellers with limited time.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Delhi Sightseeing",
          description:
            "Arrive in Delhi and explore selected attractions depending on your arrival time.",
        },
        {
          day: 2,
          title: "Delhi to Agra",
          description:
            "Travel to Agra and visit the Taj Mahal and other selected attractions according to opening hours.",
        },
        {
          day: 3,
          title: "Agra to Jaipur",
          description:
            "Continue to Jaipur, with optional sightseeing en route depending on your schedule.",
        },
        {
          day: 4,
          title: "Jaipur Sightseeing and Departure",
          description:
            "Visit selected Jaipur attractions before your confirmed departure or onward transfer.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless specified",
        "Monument entry fees unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "golden-triangle-4-nights",
      title: "4 Nights 5 Days Golden Triangle Tour",
      duration: "4 Nights 5 Days",
      places: ["Delhi", "Agra", "Jaipur"],
      description:
        "A well-paced classic Golden Triangle circuit with additional time for sightseeing.",
      itinerary: [
        {
          day: 1,
          title: "Arrive in Delhi",
          description:
            "Arrive, check in and explore selected Delhi attractions.",
        },
        {
          day: 2,
          title: "Delhi Sightseeing",
          description:
            "Discover selected historical landmarks and cultural areas of Delhi.",
        },
        {
          day: 3,
          title: "Delhi to Agra",
          description:
            "Travel to Agra and visit the Taj Mahal and other included attractions.",
        },
        {
          day: 4,
          title: "Agra to Jaipur",
          description:
            "Continue to Jaipur and explore selected attractions according to available time.",
        },
        {
          day: 5,
          title: "Jaipur Sightseeing and Departure",
          description:
            "Enjoy selected Jaipur sightseeing before departure.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed intercity transfers",
        "Sightseeing mentioned in the final itinerary",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Monument tickets and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "golden-triangle-5-nights",
      title: "5 Nights 6 Days Golden Triangle Tour",
      duration: "5 Nights 6 Days",
      places: ["Delhi", "Agra", "Jaipur"],
      description:
        "Spend more time in each of the three cities with a relaxed sightseeing schedule.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Delhi",
          description:
            "Arrive in Delhi and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Explore Delhi",
          description:
            "Visit selected historical and cultural attractions around Delhi.",
        },
        {
          day: 3,
          title: "Delhi to Agra",
          description:
            "Travel to Agra and explore the Taj Mahal and other attractions included in your plan.",
        },
        {
          day: 4,
          title: "Agra to Jaipur",
          description:
            "Continue to Jaipur and enjoy time at leisure after arrival.",
        },
        {
          day: 5,
          title: "Explore Jaipur",
          description:
            "Visit selected forts, palaces and local markets according to your itinerary.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Check out and transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers between the three cities",
        "Specified sightseeing arrangements",
      ],
      exclusions: [
        "Travel tickets unless included",
        "Entry fees and optional experiences unless listed",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "golden-triangle-6-nights",
      title: "6 Nights 7 Days Golden Triangle Tour",
      duration: "6 Nights 7 Days",
      places: ["Delhi", "Agra", "Jaipur"],
      description:
        "A longer Golden Triangle holiday with additional flexibility for city sightseeing and local experiences.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Delhi",
          description:
            "Arrive and check in to your accommodation.",
        },
        {
          day: 2,
          title: "Delhi Heritage Tour",
          description:
            "Explore selected landmarks, heritage sites and cultural areas.",
        },
        {
          day: 3,
          title: "Delhi to Agra",
          description:
            "Travel to Agra and visit the Taj Mahal and other included attractions.",
        },
        {
          day: 4,
          title: "Agra Sightseeing",
          description:
            "Enjoy additional time for Agra sightseeing and local experiences.",
        },
        {
          day: 5,
          title: "Agra to Jaipur",
          description:
            "Travel to Jaipur and settle into your accommodation.",
        },
        {
          day: 6,
          title: "Jaipur Exploration",
          description:
            "Explore selected forts, palaces and local markets.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Check out and transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed intercity transport",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Airfare and train tickets unless specified",
        "Monument tickets unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "golden-triangle-shimla-manali",
      title: "Golden Triangle with Shimla Manali",
      duration: "Extended Holiday",
      places: ["Delhi", "Agra", "Jaipur", "Shimla", "Manali"],
      description:
        "Combine the classic Golden Triangle heritage circuit with a Himachal hill-station holiday.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Delhi",
          description:
            "Arrive in Delhi and settle into your accommodation.",
        },
        {
          day: 2,
          title: "Delhi Sightseeing",
          description:
            "Explore selected Delhi heritage attractions.",
        },
        {
          day: 3,
          title: "Delhi to Agra",
          description:
            "Travel to Agra and visit selected attractions, including the Taj Mahal as scheduled.",
        },
        {
          day: 4,
          title: "Agra to Jaipur",
          description:
            "Continue to Jaipur for heritage sightseeing.",
        },
        {
          day: 5,
          title: "Jaipur Exploration",
          description:
            "Explore selected Jaipur forts, palaces and markets.",
        },
        {
          day: 6,
          title: "Transfer towards Shimla",
          description:
            "Travel towards Shimla according to the confirmed transport plan.",
        },
        {
          day: 7,
          title: "Shimla Sightseeing",
          description:
            "Explore selected local attractions and enjoy the hill-station atmosphere.",
        },
        {
          day: 8,
          title: "Travel towards Manali",
          description:
            "Continue to Manali, allowing time for the mountain road journey.",
        },
        {
          day: 9,
          title: "Manali Exploration",
          description:
            "Enjoy selected local sightseeing and optional activities, subject to conditions.",
        },
        {
          day: 10,
          title: "Departure or Extension",
          description:
            "Continue with the confirmed onward transfer or extend your stay.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers specified in the itinerary",
        "Listed sightseeing services",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Optional mountain activities and entry fees unless specified",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "golden-triangle-tiger-safari",
      title: "Golden Triangle with Tiger Safari",
      duration: "Extended Wildlife Holiday",
      places: ["Delhi", "Agra", "Jaipur", "Ranthambore"],
      description:
        "Combine Delhi, Agra and Jaipur heritage sightseeing with a wildlife experience in the Ranthambore region.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Delhi",
          description:
            "Arrive in Delhi and check in to your accommodation.",
        },
        {
          day: 2,
          title: "Delhi Sightseeing",
          description:
            "Explore selected historical and cultural landmarks.",
        },
        {
          day: 3,
          title: "Delhi to Agra",
          description:
            "Travel to Agra and visit the Taj Mahal and other included attractions.",
        },
        {
          day: 4,
          title: "Agra to Jaipur",
          description:
            "Continue to Jaipur and explore the city according to your schedule.",
        },
        {
          day: 5,
          title: "Jaipur Sightseeing",
          description:
            "Discover selected forts, palaces and local markets.",
        },
        {
          day: 6,
          title: "Travel to Ranthambore",
          description:
            "Transfer to the Ranthambore region and check in.",
        },
        {
          day: 7,
          title: "Wildlife Experience and Departure",
          description:
            "Take a safari only if separately booked and confirmed, then depart according to the agreed plan.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the final itinerary",
        "Safari only when explicitly included and confirmed",
      ],
      exclusions: [
        "Safari permits and charges unless included",
        "Monument entry fees unless specified",
        "Personal expenses and unlisted services",
      ],
    },
  ],

  honeymoonText:
    "The Golden Triangle can be a memorable first trip for couples who enjoy heritage, architecture and cultural experiences. It can also be combined with a hill destination such as Shimla or Manali for a more varied honeymoon, depending on the available time and budget.",

  familyText:
    "The Golden Triangle offers a mix of monuments, cultural attractions, markets and family sightseeing. LV SKY HIGH can discuss a suitable pace, accommodation and transport based on the ages and needs of your family.",

  groupText:
    "Golden Triangle itineraries can be planned for families, school groups and other travellers. Group transport, accommodation, sightseeing and departure dates depend on the selected itinerary and availability.",

  faqs: [
    {
      question: "Is the Taj Mahal included in every package?",
      answer:
        "Agra and the Taj Mahal are part of the Golden Triangle itineraries shown here. Entry tickets, guided tours and the timing of the visit should be confirmed in the final package.",
    },
    {
      question: "How do we travel between Delhi, Agra and Jaipur?",
      answer:
        "The cities can be connected by private road transfers, trains or a combination of transport options. The best choice depends on your itinerary, budget and travel preferences.",
    },
    {
      question: "Can the Golden Triangle be combined with a hill station?",
      answer:
        "Yes. An extended itinerary can combine the Golden Triangle with destinations such as Shimla or Manali, subject to the time available and the additional travel required.",
    },
    {
      question: "How many days are needed for the Golden Triangle?",
      answer:
        "A compact trip can take around 3–4 nights, while 5–6 nights allows more time for sightseeing. Adding hill stations or a wildlife destination requires extra days.",
    },
    {
      question: "How do I book or request a custom itinerary?",
      answer:
        "Contact LV SKY HIGH with your travel dates, group size, preferred destinations and budget. Our team can discuss a suitable itinerary and confirm availability.",
    },
  ],
},

// Leh-Ladakh


{
  slug: "leh-ladakh",
  name: "Leh-Ladakh",
  image: "/images/india-tours/leh-ladakh.jpg",
  heroTitle: "Discover the Breathtaking Beauty of Leh-Ladakh",
  heroDescription:
    "Explore dramatic Himalayan landscapes, crystal-clear lakes, ancient monasteries and unforgettable mountain journeys with customised Leh-Ladakh holidays from LV SKY HIGH.",

  whyVisit:
    "Leh-Ladakh is known for its high-altitude Himalayan desert, rugged mountain landscapes, Buddhist monasteries and spectacular lakes. Explore Leh's historic monasteries, the blue waters of Pangong Lake and the dramatic dunes of Nubra Valley. Travellers can also discover Khardung La and local Ladakhi culture, depending on the itinerary and road conditions.",

  bestTime:
    "May to September is generally the main travel season, when many roads and mountain passes are accessible. Conditions vary by year, and some routes can be affected by snowfall, rain or road closures. October to April brings colder weather, and overland access may be restricted. Check current road and weather updates before departure.",

  idealDuration:
    "A short Leh-focused trip generally needs 3–4 nights, including time to acclimatise to the altitude. A fuller itinerary covering Leh, Nubra Valley and Pangong Lake usually needs around 5–6 nights or more, depending on road conditions and the pace of travel.",

  howToReach:
    "Kushok Bakula Rimpochee Airport in Leh has flights connecting the region with major Indian cities, subject to schedules. Overland journeys are possible via the Manali–Leh and Srinagar–Leh highways when they are open. These mountain road journeys can take multiple days, so plan your arrival, acclimatisation and return travel carefully.",

  packageCount: 4,

  packages: [
    {
      id: "leh-short-break",
      title: "Short Break at Leh",
      duration: "3 Nights 4 Days",
      places: ["Leh", "Shanti Stupa", "Leh Market"],
      description:
        "A compact Leh-only introduction with time to acclimatise and explore the local culture.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Leh",
          description:
            "Arrive at Leh Airport, transfer to your hotel and rest to help your body adjust to the altitude. Avoid strenuous activities on arrival.",
        },
        {
          day: 2,
          title: "Leh Local Sightseeing",
          description:
            "After adequate rest and subject to how you feel, explore selected local attractions such as Shanti Stupa, Leh Palace and the local market.",
        },
        {
          day: 3,
          title: "Monastery and Cultural Tour",
          description:
            "Visit selected monasteries or nearby attractions, allowing sufficient time for rest and acclimatisation.",
        },
        {
          day: 4,
          title: "Departure from Leh",
          description:
            "Transfer to Leh Airport for your onward journey, subject to your confirmed flight schedule.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Airport transfers if specified",
        "Local sightseeing and meals listed in the final itinerary",
      ],
      exclusions: [
        "Flights unless explicitly included",
        "Personal expenses and unlisted meals",
        "Optional activities and services not listed in the package",
      ],
    },

    {
      id: "beautiful-ladakh",
      title: "Beautiful Ladakh",
      duration: "5 Nights 6 Days",
      places: [
        "Leh",
        "Nubra Valley",
        "Pangong Lake",
        "Khardung La",
      ],
      description:
        "A well-rounded Ladakh circuit combining Leh, Nubra Valley and the spectacular Pangong Lake region.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Acclimatisation",
          description:
            "Arrive in Leh, transfer to your accommodation and rest. Keep the first day light to adjust to the altitude.",
        },
        {
          day: 2,
          title: "Explore Leh",
          description:
            "Visit selected local attractions and monasteries, depending on your health and the day's conditions.",
        },
        {
          day: 3,
          title: "Leh to Nubra Valley",
          description:
            "Travel towards Nubra Valley via an approved and accessible mountain route. Explore the valley after arrival if time and conditions permit.",
        },
        {
          day: 4,
          title: "Nubra Valley to Pangong Region",
          description:
            "Continue towards the Pangong Lake region using the confirmed route, subject to road access and local permissions.",
        },
        {
          day: 5,
          title: "Pangong Lake to Leh",
          description:
            "Enjoy the lake views and return towards Leh using the planned route and overnight arrangements.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to Leh Airport or begin the confirmed onward journey.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Road transfers listed in the itinerary",
        "Meals and sightseeing specified in the package",
      ],
      exclusions: [
        "Flights unless included",
        "Permits and entry charges unless specified",
        "Personal expenses and optional activities",
      ],
    },

    {
      id: "scenic-ladakh-nubra",
      title: "Scenic Ladakh with Nubra",
      duration: "4 Nights 5 Days",
      places: ["Leh", "Nubra Valley", "Khardung La"],
      description:
        "Discover Leh and Nubra Valley, with dramatic mountain views and the distinctive dunes of the valley.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Leh",
          description:
            "Arrive in Leh, check in and rest for altitude acclimatisation.",
        },
        {
          day: 2,
          title: "Leh Sightseeing",
          description:
            "Explore selected Leh attractions and nearby monasteries, allowing time to rest.",
        },
        {
          day: 3,
          title: "Leh to Nubra Valley",
          description:
            "Travel to Nubra Valley via an accessible mountain route and explore selected valley attractions.",
        },
        {
          day: 4,
          title: "Nubra Valley Exploration",
          description:
            "Enjoy additional time in Nubra Valley for sightseeing and optional activities available locally.",
        },
        {
          day: 5,
          title: "Return and Departure",
          description:
            "Return towards Leh and continue to your confirmed departure point, allowing sufficient travel time.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers specified in the itinerary",
        "Meals and sightseeing listed in the package",
      ],
      exclusions: [
        "Airfare unless included",
        "Optional activities and entry charges unless specified",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "incredible-ladakh",
      title: "Incredible Ladakh",
      duration: "6 Nights 7 Days",
      places: [
        "Leh",
        "Nubra Valley",
        "Pangong Lake",
        "Khardung La",
        "Local Monasteries",
      ],
      description:
        "An extended Ladakh itinerary with additional time for the region's landscapes, monasteries and high-altitude lakes.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Leh",
          description:
            "Arrive in Leh and rest for acclimatisation. Follow local guidance on activity and hydration.",
        },
        {
          day: 2,
          title: "Leh and Nearby Monasteries",
          description:
            "Explore selected local attractions and monasteries if you are feeling well enough for sightseeing.",
        },
        {
          day: 3,
          title: "Leh to Nubra Valley",
          description:
            "Travel towards Nubra Valley using the confirmed accessible route and enjoy local sightseeing.",
        },
        {
          day: 4,
          title: "Nubra Valley Exploration",
          description:
            "Explore more of Nubra Valley and its landscapes, with optional activities subject to availability.",
        },
        {
          day: 5,
          title: "Nubra to Pangong Lake",
          description:
            "Travel towards Pangong Lake using the confirmed route, subject to road and weather conditions.",
        },
        {
          day: 6,
          title: "Pangong to Leh",
          description:
            "Enjoy the lake region and return to Leh according to the planned route and travel conditions.",
        },
        {
          day: 7,
          title: "Departure from Leh",
          description:
            "Transfer to the airport or continue with your confirmed onward journey.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Road transfers specified in the itinerary",
        "Meals and sightseeing listed in the final package",
      ],
      exclusions: [
        "Flights unless included",
        "Permits and optional activities unless specified",
        "Personal expenses and services not listed in inclusions",
      ],
    },
  ],

  honeymoonText:
    "Leh-Ladakh offers couples a distinctive adventure surrounded by dramatic mountains, lakes and peaceful monasteries. A couple's itinerary can include scenic drives and comfortable stays, with sufficient acclimatisation time and a pace suited to the altitude.",

  familyText:
    "Ladakh can be an unforgettable family destination, but high altitude and long mountain journeys require careful planning. Families should allow time for acclimatisation and discuss children's ages, mobility and individual health considerations with a qualified healthcare professional before travelling.",

  groupText:
    "Ladakh itineraries can be arranged for friends, photography groups and adventure travellers. Group transport, accommodation, route permissions and optional activities should be confirmed in advance, with plans adapted to weather and road conditions.",

  faqs: [
    {
      question: "Is altitude sickness a concern in Ladakh?",
      answer:
        "Yes. Leh is at high altitude, and visitors can develop altitude-related symptoms. Allow time to acclimatise, avoid strenuous activity initially and follow local medical guidance. Seek urgent medical attention if severe symptoms develop.",
    },
    {
      question: "Do I need permits for Pangong Lake or Nubra Valley?",
      answer:
        "Permit requirements depend on your route, nationality and current local rules. Confirm the latest requirements with the relevant authorities or your travel expert before departure.",
    },
    {
      question: "Can I drive to Leh from Manali?",
      answer:
        "Yes, when the Manali–Leh highway is open and conditions permit. The journey involves high mountain roads and can take multiple days. Check current road conditions and plan suitable stops.",
    },
    {
      question: "How many days are enough for Leh-Ladakh?",
      answer:
        "A short Leh-focused visit may take 3–4 nights. Adding Nubra Valley and Pangong Lake generally requires around 5–6 nights or longer, including adequate time to acclimatise.",
    },
    {
      question: "How do I book a customised Ladakh itinerary?",
      answer:
        "Contact LV SKY HIGH with your travel dates, group size, preferred destinations and starting city. The team can discuss an itinerary, accommodation and transport options based on availability.",
    },
  ],
},

// Darjeeling & Sikkim?


{
  slug: "darjeeling-sikkim",
  name: "Darjeeling & Sikkim",
  image: "/images/india-tours/darjeeling-sikkim.jpg",
  heroTitle: "Discover Darjeeling & Sikkim",
  heroDescription:
    "Experience tea gardens, Himalayan panoramas, colourful monasteries and charming hill towns with a memorable Darjeeling and Sikkim holiday planned by LV SKY HIGH.",

  whyVisit:
    "Darjeeling in West Bengal is known for its tea gardens, heritage toy train and views towards Kanchenjunga. Nearby Sikkim offers Gangtok, monasteries, mountain scenery and high-altitude destinations such as Lachung, Lachen and Yumthang Valley. These destinations can be combined into an eastern Himalayan holiday, depending on travel time, permits and road conditions.",

  bestTime:
    "March to May is popular for spring scenery and blooming flowers. October to December can offer clear mountain views, although temperatures fall at higher elevations. June to September is the monsoon season, when rain and landslides may disrupt road travel. Winter access to high-altitude destinations depends on snow and local conditions.",

  idealDuration:
    "A Darjeeling and Gangtok short break generally works well in around 4–5 nights. A longer circuit covering Kalimpong, Pelling, Lachen and Lachung may require 7–9 nights or more, depending on road conditions, permits and the pace of travel.",

  howToReach:
    "Bagdogra Airport and New Jalpaiguri railway station are common gateways for Darjeeling and Sikkim. Darjeeling can be reached by road from the Siliguri area, while Gangtok is reached by road. Pakyong Airport may offer limited connectivity. Travel to restricted or high-altitude areas can require permits and is subject to weather and road conditions.",

  packageCount: 10,

  packages: [
    {
      id: "darjeeling-3-night",
      title: "Darjeeling 3 Night Tour",
      duration: "3 Nights 4 Days",
      places: ["Darjeeling", "Tiger Hill", "Darjeeling Mall"],
      description:
        "A focused Darjeeling-only introduction with scenic viewpoints, tea gardens and local sightseeing.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Darjeeling",
          description:
            "Arrive via your confirmed gateway, transfer to Darjeeling and relax at your accommodation.",
        },
        {
          day: 2,
          title: "Darjeeling Sightseeing",
          description:
            "Visit selected local attractions, viewpoints and tea garden areas according to the confirmed itinerary.",
        },
        {
          day: 3,
          title: "Local Experiences",
          description:
            "Enjoy additional sightseeing, shopping or optional heritage train experiences subject to availability.",
        },
        {
          day: 4,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Toy train tickets and entry fees unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "gangtok-3-night",
      title: "Gangtok 3 Night Tour",
      duration: "3 Nights 4 Days",
      places: ["Gangtok", "MG Marg", "Local Monasteries"],
      description:
        "A Gangtok-focused holiday with mountain-town sightseeing and opportunities to explore local culture.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Gangtok",
          description:
            "Arrive through your confirmed gateway and transfer to Gangtok.",
        },
        {
          day: 2,
          title: "Gangtok Sightseeing",
          description:
            "Explore selected viewpoints, monasteries and local attractions.",
        },
        {
          day: 3,
          title: "Explore Gangtok",
          description:
            "Enjoy additional sightseeing or optional excursions depending on permits and conditions.",
        },
        {
          day: 4,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified transfers",
        "Sightseeing listed in the final itinerary",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Restricted-area permits and entry charges unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "darjeeling-gangtok-4-night",
      title: "Darjeeling Gangtok 4 Night Tour",
      duration: "4 Nights 5 Days",
      places: ["Darjeeling", "Gangtok"],
      description:
        "Combines Darjeeling's scenic hill-town charm with Gangtok's monasteries and mountain views.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Darjeeling",
          description:
            "Arrive and transfer to Darjeeling for an overnight stay.",
        },
        {
          day: 2,
          title: "Darjeeling Sightseeing",
          description:
            "Explore selected viewpoints, tea gardens and local attractions.",
        },
        {
          day: 3,
          title: "Darjeeling to Gangtok",
          description:
            "Travel by road to Gangtok and check in to your accommodation.",
        },
        {
          day: 4,
          title: "Gangtok Sightseeing",
          description:
            "Visit selected monasteries, viewpoints and local attractions.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "darjeeling-gangtok-5-night",
      title: "Darjeeling Gangtok 5 Night Tour",
      duration: "5 Nights 6 Days",
      places: ["Darjeeling", "Gangtok"],
      description:
        "Enjoy more time across Darjeeling and Gangtok with a relaxed sightseeing schedule.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Darjeeling",
          description:
            "Arrive and transfer to your hotel.",
        },
        {
          day: 2,
          title: "Darjeeling Exploration",
          description:
            "Explore selected viewpoints, tea gardens and town attractions.",
        },
        {
          day: 3,
          title: "Darjeeling Leisure and Sightseeing",
          description:
            "Enjoy additional local sightseeing or optional activities.",
        },
        {
          day: 4,
          title: "Transfer to Gangtok",
          description:
            "Travel to Gangtok by road.",
        },
        {
          day: 5,
          title: "Gangtok Sightseeing",
          description:
            "Explore selected local attractions and monasteries.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers specified in the itinerary",
        "Sightseeing listed in the package",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Optional excursions and entry fees unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "darjeeling-kalimpong-gangtok-5-night",
      title: "Darjeeling Kalimpong Gangtok 5 Night Tour",
      duration: "5 Nights 6 Days",
      places: ["Darjeeling", "Kalimpong", "Gangtok"],
      description:
        "Adds the quieter town of Kalimpong to a varied eastern Himalayan circuit.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Darjeeling",
          description:
            "Arrive and transfer to Darjeeling.",
        },
        {
          day: 2,
          title: "Darjeeling Sightseeing",
          description:
            "Explore selected local attractions and viewpoints.",
        },
        {
          day: 3,
          title: "Darjeeling to Kalimpong",
          description:
            "Travel to Kalimpong and explore the town if time permits.",
        },
        {
          day: 4,
          title: "Kalimpong to Gangtok",
          description:
            "Continue to Gangtok and settle into your accommodation.",
        },
        {
          day: 5,
          title: "Gangtok Sightseeing",
          description:
            "Visit selected monasteries and viewpoints.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to the confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers between destinations as specified",
        "Listed sightseeing services",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Entry fees and optional excursions unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "darjeeling-kalimpong-gangtok-6-night",
      title: "Darjeeling Kalimpong Gangtok 6 Night Tour",
      duration: "6 Nights 7 Days",
      places: ["Darjeeling", "Kalimpong", "Gangtok"],
      description:
        "A longer three-town circuit with more time for local exploration and relaxed travel.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Darjeeling",
          description:
            "Arrive and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Explore Darjeeling",
          description:
            "Visit selected viewpoints, gardens and town attractions.",
        },
        {
          day: 3,
          title: "Darjeeling Leisure Day",
          description:
            "Enjoy additional sightseeing or optional local experiences.",
        },
        {
          day: 4,
          title: "Travel to Kalimpong",
          description:
            "Transfer to Kalimpong and explore selected attractions.",
        },
        {
          day: 5,
          title: "Kalimpong to Gangtok",
          description:
            "Travel to Gangtok and check in.",
        },
        {
          day: 6,
          title: "Gangtok Exploration",
          description:
            "Explore selected monasteries, viewpoints and local areas.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Optional activities and entry fees unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "darjeeling-kalimpong-pelling-gangtok-7-night",
      title: "Darjeeling Kalimpong Pelling Gangtok 7 Night Tour",
      duration: "7 Nights 8 Days",
      places: ["Darjeeling", "Kalimpong", "Pelling", "Gangtok"],
      description:
        "Adds Pelling to the circuit for additional Himalayan scenery and views towards Kanchenjunga.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Darjeeling",
          description:
            "Arrive and transfer to Darjeeling.",
        },
        {
          day: 2,
          title: "Darjeeling Sightseeing",
          description:
            "Explore selected local attractions and viewpoints.",
        },
        {
          day: 3,
          title: "Darjeeling to Kalimpong",
          description:
            "Travel to Kalimpong and explore the town.",
        },
        {
          day: 4,
          title: "Kalimpong to Pelling",
          description:
            "Continue towards Pelling, subject to road conditions.",
        },
        {
          day: 5,
          title: "Pelling Sightseeing",
          description:
            "Explore selected viewpoints and local attractions around Pelling.",
        },
        {
          day: 6,
          title: "Pelling to Gangtok",
          description:
            "Travel to Gangtok and check in.",
        },
        {
          day: 7,
          title: "Gangtok Sightseeing",
          description:
            "Explore selected local attractions and monasteries.",
        },
        {
          day: 8,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Specified sightseeing services",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and optional excursions unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "gangtok-lachen-lachung-pelling-8-night",
      title: "Gangtok Lachen Lachung Pelling 8 Night Tour",
      duration: "8 Nights 9 Days",
      places: ["Gangtok", "Lachen", "Lachung", "Pelling"],
      description:
        "Extends into the higher-altitude Lachen and Lachung valleys, with additional time for mountain scenery.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Gangtok",
          description:
            "Arrive and transfer to Gangtok.",
        },
        {
          day: 2,
          title: "Gangtok Sightseeing",
          description:
            "Explore selected local attractions and prepare for the mountain journey.",
        },
        {
          day: 3,
          title: "Gangtok to Lachen",
          description:
            "Travel to Lachen with stops at selected viewpoints, depending on route conditions.",
        },
        {
          day: 4,
          title: "Lachen Excursion",
          description:
            "Visit selected nearby attractions only if accessible, permitted and included in the itinerary.",
        },
        {
          day: 5,
          title: "Lachen to Lachung",
          description:
            "Continue to Lachung according to the confirmed route and local conditions.",
        },
        {
          day: 6,
          title: "Lachung Valley",
          description:
            "Explore selected valley attractions subject to weather, road access and permits.",
        },
        {
          day: 7,
          title: "Return towards Gangtok",
          description:
            "Travel back towards Gangtok according to the planned schedule.",
        },
        {
          day: 8,
          title: "Travel to Pelling",
          description:
            "Continue to Pelling, allowing for the mountain road journey.",
        },
        {
          day: 9,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified transfers and sightseeing",
        "Permits only where explicitly included",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Restricted-area permits unless specified",
        "Optional activities, personal expenses and unlisted meals",
      ],
    },

    {
      id: "gangtok-lachung-pelling-darjeeling-9-night",
      title: "Gangtok Lachung Pelling Darjeeling 9 Night Tour",
      duration: "9 Nights 10 Days",
      places: ["Gangtok", "Lachung", "Pelling", "Darjeeling"],
      description:
        "A comprehensive eastern Himalayan circuit combining Sikkim's mountain valleys with Darjeeling's tea gardens and heritage.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Gangtok",
          description:
            "Arrive and transfer to Gangtok.",
        },
        {
          day: 2,
          title: "Gangtok Sightseeing",
          description:
            "Explore selected local attractions and monasteries.",
        },
        {
          day: 3,
          title: "Gangtok to Lachung",
          description:
            "Travel towards Lachung, subject to road access and current travel conditions.",
        },
        {
          day: 4,
          title: "Lachung Valley Excursion",
          description:
            "Explore permitted nearby attractions if weather and road conditions allow.",
        },
        {
          day: 5,
          title: "Return towards Gangtok",
          description:
            "Return according to the confirmed route and overnight arrangements.",
        },
        {
          day: 6,
          title: "Travel to Pelling",
          description:
            "Transfer to Pelling and enjoy the surroundings if time permits.",
        },
        {
          day: 7,
          title: "Pelling Sightseeing",
          description:
            "Explore selected viewpoints and local attractions.",
        },
        {
          day: 8,
          title: "Pelling to Darjeeling",
          description:
            "Travel to Darjeeling and check in to your accommodation.",
        },
        {
          day: 9,
          title: "Darjeeling Sightseeing",
          description:
            "Explore selected viewpoints, tea gardens and local attractions.",
        },
        {
          day: 10,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing and permits only as specified",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Restricted-area permits unless included",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "himalayan-golden-triangle",
      title: "Himalayan Golden Triangle",
      duration: "Extended Eastern Himalaya Circuit",
      places: ["Darjeeling", "Gangtok", "Pelling"],
      description:
        "A named eastern Himalayan circuit connecting Darjeeling, Gangtok and Pelling for a varied hill holiday.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Darjeeling",
          description:
            "Arrive and transfer to Darjeeling.",
        },
        {
          day: 2,
          title: "Darjeeling Exploration",
          description:
            "Visit selected viewpoints, tea gardens and local attractions.",
        },
        {
          day: 3,
          title: "Darjeeling to Gangtok",
          description:
            "Travel to Gangtok and check in.",
        },
        {
          day: 4,
          title: "Gangtok Sightseeing",
          description:
            "Explore selected monasteries, viewpoints and local areas.",
        },
        {
          day: 5,
          title: "Gangtok to Pelling",
          description:
            "Continue to Pelling, subject to road conditions.",
        },
        {
          day: 6,
          title: "Pelling Exploration",
          description:
            "Enjoy selected viewpoints and local sightseeing.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers between destinations as specified",
        "Sightseeing listed in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Permits and entry fees unless specified",
        "Personal expenses and unlisted meals",
      ],
    },
  ],

  honeymoonText:
    "Darjeeling and Sikkim offer couples scenic mountain views, peaceful monasteries, tea gardens and cosy hill-town stays. A honeymoon itinerary can combine Darjeeling and Gangtok or include Pelling, depending on available time, accommodation preferences and road conditions.",

  familyText:
    "Families can enjoy Darjeeling's viewpoints, heritage experiences and Gangtok's local attractions. Longer journeys to high-altitude destinations such as Lachen and Lachung require extra planning. Choose a pace suitable for children and older travellers, and confirm road conditions before departure.",

  groupText:
    "Darjeeling and Sikkim can be planned for family groups, friends and college trips. Group transport, hotel arrangements, permits and sightseeing depend on the selected destinations, group size and travel dates.",

  faqs: [
    {
      question: "Do I need a permit for Sikkim?",
      answer:
        "Permit requirements depend on the destination, nationality and current regulations. Restricted areas such as Lachen, Lachung and some high-altitude routes may require permits and additional documentation. Confirm the latest requirements before travelling.",
    },
    {
      question: "Is the Darjeeling toy train included?",
      answer:
        "The heritage toy train is included only if specified in your confirmed package. Tickets and operating schedules should be checked for your travel dates.",
    },
    {
      question: "Which is better for Kanchenjunga views — Darjeeling or Pelling?",
      answer:
        "Both destinations offer scenic Himalayan viewpoints. Visibility depends on weather, season and the specific viewpoint, so neither guarantees clear mountain views on every day.",
    },
    {
      question: "Are Lachen and Lachung accessible year-round?",
      answer:
        "Access can be affected by snowfall, rain, landslides, road closures and local restrictions. Confirm current road conditions and permits before including these destinations in your itinerary.",
    },
    {
      question: "How do I book or ask for a custom itinerary?",
      answer:
        "Contact LV SKY HIGH with your travel dates, group size, preferred destinations and budget. The team can help discuss an itinerary and confirm transport, accommodation and permit arrangements.",
    },
  ],
},

// Honeymoon



{
  slug: "honeymoon",
  name: "India Honeymoon",
  image: "/images/india-tours/honeymoon.jpg",
  heroTitle: "Discover Your Perfect Honeymoon",
  heroDescription:
    "Celebrate your love with romantic getaways across India, from Kerala's peaceful backwaters and Goa's beaches to Manali's mountain views and the tropical beauty of Andaman Islands.",

  whyVisit:
    "This collection brings together honeymoon-focused holiday packages across popular Indian destinations, including Kerala, Goa, Manali, Shimla and Andaman Islands. Each itinerary is designed around couple-friendly stays, scenic experiences and a relaxed travel pace. Explore the individual destination packages to find a honeymoon that suits your preferences.",

  bestTime:
    "The best season depends on your chosen destination. Kerala and Goa are popular from October to March, while Manali and Shimla are often preferred from March to June and December to February for different seasonal experiences. Andaman is generally popular during October to May. Check local weather and travel conditions before confirming your dates.",

  idealDuration:
    "Most honeymoon itineraries work well in 5–7 nights, allowing couples time to relax and explore without rushing. Shorter beach breaks or longer Kerala and Andaman holidays can be arranged depending on the destinations and experiences you choose.",

  howToReach:
    "Each honeymoon destination has its own travel gateway. Kerala is served by airports including Kochi and Thiruvananthapuram; Goa by its airports; Manali and Shimla by road and connecting rail or air routes; and Andaman by flights to Port Blair. Choose the relevant destination page for travel details and transfer options.",

  packageCount: 9,

  packages: [
    {
      id: "kerala-delight-honeymoon",
      title: "Kerala Delight Honeymoon",
      duration: "5 Nights 6 Days",
      places: ["Munnar", "Alleppey", "Kochi"],
      description:
        "A romantic Kerala getaway combining misty hill scenery, relaxing stays and the charm of the backwaters.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kochi",
          description:
            "Arrive in Kochi and transfer to your confirmed accommodation or onward destination.",
        },
        {
          day: 2,
          title: "Journey to Munnar",
          description:
            "Travel through scenic landscapes and enjoy a relaxed evening in Munnar.",
        },
        {
          day: 3,
          title: "Munnar Exploration",
          description:
            "Explore selected viewpoints, tea gardens and local attractions.",
        },
        {
          day: 4,
          title: "Travel to Alleppey",
          description:
            "Continue to Alleppey for a backwater experience, subject to your package arrangements.",
        },
        {
          day: 5,
          title: "Relaxing Backwater Experience",
          description:
            "Enjoy leisure time and the scenery around Kerala's backwaters.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Houseboat stay unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "love-in-kerala",
      title: "Love in Kerala",
      duration: "6 Nights 7 Days",
      places: ["Kochi", "Munnar", "Thekkady", "Alleppey"],
      description:
        "A full-week Kerala honeymoon itinerary with hill stations, nature experiences and time to unwind together.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kochi",
          description:
            "Arrive and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Kochi to Munnar",
          description:
            "Travel to Munnar through scenic countryside.",
        },
        {
          day: 3,
          title: "Munnar Sightseeing",
          description:
            "Explore selected tea gardens and viewpoints.",
        },
        {
          day: 4,
          title: "Munnar to Thekkady",
          description:
            "Continue to Thekkady for nature and local experiences.",
        },
        {
          day: 5,
          title: "Thekkady to Alleppey",
          description:
            "Travel towards Alleppey and enjoy the backwater region.",
        },
        {
          day: 6,
          title: "Leisure in Alleppey",
          description:
            "Relax and enjoy the scenery or an optional houseboat experience.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified intercity transfers",
        "Sightseeing listed in the itinerary",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Optional activities and houseboat upgrades unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "romantic-kerala-tour",
      title: "Romantic Kerala Tour",
      duration: "5 Nights 6 Days",
      places: ["Munnar", "Alleppey", "Kochi"],
      description:
        "A couple-friendly Kerala holiday featuring green hills, scenic drives and relaxing backwater surroundings.",
      itinerary: [
        {
          day: 1,
          title: "Arrival",
          description:
            "Arrive at the confirmed gateway and transfer to your hotel.",
        },
        {
          day: 2,
          title: "Munnar Journey",
          description:
            "Travel to Munnar and enjoy the surrounding landscapes.",
        },
        {
          day: 3,
          title: "Munnar Experiences",
          description:
            "Explore selected attractions and enjoy leisure time together.",
        },
        {
          day: 4,
          title: "Alleppey Transfer",
          description:
            "Travel to Alleppey and check in to your accommodation.",
        },
        {
          day: 5,
          title: "Backwater Leisure",
          description:
            "Enjoy the backwater region and optional experiences.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed transfers",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "romance-gods-own-country",
      title: "Romance in God's Own Country",
      duration: "5 Nights 6 Days",
      places: ["Munnar", "Kochi", "Alleppey"],
      description:
        "A romantic circuit combining Munnar's green hills with Kochi's culture and Alleppey's backwater scenery.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kochi",
          description:
            "Arrive and settle into your accommodation.",
        },
        {
          day: 2,
          title: "Kochi to Munnar",
          description:
            "Travel to Munnar through scenic landscapes.",
        },
        {
          day: 3,
          title: "Munnar Sightseeing",
          description:
            "Visit selected viewpoints and tea-growing areas.",
        },
        {
          day: 4,
          title: "Travel to Alleppey",
          description:
            "Continue to Alleppey for a relaxing backwater stay.",
        },
        {
          day: 5,
          title: "Leisure Day",
          description:
            "Enjoy leisure time and optional local experiences.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified transfers",
        "Listed sightseeing services",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Optional excursions and activities",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "voluptuous-kerala-beauty",
      title: "Voluptuous Kerala Beauty",
      duration: "5 Nights 6 Days",
      places: ["Munnar", "Thekkady", "Alleppey"],
      description:
        "A scenic Kerala honeymoon package featuring hill landscapes, nature experiences and relaxing backwater stays.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Transfer",
          description:
            "Arrive at the confirmed gateway and transfer to your destination.",
        },
        {
          day: 2,
          title: "Munnar Exploration",
          description:
            "Enjoy selected tea gardens, viewpoints and local attractions.",
        },
        {
          day: 3,
          title: "Nature Experiences",
          description:
            "Explore the surrounding region or travel to Thekkady as planned.",
        },
        {
          day: 4,
          title: "Travel to Alleppey",
          description:
            "Continue to Alleppey for a backwater experience.",
        },
        {
          day: 5,
          title: "Leisure and Relaxation",
          description:
            "Enjoy leisure time or optional activities.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified transfers",
        "Sightseeing listed in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "honeymoon-in-goa",
      title: "Honeymoon in Goa",
      duration: "5 Nights 6 Days",
      places: ["North Goa", "South Goa"],
      description:
        "A relaxed beach honeymoon with coastal scenery, leisure time and optional local sightseeing.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Goa",
          description:
            "Arrive and transfer to your confirmed accommodation.",
        },
        {
          day: 2,
          title: "Beach Leisure",
          description:
            "Enjoy time at the beach and explore nearby areas.",
        },
        {
          day: 3,
          title: "North Goa",
          description:
            "Visit selected beaches and local attractions.",
        },
        {
          day: 4,
          title: "South Goa",
          description:
            "Explore selected coastal spots or enjoy a relaxed day together.",
        },
        {
          day: 5,
          title: "Leisure Day",
          description:
            "Enjoy free time or optional experiences.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to the airport or other confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified airport transfers",
        "Sightseeing only where listed",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Water sports and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "loving-goa-beaches",
      title: "Loving Goa Beaches Tour",
      duration: "4 Nights 5 Days",
      places: ["North Goa", "South Goa"],
      description:
        "A beach-focused honeymoon itinerary with time for coastal sightseeing, relaxed mornings and optional experiences.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Goa",
          description:
            "Arrive and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Explore North Goa",
          description:
            "Visit selected beaches and local attractions.",
        },
        {
          day: 3,
          title: "South Goa Excursion",
          description:
            "Explore selected coastal areas according to your itinerary.",
        },
        {
          day: 4,
          title: "Leisure and Optional Activities",
          description:
            "Enjoy a free day or choose optional experiences.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Water sports and optional excursions unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "mesmerize-manali-volvo",
      title: "Mesmerize Manali Volvo Tour",
      duration: "5 Nights 6 Days",
      places: ["Manali", "Solang Valley", "Local Manali"],
      description:
        "A mountain honeymoon package with Volvo coach travel, scenic surroundings and time to explore Manali.",
      itinerary: [
        {
          day: 1,
          title: "Overnight Volvo Journey",
          description:
            "Begin your journey by Volvo coach according to the confirmed departure schedule.",
        },
        {
          day: 2,
          title: "Arrival in Manali",
          description:
            "Arrive in Manali, transfer to your accommodation and relax.",
        },
        {
          day: 3,
          title: "Manali Sightseeing",
          description:
            "Explore selected local attractions and viewpoints.",
        },
        {
          day: 4,
          title: "Mountain Excursion",
          description:
            "Visit Solang Valley or another suitable excursion subject to weather and access.",
        },
        {
          day: 5,
          title: "Leisure and Return Journey",
          description:
            "Enjoy free time before the scheduled return Volvo journey.",
        },
        {
          day: 6,
          title: "Arrival at Return Point",
          description:
            "Complete your return journey according to the coach schedule.",
        },
      ],
      inclusions: [
        "Volvo coach travel only as confirmed",
        "Accommodation as specified",
        "Listed transfers and sightseeing",
      ],
      exclusions: [
        "Meals unless specified",
        "Adventure activities and entry fees unless included",
        "Personal expenses and unlisted services",
      ],
    },

    {
      id: "shimmering-shimla-volvo",
      title: "Shimmering Shimla Volvo Tour",
      duration: "4 Nights 5 Days",
      places: ["Shimla", "Kufri", "The Ridge"],
      description:
        "A Shimla honeymoon package with Volvo coach travel, charming hill-town scenery and relaxed sightseeing.",
      itinerary: [
        {
          day: 1,
          title: "Overnight Volvo Journey",
          description:
            "Depart by Volvo coach according to the confirmed schedule.",
        },
        {
          day: 2,
          title: "Arrival in Shimla",
          description:
            "Arrive, transfer to your accommodation and relax.",
        },
        {
          day: 3,
          title: "Shimla Sightseeing",
          description:
            "Explore selected attractions such as The Ridge and Mall Road.",
        },
        {
          day: 4,
          title: "Kufri or Leisure",
          description:
            "Enjoy a suitable local excursion or free time depending on weather and road conditions.",
        },
        {
          day: 5,
          title: "Return Journey",
          description:
            "Transfer to your coach departure point and begin the return journey.",
        },
      ],
      inclusions: [
        "Volvo coach travel only as confirmed",
        "Accommodation as specified",
        "Listed transfers and sightseeing",
      ],
      exclusions: [
        "Meals unless specified",
        "Entry fees and optional activities unless included",
        "Personal expenses and unlisted services",
      ],
    },
  ],

  honeymoonText:
    "This collection is designed for couples looking for scenic, romantic holidays across India. Choose Kerala for backwaters and green hills, Goa for beachside relaxation, Manali or Shimla for mountain scenery, or Andaman for an island escape. The right itinerary depends on your preferred season, trip length and budget.",

  familyText:
    "These itineraries are designed primarily for couples. Families can explore the individual destination pages for family-friendly packages, accommodation choices and sightseeing plans suitable for their group.",

  groupText:
    "Honeymoon itineraries are generally planned for couples rather than large groups. For friends, family gatherings or group holidays, explore the individual destination pages and ask LV SKY HIGH about a suitable custom itinerary.",

  faqs: [
    {
      question:
        "How is a honeymoon package different from a regular destination package?",
      answer:
        "Honeymoon itineraries generally focus on couple-friendly accommodation, scenic experiences and a relaxed pace. Specific stays, meals, transfers and activities depend on the package you select, so confirm the inclusions before booking.",
    },
    {
      question:
        "Which destination is best for a honeymoon — Kerala, Goa or Himachal?",
      answer:
        "Kerala is popular for backwaters and green landscapes, Goa for beaches and coastal leisure, and Himachal for mountain scenery. The best choice depends on your preferred season, budget and travel style.",
    },
    {
      question: "Can honeymoon packages be customised?",
      answer:
        "Yes, you can enquire about adjusting destinations, trip duration, accommodation preferences and selected activities. Final arrangements depend on availability, travel dates and the agreed itinerary.",
    },
    {
      question: "How do I book or ask for a custom itinerary?",
      answer:
        "Contact LV SKY HIGH with your preferred destination, travel dates, number of nights and budget. The team can help you discuss a suitable itinerary and confirm pricing and availability.",
    },
  ],
},

// South India



{
  slug: "south-india",
  name: "South India",
  image: "/images/india-tours/south-india.jpg",

  heroTitle: "Explore the Beauty of South India",

  heroDescription:
    "Discover South India's rich culture, historic cities, lush hill stations and beautiful coastal destinations with thoughtfully planned holiday packages.",

  whyVisit:
    "South India itineraries bring together Bangalore, Mysore, Coorg and Ooty in multi-city circuits. Explore Mysore Palace, the coffee estates of Coorg, Ooty's Nilgiri landscapes and the region's cultural attractions. Travellers can choose a focused city-and-hill circuit or a longer holiday combining heritage, nature and coastal experiences.",

  bestTime:
    "October to March is generally a comfortable period for sightseeing across much of South India. April and May can be hot in cities and plains, while June to September brings monsoon conditions that may affect outdoor activities and travel plans. Conditions vary by destination, so check local weather before booking.",

  idealDuration:
    "A focused Bangalore–Mysore–Ooty circuit typically needs 5–6 nights. Longer itineraries can extend to around 10 nights, allowing additional time for Coorg, cultural attractions and coastal destinations.",

  howToReach:
    "Kempegowda International Airport in Bengaluru is a major gateway for many South India circuits. Mysore, Coorg and Ooty can be reached from Bengaluru by road, with rail connections available for selected destinations. The best route depends on your final itinerary and arrival schedule.",

  packageCount: 9,

  packages: [
    {
      id: "bangalore-ooty-tour",
      title: "Bangalore Ooty Tour",
      duration: "5 Nights 6 Days",
      places: ["Bangalore", "Ooty"],
      description:
        "A focused two-destination holiday combining Bangalore's city attractions with Ooty's scenic hill-station surroundings.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangalore",
          description:
            "Arrive in Bangalore, transfer to your accommodation and enjoy leisure time.",
        },
        {
          day: 2,
          title: "Bangalore Sightseeing",
          description:
            "Explore selected city attractions according to your itinerary.",
        },
        {
          day: 3,
          title: "Journey to Ooty",
          description:
            "Travel to Ooty and enjoy the scenic hill-station surroundings.",
        },
        {
          day: 4,
          title: "Explore Ooty",
          description:
            "Visit selected gardens, viewpoints and local attractions.",
        },
        {
          day: 5,
          title: "Ooty Leisure",
          description:
            "Enjoy leisure time or additional sightseeing around Ooty.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "beautiful-journey-to-south",
      title: "A Beautiful Journey to South",
      duration: "7 Nights 8 Days",
      places: ["Bangalore", "Mysore", "Coorg", "Ooty"],
      description:
        "A multi-city South India circuit combining heritage attractions, coffee-country scenery and peaceful hill stations.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangalore",
          description:
            "Arrive in Bangalore and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Bangalore to Mysore",
          description:
            "Travel to Mysore and explore selected attractions.",
        },
        {
          day: 3,
          title: "Mysore Heritage",
          description:
            "Discover Mysore's cultural highlights and historic landmarks.",
        },
        {
          day: 4,
          title: "Journey to Coorg",
          description:
            "Travel to Coorg and enjoy the surrounding coffee-country landscapes.",
        },
        {
          day: 5,
          title: "Coorg Exploration",
          description:
            "Explore selected nature spots and local attractions.",
        },
        {
          day: 6,
          title: "Travel to Ooty",
          description:
            "Continue towards Ooty and settle into your accommodation.",
        },
        {
          day: 7,
          title: "Ooty Sightseeing",
          description:
            "Explore selected viewpoints, gardens and local attractions.",
        },
        {
          day: 8,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Optional activities and entry fees unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "vacation-to-south",
      title: "A Vacation to South",
      duration: "8 Nights 9 Days",
      places: ["Bangalore", "Mysore", "Coorg", "Ooty"],
      description:
        "A broader South India holiday with extra time for heritage sightseeing, scenic drives and hill-station leisure.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangalore",
          description:
            "Arrive and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Bangalore Exploration",
          description:
            "Explore selected city attractions.",
        },
        {
          day: 3,
          title: "Mysore Journey",
          description:
            "Travel to Mysore and enjoy local sightseeing.",
        },
        {
          day: 4,
          title: "Mysore Heritage",
          description:
            "Discover the city's historic and cultural attractions.",
        },
        {
          day: 5,
          title: "Coorg Transfer",
          description:
            "Continue to Coorg for a nature-focused stay.",
        },
        {
          day: 6,
          title: "Coorg Leisure",
          description:
            "Enjoy local sightseeing and the surrounding landscapes.",
        },
        {
          day: 7,
          title: "Journey to Ooty",
          description:
            "Travel to Ooty and enjoy the hill-station atmosphere.",
        },
        {
          day: 8,
          title: "Ooty Sightseeing",
          description:
            "Explore selected viewpoints and local attractions.",
        },
        {
          day: 9,
          title: "Departure",
          description:
            "Depart according to your confirmed travel arrangements.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified intercity transfers",
        "Sightseeing listed in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Optional activities and entry fees unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "bangalore-mysore-coorg-tour",
      title: "Bangalore Mysore Coorg Tour",
      duration: "6 Nights 7 Days",
      places: ["Bangalore", "Mysore", "Coorg"],
      description:
        "A three-destination circuit covering Bangalore's city attractions, Mysore's heritage and Coorg's coffee-country scenery.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangalore",
          description:
            "Arrive in Bangalore and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Bangalore Sightseeing",
          description:
            "Explore selected attractions around the city.",
        },
        {
          day: 3,
          title: "Travel to Mysore",
          description:
            "Travel to Mysore and enjoy a relaxed evening.",
        },
        {
          day: 4,
          title: "Mysore Exploration",
          description:
            "Visit selected heritage attractions and local landmarks.",
        },
        {
          day: 5,
          title: "Journey to Coorg",
          description:
            "Continue to Coorg through scenic countryside.",
        },
        {
          day: 6,
          title: "Coorg Sightseeing",
          description:
            "Explore selected coffee estates and nature attractions.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed intercity transfers",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and optional experiences unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "colors-of-south",
      title: "Colors of South",
      duration: "7 Nights 8 Days",
      places: ["Bangalore", "Mysore", "Coorg", "Ooty"],
      description:
        "A themed South India multi-city holiday combining cultural attractions, lush landscapes and hill-station experiences.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangalore",
          description:
            "Arrive and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Bangalore City Tour",
          description:
            "Explore selected attractions and local highlights.",
        },
        {
          day: 3,
          title: "Mysore Heritage",
          description:
            "Travel to Mysore and explore its cultural landmarks.",
        },
        {
          day: 4,
          title: "Coorg Journey",
          description:
            "Continue to Coorg and enjoy the natural surroundings.",
        },
        {
          day: 5,
          title: "Coorg Experiences",
          description:
            "Explore selected local attractions and scenic locations.",
        },
        {
          day: 6,
          title: "Travel to Ooty",
          description:
            "Travel to Ooty and settle into your accommodation.",
        },
        {
          day: 7,
          title: "Ooty Leisure",
          description:
            "Enjoy local sightseeing and leisure time.",
        },
        {
          day: 8,
          title: "Departure",
          description:
            "Transfer to your departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified transfers",
        "Listed sightseeing",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Optional experiences and entry fees unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "coorg-mysore-ooty-tour",
      title: "Coorg, Mysore, Ooty Tour",
      duration: "6 Nights 7 Days",
      places: ["Coorg", "Mysore", "Ooty"],
      description:
        "Combines three of South India's best-known hill and heritage destinations in one holiday.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Transfer",
          description:
            "Arrive at your agreed gateway and travel to Coorg.",
        },
        {
          day: 2,
          title: "Explore Coorg",
          description:
            "Discover selected nature attractions and coffee-country scenery.",
        },
        {
          day: 3,
          title: "Coorg to Mysore",
          description:
            "Travel to Mysore and enjoy local sightseeing.",
        },
        {
          day: 4,
          title: "Mysore Heritage",
          description:
            "Explore selected historic and cultural attractions.",
        },
        {
          day: 5,
          title: "Travel to Ooty",
          description:
            "Continue to Ooty and settle into your accommodation.",
        },
        {
          day: 6,
          title: "Ooty Sightseeing",
          description:
            "Explore selected gardens, viewpoints and local attractions.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified intercity transfers",
        "Listed sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "mysore-ooty-tour",
      title: "Mysore Ooty Tour",
      duration: "5 Nights 6 Days",
      places: ["Mysore", "Ooty"],
      description:
        "A focused two-destination holiday combining Mysore's heritage with Ooty's scenic hill-station attractions.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mysore",
          description:
            "Arrive in Mysore and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Mysore Sightseeing",
          description:
            "Explore selected heritage attractions and city landmarks.",
        },
        {
          day: 3,
          title: "Journey to Ooty",
          description:
            "Travel to Ooty and enjoy the surrounding landscapes.",
        },
        {
          day: 4,
          title: "Explore Ooty",
          description:
            "Visit selected viewpoints, gardens and local attractions.",
        },
        {
          day: 5,
          title: "Ooty Leisure",
          description:
            "Enjoy free time or additional sightseeing.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed transfers",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Airfare and train tickets unless included",
        "Entry fees and optional experiences unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "south-india-delights-tour",
      title: "South India Delights Tour",
      duration: "10 Nights 11 Days",
      places: ["Bangalore", "Mysore", "Coorg", "Ooty"],
      description:
        "An extended South India itinerary offering more time for cultural sightseeing, nature experiences and relaxed exploration.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangalore",
          description:
            "Arrive and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Bangalore Exploration",
          description:
            "Explore selected city attractions.",
        },
        {
          day: 3,
          title: "Travel to Mysore",
          description:
            "Travel to Mysore and enjoy local sightseeing.",
        },
        {
          day: 4,
          title: "Mysore Heritage",
          description:
            "Discover selected historic landmarks and cultural attractions.",
        },
        {
          day: 5,
          title: "Journey to Coorg",
          description:
            "Travel to Coorg through scenic countryside.",
        },
        {
          day: 6,
          title: "Coorg Nature Experiences",
          description:
            "Explore selected nature spots and local attractions.",
        },
        {
          day: 7,
          title: "Coorg Leisure",
          description:
            "Enjoy a relaxed day in the surrounding region.",
        },
        {
          day: 8,
          title: "Travel to Ooty",
          description:
            "Continue to Ooty and check in to your accommodation.",
        },
        {
          day: 9,
          title: "Ooty Sightseeing",
          description:
            "Explore selected hill-station attractions.",
        },
        {
          day: 10,
          title: "Leisure and Local Exploration",
          description:
            "Enjoy free time or additional sightseeing.",
        },
        {
          day: 11,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified intercity transfers",
        "Sightseeing listed in the itinerary",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Optional activities and entry fees unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "south-indian-culture-beach-tour",
      title: "South Indian Culture cum Beach Tour",
      duration: "9 Nights 10 Days",
      places: ["Bangalore", "Mysore", "Coastal South India"],
      description:
        "A wider South India holiday combining heritage sightseeing with time on the coast. Final coastal stops depend on the confirmed itinerary.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangalore",
          description:
            "Arrive and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Bangalore Sightseeing",
          description:
            "Explore selected city attractions.",
        },
        {
          day: 3,
          title: "Travel to Mysore",
          description:
            "Travel to Mysore and enjoy the local surroundings.",
        },
        {
          day: 4,
          title: "Mysore Culture",
          description:
            "Explore selected heritage attractions and cultural landmarks.",
        },
        {
          day: 5,
          title: "Continue the South India Circuit",
          description:
            "Travel towards the next confirmed destination.",
        },
        {
          day: 6,
          title: "Regional Exploration",
          description:
            "Enjoy sightseeing and local experiences according to the itinerary.",
        },
        {
          day: 7,
          title: "Coastal Transfer",
          description:
            "Travel to the coastal destination selected for your package.",
        },
        {
          day: 8,
          title: "Beach Leisure",
          description:
            "Enjoy coastal scenery and optional activities.",
        },
        {
          day: 9,
          title: "Leisure Day",
          description:
            "Relax or explore nearby attractions.",
        },
        {
          day: 10,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the final itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Water sports and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },
  ],

  honeymoonText:
    "South India can be a memorable honeymoon choice for couples who enjoy green hill stations, coffee estates, cultural cities and coastal stays. Coorg and Ooty offer scenic surroundings, while a longer circuit can combine several destinations. Explore the dedicated India Honeymoon collection for more couple-focused options.",

  familyText:
    "South India circuits suit families looking to combine cultural attractions, city sightseeing and hill-station experiences. The pace, hotel selection and activities can be adjusted according to children's ages and the group's needs.",

  groupText:
    "South India offers options for group holidays, college trips and family gatherings. Multi-city itineraries can be planned around your preferred destinations, group size and travel dates.",

  faqs: [
    {
      question:
        "Which destinations are included in a South India tour?",
      answer:
        "It depends on the itinerary. Popular combinations include Bangalore, Mysore, Coorg and Ooty. Some longer tours can include additional cultural or coastal destinations, which should be confirmed before booking.",
    },
    {
      question:
        "What is the best time to visit South India?",
      answer:
        "October to March is generally comfortable for many sightseeing circuits. Summer temperatures and monsoon conditions vary by destination, so choose dates based on the locations you plan to visit.",
    },
    {
      question:
        "How many days are needed for a South India trip?",
      answer:
        "A focused Bangalore–Mysore–Ooty trip may take around 5–6 nights. A wider multi-city circuit may require 7–10 nights, depending on travel distances and sightseeing preferences.",
    },
    {
      question:
        "Can I customise a South India package?",
      answer:
        "You can enquire about changing the destinations, duration, hotel category and sightseeing plan. The final itinerary and price depend on availability and your confirmed travel requirements.",
    },
    {
      question:
        "How do I book a South India tour with LV SKY HIGH?",
      answer:
        "Contact LV SKY HIGH with your travel dates, group size, preferred destinations and approximate budget. The team can help you discuss an itinerary and confirm the available services and pricing.",
    },
  ],
},

// Gujarat


{
  slug: "gujarat",
  name: "Gujarat",
  image: "/images/india-tours/gujarat.jpg",

  heroTitle: "Discover the Vibrant Beauty of Gujarat",

  heroDescription:
    "Explore Gujarat's white salt desert, sacred temples, historic cities and incredible wildlife with thoughtfully planned holiday packages.",

  whyVisit:
    "Gujarat offers a diverse travel experience, from the spectacular white salt desert of the Rann of Kutch to the sacred coastal towns of Dwarka and Somnath. Explore Ahmedabad's historic attractions, experience the seasonal Rann Utsav festival and discover Gir's wildlife. A Gujarat tour can combine desert landscapes, cultural heritage, temples and nature in one memorable holiday.",

  bestTime:
    "November to February is generally the most comfortable period to explore Gujarat, with cooler and drier weather. This season is also associated with the Rann Utsav festival, subject to its announced dates. March to June can be hot, especially inland, while July to September brings monsoon conditions.",

  idealDuration:
    "A focused Rann of Kutch trip can take around 3–4 nights. Combining Kutch with Dwarka and Somnath, or adding a Gir wildlife experience, usually requires approximately 5–7 nights.",

  howToReach:
    "Sardar Vallabhbhai Patel International Airport in Ahmedabad is a major gateway to Gujarat. From Ahmedabad, Kutch can be reached by road, with Bhuj serving as a common base for the region. Dwarka, Somnath and Gir can be incorporated into a wider road itinerary. Rajkot may also be convenient for some routes.",

  packageCount: 7,

  packages: [
    {
      id: "tour-to-kutch",
      title: "Tour to Kutch",
      duration: "3 Nights 4 Days",
      places: ["Ahmedabad", "Bhuj", "Rann of Kutch"],
      description:
        "A focused Rann of Kutch introduction featuring white salt-desert landscapes, local culture and seasonal festival experiences.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Ahmedabad",
          description:
            "Arrive in Ahmedabad and transfer to your accommodation. Explore local attractions if time permits.",
        },
        {
          day: 2,
          title: "Travel to Bhuj",
          description:
            "Travel towards Bhuj and explore selected local attractions or handicraft markets.",
        },
        {
          day: 3,
          title: "Explore the Rann of Kutch",
          description:
            "Visit the white salt desert and enjoy available cultural experiences. Festival activities depend on the season and dates.",
        },
        {
          day: 4,
          title: "Departure",
          description:
            "Return according to your confirmed travel arrangements.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the final itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and festival activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "kutch-with-sasangir",
      title: "Kutch with Sasangir",
      duration: "5 Nights 6 Days",
      places: ["Bhuj", "Rann of Kutch", "Sasan Gir"],
      description:
        "Combines the spectacular salt desert of Kutch with a wildlife experience in the Gir region.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Gujarat",
          description:
            "Arrive at the agreed gateway and travel towards Bhuj.",
        },
        {
          day: 2,
          title: "Kutch Exploration",
          description:
            "Explore selected local attractions and the surrounding desert region.",
        },
        {
          day: 3,
          title: "Rann of Kutch",
          description:
            "Visit the salt desert and enjoy seasonal cultural activities where available.",
        },
        {
          day: 4,
          title: "Travel towards Gir",
          description:
            "Continue towards the Sasan Gir region. Travel time depends on the confirmed route.",
        },
        {
          day: 5,
          title: "Gir Wildlife Experience",
          description:
            "Enjoy a safari if available and booked in advance, subject to park rules and permits.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed intercity transfers",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Wildlife safari charges unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "kutch-with-dwarka-somnath",
      title: "Kutch with Dwarka Somnath",
      duration: "6 Nights 7 Days",
      places: ["Bhuj", "Rann of Kutch", "Dwarka", "Somnath"],
      description:
        "Combines the white salt desert of Kutch with two of Gujarat's best-known pilgrimage destinations.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Gujarat",
          description:
            "Arrive at your confirmed gateway and travel towards Bhuj.",
        },
        {
          day: 2,
          title: "Explore Kutch",
          description:
            "Discover selected attractions around Bhuj and the Kutch region.",
        },
        {
          day: 3,
          title: "Rann of Kutch",
          description:
            "Visit the salt desert and enjoy seasonal cultural experiences.",
        },
        {
          day: 4,
          title: "Journey to Dwarka",
          description:
            "Travel to Dwarka and explore the town according to your schedule.",
        },
        {
          day: 5,
          title: "Dwarka Sightseeing",
          description:
            "Visit selected temples and local attractions, subject to opening hours.",
        },
        {
          day: 6,
          title: "Somnath Visit",
          description:
            "Travel to Somnath and explore the temple area and nearby attractions.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed intercity transfers",
        "Sightseeing specified in the itinerary",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Special temple services and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "dwarka-somnath-tour",
      title: "Dwarka Somnath Tour",
      duration: "4 Nights 5 Days",
      places: ["Dwarka", "Somnath"],
      description:
        "A temple-focused Gujarat circuit featuring Dwarka and Somnath, ideal for travellers interested in spiritual and cultural heritage.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Dwarka",
          description:
            "Arrive at your confirmed gateway and transfer to Dwarka.",
        },
        {
          day: 2,
          title: "Dwarka Temple Visit",
          description:
            "Explore Dwarka's major temple attractions according to local timings.",
        },
        {
          day: 3,
          title: "Travel to Somnath",
          description:
            "Travel to Somnath and enjoy the coastal surroundings.",
        },
        {
          day: 4,
          title: "Somnath Sightseeing",
          description:
            "Visit selected temple and local attractions.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Special temple services and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "gir-wildlife-beach-tour",
      title: "Gir Wildlife & Beach Tour",
      duration: "5 Nights 6 Days",
      places: ["Sasan Gir", "Diu", "Coastal Gujarat"],
      description:
        "Combines a wildlife-focused stay around Gir with time to explore Gujarat's coastal scenery.",
      itinerary: [
        {
          day: 1,
          title: "Arrival near Gir",
          description:
            "Arrive at the agreed gateway and transfer towards Sasan Gir.",
        },
        {
          day: 2,
          title: "Gir Wildlife Experience",
          description:
            "Enjoy a pre-booked safari if available, subject to park rules and permits.",
        },
        {
          day: 3,
          title: "Explore the Region",
          description:
            "Discover selected local attractions and enjoy a relaxed day.",
        },
        {
          day: 4,
          title: "Coastal Journey",
          description:
            "Travel towards the selected coastal destination.",
        },
        {
          day: 5,
          title: "Beach and Leisure",
          description:
            "Enjoy coastal sightseeing and optional activities.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified transfers",
        "Sightseeing listed in the final itinerary",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Safari fees and water activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "saurashtra-darshan-with-ahmedabad",
      title: "Saurashtra Darshan with Ahmedabad",
      duration: "6 Nights 7 Days",
      places: ["Ahmedabad", "Dwarka", "Somnath", "Saurashtra"],
      description:
        "A wider Saurashtra circuit starting from Ahmedabad and combining cultural attractions with important pilgrimage destinations.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Ahmedabad",
          description:
            "Arrive in Ahmedabad and transfer to your accommodation.",
        },
        {
          day: 2,
          title: "Ahmedabad Sightseeing",
          description:
            "Explore selected cultural and historic attractions.",
        },
        {
          day: 3,
          title: "Travel to Dwarka",
          description:
            "Travel towards Dwarka and enjoy the local surroundings.",
        },
        {
          day: 4,
          title: "Dwarka Exploration",
          description:
            "Visit selected temples and local attractions.",
        },
        {
          day: 5,
          title: "Journey to Somnath",
          description:
            "Continue to Somnath and explore the temple area.",
        },
        {
          day: 6,
          title: "Saurashtra Sightseeing",
          description:
            "Explore selected regional attractions according to your itinerary.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and optional experiences unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "best-of-gujarat-tour",
      title: "Best of Gujarat Tour",
      duration: "7 Nights 8 Days",
      places: [
        "Ahmedabad",
        "Bhuj",
        "Rann of Kutch",
        "Dwarka",
        "Somnath",
      ],
      description:
        "A comprehensive Gujarat circuit combining cultural heritage, the white salt desert and major pilgrimage destinations.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Ahmedabad",
          description:
            "Arrive in Ahmedabad and explore selected attractions if time permits.",
        },
        {
          day: 2,
          title: "Ahmedabad to Bhuj",
          description:
            "Travel towards Bhuj and enjoy a relaxed evening.",
        },
        {
          day: 3,
          title: "Kutch Exploration",
          description:
            "Explore the Rann of Kutch and seasonal cultural experiences.",
        },
        {
          day: 4,
          title: "Continue the Gujarat Circuit",
          description:
            "Travel towards Dwarka according to your confirmed route.",
        },
        {
          day: 5,
          title: "Dwarka Sightseeing",
          description:
            "Visit selected temple and cultural attractions.",
        },
        {
          day: 6,
          title: "Travel to Somnath",
          description:
            "Continue to Somnath and explore the local surroundings.",
        },
        {
          day: 7,
          title: "Somnath and Nearby Attractions",
          description:
            "Enjoy sightseeing according to your itinerary and departure arrangements.",
        },
        {
          day: 8,
          title: "Departure",
          description:
            "Transfer to your confirmed departure point.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Specified intercity transfers",
        "Sightseeing listed in the final itinerary",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },
  ],

  honeymoonText:
    "Gujarat can offer couples a distinctive holiday combining desert landscapes, heritage experiences and coastal scenery. A customised itinerary can include the Rann of Kutch, selected cultural attractions or a relaxing coastal stay. Choose the pace and destinations according to your preferences.",

  familyText:
    "Gujarat is suitable for families interested in culture, wildlife and regional sightseeing. Kutch offers unique desert landscapes, while temple towns and Ahmedabad provide cultural experiences. The itinerary can be adjusted to suit children's ages and the family's travel pace.",

  groupText:
    "Gujarat offers options for group holidays, cultural tours and seasonal Rann Utsav trips. Group itineraries can be planned around travel dates, accommodation requirements, transport and preferred attractions.",

  faqs: [
    {
      question: "Is the Rann Utsav festival included in every package?",
      answer:
        "No. Festival access and activities depend on the travel dates, the announced festival schedule and the selected package. Confirm availability and any separate charges before booking.",
    },
    {
      question: "Is a lion sighting guaranteed at Gir?",
      answer:
        "No. Gir is a wildlife habitat, and animal sightings cannot be guaranteed. Safari access is subject to availability, permits, park regulations and the selected safari zone.",
    },
    {
      question: "How far is Kutch from Ahmedabad?",
      answer:
        "Travel time depends on your destination within Kutch and the route. Ahmedabad to Bhuj is a substantial road journey, so allow sufficient time and confirm the transport plan before travelling.",
    },
    {
      question: "What is the best time to visit Gujarat?",
      answer:
        "November to February is generally comfortable for sightseeing and is associated with the Rann Utsav season. Check the official festival dates and local conditions for your planned travel period.",
    },
    {
      question: "How do I book a customised Gujarat tour?",
      answer:
        "Contact LV SKY HIGH with your travel dates, group size, preferred destinations and approximate budget. Your itinerary and final price can then be discussed according to availability and selected services.",
    },
  ],
},

// Auli


{
  slug: "auli",
  name: "Auli",
  image: "/images/india-tours/auli.jpg",

  heroTitle: "Discover the Snowy Beauty of Auli",

  heroDescription:
    "Experience Himalayan mountain views, scenic ropeway rides and winter adventures with a memorable Auli holiday planned around your travel dates.",

  whyVisit:
    "Auli is a scenic mountain destination in Uttarakhand's Garhwal Himalaya, known for its ski slopes, ropeway rides and panoramic views of Nanda Devi and surrounding peaks. Travellers can combine Auli with Chopta, a popular base for Tungnath and Chandrashila treks, or extend their holiday to Haridwar and Rishikesh for a wider Uttarakhand experience.",

  bestTime:
    "December to February is the main winter season for snow and skiing, although actual snow conditions vary each year. March to June is suitable for mountain views and sightseeing. July to September is the monsoon season, when rain, road conditions and landslide risks may affect travel.",

  idealDuration:
    "A focused Auli holiday generally takes 2–3 nights. Combining Auli with Chopta or Haridwar and Rishikesh usually requires around 4–5 nights, depending on your itinerary and travel time.",

  howToReach:
    "Jolly Grant Airport in Dehradun is the nearest major airport. Auli is reached by road via Rishikesh and Joshimath, followed by the ropeway where operational and suitable for your travel plans. Road journeys can be long, so allow sufficient travel time and confirm current road and ropeway conditions before departure.",

  packageCount: 5,

  packages: [
    {
      id: "amazing-auli-tour",
      title: "Amazing Auli Tour",
      duration: "2 Nights 3 Days",
      places: ["Joshimath", "Auli"],
      description:
        "A classic Auli introduction featuring mountain views, a scenic ropeway experience where operational and time to explore the surrounding slopes.",
      itinerary: [
        {
          day: 1,
          title: "Arrival at Joshimath",
          description:
            "Arrive at Joshimath, check in to your accommodation and prepare for the onward journey to Auli.",
        },
        {
          day: 2,
          title: "Explore Auli",
          description:
            "Enjoy mountain scenery, visit accessible viewpoints and experience skiing or snow activities when conditions and facilities permit.",
        },
        {
          day: 3,
          title: "Departure",
          description:
            "Enjoy breakfast and depart according to your confirmed transport arrangements.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the final itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Ski equipment and lessons unless specified",
        "Ropeway tickets and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "auli-with-chopta",
      title: "Auli with Chopta",
      duration: "4 Nights 5 Days",
      places: ["Joshimath", "Auli", "Chopta"],
      description:
        "Combines Auli's mountain scenery with Chopta's trekking landscapes for a broader Himalayan holiday.",
      itinerary: [
        {
          day: 1,
          title: "Arrival at Joshimath",
          description:
            "Arrive at Joshimath and settle into your accommodation.",
        },
        {
          day: 2,
          title: "Auli Sightseeing",
          description:
            "Explore Auli's viewpoints and enjoy ropeway or snow activities if available.",
        },
        {
          day: 3,
          title: "Travel to Chopta",
          description:
            "Travel towards Chopta and enjoy the surrounding mountain scenery.",
        },
        {
          day: 4,
          title: "Chopta and Trekking Experience",
          description:
            "Explore Chopta or undertake a suitable trek depending on weather, route accessibility and fitness level.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Depart for your confirmed onward destination.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Listed intercity transfers",
        "Sightseeing included in the itinerary",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Trekking guides and permits unless specified",
        "Equipment rentals and optional activities unless specified",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "auli-with-haridwar-rishikesh",
      title: "Auli with Haridwar Rishikesh",
      duration: "5 Nights 6 Days",
      places: ["Haridwar", "Rishikesh", "Joshimath", "Auli"],
      description:
        "Adds the spiritual atmosphere of Haridwar and the riverside attractions of Rishikesh to an Auli mountain holiday.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Haridwar",
          description:
            "Arrive in Haridwar and explore the local area or attend the evening Ganga Aarti if timings permit.",
        },
        {
          day: 2,
          title: "Explore Rishikesh",
          description:
            "Visit selected riverside attractions and explore Rishikesh before continuing your journey.",
        },
        {
          day: 3,
          title: "Journey to Joshimath",
          description:
            "Travel through the Himalayan foothills towards Joshimath.",
        },
        {
          day: 4,
          title: "Auli Sightseeing",
          description:
            "Explore Auli's mountain viewpoints and available seasonal activities.",
        },
        {
          day: 5,
          title: "Auli and Surroundings",
          description:
            "Enjoy a relaxed day for sightseeing, ropeway access or snow activities where available.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Begin your return journey according to your confirmed transport plan.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Ropeway tickets and optional activities unless specified",
        "Rafting, adventure activities and special services unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "honeymoon-in-auli",
      title: "Honeymoon in Auli",
      duration: "3 Nights 4 Days",
      places: ["Joshimath", "Auli"],
      description:
        "A couple-friendly mountain getaway featuring peaceful surroundings, scenic Himalayan views and a relaxed holiday pace.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Leisure",
          description:
            "Arrive at Joshimath, settle into your accommodation and enjoy a relaxed evening.",
        },
        {
          day: 2,
          title: "Romantic Auli Escape",
          description:
            "Explore scenic viewpoints and enjoy a ropeway ride if operational and included in your plan.",
        },
        {
          day: 3,
          title: "Mountain Leisure",
          description:
            "Spend the day enjoying the surroundings, photography and seasonal activities according to local conditions.",
        },
        {
          day: 4,
          title: "Departure",
          description:
            "Enjoy breakfast and depart according to your confirmed schedule.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers specified in the itinerary",
        "Couple-friendly arrangements where confirmed",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Special room decorations and romantic add-ons unless specified",
        "Ropeway tickets and optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "winter-auli-snow-skiing",
      title: "Winter Auli Snow Skiing",
      duration: "3 Nights 4 Days",
      places: ["Joshimath", "Auli Ski Slopes"],
      description:
        "A winter-focused Auli experience planned around skiing, snow scenery and seasonal mountain activities, subject to snow conditions.",
      itinerary: [
        {
          day: 1,
          title: "Arrival at Joshimath",
          description:
            "Arrive at Joshimath and prepare for the winter mountain experience.",
        },
        {
          day: 2,
          title: "Auli Snow Experience",
          description:
            "Travel to Auli when access is available and explore the ski area according to current conditions.",
        },
        {
          day: 3,
          title: "Skiing and Winter Activities",
          description:
            "Enjoy skiing lessons or equipment rental if available and booked. Activities depend on snow cover, weather and operator availability.",
        },
        {
          day: 4,
          title: "Departure",
          description:
            "Return according to your confirmed transport arrangements.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the final itinerary",
        "Skiing activities only where explicitly included",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Ski equipment, lessons and instructor fees unless specified",
        "Ropeway tickets unless included",
        "Personal expenses and unlisted meals",
      ],
    },
  ],

  honeymoonText:
    "Auli is a distinctive mountain getaway for couples who enjoy scenic Himalayan views, peaceful surroundings and seasonal snow experiences. A customised honeymoon itinerary can include relaxed sightseeing, selected viewpoints and nearby destinations, depending on road access and weather.",

  familyText:
    "Auli can suit families looking for mountain scenery and seasonal outdoor experiences. Ropeway access, snow activities and beginner-friendly skiing depend on current conditions and availability. Travel plans can be adjusted for children and the family's preferred pace.",

  groupText:
    "Auli offers options for group holidays, college trips and winter adventure outings. Group itineraries can include sightseeing, seasonal snow activities and nearby destinations. Skiing, equipment and instructor arrangements should be confirmed in advance.",

  faqs: [
    {
      question: "Is ski equipment included in Auli packages?",
      answer:
        "Equipment rental and skiing lessons depend on the selected package. Confirm whether equipment, instructor fees and activity charges are included or available as add-ons before booking.",
    },
    {
      question: "Do I need snow for a good Auli trip?",
      answer:
        "No. Auli also offers mountain scenery and sightseeing outside the main snow season. However, skiing and snow-based activities depend on actual snowfall, weather and facility availability.",
    },
    {
      question: "Is Auli suitable for beginners?",
      answer:
        "Auli can be suitable for beginners when suitable slopes, instructors and equipment are available. Choose activities according to your experience and current conditions, and follow local safety guidance.",
    },
    {
      question: "When is the best time to visit Auli?",
      answer:
        "December to February is generally the main period for winter and skiing experiences, depending on snowfall. March to June is often suitable for mountain views and sightseeing. Check current weather and access conditions before travelling.",
    },
    {
      question: "How do I book a customised Auli trip?",
      answer:
        "Contact LV SKY HIGH with your travel dates, group size, preferred activities and approximate budget. The itinerary and final price can then be discussed according to accommodation, transport and activity availability.",
    },
  ],
},

// Mussoorie 


{
  slug: "mussoorie",
  name: "Mussoorie",
  image: "/images/india-tours/mussoorie.jpg",

  heroTitle: "Explore the Queen of the Hills",

  heroDescription:
    "Discover Mussoorie's scenic mountain views, Mall Road, Kempty Falls and peaceful hill-station escapes with a customised holiday itinerary.",

  whyVisit:
    "Mussoorie, popularly known as the Queen of the Hills, is one of Uttarakhand's most visited hill stations. It is known for Mall Road, Kempty Falls, scenic cable-car rides and panoramic Himalayan views on clear days. Its proximity to Dehradun makes it easy to combine Mussoorie with Dhanaulti, Haridwar, Rishikesh or a wider Uttarakhand holiday.",

  bestTime:
    "March to June is popular for pleasant weather and sightseeing. July to September brings monsoon greenery but also frequent rain and mist. October to February offers cooler weather, clear days at times and occasional snowfall during winter.",

  idealDuration:
    "A standalone Mussoorie holiday generally takes 2–3 nights. Combining Mussoorie with Dhanaulti, Haridwar, Rishikesh or Jim Corbett usually requires around 4–5 nights, depending on travel time and sightseeing preferences.",

  howToReach:
    "Jolly Grant Airport in Dehradun is the nearest major airport. Dehradun railway station connects with Delhi and other major cities. From Dehradun, Mussoorie is reached by road, usually taking around 1–2 hours depending on traffic and weather.",

  packageCount: 5,

  packages: [
    {
      id: "trip-to-mussoorie",
      title: "Trip to Mussoorie",
      duration: "2 Nights 3 Days",
      places: ["Mussoorie", "Mall Road", "Kempty Falls"],
      description:
        "A classic standalone Mussoorie getaway with scenic viewpoints and popular local attractions.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mussoorie",
          description:
            "Arrive in Mussoorie, check in to your hotel and explore Mall Road in the evening.",
        },
        {
          day: 2,
          title: "Mussoorie Sightseeing",
          description:
            "Visit Kempty Falls and selected viewpoints. Enjoy local sightseeing and a cable-car ride if operational and included in your plan.",
        },
        {
          day: 3,
          title: "Leisure and Departure",
          description:
            "Enjoy breakfast, explore nearby attractions if time permits and depart for your onward journey.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the final itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and cable-car tickets unless specified",
        "Personal expenses and unlisted meals",
        "Optional activities not listed in the package",
      ],
    },

    {
      id: "honeymoon-in-mussoorie",
      title: "Honeymoon in Mussoorie",
      duration: "3 Nights 4 Days",
      places: ["Mussoorie", "Mall Road", "Landour"],
      description:
        "A couple-friendly Mussoorie itinerary with romantic viewpoints, relaxed sightseeing and peaceful mountain surroundings.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Leisure",
          description:
            "Arrive in Mussoorie, check in to your accommodation and enjoy a relaxed evening together.",
        },
        {
          day: 2,
          title: "Romantic Mussoorie",
          description:
            "Explore Mall Road, visit selected viewpoints and enjoy the mountain scenery.",
        },
        {
          day: 3,
          title: "Landour and Local Exploration",
          description:
            "Explore Landour and its scenic surroundings, allowing time for photography and a relaxed couple's outing.",
        },
        {
          day: 4,
          title: "Breakfast and Departure",
          description:
            "Enjoy breakfast and depart according to your confirmed transport schedule.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers specified in the itinerary",
        "Couple-friendly arrangements where confirmed",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Special room decorations and romantic add-ons unless specified",
        "Entry fees and optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "mussoorie-with-haridwar-rishikesh",
      title: "Mussoorie with Haridwar Rishikesh",
      duration: "4 Nights 5 Days",
      places: ["Mussoorie", "Haridwar", "Rishikesh"],
      description:
        "Combines a scenic hill-station holiday with Haridwar's spiritual attractions and Rishikesh's riverside experiences.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mussoorie",
          description:
            "Arrive in Mussoorie, check in and enjoy the local surroundings.",
        },
        {
          day: 2,
          title: "Mussoorie Sightseeing",
          description:
            "Explore Mall Road, Kempty Falls and selected local viewpoints.",
        },
        {
          day: 3,
          title: "Travel to Haridwar",
          description:
            "Travel to Haridwar and explore local attractions. Attend the Ganga Aarti if timings permit.",
        },
        {
          day: 4,
          title: "Explore Rishikesh",
          description:
            "Visit selected riverside attractions and explore Rishikesh before returning to your accommodation.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Enjoy breakfast and depart according to your confirmed onward journey.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and optional activities unless specified",
        "Rafting and adventure activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "mussoorie-with-corbett-nainital",
      title: "Mussoorie with Corbett Nainital",
      duration: "5 Nights 6 Days",
      places: ["Mussoorie", "Jim Corbett", "Nainital"],
      description:
        "Adds the lake town of Nainital and a wildlife experience in the Jim Corbett region to your Mussoorie holiday.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mussoorie",
          description:
            "Arrive in Mussoorie and relax after your journey.",
        },
        {
          day: 2,
          title: "Mussoorie Exploration",
          description:
            "Explore Mall Road, Kempty Falls and selected scenic viewpoints.",
        },
        {
          day: 3,
          title: "Travel to the Corbett Region",
          description:
            "Travel towards the Jim Corbett region and check in to your accommodation.",
        },
        {
          day: 4,
          title: "Wildlife Experience",
          description:
            "Enjoy a safari only if booked and available under current park rules, followed by onward travel arrangements as planned.",
        },
        {
          day: 5,
          title: "Explore Nainital",
          description:
            "Visit Nainital's lakefront and selected local attractions.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Depart for your onward destination according to the confirmed itinerary.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Wildlife safari permits and fees unless specified",
        "Boating and optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "mussoorie-with-jim-corbett",
      title: "Mussoorie with Jim Corbett",
      duration: "4 Nights 5 Days",
      places: ["Mussoorie", "Jim Corbett"],
      description:
        "Pairs Mussoorie's hill-station scenery with a wildlife-focused stay in the Jim Corbett region.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mussoorie",
          description:
            "Arrive in Mussoorie and settle into your accommodation.",
        },
        {
          day: 2,
          title: "Mussoorie Sightseeing",
          description:
            "Explore Mall Road, nearby viewpoints and Kempty Falls, subject to local conditions.",
        },
        {
          day: 3,
          title: "Travel to Jim Corbett",
          description:
            "Travel to the Jim Corbett region and check in to your accommodation.",
        },
        {
          day: 4,
          title: "Corbett Wildlife Experience",
          description:
            "Enjoy a pre-booked safari if available, or explore other permitted local activities.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Enjoy breakfast and depart according to your confirmed transport arrangements.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Safari permits and charges unless specified",
        "Optional activities and entry fees unless included",
        "Personal expenses and unlisted meals",
      ],
    },
  ],

  honeymoonText:
    "Mussoorie is a popular short honeymoon destination for couples who enjoy mountain views, cosy stays and relaxed sightseeing. A customised itinerary can include Mall Road, Landour, scenic viewpoints and nearby attractions at a comfortable pace.",

  familyText:
    "Mussoorie suits family holidays with accessible sightseeing, mountain viewpoints and local attractions. Families can plan visits to Kempty Falls and Mall Road, with the itinerary adjusted for children, older travellers and weather conditions.",

  groupText:
    "Mussoorie is suitable for group holidays, college trips and family gatherings. Group itineraries can include sightseeing, nearby destinations and coordinated transport, with accommodation and activity arrangements confirmed in advance.",

  faqs: [
    {
      question: "Is the cable car to Gun Hill included?",
      answer:
        "Cable-car tickets depend on the selected package and current operations. Confirm with your travel expert whether tickets are included or need to be purchased separately.",
    },
    {
      question: "Can Mussoorie be combined with Dhanaulti?",
      answer:
        "Yes. Mussoorie can be combined with Dhanaulti for a wider hill-station holiday. The number of nights will depend on your travel dates and preferred sightseeing.",
    },
    {
      question: "Does it snow in Mussoorie?",
      answer:
        "Snowfall is occasional, mainly during winter, and is not guaranteed. Check the latest weather forecast before planning a snow-focused trip.",
    },
    {
      question: "What is the best time to visit Mussoorie?",
      answer:
        "March to June is popular for pleasant weather and sightseeing. October to February offers cooler conditions, while July to September is the monsoon season and may bring rain and mist.",
    },
    {
      question: "How do I book a customised Mussoorie itinerary?",
      answer:
        "Contact LV SKY HIGH with your travel dates, group size, preferred attractions and budget. Your itinerary and final pricing can then be planned around availability and transport requirements.",
    },
  ],
},


// Munsiyari 



{
  slug: "munsiyari",
  name: "Munsiyari",
  image: "/images/india-tours/munsiyari.jpg",

  heroTitle: "Discover the Himalayan Beauty of Munsiyari",

  heroDescription:
    "Explore the majestic Panchachuli peaks, peaceful mountain villages and scenic Himalayan landscapes with a memorable Munsiyari holiday.",

  whyVisit:
    "Munsiyari is a remote hill town in Uttarakhand's Kumaon region, known for its close-up views of the Panchachuli peaks and as a starting point for treks towards the Milam Glacier and Nanda Devi's eastern ranges. Its less-developed character makes it appealing to travellers seeking an offbeat Himalayan holiday. It can also be combined with Corbett, Nainital and other Kumaon destinations.",

  bestTime:
    "April to June and September to November generally offer clear mountain views. July to August is the monsoon season, when heavy rain may affect road travel. December to March can bring cold weather and snowfall, potentially restricting some routes.",

  idealDuration:
    "A Munsiyari-focused trip generally needs 3–4 nights because of the long road journey. Combining Munsiyari with Corbett, Nainital, Kausani or Chaukori may require 6–7 nights or more.",

  howToReach:
    "Pantnagar is the nearest airport, followed by a long road journey to Munsiyari. Travellers can also reach the Kumaon region by rail and continue by road via towns such as Almora or Bageshwar. Road travel times depend on the starting point, traffic and weather conditions.",

  packageCount: 5,

  packages: [
    {
      id: "trip-to-munsiyari",
      title: "Trip to Munsiyari",
      duration: "3 Nights 4 Days",
      places: ["Munsiyari", "Panchachuli Viewpoints"],
      description:
        "A focused Munsiyari and Panchachuli-view trip for travellers seeking peaceful mountain scenery.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Munsiyari",
          description:
            "Arrive in Munsiyari, check in to your accommodation and relax after the road journey.",
        },
        {
          day: 2,
          title: "Panchachuli Mountain Views",
          description:
            "Explore local viewpoints and enjoy views of the Panchachuli peaks, weather permitting.",
        },
        {
          day: 3,
          title: "Explore Munsiyari",
          description:
            "Discover nearby villages, local culture and scenic surroundings at a relaxed pace.",
        },
        {
          day: 4,
          title: "Departure",
          description:
            "Enjoy breakfast and begin your onward road journey.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers specified in the itinerary",
        "Sightseeing listed in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Trekking permits and guide charges unless specified",
        "Personal expenses and unlisted meals",
        "Activities not mentioned in the itinerary",
      ],
    },

    {
      id: "honeymoon-in-munsiyari",
      title: "Honeymoon in Munsiyari",
      duration: "3 Nights 4 Days",
      places: ["Munsiyari", "Panchachuli Viewpoints"],
      description:
        "A peaceful Himalayan honeymoon itinerary with mountain views, scenic drives and relaxed couple-friendly sightseeing.",
      itinerary: [
        {
          day: 1,
          title: "Arrival and Relaxation",
          description:
            "Arrive in Munsiyari, check in to your accommodation and enjoy a quiet evening.",
        },
        {
          day: 2,
          title: "Romantic Mountain Views",
          description:
            "Explore scenic viewpoints and enjoy the Panchachuli mountain panorama when visibility permits.",
        },
        {
          day: 3,
          title: "Local Exploration",
          description:
            "Discover nearby villages and enjoy a relaxed day amid the Himalayan scenery.",
        },
        {
          day: 4,
          title: "Breakfast and Departure",
          description:
            "Enjoy breakfast and depart according to your travel arrangements.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Couple-friendly arrangements where confirmed",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Special room decorations unless specified",
        "Personal expenses and unlisted meals",
        "Optional activities not included in the package",
      ],
    },

    {
      id: "munsiyari-with-kumaon-hills",
      title: "Munsiyari with Kumaon Hills",
      duration: "5 Nights 6 Days",
      places: ["Munsiyari", "Almora", "Bageshwar"],
      description:
        "Combines Munsiyari with the wider Kumaon region for a scenic mountain and cultural circuit.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kumaon",
          description:
            "Arrive in the Kumaon region and continue to your planned overnight destination.",
        },
        {
          day: 2,
          title: "Journey to Munsiyari",
          description:
            "Travel through scenic mountain roads towards Munsiyari.",
        },
        {
          day: 3,
          title: "Munsiyari Sightseeing",
          description:
            "Explore local attractions and enjoy views of the Panchachuli range when weather permits.",
        },
        {
          day: 4,
          title: "Explore the Kumaon Region",
          description:
            "Begin the return journey with sightseeing or an overnight stop as confirmed in the itinerary.",
        },
        {
          day: 5,
          title: "Almora or Bageshwar",
          description:
            "Explore selected local attractions and experience Kumaon's regional culture.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Depart for your onward destination.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Specified sightseeing",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and guide charges unless specified",
        "Personal expenses and unlisted meals",
        "Optional activities not included in the package",
      ],
    },

    {
      id: "munsiyari-with-corbett-nainital",
      title: "Munsiyari with Corbett Nainital",
      duration: "6 Nights 7 Days",
      places: ["Munsiyari", "Jim Corbett Region", "Nainital"],
      description:
        "Adds the tiger-reserve region and Nainital's lake scenery to an extended Munsiyari holiday.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kumaon",
          description:
            "Arrive in the Kumaon region and continue to your planned overnight stop.",
        },
        {
          day: 2,
          title: "Travel to Munsiyari",
          description:
            "Continue through the mountain roads towards Munsiyari.",
        },
        {
          day: 3,
          title: "Munsiyari Exploration",
          description:
            "Explore local viewpoints and enjoy the Himalayan scenery.",
        },
        {
          day: 4,
          title: "Return Journey",
          description:
            "Begin the return journey towards the planned overnight stop in Kumaon.",
        },
        {
          day: 5,
          title: "Jim Corbett Region",
          description:
            "Travel towards the Jim Corbett region. Safari activities are subject to booking availability and park rules.",
        },
        {
          day: 6,
          title: "Nainital Sightseeing",
          description:
            "Explore Nainital's lakefront and selected local attractions.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Depart according to the confirmed onward travel arrangements.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Safari fees unless specified",
        "Boating and optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "munsiyari-with-nainital-kausani-chaukori",
      title: "Munsiyari with Nainital, Kausani & Chaukori",
      duration: "7 Nights 8 Days",
      places: [
        "Munsiyari",
        "Nainital",
        "Kausani",
        "Chaukori",
      ],
      description:
        "An extended Kumaon circuit combining Munsiyari with Nainital, Kausani and Chaukori.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Nainital",
          description:
            "Arrive in Nainital and explore the local surroundings as time permits.",
        },
        {
          day: 2,
          title: "Nainital Sightseeing",
          description:
            "Visit selected lake-town attractions and enjoy the surrounding hills.",
        },
        {
          day: 3,
          title: "Travel to Kausani",
          description:
            "Travel to Kausani and enjoy mountain views when weather conditions permit.",
        },
        {
          day: 4,
          title: "Journey to Munsiyari",
          description:
            "Continue through Kumaon's scenic mountain roads towards Munsiyari.",
        },
        {
          day: 5,
          title: "Munsiyari Sightseeing",
          description:
            "Explore local attractions and enjoy views of the Panchachuli peaks.",
        },
        {
          day: 6,
          title: "Travel to Chaukori",
          description:
            "Begin the return journey with an overnight stop at Chaukori, subject to the final route plan.",
        },
        {
          day: 7,
          title: "Kumaon Exploration",
          description:
            "Enjoy selected sightseeing before travelling towards your departure point.",
        },
        {
          day: 8,
          title: "Departure",
          description:
            "Complete your onward journey according to the confirmed itinerary.",
        },
      ],
      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],
      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and guide charges unless specified",
        "Personal expenses and unlisted meals",
        "Optional activities not included in the package",
      ],
    },
  ],

  honeymoonText:
    "Munsiyari is a peaceful offbeat honeymoon destination for couples who enjoy mountain scenery, quiet stays and scenic drives. A customised trip can include Panchachuli viewpoints and nearby Kumaon destinations.",

  familyText:
    "Munsiyari can be a rewarding family destination for travellers comfortable with long mountain-road journeys. Plan suitable driving breaks and adjust sightseeing according to children's needs, weather and road conditions.",

  groupText:
    "Munsiyari can be included in small-group mountain holidays and Kumaon road trips. Group transport, accommodation and sightseeing should be planned in advance because of the remote location and longer travel times.",

  faqs: [
    {
      question: "Is Munsiyari hard to reach?",
      answer:
        "Munsiyari requires a long road journey because there is no airport in the town. Many travellers combine it with a wider Kumaon itinerary to make the most of the travel time.",
    },
    {
      question: "Is the Milam Glacier trek included?",
      answer:
        "The Milam Glacier trek is not automatically included in a standard Munsiyari sightseeing package. Trekking arrangements, permits, guides and additional nights must be confirmed separately.",
    },
    {
      question: "What's the best time for Panchachuli peak views?",
      answer:
        "April to June and September to November often offer favourable viewing conditions. Mountain visibility depends on the weather, so clear views cannot be guaranteed.",
    },
    {
      question: "Can Munsiyari be combined with Nainital?",
      answer:
        "Yes. Munsiyari can be combined with Nainital, Kausani, Chaukori or other Kumaon destinations. Allow enough time for the long mountain-road transfers.",
    },
    {
      question: "How do I book a customised itinerary?",
      answer:
        "Share your travel dates, group size, starting city and preferred destinations with LV SKY HIGH. The itinerary and final pricing can be planned according to road conditions and availability.",
    },
  ],
},

// Dhanaulti 


{
  slug: "dhanaulti",
  name: "Dhanaulti",
  image: "/images/india-tours/dhanaulti.jpg",

  heroTitle: "Explore the Peaceful Hills of Dhanaulti",

  heroDescription:
    "Escape into the peaceful Himalayan hills of Dhanaulti, surrounded by deodar forests, scenic mountain viewpoints and refreshing nature trails.",

  whyVisit:
    "Dhanaulti is a quiet hill town in Uttarakhand, known for its deodar and rhododendron forests, Eco Park, Himalayan viewpoints and relaxed atmosphere. Less crowded than nearby Mussoorie, it is ideal for travellers seeking a peaceful mountain getaway. Dhanaulti can also be combined with Mussoorie, Corbett or Haridwar-Rishikesh for a longer Uttarakhand holiday.",

  bestTime:
    "March to June generally offers pleasant weather for sightseeing and forest walks. July to September is the monsoon season, with lush greenery but potentially wet trails and road disruptions. October to February often brings clearer skies and cold winter weather, with occasional snowfall.",

  idealDuration:
    "A standalone Dhanaulti trip usually needs 2 nights. Combining Dhanaulti with Mussoorie, Corbett or Haridwar-Rishikesh generally requires 4–5 nights, depending on the selected destinations.",

  howToReach:
    "Jolly Grant Airport in Dehradun is the nearest major airport, followed by a road journey to Dhanaulti. Dehradun railway station is another convenient arrival point. Travellers can also combine Dhanaulti with Mussoorie, approximately a short onward drive away, depending on traffic and road conditions.",

  packageCount: 5,

  packages: [
    {
      id: "trip-to-dhanaulti",
      title: "Trip to Dhanaulti",
      duration: "2 Nights 3 Days",
      places: ["Dhanaulti", "Eco Park", "Himalayan Viewpoints"],
      description:
        "A quiet standalone Dhanaulti getaway with forest walks, scenic viewpoints and relaxing mountain surroundings.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Dhanaulti",
          description:
            "Arrive in Dhanaulti, check in to your hotel and enjoy the peaceful mountain atmosphere.",
        },
        {
          day: 2,
          title: "Dhanaulti Sightseeing",
          description:
            "Visit Eco Park, explore forest trails and enjoy nearby mountain viewpoints as weather permits.",
        },
        {
          day: 3,
          title: "Breakfast and Departure",
          description:
            "Enjoy breakfast and begin your onward journey.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and activity charges unless specified",
        "Personal expenses and unlisted meals",
        "Optional activities not mentioned in the package",
      ],
    },

    {
      id: "honeymoon-in-dhanaulti",
      title: "Honeymoon in Dhanaulti",
      duration: "2 Nights 3 Days",
      places: ["Dhanaulti", "Eco Park", "Forest Viewpoints"],
      description:
        "A relaxing mountain honeymoon with peaceful forest surroundings, scenic views and couple-friendly stays.",

      itinerary: [
        {
          day: 1,
          title: "Arrival and Relaxation",
          description:
            "Arrive in Dhanaulti, settle into your accommodation and enjoy a peaceful evening together.",
        },
        {
          day: 2,
          title: "Romantic Mountain Escape",
          description:
            "Explore Eco Park and nearby viewpoints, followed by relaxed time amid the deodar forests.",
        },
        {
          day: 3,
          title: "Breakfast and Departure",
          description:
            "Enjoy breakfast and depart according to your travel arrangements.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Couple-friendly arrangements where confirmed",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Special room decorations unless specified",
        "Personal expenses and unlisted meals",
        "Optional activities not mentioned in the package",
      ],
    },

    {
      id: "dhanaulti-with-haridwar-rishikesh",
      title: "Dhanaulti with Haridwar Rishikesh",
      duration: "4 Nights 5 Days",
      places: ["Dhanaulti", "Haridwar", "Rishikesh"],
      description:
        "Combines peaceful Himalayan hills with the spiritual attractions and Ganga ghats of Haridwar and Rishikesh.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Haridwar",
          description:
            "Arrive in Haridwar and explore the local surroundings. Attend the Ganga Aarti if timing permits.",
        },
        {
          day: 2,
          title: "Rishikesh Exploration",
          description:
            "Explore selected ghats, temples and riverside attractions in Rishikesh.",
        },
        {
          day: 3,
          title: "Journey to Dhanaulti",
          description:
            "Travel towards Dhanaulti through scenic mountain roads and check in to your accommodation.",
        },
        {
          day: 4,
          title: "Dhanaulti Sightseeing",
          description:
            "Visit Eco Park, enjoy forest walks and explore nearby viewpoints as weather permits.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Enjoy breakfast and depart for your onward destination.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and guide charges unless specified",
        "Adventure activities and rafting unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "dhanaulti-with-corbett-nainital",
      title: "Dhanaulti with Corbett Nainital",
      duration: "5 Nights 6 Days",
      places: ["Dhanaulti", "Jim Corbett Region", "Nainital"],
      description:
        "Combines Dhanaulti's forested hills with Nainital's lakeside attractions and the Jim Corbett wildlife region.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Dhanaulti",
          description:
            "Arrive in Dhanaulti, check in and relax amid the mountain surroundings.",
        },
        {
          day: 2,
          title: "Dhanaulti Sightseeing",
          description:
            "Explore Eco Park, local viewpoints and nearby forest trails.",
        },
        {
          day: 3,
          title: "Travel to the Corbett Region",
          description:
            "Travel towards the Jim Corbett region, allowing sufficient time for the road journey.",
        },
        {
          day: 4,
          title: "Corbett Wildlife Experience",
          description:
            "Enjoy leisure time or a pre-booked safari, subject to availability and park regulations.",
        },
        {
          day: 5,
          title: "Nainital Sightseeing",
          description:
            "Travel to Nainital and explore the lakefront and selected local attractions.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Depart according to your onward travel arrangements.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Corbett safari fees unless specified",
        "Boating and optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "dhanaulti-with-jim-corbett",
      title: "Dhanaulti with Jim Corbett",
      duration: "4 Nights 5 Days",
      places: ["Dhanaulti", "Jim Corbett Region"],
      description:
        "Pairs Dhanaulti's peaceful forest scenery with a wildlife-focused stay in the Jim Corbett region.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Dhanaulti",
          description:
            "Arrive in Dhanaulti and settle into your accommodation.",
        },
        {
          day: 2,
          title: "Dhanaulti Exploration",
          description:
            "Visit Eco Park, enjoy forest walks and explore nearby scenic viewpoints.",
        },
        {
          day: 3,
          title: "Travel to Jim Corbett",
          description:
            "Depart for the Jim Corbett region and check in to your accommodation.",
        },
        {
          day: 4,
          title: "Wildlife and Leisure",
          description:
            "Enjoy a pre-booked safari if available or explore activities offered by your accommodation.",
        },
        {
          day: 5,
          title: "Departure",
          description:
            "Enjoy breakfast and begin your onward journey.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Safari fees unless specified",
        "Entry fees and optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },
  ],

  honeymoonText:
    "Dhanaulti is a lovely option for couples seeking a quieter mountain honeymoon away from busy tourist centres. Forest-side accommodation, scenic drives and peaceful viewpoints make it suitable for a relaxed short break.",

  familyText:
    "Dhanaulti suits families looking for forest walks, mountain scenery and a slower-paced holiday. Families can combine it with Mussoorie, while adjusting outdoor activities to the weather and children's needs.",

  groupText:
    "Dhanaulti can be included in group holidays, school outings and Uttarakhand road trips. Transport, accommodation and sightseeing can be planned according to group size and seasonal road conditions.",

  faqs: [
    {
      question: "Is Dhanaulti quieter than Mussoorie?",
      answer:
        "Dhanaulti is generally known for a quieter atmosphere and forest surroundings compared with busier Mussoorie. Visitor numbers can still increase during holidays and peak travel seasons.",
    },
    {
      question: "Can Dhanaulti be visited as a day trip from Mussoorie?",
      answer:
        "Yes, a day trip may be possible from Mussoorie depending on traffic, weather and the sightseeing schedule. Staying overnight allows more time to explore at a relaxed pace.",
    },
    {
      question: "Does it snow in Dhanaulti?",
      answer:
        "Dhanaulti can experience snowfall during winter, but it is not guaranteed. Conditions depend on the weather, and snowfall may affect road access.",
    },
    {
      question: "What is the best time to visit Dhanaulti?",
      answer:
        "March to June is popular for pleasant weather, while October to February can offer crisp mountain views and cold winter conditions. Monsoon travel requires extra attention to road and trail conditions.",
    },
    {
      question: "How do I book a customised itinerary?",
      answer:
        "Share your travel dates, starting city, group size and preferred destinations with LV SKY HIGH. Your itinerary and final pricing can then be planned according to availability and travel requirements.",
    },
  ],
},

// Coorg 

{
  slug: "coorg",
  name: "Coorg",
  image: "/images/india-tours/coorg.jpg",

  heroTitle: "Explore the Coffee Hills of Coorg",

  heroDescription:
    "Discover the scenic beauty of Coorg, Karnataka, with lush coffee plantations, misty hills, beautiful waterfalls and peaceful forest trails.",

  whyVisit:
    "Coorg (officially Kodagu district) is Karnataka's coffee-growing hill region, known for its estate stays, spice plantations, Abbey Falls and the Dubare elephant camp on the Kaveri river. Because it's a relatively short drive from Bangalore and close to Mysore, Ooty and Wayanad, most South India itineraries combine Coorg with one or more of these destinations rather than visiting it alone.",

  bestTime:
    "October to March is the most popular window, with cool, pleasant weather suited to estate walks and sightseeing. June to September is monsoon season, when Coorg turns especially lush and green, popular with travellers who enjoy the rains but less suited to those wanting dry outdoor days.",

  idealDuration:
    "A short Bangalore-Coorg break works in 2–3 nights. Combining Coorg with Mysore and Ooty (or Wayanad) for a fuller South India hill circuit typically needs 5–7 nights.",

  howToReach:
    "Bengaluru's Kempegowda International Airport is the usual gateway, with Coorg then reached by road in roughly 5–6 hours. Mysore, a common combination point, is closer still, at around 3 hours from Coorg.",

  packageCount: 8,

  packages: [
    {
      id: "short-break-bangalore-coorg",
      title: "Short Break to Bangalore and Coorg",
      duration: "2 Nights 3 Days",
      places: ["Bangalore", "Coorg"],
      description:
        "A quick coffee-country getaway from Bangalore, featuring scenic plantations, peaceful hill views and relaxing nature experiences.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangalore",
          description:
            "Arrive in Bangalore and begin your journey towards Coorg. Check in to your accommodation and enjoy a relaxing evening.",
        },
        {
          day: 2,
          title: "Coorg Sightseeing",
          description:
            "Explore coffee plantations, enjoy scenic viewpoints and visit selected local attractions.",
        },
        {
          day: 3,
          title: "Breakfast and Departure",
          description:
            "Enjoy breakfast and begin your return journey towards Bangalore.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and activity charges unless specified",
        "Personal expenses and unlisted meals",
        "Optional activities not mentioned in the package",
      ],
    },

    {
      id: "coorg-mysore-holiday",
      title: "Short Holiday to Coorg & Mysore",
      duration: "4 Nights 5 Days",
      places: ["Coorg", "Mysore"],
      description:
        "Combines Coorg's coffee estates and scenic hills with Mysore's royal heritage, palaces and cultural attractions.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Mysore",
          description:
            "Arrive in Mysore, check in to your accommodation and explore the local surroundings.",
        },
        {
          day: 2,
          title: "Mysore Sightseeing",
          description:
            "Visit Mysore Palace and explore selected city attractions according to your schedule.",
        },
        {
          day: 3,
          title: "Journey to Coorg",
          description:
            "Travel towards Coorg, check in to your hotel and enjoy the peaceful coffee-country atmosphere.",
        },
        {
          day: 4,
          title: "Explore Coorg",
          description:
            "Visit Abbey Falls, explore coffee plantations and enjoy scenic viewpoints as weather permits.",
        },
        {
          day: 5,
          title: "Breakfast and Departure",
          description:
            "Enjoy breakfast and depart for your onward destination.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and guide charges unless specified",
        "Optional activities not mentioned in the package",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "coorg-ooty-vacation",
      title: "Vacation to Coorg and Ooty",
      duration: "5 Nights 6 Days",
      places: ["Coorg", "Ooty"],
      description:
        "Two of South India's best-known hill destinations together, combining coffee plantations with misty mountain scenery.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Coorg",
          description:
            "Arrive in Coorg, check in to your accommodation and relax amid the green hills.",
        },
        {
          day: 2,
          title: "Coorg Sightseeing",
          description:
            "Explore coffee estates, visit Abbey Falls and enjoy nearby scenic viewpoints.",
        },
        {
          day: 3,
          title: "Coorg Leisure Day",
          description:
            "Enjoy a relaxed day exploring local attractions, plantations and nature trails.",
        },
        {
          day: 4,
          title: "Journey to Ooty",
          description:
            "Travel towards Ooty, allowing sufficient time for the road journey and check-in.",
        },
        {
          day: 5,
          title: "Ooty Sightseeing",
          description:
            "Explore Ooty Lake, botanical gardens and selected viewpoints according to your schedule.",
        },
        {
          day: 6,
          title: "Departure",
          description:
            "Enjoy breakfast and depart for your onward destination.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and activity charges unless specified",
        "Boating and optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "coorg-ooty-kodaikanal",
      title: "Coorg, Ooty and Kodaikanal",
      duration: "6 Nights 7 Days",
      places: ["Coorg", "Ooty", "Kodaikanal"],
      description:
        "A wider three-hill-station South India circuit featuring coffee estates, misty valleys and beautiful mountain landscapes.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Coorg",
          description:
            "Arrive in Coorg and settle into your accommodation.",
        },
        {
          day: 2,
          title: "Coorg Exploration",
          description:
            "Visit selected waterfalls, coffee plantations and scenic viewpoints.",
        },
        {
          day: 3,
          title: "Travel to Ooty",
          description:
            "Travel to Ooty and enjoy a relaxed evening after check-in.",
        },
        {
          day: 4,
          title: "Ooty Sightseeing",
          description:
            "Explore the botanical gardens, Ooty Lake and nearby mountain viewpoints.",
        },
        {
          day: 5,
          title: "Journey to Kodaikanal",
          description:
            "Continue towards Kodaikanal, allowing sufficient time for the intercity road journey.",
        },
        {
          day: 6,
          title: "Kodaikanal Sightseeing",
          description:
            "Explore Kodaikanal Lake, Coaker's Walk and selected local attractions.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Enjoy breakfast and begin your onward journey.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and guide charges unless specified",
        "Optional activities not mentioned in the package",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "mysore-coorg-ooty",
      title: "Mysore, Coorg and Ooty",
      duration: "6 Nights 7 Days",
      places: ["Mysore", "Coorg", "Ooty"],
      description:
        "Combines Mysore's royal heritage with Coorg's coffee plantations and Ooty's peaceful mountain scenery.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Mysore",
          description:
            "Arrive in Mysore, check in and explore the city surroundings.",
        },
        {
          day: 2,
          title: "Mysore Heritage Tour",
          description:
            "Visit Mysore Palace and selected heritage attractions.",
        },
        {
          day: 3,
          title: "Journey to Coorg",
          description:
            "Travel to Coorg and relax amid coffee estates and green hills.",
        },
        {
          day: 4,
          title: "Coorg Sightseeing",
          description:
            "Explore Abbey Falls, coffee plantations and nearby viewpoints.",
        },
        {
          day: 5,
          title: "Travel to Ooty",
          description:
            "Continue your journey to Ooty and settle into your accommodation.",
        },
        {
          day: 6,
          title: "Ooty Exploration",
          description:
            "Explore Ooty Lake, botanical gardens and selected hill viewpoints.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Enjoy breakfast and depart for your onward destination.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and guide charges unless specified",
        "Optional activities not mentioned in the package",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "coorg-wayanad-ooty",
      title: "Valley of Coorg, Wayanad & Ooty",
      duration: "6 Nights 7 Days",
      places: ["Coorg", "Wayanad", "Ooty"],
      description:
        "Adds Wayanad's forests and nature experiences to a scenic Coorg-Ooty circuit through South India's beautiful hill regions.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Coorg",
          description:
            "Arrive in Coorg and check in to your accommodation.",
        },
        {
          day: 2,
          title: "Coorg Nature Tour",
          description:
            "Explore coffee plantations, waterfalls and scenic viewpoints.",
        },
        {
          day: 3,
          title: "Journey to Wayanad",
          description:
            "Travel towards Wayanad and enjoy a relaxing evening.",
        },
        {
          day: 4,
          title: "Wayanad Exploration",
          description:
            "Explore selected waterfalls, forest attractions and nature viewpoints, subject to local conditions.",
        },
        {
          day: 5,
          title: "Travel to Ooty",
          description:
            "Continue towards Ooty, allowing sufficient time for the road journey.",
        },
        {
          day: 6,
          title: "Ooty Sightseeing",
          description:
            "Visit selected gardens, the lake and scenic mountain viewpoints.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Enjoy breakfast and depart for your onward destination.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and activity charges unless specified",
        "Safari and optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "delights-of-south",
      title: "Delights of South",
      duration: "7 Nights 8 Days",
      places: ["Bangalore", "Mysore", "Coorg", "Ooty"],
      description:
        "A broader South India itinerary featuring Coorg, royal Mysore and the scenic hill station of Ooty.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangalore",
          description:
            "Arrive in Bangalore and explore selected local attractions.",
        },
        {
          day: 2,
          title: "Bangalore to Mysore",
          description:
            "Travel to Mysore and explore its royal heritage.",
        },
        {
          day: 3,
          title: "Mysore Sightseeing",
          description:
            "Visit Mysore Palace and selected city attractions.",
        },
        {
          day: 4,
          title: "Journey to Coorg",
          description:
            "Travel to Coorg and relax amid the coffee plantations.",
        },
        {
          day: 5,
          title: "Coorg Sightseeing",
          description:
            "Explore waterfalls, estate surroundings and mountain viewpoints.",
        },
        {
          day: 6,
          title: "Journey to Ooty",
          description:
            "Travel to Ooty and enjoy the peaceful hill-station atmosphere.",
        },
        {
          day: 7,
          title: "Ooty Exploration",
          description:
            "Explore selected gardens, lakes and scenic viewpoints.",
        },
        {
          day: 8,
          title: "Departure",
          description:
            "Enjoy breakfast and depart according to your travel arrangements.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Entry fees and guide charges unless specified",
        "Optional activities not mentioned in the package",
        "Personal expenses and unlisted meals",
      ],
    },

    {
      id: "majestic-south-honeymoon",
      title: "Majestic South Honeymoon Special",
      duration: "5 Nights 6 Days",
      places: ["Mysore", "Coorg", "Ooty"],
      description:
        "A South India circuit tailored for honeymooners, combining romantic coffee-estate stays, peaceful mountain views and memorable couple experiences.",

      itinerary: [
        {
          day: 1,
          title: "Arrival in Mysore",
          description:
            "Arrive in Mysore and settle into your accommodation for a relaxed start to your honeymoon.",
        },
        {
          day: 2,
          title: "Mysore to Coorg",
          description:
            "Travel to Coorg and enjoy a peaceful evening surrounded by coffee plantations.",
        },
        {
          day: 3,
          title: "Romantic Coorg Escape",
          description:
            "Explore scenic viewpoints, waterfalls and coffee estates at a relaxed pace.",
        },
        {
          day: 4,
          title: "Journey to Ooty",
          description:
            "Travel to Ooty and enjoy the mountain atmosphere together.",
        },
        {
          day: 5,
          title: "Ooty Couple Experience",
          description:
            "Explore selected gardens, lakes and viewpoints with time for relaxation.",
        },
        {
          day: 6,
          title: "Breakfast and Departure",
          description:
            "Enjoy breakfast and depart according to your onward travel arrangements.",
        },
      ],

      inclusions: [
        "Accommodation as confirmed",
        "Intercity transfers listed in the itinerary",
        "Sightseeing specified in the package",
        "Couple-friendly arrangements where confirmed",
      ],

      exclusions: [
        "Flights and train tickets unless included",
        "Special room decorations unless specified",
        "Entry fees and optional activities unless included",
        "Personal expenses and unlisted meals",
      ],
    },
  ],

  honeymoonText:
    "Coorg's coffee-estate resorts are a popular South India honeymoon choice. Couples can enjoy peaceful plantation surroundings, scenic drives, waterfall visits and relaxing stays. Coorg can also be combined with Mysore or Ooty for a longer romantic holiday.",

  familyText:
    "Coorg is a lovely family holiday destination, with coffee-estate stays, scenic viewpoints, nature walks and attractions such as Dubare elephant camp. Families can combine Coorg with Mysore or Ooty, adjusting the itinerary to children's ages, weather and travel time.",

  groupText:
    "Coorg offers group and college-trip itineraries across coffee estates, waterfalls and scenic hill attractions. Group holidays can be combined with Mysore, Ooty or Wayanad, with transport, accommodation and sightseeing arranged according to group size and travel requirements.",

  faqs: [
    {
      question: "Is the Dubare elephant camp included?",
      answer:
        "It depends on the specific itinerary. Confirm with your travel expert whether Dubare or an estate visit is included or available as an add-on.",
    },
    {
      question: "Should I visit Coorg alone or combine it with another hill station?",
      answer:
        "A short Coorg getaway usually works well in 2–3 nights. For a longer South India holiday, you can combine Coorg with Mysore, Ooty or Wayanad, depending on your available time.",
    },
    {
      question: "Is Coorg good to visit in the monsoon?",
      answer:
        "Yes, Coorg becomes lush and green during the monsoon from June to September. However, rain can affect outdoor activities, trails and road travel, so check local weather conditions before planning.",
    },
    {
      question: "What is the best time to visit Coorg?",
      answer:
        "October to March is popular for pleasant weather, sightseeing and coffee-estate walks. June to September is suitable for travellers who enjoy monsoon greenery, although outdoor plans may need flexibility.",
    },
    {
      question: "How do I book a customised itinerary?",
      answer:
        "Share your travel dates, starting city, group size and preferred destinations with your travel expert. Your Coorg itinerary and final pricing can then be planned according to availability and travel requirements.",
    },
  ],
},























];
