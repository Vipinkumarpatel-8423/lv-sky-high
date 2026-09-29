"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import DesktopSideMenu from "./DesktopSideMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [desktopMenuOpen, setDesktopMenuOpen] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <>
      <Navbar
        onMenuClick={() => {
          if (typeof window !== "undefined") {
            if (window.innerWidth >= 1024) {
              setDesktopMenuOpen(true);
            } else {
              setMobileMenuOpen(true);
            }
          }
        }}
      />

      {/* Desktop / Large Screen */}
      <DesktopSideMenu
        isOpen={desktopMenuOpen}
        onClose={() => setDesktopMenuOpen(false)}
      />

      {/* Mobile */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}