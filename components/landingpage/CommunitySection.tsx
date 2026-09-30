"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/images/community/sarah.png",
    quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/images/community/james.png",
    quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/images/community/alex.png",
    quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export function CommunitySection() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="community"
      className="relative isolate overflow-hidden bg-[#fbfbfc] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 49% 18%, rgba(208,255,0,.28), transparent 34%), radial-gradient(ellipse at 10% 90%, rgba(0,59,226,.18), transparent 36%), radial-gradient(ellipse at 95% 88%, rgba(208,255,0,.2), transparent 34%)",
        }}
      />

      <div className="mx-auto max-w-[1204px]">
        <header className="grid items-center gap-5 md:grid-cols-[1fr_1fr] md:gap-12">
          <h2 className="max-w-[570px] text-3xl font-bold leading-[1.1] tracking-[-0.035em] text-black sm:text-4xl lg:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[590px] text-sm leading-6 text-[#5f6069] sm:text-base sm:leading-[29px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </header>

        <div aria-live="off" className="relative mt-10 h-[430px] md:mt-16 md:h-[440px]">
          {testimonials.map((person, index) => {
            const offset = (index - activeIndex + 1 + testimonials.length) % testimonials.length - 1;
            const isActive = index === activeIndex;
            const horizontalPosition = offset === 0
              ? "translateX(-50%)"
              : offset < 0
                ? "translateX(calc(-50% - 100% - 1.5rem))"
                : "translateX(calc(-50% + 100% + 1.5rem))";
            return (
              <article
                key={person.name}
                style={{
                  transform: `${horizontalPosition} scale(${isActive ? 1.04 : 1})`,
                  left: "50%",
                  zIndex: isActive ? 2 : 1,
                }}
                className={`absolute top-0 h-full w-full max-w-[420px] rounded-[24px] bg-white p-6 shadow-[0_12px_40px_rgba(21,32,80,0.035)] transition-[transform,opacity,box-shadow] duration-1000 ease-in-out sm:p-7 md:max-w-none md:w-[calc((100%_-_3rem)_/_3)] md:p-6 lg:p-7 ${isActive ? "opacity-100 md:shadow-[0_18px_48px_rgba(21,32,80,0.09)]" : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"}`}
              >
                <Image src={person.image} alt={`${person.name} portrait`} width={80} height={80} className="size-20 rounded-full object-cover" />
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-black">{person.name}</h3>
                <p className="mt-0.5 text-base text-[#064BFF]">{person.role}</p>
                <p className="mt-6 text-sm leading-[1.8] text-[#5f6069] sm:text-sm lg:text-base">{person.quote}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4" aria-label="Testimonial controls">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
            className="grid size-10 place-items-center rounded-full border border-[#d9dbe3] bg-white text-xl text-[#24252b] transition hover:border-[#064BFF] hover:text-[#064BFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064BFF]"
          >
            ‹
          </button>
          <div className="flex items-center gap-2" aria-label={`Slide ${activeIndex + 1} of ${testimonials.length}`}>
            {testimonials.map((person, index) => (
              <button
                key={person.name}
                type="button"
                aria-label={`Show ${person.name}'s testimonial`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`size-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064BFF] ${activeIndex === index ? "bg-[#064BFF]" : "bg-[#c9cbd2] hover:bg-[#858995]"}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => move(1)}
            className="grid size-10 place-items-center rounded-full border border-[#d9dbe3] bg-white text-xl text-[#24252b] transition hover:border-[#064BFF] hover:text-[#064BFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064BFF]"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
