
import { internationalDestinations } from "./international";

export type HolidayPackage = {
  id: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
};

export type DestinationFAQItem = {
  question: string;
  answer: string;
};

export type DestinationDetail = {
  slug: string;
  name: string;
  title: string;
  image: string;
  description: string;
  whyVisit: string;
  bestTime: string;
  duration: string;
  howToReach: string;
  packages: HolidayPackage[];
  faqs: DestinationFAQItem[];
};

const destinationContent: Record<
  string,
  Pick<
    DestinationDetail,
    "whyVisit" | "bestTime" | "duration" | "howToReach" | "packages" | "faqs"
  >
> = {
  dubai: {
    whyVisit:
      "Dubai combines modern architecture, desert adventures, luxury shopping and family-friendly attractions. Explore Burj Khalifa, Dubai Mall, Palm Jumeirah and traditional souks.",
    bestTime:
      "November to March is generally ideal for outdoor sightseeing and desert activities. Summer months are much hotter.",
    duration:
      "A 3 to 5-day itinerary is a good starting point for Dubai's main attractions. Longer trips can include Abu Dhabi.",
    howToReach:
      "Dubai International Airport (DXB) is connected to several major Indian cities through direct and connecting flights.",
    packages: [
      {
        id: "dubai-4d",
        title: "Dubai Discovery Tour",
        duration: "3 Nights / 4 Days",
        description: "A short Dubai city and desert experience.",
        highlights: ["City Tour", "Burj Khalifa", "Desert Safari"],
      },
      {
        id: "dubai-5d",
        title: "Dubai Family Holiday",
        duration: "4 Nights / 5 Days",
        description: "A relaxed family-oriented Dubai itinerary.",
        highlights: ["Dubai Mall", "Marina", "Family Attractions"],
      },
      {
        id: "dubai-6d",
        title: "Dubai Extended Escape",
        duration: "5 Nights / 6 Days",
        description: "Explore Dubai with additional leisure time.",
        highlights: ["Palm Jumeirah", "Desert Experience", "Leisure"],
      },
    ],
    faqs: [
      {
        question: "Is desert safari included in every package?",
        answer:
          "Not necessarily. Inclusions depend on the selected itinerary. Please confirm with our travel expert.",
      },
      {
        question: "Do I need a visa for Dubai?",
        answer:
          "Visa requirements depend on your nationality and travel documents. Contact our team for guidance on current requirements.",
      },
      {
        question: "Can Abu Dhabi be added to the trip?",
        answer:
          "Yes, a custom itinerary can include an Abu Dhabi day trip.",
      },
      {
        question: "How hot is Dubai during summer?",
        answer:
          "Summer is generally very hot, so indoor attractions and suitable travel timings are recommended.",
      },
      {
        question: "How can I book a customized Dubai trip?",
        answer:
          "Contact LV Sky High through WhatsApp or the contact page with your dates, budget and group size.",
      },
    ],
  },

  thailand: {
    whyVisit:
      "Thailand offers beautiful islands, lively cities, temples, tropical beaches and a wide variety of experiences for families and couples.",
    bestTime:
      "November to February is generally comfortable for many destinations, although weather varies by region.",
    duration:
      "5 to 7 days works well for combining Bangkok with Pattaya or Phuket.",
    howToReach:
      "International flights connect major Indian cities with Bangkok and Phuket, depending on airline schedules.",
    packages: [
      {
        id: "thailand-5d",
        title: "Bangkok & Pattaya Escape",
        duration: "4 Nights / 5 Days",
        description: "City experiences and coastal leisure.",
        highlights: ["Bangkok", "Pattaya", "Sightseeing"],
      },
      {
        id: "thailand-6d",
        title: "Phuket Island Holiday",
        duration: "5 Nights / 6 Days",
        description: "A relaxing island-focused itinerary.",
        highlights: ["Phuket", "Island Excursion", "Beaches"],
      },
    ],
    faqs: [
      {
        question: "Which places should I visit in Thailand?",
        answer:
          "Bangkok, Pattaya, Phuket and Krabi are popular choices, depending on your interests.",
      },
      {
        question: "Is Thailand suitable for family holidays?",
        answer:
          "Yes, Thailand offers beaches, attractions and resorts suitable for different age groups.",
      },
      {
        question: "Can I customize my Thailand package?",
        answer:
          "Yes, LV Sky High can help plan an itinerary based on your travel requirements.",
      },
    ],
  },

  "malaysia-singapore": {
    whyVisit:
      "Combine Kuala Lumpur's city attractions, Genting Highlands and Singapore's famous landmarks in one multi-country holiday.",
    bestTime:
      "Both destinations can be visited year-round, although tropical rainfall and humidity are common.",
    duration:
      "6 to 8 days is a useful starting point for a combined itinerary.",
    howToReach:
      "International flights serve Kuala Lumpur and Singapore from various Indian airports.",
    packages: [
      {
        id: "malaysia-singapore-7d",
        title: "Malaysia & Singapore Highlights",
        duration: "6 Nights / 7 Days",
        description: "Explore two destinations in one journey.",
        highlights: ["Kuala Lumpur", "Genting Highlands", "Singapore"],
      },
    ],
    faqs: [
      {
        question: "Can I visit Malaysia and Singapore in one trip?",
        answer:
          "Yes, a combined itinerary can cover major attractions in both destinations.",
      },
      {
        question: "Do both countries have separate entry requirements?",
        answer:
          "Yes, entry requirements must be checked separately for each destination.",
      },
    ],
  },

  bali: {
    whyVisit:
      "Bali is known for scenic rice terraces, temples, tropical beaches, wellness retreats and romantic resorts.",
    bestTime:
      "April to October is generally Bali's drier season.",
    duration:
      "5 to 7 days allows time for Ubud and coastal areas.",
    howToReach:
      "Fly to Ngurah Rai International Airport in Bali, using available direct or connecting flights.",
    packages: [
      {
        id: "bali-6d",
        title: "Beautiful Bali Escape",
        duration: "5 Nights / 6 Days",
        description: "Discover Bali's culture, nature and beaches.",
        highlights: ["Ubud", "Temples", "Beaches"],
      },
    ],
    faqs: [
      {
        question: "Is Bali good for honeymoon trips?",
        answer:
          "Yes, Bali is popular for romantic villas, scenic locations and private experiences.",
      },
      {
        question: "Can I include Ubud and beach resorts?",
        answer:
          "Yes, a custom itinerary can combine both areas.",
      },
    ],
  },

  maldives: {
    whyVisit:
      "The Maldives is famous for turquoise lagoons, white-sand beaches, overwater villas and marine experiences.",
    bestTime:
      "November to April is generally a popular period for drier weather.",
    duration:
      "4 to 6 days is a common choice for a resort holiday.",
    howToReach:
      "Fly to Velana International Airport in Malé, followed by a resort transfer.",
    packages: [
      {
        id: "maldives-5d",
        title: "Maldives Island Retreat",
        duration: "4 Nights / 5 Days",
        description: "Enjoy a relaxing tropical island escape.",
        highlights: ["Island Resort", "Beach Leisure", "Snorkelling"],
      },
    ],
    faqs: [
      {
        question: "Are resort transfers included?",
        answer:
          "Transfer arrangements depend on the selected resort and package.",
      },
      {
        question: "Is Maldives suitable for honeymoon trips?",
        answer:
          "Yes, many resorts offer romantic accommodation and experiences.",
      },
    ],
  },

  "sri-lanka": {
    whyVisit:
      "Sri Lanka offers cultural landmarks, scenic tea plantations, wildlife experiences and beautiful coastal destinations.",
    bestTime:
      "The ideal season depends on the region because weather patterns differ across the island.",
    duration:
      "5 to 8 days can cover several major attractions.",
    howToReach:
      "International flights connect India with Colombo, subject to schedules.",
    packages: [
      {
        id: "sri-lanka-6d",
        title: "Sri Lanka Scenic Discovery",
        duration: "5 Nights / 6 Days",
        description: "Explore culture, hill country and scenic landscapes.",
        highlights: ["Kandy", "Ella", "Coastal Leisure"],
      },
    ],
    faqs: [
      {
        question: "Can I combine beaches and hill stations?",
        answer:
          "Yes, a custom itinerary can include both coastal and hill-country destinations.",
      },
      {
        question: "Is Sri Lanka suitable for family holidays?",
        answer:
          "Yes, it offers a variety of cultural, nature and leisure experiences.",
      },
    ],
  },
};

export const internationalDetails: DestinationDetail[] =
  internationalDestinations
    .filter((destination) => destinationContent[destination.slug])
    .map((destination) => ({
      slug: destination.slug,
      name: destination.name,
      title: destination.title,
      image: destination.image,
      description: destination.description,
      ...destinationContent[destination.slug],
    }));
