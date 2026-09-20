"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { reviewsWidgetId, mapsReviewsUrl, mapsPlaceUrl } from "@/data/site";

const FEATURABLE_SRC = "https://cdn.featurable.com/widget/v2/embed.js";

function loadFeaturable() {
  if (document.querySelector(`script[src="${FEATURABLE_SRC}"]`)) return;
  const s = document.createElement("script");
  s.src = FEATURABLE_SRC;
  s.defer = true;
  s.charset = "UTF-8";
  document.body.appendChild(s);
}

function GoogleCta() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-line bg-paper p-10 text-center">
      <div className="flex justify-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3l2.4 5.4L20 9l-4 3.8L17.2 19 12 15.9 6.8 19 8 12.8 4 9l5.6-.6L12 3z" />
          </svg>
        ))}
      </div>
      <p className="mt-5 text-lg leading-relaxed text-muted">
        Been in for a momo and a coffee? We&rsquo;d love to hear about it. Read
        what others think, or share your own visit on Google.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <a
          href={mapsPlaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-olive px-7 py-3 text-sm uppercase tracking-[0.16em] text-olive-deep transition-colors hover:bg-olive hover:text-cream"
        >
          Read reviews
        </a>
        <a
          href={mapsReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-olive px-7 py-3 text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:bg-olive-deep"
        >
          Leave a review
        </a>
      </div>
    </div>
  );
}

export default function Reviews() {
  const widgetRef = useRef(null);
  // "loading" while we wait for Featurable; "loaded" once it renders;
  // "failed" if it never does (or no widget id is configured).
  const [status, setStatus] = useState(reviewsWidgetId ? "loading" : "failed");

  useEffect(() => {
    if (!reviewsWidgetId) return;
    loadFeaturable();

    let tries = 0;
    const interval = setInterval(() => {
      tries += 1;
      const el = widgetRef.current;
      const rendered =
        el &&
        (el.childElementCount > 0 ||
          el.shadowRoot ||
          el.offsetHeight > 40);
      if (rendered) {
        setStatus("loaded");
        clearInterval(interval);
      } else if (tries >= 16) {
        // ~8s with no render → treat as unavailable, show the CTA.
        setStatus("failed");
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="divider-leaf eyebrow mb-6">Kind words</span>
          <h2 className="mt-4 font-serif text-4xl text-olive-deep sm:text-5xl">
            What our guests are saying
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          {reviewsWidgetId && (
            <div
              ref={widgetRef}
              id={`featurable-${reviewsWidgetId}`}
              data-featurable-async
              style={{ display: status === "failed" ? "none" : undefined }}
            />
          )}
          {status === "failed" && <GoogleCta />}
        </Reveal>
      </div>
    </section>
  );
}
