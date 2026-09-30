import Image from "next/image";

type AuthLayoutProps = {
  eyebrow: string;
  description: string;
  children: React.ReactNode;
};

export function AuthLayout({ eyebrow, description, children }: AuthLayoutProps) {
  return (
    <div className="relative isolate min-h-svh overflow-hidden bg-[#003BE2] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.62) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.62) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <div className="mx-auto grid min-h-svh w-full max-w-[1440px] items-center gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:px-[8.33%] lg:py-12">
        <section className="flex h-full flex-col justify-center lg:py-3">
          <a href="/" aria-label="ByteSpace home" className="inline-flex w-fit">
            <Image src="/images/nav_Logo.png" alt="ByteSpace" width={172} height={40} priority className="h-auto w-[148px] sm:w-[164px]" />
          </a>
          <div className="mt-10 max-w-[500px] sm:mt-12">
            <h1 className="text-xl font-semibold tracking-[-0.02em]">{eyebrow}</h1>
            <p className="mt-4 text-base leading-[1.8] text-white/90 sm:text-lg">{description}</p>
          </div>
          <div className="auth-image-perspective mx-auto mt-8 w-full max-w-[500px] sm:mt-10 lg:mt-12">
            <Image
              src="/images/login_reg.png"
              alt="Online course cards and a happy community of learners"
              width={552}
              height={586}
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="auth-image-rotate h-auto w-full"
            />
          </div>
        </section>

        <section className="flex w-full items-center justify-center text-[#24252b]">
          {children}
        </section>
      </div>
    </div>
  );
}
