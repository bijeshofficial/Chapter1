import Image from "next/image";
import Leaf from "./Leaf";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cream-deep" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cream-deep/70" />
      </div>

      <div className="flex flex-col items-center text-center">
        <Image
          src="/logo.webp"
          alt="Chapter 1 — Café & Bar"
          width={200}
          height={200}
          priority
          className="mb-8 h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
        />

        <p className="eyebrow mb-5">Café &nbsp;·&nbsp; Bar &nbsp;·&nbsp; Lisbon</p>

        <h1 className="font-serif text-6xl leading-[0.95] text-olive-deep sm:text-7xl md:text-8xl">
          Chapter 1
        </h1>

        <div className="my-7 flex items-center gap-4 text-olive-soft">
          <Leaf className="h-5 w-24" />
        </div>

        <p className="max-w-xl font-serif text-2xl italic text-muted sm:text-3xl">
          Every chapter starts with a story.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-olive px-8 py-3 text-sm uppercase tracking-[0.18em] text-cream transition-colors hover:bg-olive-deep"
          >
            View the menu
          </a>
          <a
            href="#visit"
            className="rounded-full border border-olive px-8 py-3 text-sm uppercase tracking-[0.18em] text-olive-deep transition-colors hover:bg-olive hover:text-cream"
          >
            Visit us
          </a>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-olive-soft"
        aria-label="Scroll down"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
