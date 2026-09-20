import Image from "next/image";
import Socials from "./Socials";
import { address } from "@/data/site";

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
          {address}
        </p>
        <div className="flex items-center gap-6 text-sm uppercase tracking-[0.16em] text-muted">
          <a href="#story" className="hover:text-olive-deep">Story</a>
          <a href="#menu" className="hover:text-olive-deep">Menu</a>
          <a href="#visit" className="hover:text-olive-deep">Visit</a>
        </div>
        <Socials className="mt-1" />
        <p className="mt-4 text-xs tracking-wide text-muted/80">
          © {new Date().getFullYear()} Chapter 1 Café &amp; Bar · Lisbon, Portugal
        </p>
      </div>
    </footer>
  );
}
