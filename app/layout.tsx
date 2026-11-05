// import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// export const metadata: Metadata = {
//   title: "LV SKY HIGH | Travel The World",
//   description:
//     "Explore unforgettable destinations with LV SKY HIGH.",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://lvskyhigh.com"),

  title: {
    default: "LV Sky High | India & International Tour Packages",
    template: "%s | LV Sky High",
  },

  description:
    "Explore customized India and international tour packages with LV Sky High. Discover holiday, honeymoon, family and destination tours with personalized travel planning.",

    keywords: [
    "Tour Operator in Zirakpur",
    "Travel Agency in Zirakpur",
    "India Tour Packages",
    "International Tour Packages",
    "Holiday Packages",
    "Honeymoon Packages",
    "Family Tour Packages",
    "Manali Tour Package",
    "Kashmir Tour Package",
    "Kerala Tour Package",
    "Dubai Tour Package",
    "Bali Tour Package",
    "Singapore Tour Package",
  ],


  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
         <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}