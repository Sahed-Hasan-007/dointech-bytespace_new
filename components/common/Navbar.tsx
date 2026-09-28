"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const navItems = ["Home", "Courses", "Creators"];
const underline = "relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className={`sticky top-0 z-20 -mb-24 text-white transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${isScrolled ? "border-b border-white/20 bg-[#003BE2]/95 shadow-lg backdrop-blur-md" : "border-b border-transparent bg-transparent"}`}>
      <nav aria-label="Main navigation" className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-[8.33%]">
        <a href="/" aria-label="ByteSpace home" className="shrink-0">
          <Image src="/images/nav_Logo.png" alt="ByteSpace" width={172} height={40} priority className="h-auto hover:scale-110 transition duration-300 w-[142px] sm:w-[164px]" />
        </a>

        <ul className="hidden items-center gap-10 text-[15px] font-medium md:flex">
          {navItems.map((item) => (
            <li key={item}><a href={item === "Home" ? "/" : `/#${item.toLowerCase()}`} className={`${underline} transition-opacity hover:opacity-70`}>{item}</a></li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-5">
          <a href="/login" className={`${underline} hidden text-sm font-medium transition-opacity hover:opacity-70 sm:inline`}>Sign In</a>
          <a href="/signup" className={`${underline} text-sm font-medium transition-opacity hover:opacity-70`}>Join Us</a>
          <a href="/#cart" aria-label="Shopping cart" className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-white/15 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-4 after:-translate-x-1/2 after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100">
            <Icon icon="material-symbols:shopping-bag-outline" aria-hidden="true" className="size-[21px]" />
          </a>
        </div>
      </nav>
    </header>
  );
}
