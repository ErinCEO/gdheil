"use client";

import { site } from "@/lib/site";

export function IndustryMarquee() {
  const row1 = [...site.industries, ...site.industries];
  const row2 = [...site.services, ...site.services];
  return (
    <div className="relative border-y border-white/5 bg-ink-2/70 overflow-hidden py-8">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {row1.map((i, idx) => (
          <span key={idx} className="flex items-center gap-12 px-6">
            <span className="display text-2xl lg:text-4xl text-bone/85">
              {i.name}
            </span>
            <span aria-hidden className="text-heil">✦</span>
          </span>
        ))}
      </div>
      <div
        className="flex animate-marquee whitespace-nowrap py-3 mt-2"
        style={{ animationDirection: "reverse", animationDuration: "55s" }}
      >
        {row2.map((s, idx) => (
          <span key={idx} className="flex items-center gap-10 px-6">
            <span className="mono text-sm lg:text-base text-bone/55">
              {s.title}
            </span>
            <span aria-hidden className="text-heil/60">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
