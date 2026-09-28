"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const navItems = ["Home", "Courses", "Creators"];
const underline = "relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`sticky top-0 z-20 -mb-24 text-[#E5E6E8] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${isScrolled ? "border-b border-white/20 bg-[#003BE2]/95 shadow-lg backdrop-blur-md" : "border-b border-transparent bg-transparent"}`}>
      <nav aria-label="Main navigation" className="mx-auto flex h-18 sm:h-24 max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:px-[8.33%]">
        <a href="/" aria-label="ByteSpace home" className="shrink-0">
          <Image src="/images/nav_Logo.png" alt="ByteSpace" width={172} height={40} priority className="h-auto w-[136px] transition duration-300 hover:scale-105 sm:w-[164px]" />
        </a>

        <ul className="hidden items-center gap-10 text-[15px] font-medium md:flex">
          {navItems.map((item) => (
            <li key={item}><a href={item === "Home" ? "/" : `/#${item.toLowerCase()}`} className={`${underline} transition-opacity text-[#E5E6E8] hover:opacity-70`}>{item}</a></li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <a href="/login" className={`${underline} text-sm font-medium transition-opacity hover:opacity-70`}>Sign In</a>
          <a href="/signup" className={`${underline} text-sm font-medium transition-opacity hover:opacity-70`}>Join Us</a>
          <a href="/#cart" aria-label="Shopping cart" className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-white/15 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-4 after:-translate-x-1/2 after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100">
            <Icon icon="material-symbols:shopping-bag-outline" aria-hidden="true" className="size-[21px]" />
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a href="/#cart" aria-label="Shopping cart" className="grid size-10 place-items-center rounded-full transition-colors hover:bg-white/15">
            <Icon icon="material-symbols:shopping-bag-outline" aria-hidden="true" className="size-[21px]" />
          </a>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-white/15"
          >
            <Icon icon="material-symbols:menu" aria-hidden="true" className="size-7" />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden="true">
        <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className="absolute inset-0 size-full cursor-default" />
      </div>

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(84vw,340px)] flex-col bg-[#003BE2] px-6 pb-8 pt-5 text-white shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-5">
          <a href="/" aria-label="ByteSpace home" onClick={closeMenu}>
            <Image src="/images/nav_Logo.png" alt="ByteSpace" width={172} height={40} className="h-auto w-[148px]" />
          </a>
          <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className="grid size-10 place-items-center rounded-full transition-colors hover:bg-white/15">
            <Icon icon="material-symbols:close" aria-hidden="true" className="size-6" />
          </button>
        </div>

        <ul className="mt-8 space-y-1">
          {navItems.map((item) => (
            <li key={item}>
              <a href={item === "Home" ? "/" : `/#${item.toLowerCase()}`} onClick={closeMenu} className="block rounded-lg px-3 py-3 text-lg font-medium transition-colors hover:bg-white/10 active:bg-white/20 active:shadow-[inset_0_2px_10px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D0FF00]">{item}</a>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-white/20 pt-5">
          <a href="/login" onClick={closeMenu} className="block rounded-lg px-3 py-3 text-base transition-colors hover:bg-white/10 active:bg-white/20 active:shadow-[inset_0_2px_10px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D0FF00]">Sign In</a>
          <a href="/signup" onClick={closeMenu} className="block rounded-lg px-3 py-3 text-base transition-colors hover:bg-white/10 active:bg-white/20 active:shadow-[inset_0_2px_10px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D0FF00]">Join Us</a>
        </div>
      </aside>
    </header>
  );
}

