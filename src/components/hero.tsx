"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-32 lg:pt-44 pb-24 concrete-texture">
      <div className="absolute inset-0 grid-noise opacity-20 pointer-events-none" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 size-[700px] rounded-full bg-safety/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 size-[600px] rounded-full bg-safety-hot/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mono text-xs text-safety inline-flex items-center gap-3"
        >
          <span className="inline-block size-1.5 bg-safety" />
          California Demolition Contractor · Est. {site.founded}
        </motion.p>

        <h1 className="display text-[15vw] leading-[0.86] sm:text-8xl lg:text-[10rem] xl:text-[12rem] mt-6 text-bone">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Determined
          </motion.span>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block"
          >
            to make a
          </motion.span>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block text-safety italic font-normal"
            style={{ fontStyle: "italic" }}
          >
            difference.
          </motion.span>
        </h1>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6 text-lg lg:text-xl text-bone/75 max-w-xl"
          >
            GD Heil, Inc. is a California demolition contractor specializing in
            soft and hard demolition, interior strip-outs, saw cutting, and
            breaking and removals — quietly setting the stage for landmark
            projects across the West Coast since 1992.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6 flex flex-col sm:flex-row gap-3 lg:justify-end"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-safety text-ink px-6 py-4 font-semibold hover:bg-bone transition-colors"
            >
              Request a bid
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${site.phoneE164}`}
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-bone px-6 py-4 hover:border-safety hover:text-safety transition-colors"
            >
              <Phone className="size-4" />
              {site.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
