import Image from "next/image";
import Reveal from "./Reveal";
import Leaf from "./Leaf";

const notes = [
  {
    title: "Himalayan roots",
    body: "Momos, laphing and stick aalu — honest bites from the mountains, made the way they should be.",
  },
  {
    title: "Lisbon mornings",
    body: "Warm pastéis de nata, buttery croissants and a proper espresso to start the day right.",
  },
  {
    title: "Signature sips",
    body: "A playful bar of Chapter mocktails — Strawberry, Blueberry and Blue — poured with a little theatre.",
  },
];

export default function Story() {
  return (
    <section id="story" className="bg-paper px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="divider-leaf eyebrow mb-6">Our story</span>
          <h2 className="mt-4 font-serif text-4xl text-olive-deep sm:text-5xl">
            A little corner of the world in Lisbon
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Chapter 1 began with a simple idea — that every good story starts
            somewhere small. Tucked into Avenida General Roçadas, it&rsquo;s a
            café &amp; bar where Himalayan flavours meet Portuguese classics, and
            where every cup, plate and pour is made to feel like home.
          </p>
          <div className="mt-8 flex justify-center text-olive-soft">
            <Leaf className="h-5 w-28" />
          </div>
        </Reveal>
      </div>

      {/* Founder feature */}
      <div className="mx-auto mt-20 grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal>
          <figure className="relative mx-auto max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_rgba(47,51,39,0.12)]">
              <Image
                src="/founder.jpg"
                alt="Founder of Chapter 1, menu in hand, under the Buddha-eyes lantern"
                width={800}
                height={1000}
                sizes="(max-width: 768px) 90vw, 400px"
                className="aspect-[4/5] w-full object-cover object-[center_72%]"
              />
            </div>
            <span className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-2xl bg-cream-deep" />
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <div className="text-center md:text-left">
            <span className="eyebrow">From Nepal to Lisbon</span>
            <blockquote className="mt-4 font-serif text-2xl leading-snug text-olive-deep sm:text-[1.7rem]">
              &ldquo;Under the Buddha-eyes lantern, menu in hand, dreams in
              heart — welcome to our first café.&rdquo;
            </blockquote>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              From dreaming in Nepal to building in Lisbon, Chapter 1 begins.
              Started small, but dreaming it big — this is where our story opens,
              one guest at a time.
            </p>
            <div className="mt-6 flex justify-center text-olive-soft md:justify-start">
              <Leaf className="h-4 w-24" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 grid max-w-5xl gap-8 md:grid-cols-3">
        {notes.map((n, i) => (
          <Reveal key={n.title} delay={i * 120}>
            <div className="h-full rounded-2xl border border-line bg-cream/60 p-8 text-center">
              <span className="font-serif text-3xl text-gold">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-2xl text-olive-deep">
                {n.title}
              </h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">
                {n.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
