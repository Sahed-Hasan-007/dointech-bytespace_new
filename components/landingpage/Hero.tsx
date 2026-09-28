export function Hero() {
  return (
    <section
      aria-label="ByteSpace introduction"
      className="relative isolate min-h-[min(760px,100svh)] overflow-hidden bg-[#003BE2]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.62) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.62) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />
    </section>
  );
}

