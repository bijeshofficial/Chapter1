import Reveal from "./Reveal";

const address = "Av. General Roçadas 171C, 1170-160 Lisboa, Portugal";
const mapsQuery = encodeURIComponent(address);

// TODO: update these once opening hours are confirmed.
const hours = [
  { day: "Monday – Friday", time: "8:00 – 20:00" },
  { day: "Saturday", time: "9:00 – 21:00" },
  { day: "Sunday", time: "9:00 – 18:00" },
];

function Row({ icon, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 text-olive-soft">{icon}</span>
      <div className="text-[1.02rem] leading-relaxed text-ink">{children}</div>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="bg-paper px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="divider-leaf eyebrow mb-6">Visit us</span>
          <h2 className="mt-4 font-serif text-4xl text-olive-deep sm:text-5xl">
            Come write your chapter with us
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal className="flex flex-col justify-center gap-8">
            <Row
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              }
            >
              <p className="font-medium text-olive-deep">Find us</p>
              <p className="text-muted">{address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-olive-deep underline underline-offset-4 hover:text-olive"
              >
                Get directions
              </a>
            </Row>

            <Row
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              <p className="font-medium text-olive-deep">Opening hours</p>
              <ul className="mt-1 space-y-1 text-muted">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-8">
                    <span>{h.day}</span>
                    <span className="tabular-nums">{h.time}</span>
                  </li>
                ))}
              </ul>
            </Row>

            <Row
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              }
            >
              <p className="font-medium text-olive-deep">Say hello</p>
              <a
                href="https://www.instagram.com/chapter1cafeandbar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline underline-offset-4 hover:text-olive-deep"
              >
                @chapter1cafeandbar
              </a>
            </Row>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-line shadow-sm">
              <iframe
                title="Chapter 1 location map"
                src={`https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
