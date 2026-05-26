export const site = {
  name: "GD Heil, Inc.",
  shortName: "GD Heil",
  tagline: "Determined to Make a Difference",
  description:
    "GD Heil, Inc. is a California demolition contractor specializing in soft and hard demolition, interior strip-outs, saw cutting, breaking, and removals. Building the future by carefully unbuilding the past since 1992.",
  url: "https://www.gdheil.com",
  founded: 1992,
  address: {
    street: "1031 Segovia Circle",
    city: "Placentia",
    region: "CA",
    postalCode: "92870",
    country: "US",
    full: "1031 Segovia Circle, Placentia, CA 92870",
  },
  phone: "714-687-9100",
  phoneE164: "+17146879100",
  email: "estimating@gdheil.com",
  hours: [
    { day: "Mon–Fri", time: "7:00 AM – 4:30 PM" },
    { day: "Sat–Sun", time: "Closed" },
  ],
  serviceArea: ["Southern California", "Los Angeles", "Orange County", "San Diego", "Inland Empire", "San Francisco Bay Area"],
  industries: [
    { name: "Healthcare", blurb: "Sensitive infection-control demolition for hospitals and medical campuses." },
    { name: "Hospitality", blurb: "Phased strip-outs that keep hotels and resorts operational." },
    { name: "Aerospace", blurb: "Precision removals inside active production and clean environments." },
    { name: "Industrial", blurb: "Heavy structural demolition, foundations, and equipment removals." },
    { name: "Commercial", blurb: "Office, mixed-use, and high-rise tenant improvement support." },
    { name: "Retail", blurb: "Fast-turn store refresh and white-box delivery." },
    { name: "Distribution", blurb: "Warehouse, cold-storage, and logistics facility conversions." },
    { name: "Gaming", blurb: "Live-environment work in casinos and entertainment venues." },
  ],
  services: [
    {
      title: "Soft Demolition",
      blurb: "Interior strip-outs, selective dismantling, and finish removal that prep a building for what comes next.",
    },
    {
      title: "Hard Demolition",
      blurb: "Concrete, masonry, and structural demolition executed with engineered sequencing and rigging.",
    },
    {
      title: "Interior Strip-Outs",
      blurb: "Full white-box delivery for tenant improvements, refreshes, and gut renovations.",
    },
    {
      title: "Saw Cutting",
      blurb: "Wall, slab, and core sawing to tight tolerances with dust and slurry control.",
    },
    {
      title: "Breaking & Removal",
      blurb: "Mechanical and hand breaking, debris haul-off, and certified recycling streams.",
    },
    {
      title: "Concrete & Asphalt",
      blurb: "Pavement removal, foundations, and substructure with high-recovery recycling.",
    },
  ],
  values: [
    { name: "Integrity", blurb: "We maintain the highest level of honesty and credibility on every project." },
    { name: "Excellence", blurb: "Superior quality of work and an unwavering standard of performance." },
    { name: "Service", blurb: "Consistently meeting and exceeding what our clients expect from a partner." },
    { name: "Safety", blurb: "Safety is the top priority on every jobsite, every shift, every day." },
    { name: "Leadership", blurb: "Professionalism, responsible foresight, and accountability from the field up." },
    { name: "Environment", blurb: "Recycling concrete, asphalt, metals, and construction materials by default." },
  ],
  stats: [
    { value: "1992", label: "Established" },
    { value: "30+", label: "Years in business" },
    { value: "$10M", label: "Average annual revenue" },
    { value: "100s", label: "Projects completed" },
  ],
  projects: [
    {
      slug: "hollywood-bowl",
      name: "Hollywood Bowl",
      location: "Los Angeles, CA",
      year: "2004",
      summary:
        "Demolition for the fifth shell renovation of one of the most iconic outdoor venues in the world, completed inside a tight off-season window.",
    },
    {
      slug: "1100-wilshire",
      name: "1100 Wilshire",
      location: "Los Angeles, CA",
      year: "Condo conversion",
      summary:
        "Selective and structural demolition across floors 17–38 of a downtown high-rise during an office-to-residential conversion.",
    },
    {
      slug: "marriott-desert-springs",
      name: "Marriott Desert Springs Resort",
      location: "Palm Desert, CA",
      year: "Remodel",
      summary:
        "Phased concrete demolition and interior strip-out inside a live destination resort, sequenced around guest operations.",
    },
  ],
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Projects", href: "/projects" },
    { label: "Safety", href: "/safety" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteData = typeof site;
