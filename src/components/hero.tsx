"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Magnetic, WordReveal } from "./motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      <motion.div
        style={reduce ? undefined : { y: imgY, scale: imgScale }}
        className="absolute inset-0"
        aria-hidden
      >
        <Image
          src={site.hero.image}
          alt={site.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink"
        aria-hidden
      />
      <div
        className="absolute inset-0 grid-noise opacity-25 pointer-events-none"
        aria-hidden
      />

      <div className="absolute inset-x-0 top-24 lg:top-28 px-5 lg:px-10 flex items-start justify-between text-bone/60 mono text-[10px]">
        <div className="flex items-center gap-3">
          <span className="size-1.5 bg-heil animate-pulse" />
          <span>LIC. CALIF · DEMOLITION · EST. {site.founded}</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>33.8847° N</span>
          <span>117.8531° W</span>
          <span>PLACENTIA / CA</span>
        </div>
      </div>

      <motion.div
        style={reduce ? undefined : { y: textY }}
        className="relative mx-auto w-full max-w-[1500px] px-5 lg:px-10 pb-20 lg:pb-28"
      >
        <p className="mono text-[11px] text-heil mb-6 flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-heil" />
          California Demolition Contractor
        </p>

        <h1 className="display text-[18vw] sm:text-[14vw] lg:text-[11.5rem] xl:text-[13.5rem] leading-[0.86] text-bone">
          <span className="block">
            <WordReveal text="Determined" />
          </span>
          <span className="block">
            <WordReveal text="to make a" delay={0.08} />
          </span>
          <span className="block text-heil italic">
            <WordReveal text="difference." delay={0.16} />
          </span>
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid lg:grid-cols-12 gap-8 items-end"
        >
          <p className="lg:col-span-6 text-lg lg:text-xl text-bone/80 max-w-xl">
            Soft and hard demolition. Interior strip-outs. Saw cutting,
            breaking, and removals. Quietly setting the stage for landmark
            California projects since 1992.
          </p>
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-heil text-bone px-7 py-4 font-semibold hover:bg-heil-bright transition-colors"
              >
                Request a bid
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic strength={10}>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 border border-bone/20 text-bone px-7 py-4 hover:border-heil hover:text-heil transition-colors"
              >
                See the work
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1500px] px-5 lg:px-10 pb-6 hairline">
        <div className="flex items-end justify-between mono text-[10px] text-bone/55">
          <div className="flex items-center gap-2">
            <ArrowDown className="size-3 animate-bounce" />
            <span>Scroll · the work below</span>
          </div>
          <div className="hidden md:block">
            File · 2026.0001 / GDH-LANDING
          </div>
        </div>
      </div>
    </section>
  );
}
