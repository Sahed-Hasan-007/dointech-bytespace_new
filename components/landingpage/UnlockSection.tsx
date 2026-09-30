import Image from "next/image";

export function UnlockSection() {
  return (
    <section className="relative isolate flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-[#003BE2] px-5 py-16 text-center text-white sm:min-h-[420px] sm:px-8 lg:min-h-[488px]">
      <Image
        src="/images/unlock/bg.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-fill"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.62) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.62) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1000px]">
        <h2 className="mx-auto max-w-[700px] text-3xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-4xl md:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-8 max-w-[980px] text-sm leading-6 text-white/90 sm:text-base sm:leading-[29px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <a
          href="#creators"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#D0FF00] px-7 text-base font-medium text-[#171717] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Join as Creator
        </a>
      </div>
    </section>
  );
}
