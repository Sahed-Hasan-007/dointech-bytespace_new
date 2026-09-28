import Image from "next/image";
import { Icon } from "@iconify/react";

export function Hero() {
  return (
    <section
      aria-label="ByteSpace introduction"
      className="relative isolate min-h-[min(1400px,170svh)] overflow-hidden bg-[#003BE2]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.62) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.62) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative z-30 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-36 text-center text-white sm:px-8 md:pt-40">
        <h1 className="font-sans text-4xl font-extrabold leading-[1.06] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
          Get Access to Hundreds
          <br className="hidden sm:block" /> Courses Available
        </h1>
        <p className="mt-6 max-w-4xl text-sm text-[#E5E6E8] leading-6 sm:text-base md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <form action="#courses" role="search" className="mt-12 flex w-full max-w-[584px] flex-col gap-3 sm:flex-row">
          <label htmlFor="course-search" className="sr-only">Search courses</label>
          <div className="flex h-[54px] min-w-0 flex-1 items-center rounded-full bg-white px-6 transition focus-within:ring-2 focus-within:ring-[#D0FF00]">
            <Icon icon="material-symbols:search" aria-hidden="true" className="mr-3 size-5 shrink-0 text-[#85858d]" />
            <input
              id="course-search"
              name="q"
              type="search"
              placeholder="Course, topic, creator"
              className="h-full min-w-0 flex-1 bg-transparent text-left text-base text-[#36363b] outline-none placeholder:text-[#85858d]"
            />
          </div>
          <button type="submit" className="h-[54px] rounded-full bg-[#D0FF00] px-8 text-base font-medium text-[#171717] transition-colors hover:bg-white sm:min-w-[120px]">
            Search
          </button>
        </form>
      </div>

      <Image
        src="/images/hero/Ellipse%207.png"
        alt=""
        aria-hidden="true"
        width={1152}
        height={383}
        sizes="98vw"
        priority
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-auto w-[min(98vw,1410px)] -translate-x-1/2 select-none"
      />
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-30 w-[min(92vw,900px)] -translate-x-1/2">
        <div className="relative w-full">
          <Image
            src="/images/hero/Image.png"
            alt=""
            aria-hidden="true"
            width={722}
            height={515}
            sizes="92vw"
            priority
            className="h-auto w-full select-none"
          />
          <div className="pointer-events-auto absolute left-[2%] top-[2%] z-40 w-[min(172px,50vw)] rounded-[12px] bg-white px-2 py-2 text-left shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:left-[7%] sm:top-[29%] sm:w-auto sm:rounded-[14px] sm:px-[18px] sm:py-[14px]">
            <p className="whitespace-nowrap text-[13px] font-medium leading-5 text-[#25252a] sm:text-base">UI/UX Design</p>
            <p className="mt-0.5 whitespace-nowrap text-[10px] leading-4 text-[#85858d] sm:text-xs">200 Courses&nbsp; • &nbsp;1000+ Students</p>
          </div>
          <div className="pointer-events-auto absolute right-[2%] top-[2%] z-40 w-[min(150px,43vw)] rounded-[12px] bg-white px-2.5 pb-2.5 pt-2.5 text-left shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:right-[8%] sm:top-[28%] sm:w-[min(296px,72vw)] sm:rounded-[14px] sm:px-5 sm:pb-5 sm:pt-5">
            <p className="text-[11px] font-medium leading-5 text-[#25252a] sm:text-sm">Learning Progress</p>
            <p className="mt-1 text-[40px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#25252a] sm:mt-2 sm:text-[60px]">55%</p>
            <div
              role="progressbar"
              aria-label="Learning progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={55}
              className="mt-2 h-2 overflow-hidden rounded-full bg-[#f1f1f1] sm:mt-4 sm:h-2.5"
            >
              <div className="h-full w-[55%] rounded-full bg-[#D0FF00]" />
            </div>
          </div>
          <div className="pointer-events-auto absolute bottom-[7%] left-[2%] z-40 w-[min(210px,58vw)] rounded-[12px] bg-white px-3 py-2.5 text-left shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:bottom-[7%] sm:left-[3%] sm:w-[258px] sm:rounded-[14px] sm:px-4 sm:py-3">
            <p className="text-sm font-medium leading-5 text-[#25252a] sm:text-base">Happy Students</p>
            <p className="text-[11px] leading-4 text-[#85858d] sm:text-xs">4.5 (240) <span className="text-[#D0FF00]">★</span></p>
            <Image
              src="/images/hero/Auto%20Layout%20Horizontal.png"
              alt=""
              aria-hidden="true"
              width={232}
              height={43}
              sizes="232px"
              className="mt-1 h-auto w-full"
            />
          </div>
        </div>
      </div>
      <Image
        src="/images/hero/3d%20ornament.png"
        alt=""
        aria-hidden="true"
        width={1440}
        height={740}
        sizes="100vw"
        priority
        className="pointer-events-none absolute inset-x-0 bottom-32 z-10 h-auto w-full select-none sm:bottom-40"
      />
    </section>
  );
}

