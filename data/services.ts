
export type TravelService = {
  slug: string;
  title: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  overviewTitle: string;
  overview: string[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const travelServices: TravelService[] = [
  {
    slug: "flight-booking",
    title: "Flight Booking",
    shortDescription:
      "Domestic and international air tickets arranged alongside your package.",
    heroTitle: "Domestic & International Flight Booking",
    heroDescription:
      "Find suitable flight options for your next journey with assistance from LV SKY HIGH.",
    overviewTitle: "Flights Planned Around Your Trip",
    overview: [
      "We can help arrange domestic and international flight tickets according to your travel dates and preferences.",
      "Some holiday packages may include flights, while others are land-only. We will clarify the inclusions before you confirm.",
      "Share your route, dates and passenger details with our travel team to discuss available options.",
    ],
    features: [
      {
        title: "Domestic Flights",
        description: "Flight options for travel within India.",
      },
      {
        title: "International Flights",
        description: "Assistance with international routes and travel dates.",
      },
      {
        title: "Package Coordination",
        description: "Coordinate flights with your hotel and holiday itinerary.",
      },
    ],
    faqs: [
      {
        question: "Do all your packages include flights?",
        answer:
          "Not necessarily. Some packages may include flights and others may be land-only. Please check the inclusions in your selected package.",
      },
      {
        question: "Can I book just a flight without a holiday package?",
        answer:
          "Contact our travel team to discuss your flight-only requirements and available options.",
      },
      {
        question: "What if my flight gets delayed or cancelled?",
        answer:
          "Airline policies apply to delays and cancellations. Contact the airline for immediate operational updates and our team for assistance with your travel arrangements.",
      },
    ],
  },
  {
    slug: "hotel-resort-booking",
    title: "Hotel & Resort Booking",
    shortDescription:
      "From budget stays to premium resorts, matched to your package category.",
    heroTitle: "Hotel & Resort Booking",
    heroDescription:
      "Find accommodation options that fit your destination, travel style and budget.",
    overviewTitle: "Stay That Fits Your Journey",
    overview: [
      "Tell us your destination, dates, number of guests and preferred accommodation category.",
      "We can help you compare suitable hotel and resort options for your holiday.",
      "Availability, amenities, prices and cancellation conditions depend on the property and dates.",
    ],
    features: [
      {
        title: "Budget Stays",
        description: "Practical accommodation options for value-conscious travellers.",
      },
      {
        title: "Premium Resorts",
        description: "Explore resort options for relaxing and special occasions.",
      },
      {
        title: "Family Accommodation",
        description: "Discuss room arrangements and requirements for your group.",
      },
    ],
    faqs: [
      {
        question: "Can I choose my hotel category?",
        answer:
          "Yes. Share your preferred category and budget so we can discuss suitable options.",
      },
      {
        question: "Can I book a hotel separately?",
        answer:
          "Contact us with your destination and dates to discuss accommodation-only requirements.",
      },
      {
        question: "Are meals included in the hotel price?",
        answer:
          "Meal plans vary by property and rate. Confirm the inclusions before booking.",
      },
    ],
  },
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    shortDescription:
      "Passport and visa guidance for your specific destination and nationality.",
    heroTitle: "Visa Assistance for Your Journey",
    heroDescription:
      "Understand the visa application process and the documents you may need for your destination.",
    overviewTitle: "Get Ready for Your Visa Application",
    overview: [
      "Visa requirements depend on your nationality, destination, purpose of travel and travel dates.",
      "We can help you understand document checklists and application steps for your intended trip.",
      "Visa approval is decided by the relevant authorities and cannot be guaranteed.",
    ],
    features: [
      {
        title: "Document Guidance",
        description: "Understand commonly required documents for your application.",
      },
      {
        title: "Application Steps",
        description: "Get guidance on the process relevant to your destination.",
      },
      {
        title: "Travel Preparation",
        description: "Review visa-related requirements before finalising travel.",
      },
    ],
    faqs: [
      {
        question: "Which documents do I need?",
        answer:
          "Requirements vary by destination and applicant. Check the latest official embassy or immigration guidance for your case.",
      },
      {
        question: "Can you guarantee visa approval?",
        answer:
          "No. Visa decisions are made by the relevant government or immigration authority.",
      },
      {
        question: "When should I apply?",
        answer:
          "Processing times vary. Check official guidance and plan well ahead of your departure.",
      },
    ],
  },
  {
    slug: "airport-local-transfers",
    title: "Airport & Local Transfers",
    shortDescription:
      "Private, air-conditioned pickup, drop and sightseeing transport.",
    heroTitle: "Airport Transfers & Local Transport",
    heroDescription:
      "Plan your arrival, departure and local transport requirements as part of your trip.",
    overviewTitle: "Travel Smoothly Between Stops",
    overview: [
      "Share your arrival time, pickup point, destination and passenger count.",
      "Vehicle type, luggage capacity, route and service availability must be confirmed before booking.",
      "Local sightseeing transport can be discussed according to your itinerary.",
    ],
    features: [
      {
        title: "Airport Pickup",
        description: "Discuss transfer arrangements from the airport to your stay.",
      },
      {
        title: "Departure Drop",
        description: "Plan transport to your airport or other departure point.",
      },
      {
        title: "Local Transfers",
        description: "Coordinate transport between selected destinations and attractions.",
      },
    ],
    faqs: [
      {
        question: "What details should I share for a transfer?",
        answer:
          "Share your travel date, pickup and drop locations, arrival time and passenger count.",
      },
      {
        question: "Can I request a particular vehicle?",
        answer:
          "Tell us your preference. Vehicle availability and suitability will need confirmation.",
      },
      {
        question: "Can transfers be added to a holiday package?",
        answer:
          "Yes, you can request transfer arrangements when discussing your package.",
      },
    ],
  },
  {
    slug: "sightseeing-local-tours",
    title: "Sightseeing & Local Tours",
    shortDescription:
      "Built into every itinerary, and adjustable on request.",
    heroTitle: "Sightseeing & Local Tours",
    heroDescription:
      "Discover local highlights with sightseeing options suited to your travel plans.",
    overviewTitle: "Make More of Your Destination",
    overview: [
      "Tell us which places interest you and how much time you have at your destination.",
      "Sightseeing options can be discussed around your itinerary, interests and pace of travel.",
      "Entry tickets, guide services, transport and opening hours depend on the selected arrangement.",
    ],
    features: [
      {
        title: "Popular Attractions",
        description: "Discuss well-known landmarks and local highlights.",
      },
      {
        title: "Custom Itineraries",
        description: "Explore sightseeing plans based on your interests and schedule.",
      },
      {
        title: "Local Experiences",
        description: "Ask about cultural, food and destination-specific activities.",
      },
    ],
    faqs: [
      {
        question: "Can I customise my sightseeing itinerary?",
        answer:
          "You can share your preferences and ask our team about suitable itinerary options.",
      },
      {
        question: "Are entry tickets included?",
        answer:
          "Inclusions vary by arrangement. Confirm tickets, guides and transport in your quote.",
      },
      {
        question: "Can sightseeing be added to my existing package?",
        answer:
          "Contact our team with your package details to discuss possible additions.",
      },
    ],
  },
  {
    slug: "travel-insurance",
    title: "Travel Insurance",
    shortDescription:
      "Recommended for international trips — we'll help you find a suitable plan.",
    heroTitle: "Travel Insurance Guidance",
    heroDescription:
      "Explore travel insurance options and understand the cover that may suit your trip.",
    overviewTitle: "Travel with Better Preparation",
    overview: [
      "Available plans, eligibility and benefits vary by insurer, destination, traveller and policy.",
      "Compare coverage limits, exclusions, emergency support and claim conditions before purchasing.",
      "Read the complete policy wording and confirm whether the plan meets your travel requirements.",
    ],
    features: [
      {
        title: "Coverage Options",
        description: "Review the types of benefits available under different policies.",
      },
      {
        title: "Policy Guidance",
        description: "Understand important terms, exclusions and limitations.",
      },
      {
        title: "Trip Preparation",
        description: "Consider insurance requirements before your departure.",
      },
    ],
    faqs: [
      {
        question: "Is travel insurance included in my package?",
        answer:
          "Do not assume it is included. Check the written package inclusions or ask our team.",
      },
      {
        question: "What should I check before buying?",
        answer:
          "Review coverage limits, exclusions, pre-existing condition rules where applicable, claim procedures and emergency contact details.",
      },
      {
        question: "Does insurance guarantee every claim will be paid?",
        answer:
          "No. Claims are assessed under the insurer's policy terms, exclusions and conditions.",
      },
    ],
  },
];

export function getTravelService(slug: string) {
  return travelServices.find((service) => service.slug === slug);
}
