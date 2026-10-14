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
  // {
  //   id: "kerala",
  //   name: "Kerala",
  //   slug: "kerala",
  //   packageCount: 7,
  //   image: "/images/india-tours/kerala.jpg",
  // },
  // {
  //   id: "uttarakhand",
  //   name: "Uttarakhand",
  //   slug: "uttarakhand",
  //   packageCount: 18,
  //   image: "/images/india-tours/uttarakhand.jpg",
  // },
  // {
  //   id: "andaman",
  //   name: "Andaman Islands Holiday Packages",
  //   slug: "andaman-islands",
  //   packageCount: 4,
  //   image: "/images/india-tours/andaman.jpg",
  // },
  // {
  //   id: "chardham",
  //   name: "Chardham Yatra Packages",
  //   slug: "chardham-yatra",
  //   packageCount: 6,
  //   image: "/images/india-tours/chardham.jpg",
  // },
  // {
  //   id: "golden-triangle",
  //   name: "Golden Triangle Tour Packages",
  //   slug: "golden-triangle",
  //   packageCount: 6,
  //   image: "/images/india-tours/golden-triangle.jpg",
  // },
  // {
  //   id: "leh-ladakh",
  //   name: "Leh-Ladakh Holiday Packages",
  //   slug: "leh-ladakh",
  //   packageCount: 4,
  //   image: "/images/india-tours/leh-ladakh.jpg",
  // },
  // {
  //   id: "darjeeling-sikkim",
  //   name: "Darjeeling & Sikkim Holiday Packages",
  //   slug: "darjeeling-sikkim",
  //   packageCount: 19,
  //   image: "/images/india-tours/darjeeling-sikkim.jpg",
  // },
  // {
  //   id: "india-honeymoon",
  //   name: "India Honeymoon Packages",
  //   slug: "honeymoon",
  //   packageCount: 12,
  //   image: "/images/india-tours/honeymoon.jpg",
  // },
  // {
  //   id: "south-india",
  //   name: "South India Holiday Packages",
  //   slug: "south-india",
  //   packageCount: 9,
  //   image: "/images/india-tours/south-india.jpg",
  // },
  // {
  //   id: "gujarat",
  //   name: "Gujarat Holiday Packages",
  //   slug: "gujarat",
  //   packageCount: 7,
  //   image: "/images/india-tours/gujarat.jpg",
  // },
  // {
  //   id: "auli",
  //   name: "Auli Holiday Packages",
  //   slug: "auli",
  //   packageCount: 5,
  //   image: "/images/india-tours/auli.jpg",
  // },
  // {
  //   id: "mussoorie",
  //   name: "Mussoorie Holiday Packages",
  //   slug: "mussoorie",
  //   packageCount: 5,
  //   image: "/images/india-tours/mussoorie.jpg",
  // },
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



];
