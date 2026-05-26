import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative bg-ink-2 border-t border-white/5">
      <div className="grid-noise absolute inset-0 opacity-[0.35] pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="mono text-xs text-safety">{site.tagline}</p>
            <h2 className="display text-5xl lg:text-7xl mt-4">
              Build us into
              <br />
              your next project.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-safety text-ink px-6 py-3 font-semibold hover:bg-bone transition-colors"
            >
              Request a bid <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
            <NapsBlock />
            <div>
              <p className="mono text-xs text-concrete-2 mb-4">Sitemap</p>
              <ul className="space-y-2">
                {site.nav.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="text-bone/80 hover:text-safety transition-colors"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mono text-xs text-concrete-2 mt-8 mb-4">
                Services
              </p>
              <ul className="space-y-2 text-sm text-bone/70">
                {site.services.slice(0, 6).map((s) => (
                  <li key={s.title}>{s.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="mono text-xs text-concrete-2">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="mono text-xs text-concrete-2">
            California licensed demolition contractor · Serving CA since{" "}
            {site.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function NapsBlock({ heading = "Visit / Call" }: { heading?: string }) {
  return (
    <div itemScope itemType="https://schema.org/GeneralContractor">
      <p className="mono text-xs text-concrete-2 mb-4">{heading}</p>
      <p className="display text-2xl mb-4" itemProp="name">
        {site.name}
      </p>
      <ul className="space-y-3 text-sm">
        <li className="flex gap-3">
          <MapPin className="size-4 text-safety mt-0.5 shrink-0" />
          <span
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            className="text-bone/80"
          >
            <span itemProp="streetAddress">{site.address.street}</span>
            <br />
            <span itemProp="addressLocality">{site.address.city}</span>,{" "}
            <span itemProp="addressRegion">{site.address.region}</span>{" "}
            <span itemProp="postalCode">{site.address.postalCode}</span>
          </span>
        </li>
        <li className="flex gap-3">
          <Phone className="size-4 text-safety mt-0.5 shrink-0" />
          <a
            href={`tel:${site.phoneE164}`}
            itemProp="telephone"
            className="text-bone/90 hover:text-safety transition-colors"
          >
            {site.phone}
          </a>
        </li>
        <li className="flex gap-3">
          <Mail className="size-4 text-safety mt-0.5 shrink-0" />
          <a
            href={`mailto:${site.email}`}
            itemProp="email"
            className="text-bone/90 hover:text-safety transition-colors"
          >
            {site.email}
          </a>
        </li>
        <li className="flex gap-3">
          <Clock className="size-4 text-safety mt-0.5 shrink-0" />
          <span className="text-bone/80">
            {site.hours.map((h) => (
              <span key={h.day} className="block">
                <span className="mono text-xs text-concrete-2 mr-2">
                  {h.day}
                </span>
                {h.time}
              </span>
            ))}
          </span>
        </li>
      </ul>
    </div>
  );
}
