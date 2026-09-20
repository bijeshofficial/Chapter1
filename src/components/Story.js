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

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
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
