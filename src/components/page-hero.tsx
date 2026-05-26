import { Reveal } from "./motion";

export function PageHero({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
}) {
  return (
    <section className="relative pt-36 lg:pt-48 pb-20 lg:pb-28 concrete-texture overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-20" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 size-[500px] rounded-full bg-safety/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <p className="mono text-xs text-safety inline-flex items-center gap-3">
            <span className="inline-block size-1.5 bg-safety" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display text-6xl sm:text-8xl lg:text-[9rem] leading-[0.88] mt-6 max-w-5xl">
            {title}
          </h1>
        </Reveal>
        {blurb && (
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg lg:text-xl text-bone/75 max-w-2xl">
              {blurb}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
