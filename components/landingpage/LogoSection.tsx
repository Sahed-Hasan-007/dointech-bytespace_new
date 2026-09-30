import Image from "next/image";

const logos = [
  { src: "/images/logo/Frame.png", width: 167, height: 41 },
  { src: "/images/logo/Frame%20%281%29.png", width: 168, height: 41 },
  { src: "/images/logo/Frame%20%282%29.png", width: 170, height: 41 },
  { src: "/images/logo/Frame%20%283%29.png", width: 170, height: 41 },
  { src: "/images/logo/Frame%20%284%29.png", width: 169, height: 42 },
];

export function LogoSection() {
  return (
    <section aria-label="Trusted by learners and creators" className="flex min-h-[200px] items-center bg-[#F4F4F5] px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-[1300px] flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 sm:gap-y-12 lg:gap-x-26">
        {logos.map((logo, index) => (
          <div key={logo.src} className="flex w-[min(128px,36vw)] items-center justify-center sm:w-[168px]">
            <Image
              src={logo.src}
              alt={`Logoipsum partner ${index + 1}`}
              width={logo.width}
              height={logo.height}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

