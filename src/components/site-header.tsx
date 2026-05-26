"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — Home`}
          >
            <Logo />
            <div className="flex flex-col leading-none">
              <span className="display text-bone text-xl lg:text-2xl">
                GD Heil
              </span>
              <span className="mono text-[10px] text-concrete-2 mt-1">
                Demolition · Est. {site.founded}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm text-bone/80 hover:text-bone transition-colors group"
              >
                <span>{item.label}</span>
                <span className="absolute left-3 right-3 -bottom-px h-px bg-safety scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneE164}`}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm mono text-bone/90 hover:text-safety transition-colors"
            >
              <Phone className="size-4" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-safety text-ink px-5 py-2.5 text-sm font-semibold hover:bg-bone transition-colors"
            >
              Request Bid
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-bone"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="display text-2xl">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2"
              >
                <X className="size-6" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
              className="px-5 pt-6 flex flex-col gap-1"
            >
              {site.nav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display text-5xl block py-3 border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="pt-8 flex flex-col gap-3"
              >
                <a
                  href={`tel:${site.phoneE164}`}
                  className="mono text-safety text-lg"
                >
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="text-bone/80">
                  {site.email}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex justify-center items-center bg-safety text-ink px-5 py-3 font-semibold"
                >
                  Request Bid
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="text-safety"
      aria-hidden
    >
      <path
        d="M4 32 L20 6 L36 32 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path d="M4 32 L36 32" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M14 24 L20 14 L26 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
    </svg>
  );
}
