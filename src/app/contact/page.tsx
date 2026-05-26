import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections";
import { NapsBlock } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact GD Heil estimating at ${site.phone} or ${site.email}. Located at ${site.address.full}. Bids weekdays 7am–4:30pm.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send us your scope. We'll send back a number."
        blurb="The fastest way to a bid is a set of drawings and a schedule. Reach the estimating desk by phone, email, or the form below."
      />

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-12">
            <NapsBlock heading="Estimating Desk" />
            <Reveal>
              <div>
                <p className="mono text-xs text-concrete-2 mb-4">
                  Service Area
                </p>
                <ul className="grid grid-cols-2 gap-2 text-bone/85 text-sm">
                  {site.serviceArea.map((s) => (
                    <li
                      key={s}
                      className="border-b border-white/5 py-2 flex items-center gap-2"
                    >
                      <span className="size-1.5 bg-safety" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-white/5 bg-ink-2 p-8 lg:p-12">
                <p className="mono text-xs text-safety">Request a Bid</p>
                <h2 className="display text-4xl lg:text-5xl mt-3 mb-8">
                  Tell us about the project.
                </h2>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 pb-24">
          <Reveal>
            <div className="aspect-[21/9] w-full border border-white/5 overflow-hidden bg-ink-2">
              <iframe
                title="GD Heil headquarters map"
                src="https://www.google.com/maps?q=1031+Segovia+Circle+Placentia+CA+92870&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
