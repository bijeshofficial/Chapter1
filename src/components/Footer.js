import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <Image
          src="/logo.webp"
          alt="Chapter 1"
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />
        <p className="font-serif text-2xl italic text-olive-deep">
          Every chapter starts with a story.
        </p>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Av. General Roçadas 171C, 1170-160 Lisboa, Portugal
        </p>
        <div className="flex items-center gap-6 text-sm uppercase tracking-[0.16em] text-muted">
          <a href="#story" className="hover:text-olive-deep">Story</a>
          <a href="#menu" className="hover:text-olive-deep">Menu</a>
          <a href="#visit" className="hover:text-olive-deep">Visit</a>
        </div>
        <a
          href="https://www.instagram.com/chapter1cafeandbar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chapter 1 on Instagram"
          className="text-muted transition-colors hover:text-olive-deep"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <p className="mt-4 text-xs tracking-wide text-muted/80">
          © {new Date().getFullYear()} Chapter 1 Café &amp; Bar · Lisbon, Portugal
        </p>
      </div>
    </footer>
  );
}
