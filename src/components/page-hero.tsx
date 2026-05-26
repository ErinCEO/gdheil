import Image from "next/image";
import { Reveal, WordReveal } from "./motion";

export function PageHero({
  eyebrow,
  title,
  blurb,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="relative pt-40 lg:pt-52 pb-24 lg:pb-32 overflow-hidden">
      {image ? (
        <>
          <Image
            src={image}
            alt={alt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        </>
      ) : (
        <div className="absolute inset-0 concrete-texture" aria-hidden />
      )}
      <div className="absolute inset-0 grid-noise opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
        <Reveal>
          <p className="mono text-[11px] text-heil flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-heil" />
            {eyebrow}
          </p>
        </Reveal>

        <h1 className="display text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.86] mt-8 max-w-[18ch]">
          <WordReveal text={title} />
        </h1>

        {blurb && (
          <Reveal delay={0.2}>
            <p className="mt-10 text-lg lg:text-xl text-bone/75 max-w-2xl">
              {blurb}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
