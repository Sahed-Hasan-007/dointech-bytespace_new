"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";

type Course = {
  title: string;
  image: string;
  categories: string[];

};

const courses: Course[] = [
  {
    title: "Learn Figma from Basic",
    image: "/images/discover/Frame.png",
    categories: ["Featured", "Drawing & Painting", "UI/UX Design", "Digital Illustration", "Design"],
  },
  {
    title: "Build Digital Asset",
    image: "/images/discover/Frame%20%281%29.png",
    categories: ["Featured", "Music", "Animation", "Creative Marketing"],
  },
  {
    title: "The Power of Big Data",
    image: "/images/discover/Frame%20%282%29.png",
    categories: ["Featured", "Web Development", "Data Science", "IT"],
  },
  {
    title: "Balancing Productivity and Creativity",
    image: "/images/discover/Frame%20%283%29.png",
    categories: ["Featured", "Productivity", "Freelance & Entrepreneurship"],
  },
  {
    title: "Mastering Money Management",
    image: "/images/discover/Frame%20%284%29.png",
    categories: ["Featured", "Business", "Finance"],
  },
  {
    title: "From Idea to Startup Success",
    image: "/images/discover/Frame%20%285%29.png",
    categories: ["Featured", "Marketing", "Crafts", "Photography", "Business"],
  },
];

const visibleCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];
const extraCategories = ["Business", "IT", "Finance", "Design"];

export function DiscoverSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const categories = showMoreCategories ? [...visibleCategories, ...extraCategories] : visibleCategories;
  const filteredCourses = useMemo(
    () => activeCategory === "Featured" ? courses : courses.filter((course) => course.categories.includes(activeCategory)),
    [activeCategory],
  );

  return (
    <section id="courses" className="bg-white px-5 py-20 text-[#101322] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1120px]">
        <header className="mx-auto max-w-[1120px] text-center">
          <h2 className="text-3xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-4xl md:text-5xl">
            Discover Your Passion,<br className="hidden sm:block" /> Build Your Skills
          </h2>
          <p className="mx-auto mt-5 max-w-[940px] text-sm leading-6 text-[#858995] sm:text-base md:text-lg md:leading-8">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </header>

        <div aria-label="Filter courses by category" className="mt-9 flex flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2.5 text-sm transition-colors sm:px-5 sm:py-3 sm:text-base ${activeCategory === category ? "bg-[#D0FF00] text-[#171717]" : "bg-[#F3F3F5] text-[#454852] hover:bg-[#E9E9EC]"}`}
            >
              {category}
            </button>
          ))}
          <button
            type="button"
            aria-expanded={showMoreCategories}
            onClick={() => setShowMoreCategories((isExpanded) => !isExpanded)}
            className="px-2 py-2.5 text-sm font-medium text-[#064BFF] transition-colors hover:text-[#0033b7] sm:px-3 sm:py-3 sm:text-base cursor-pointer"
          >
            {showMoreCategories ? "− Less" : "+ More"}
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3 xl:gap-8">
          {filteredCourses.map((course) => (
            <article key={course.title} className="min-w-0 rounded-[20px] border border-[#D7D8DD] bg-white p-3 hover:scale-105 transition duration-300 cursor-pointer hover:shadow-[0_12px_32px_rgba(16,19,34,0.10)]">
              <Image
                src={course.image}
                alt={course.title}
                width={341}
                height={196}
                sizes="(min-width: 1280px) 290px, (min-width: 640px) 45vw, 92vw"
                className="aspect-[341/196] w-full rounded-[10px] object-cover"
              />

              <div className="mt-3 flex min-w-0 items-center justify-between gap-2">
                <h3 className="truncate text-[15px] font-semibold tracking-[-0.02em] text-[#151515] sm:text-base">{course.title}</h3>
                <p className="flex shrink-0 items-center gap-1 text-sm text-[#676a72]">4.5 <span aria-hidden="true" className="text-base text-[#C7C9CE]">★</span></p>
              </div>
              <p className="mt-0.5 text-[10px] text-[#777982]">by <a href="#creators" className="text-[#064BFF] hover:underline">purepearl studio</a></p>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#F3F3F5] px-3 py-1.5 text-[10px] text-[#555862]">
                  <Icon icon="material-symbols:bar-chart" aria-hidden="true" className="size-4" />
                  Beginner
                </span>
                <Image
                  src="/images/discover/Auto%20Layout%20Horizontal.png"
                  alt="Course students"
                  width={128}
                  height={32}
                  sizes="128px"
                  className="h-auto w-[128px] shrink-0"
                />
              </div>

              <p className="mt-3 text-lg font-semibold text-[#064BFF]">
                $25/<span className="font-normal text-sm text-[#777982]">lifetime</span>
              </p>
            </article>
          ))}
          {filteredCourses.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-[#777982]">No courses in this category yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}


