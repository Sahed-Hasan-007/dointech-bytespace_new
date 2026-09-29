"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animateCounter } from "@/composables/helper";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function AnimatedStat({ value, label, suffix = "", thousands = false }: { value: number; label: string; suffix?: string; thousands?: boolean }) {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = statRef.current;
    if (!node) return;

    let stopAnimation: (() => void) | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      stopAnimation = animateCounter({ to: value, onUpdate: setCount });
      observer.disconnect();
    }, { threshold: 0.4 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      stopAnimation?.();
    };
  }, [value]);

  const formattedCount = thousands && count >= 1000
    ? `${(count / 1000).toFixed(1).replace(/\.0$/, "")}K`
    : count.toLocaleString();

  return (
    <div ref={statRef}>
      <p className="text-3xl font-semibold tracking-[-0.04em] text-[#064BFF] sm:text-4xl">
        {formattedCount}{suffix}
      </p>
      <p className="mt-1 text-sm text-[#5f6069] sm:text-base">{label}</p>
    </div>
  );
}

export function ProfessionalSection() {
  return (
    <section id="professional" className="relative isolate w-full overflow-hidden bg-white text-[#24252b]">
      <Image
        src="/images/professional/bg_shadow.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-fill"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <h2 className="max-w-[560px] text-3xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-5 max-w-[510px] text-base leading-[1.8] text-[#5f6069] sm:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="mt-8 flex gap-8 sm:gap-12">
              {[
                { value: 12000, label: "Students", thousands: true, suffix: "" },
                { value: 70, label: "Courses", thousands: false, suffix: "+" },
                { value: 16, label: "Creators", thousands: false, suffix: "" },
              ].map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src="/images/professional/person1.png"
              alt="Online instructor teaching a course"
              width={703}
              height={697}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="mx-auto h-auto w-full max-w-[620px]"
            />
          </div>
        </div>

        <div className="mt-14 grid items-center gap-8 sm:mt-20 sm:gap-10 lg:mt-24 lg:grid-cols-2 lg:gap-12">
          <div>
            <Image
              src="/images/professional/person2.png"
              alt="Instructor managing course revenue and celebrating with students"
              width={587}
              height={719}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="mx-auto h-auto w-full max-w-[580px]"
            />
          </div>

          <div className="lg:pl-2">
            <h2 className="max-w-[520px] text-3xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-5 max-w-[570px] text-base leading-[1.8] text-[#5f6069] sm:text-lg">
              <span className="font-semibold text-[#24252b]">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-7 space-y-3 text-base sm:text-lg">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span aria-hidden="true" className="grid size-5 shrink-0 place-items-center rounded-full bg-[#064BFF] text-xs font-bold text-white">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
