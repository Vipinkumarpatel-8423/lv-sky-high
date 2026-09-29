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

export const metadata: Metadata = {
  title: "LV SKY HIGH | Travel The World",
  description:
    "Explore unforgettable destinations with LV SKY HIGH.",
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