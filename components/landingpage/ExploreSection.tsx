import Image from "next/image";

const learningPaths = [
  { name: "Design", image: "/images/explore/design.png" },
  { name: "Development", image: "/images/explore/development.png" },
  { name: "IT & Software", image: "/images/explore/it.png" },
  { name: "Business", image: "/images/explore/business.png" },
  { name: "Marketing", image: "/images/explore/marketing.png" },
  { name: "Photography", image: "/images/explore/photography.png" },
];

export function ExploreSection() {
  return (
    <section id="explore" className="bg-white px-5 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[#080b20] sm:text-4xl lg:text-5xl">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-4 max-w-5xl text-base leading-relaxed text-[#858995] sm:text-lg">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various
          fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 sm:gap-7 lg:grid-cols-6 lg:gap-8">
          {learningPaths.map((path) => (
            <a
              key={path.name}
              href="#discover"
              className="group flex aspect-square w-full max-w-[168px] flex-col items-center justify-center rounded-[24px] border border-[#d1d2d7] bg-white transition duration-200 hover:-translate-y-1 hover:border-[#d3ff00] hover:shadow-[0_10px_30px_rgba(8,11,32,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]"
            >
              <Image src={path.image} alt="" width={60} height={60} className="h-[60px] w-[60px]" />
              <span className="mt-3 text-lg font-medium tracking-tight text-[#292a30] sm:text-xl">{path.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
