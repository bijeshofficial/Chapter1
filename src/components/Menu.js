"use client";

import { useState } from "react";
import { foodMenu, drinksMenu } from "@/data/menu";
import Reveal from "./Reveal";
import Leaf from "./Leaf";
import Lightbox from "./Lightbox";

function MenuGroup({ group }) {
  return (
    <div className="break-inside-avoid">
      <h3 className="flex items-center gap-2 font-serif text-2xl text-olive-deep">
        {group.title}
        <Leaf className="h-3.5 w-10 text-olive-soft" />
      </h3>
      <ul className="mt-4 space-y-3">
        {group.items.map((item) => (
          <li key={item.name} className="flex items-baseline gap-3">
            <span
              className={`text-[1.02rem] ${
                item.featured ? "font-medium text-olive-deep" : "text-ink"
              }`}
            >
              {item.name}
            </span>
            <span className="mb-1 flex-1 border-b border-dotted border-line" />
            <span className="tabular-nums text-muted">€{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Menu() {
  const [tab, setTab] = useState("food");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const groups = tab === "food" ? foodMenu : drinksMenu;
  const printedSrc = tab === "food" ? "/menu/menu-food.jpg" : "/menu/menu-drinks.jpg";

  return (
    <section id="menu" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="divider-leaf eyebrow mb-6">The menu</span>
          <h2 className="mt-4 font-serif text-4xl text-olive-deep sm:text-5xl">
            Snacks, bakery &amp; signature sips
          </h2>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-line bg-paper p-1">
            {[
              { id: "food", label: "Food" },
              { id: "drinks", label: "Drinks" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-8 py-2.5 text-sm uppercase tracking-[0.16em] transition-colors ${
                  tab === t.id
                    ? "bg-olive text-cream"
                    : "text-muted hover:text-olive-deep"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <Reveal key={tab} className="mt-14">
          <div className="columns-1 gap-14 md:columns-2 [&>div]:mb-12">
            {groups.map((group) => (
              <MenuGroup key={group.title} group={group} />
            ))}
          </div>
        </Reveal>

        <p className="mt-12 text-center text-sm text-muted">
          Prices in euros. Ask our team about the Cake of the Day and seasonal
          specials.{" "}
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="text-olive-deep underline underline-offset-4 hover:text-olive"
          >
            View the printed {tab} menu
          </button>
        </p>
      </div>

      {lightboxOpen && (
        <Lightbox
          src={printedSrc}
          alt={`Chapter 1 printed ${tab} menu`}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
