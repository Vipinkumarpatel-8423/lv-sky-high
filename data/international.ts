
export type InternationalDestination = {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  packageUrl?: string;
};

export const internationalDestinations: InternationalDestination[] = [
  {
    slug: "dubai",
    name: "Dubai",
    title: "Dubai Holiday Packages",
    description:
      "Desert safaris, Burj Khalifa and Palm Jumeirah — short-haul luxury for families and couples.",
    image: "/images/international/dubai.jpg",
    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Palm Jumeirah",
    ],
    packageUrl: "https://www.lvskyhigh.com/dubai/",
  },
  {
    slug: "thailand",
    name: "Thailand",
    title: "Thailand Holiday Packages",
    description:
      "Bangkok, Pattaya and Phuket — island-hopping, nightlife and family-friendly resorts.",
    image: "/images/international/thailand.jpg",
    highlights: ["Bangkok", "Pattaya", "Phuket"],
  },
  {
    slug: "malaysia-singapore",
    name: "Malaysia & Singapore",
    title: "Malaysia & Singapore Packages",
    description:
      "Kuala Lumpur, Genting Highlands and Singapore in one combined itinerary.",
    image: "/images/international/malaysia-singapore.jpg",
    highlights: ["Kuala Lumpur", "Genting Highlands", "Singapore"],
  },
  {
    slug: "bali",
    name: "Bali",
    title: "Bali Holiday Packages",
    description:
      "Temples, rice terraces and beach resorts across Indonesia's most-loved island.",
    image: "/images/international/bali.jpg",
    highlights: ["Ubud", "Rice Terraces", "Beach Resorts"],
  },
  {
    slug: "maldives",
    name: "Maldives",
    title: "Maldives Holiday Packages",
    description:
      "Overwater villas and house-reef snorkelling — a popular honeymoon destination.",
    image: "/images/international/maldives.jpg",
    highlights: ["Overwater Villas", "Snorkelling", "Private Beaches"],
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    title: "Sri Lanka Holiday Packages",
    description:
      "Kandy, Ella and the southern coast — culture, tea country and beaches in one trip.",
    image: "/images/international/sri-lanka.jpg",
    highlights: ["Kandy", "Ella", "Southern Coast"],
  },
];
