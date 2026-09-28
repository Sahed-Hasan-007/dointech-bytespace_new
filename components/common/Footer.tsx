import Image from "next/image";

const footerGroups = [
  { links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"] },
  { links: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
  { links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"] },
];

export function Footer() {
  return (
    <footer className="bg-white text-[#29292d]">
      <div className="mx-auto max-w-[1440px] px-6 pb-7 pt-14 sm:px-10 sm:pt-16 lg:px-[8.33%] lg:pt-[72px]">
        <div className="grid gap-12 lg:grid-cols-[1.65fr_1.65fr] lg:gap-16">
          <div>
            <a href="/" aria-label="ByteSpace home" className="shrink-0">
              <Image src="/images/footer_Logo.png" alt="ByteSpace" width={172} height={40} priority className="h-auto hover:scale-110 transition duration-300 w-[142px] sm:w-[164px]" />
            </a>
            <p className="mt-5 text-sm leading-6">Stay up to date with our latest features and releases by joining our newsletter.</p>
            <form action="#" className="mt-10 flex max-w-[505px] flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
              <input id="newsletter-email" name="email" type="email" placeholder="Enter your email" required className="h-[53px] min-w-0 flex-1 rounded-full border border-[#d0d0d4] px-6 text-sm outline-none transition focus:border-[#a9d900]" />
              <button type="submit" className="h-[47px] self-start rounded-full bg-[#D0FF00] px-6 text-base font-medium text-[#181818] transition-colors hover:bg-[#b9eb00] sm:h-[47px]">Search</button>
            </form>
            <p className="mt-6 max-w-[500px] text-xs leading-5 text-[#424247]">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-3 sm:gap-x-6">
            {footerGroups.map((group, index) => (
              <ul key={index} className="space-y-[18px] text-sm">
                {group.links.map((link) => (
                  <li key={link}><a href="#" className="transition-colors hover:text-[#779900]">{link}</a></li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#d6d6da] pt-6 text-xs sm:mt-[128px] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-[#779900]">Privacy Policy</a>
            <a href="#" className="hover:text-[#779900]">Terms of Service</a>
            <a href="#" className="hover:text-[#779900]">Cookies Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}



