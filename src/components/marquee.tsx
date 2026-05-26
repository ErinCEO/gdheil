import { site } from "@/lib/site";

export function IndustryMarquee() {
  const items = [...site.industries, ...site.industries];
  return (
    <div className="relative border-y border-white/5 bg-ink-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-6">
        {items.map((i, idx) => (
          <span key={idx} className="flex items-center gap-12 px-6">
            <span className="display text-2xl lg:text-4xl text-bone/90">
              {i.name}
            </span>
            <span aria-hidden className="text-safety">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
