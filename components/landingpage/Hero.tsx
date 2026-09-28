import Image from "next/image";

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
      <Image
        src="/images/hero/Image.png"
        alt=""
        aria-hidden="true"
        width={722}
        height={515}
        sizes="92vw"
        priority
        className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-auto w-[min(92vw,900px)] -translate-x-1/2 select-none"
      />
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

