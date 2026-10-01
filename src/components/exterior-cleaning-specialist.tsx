import Link from "next/link";

export const exteriorKeywords = [
  "roof washing",
  "roof cleaning",
  "window cleaning",
  "pressure washing",
  "power washing",
  "soft washing",
  "gutter cleaning",
  "solar panel cleaning",
  "water heater cleaning",
  "holiday lighting",
  "exterior cleaning leads",
  "home services Meta Ads",
];

export const exteriorProof = [
  { label: "Visible leads", value: "448", detail: "June to August case-study sample" },
  { label: "Visible avg CPL", value: "$13.32", detail: "Calculated from visible campaign rows" },
  { label: "Accounts managed", value: "35+", detail: "Window cleaning and exterior cleaning accounts" },
  { label: "Role", value: "Lead buyer", detail: "Media buying, testing, QA, scaling" },
];

export const exteriorCaseStudies = [
  {
    title: "448 Visible Meta Ads Leads for an Exterior Cleaning Business",
    href: "/case-studies/exterior-cleaning-448-visible-leads",
    desc: "A three-month Meta Ads case study covering window cleaning and pressure washing campaigns, visible CPL analysis, and monthly optimization decisions.",
  },
  {
    title: "Lead Meta Ads Media Buyer Across 35+ Exterior Cleaning Accounts",
    href: "/case-studies/exterior-cleaning-35-account-media-buyer",
    desc: "Agency-side media buying proof for window cleaning, roof washing, pressure washing, holiday lighting, and exterior cleaning accounts at scale.",
  },
];

export const exteriorPages = [
  { title: "Exterior Cleaning Specialist", href: "/industries/exterior-cleaning" },
  { title: "Window Cleaning Marketing", href: "/industries/window-cleaning-marketing" },
  { title: "Roof Washing Marketing", href: "/industries/roof-washing-marketing" },
  { title: "Pressure Washing Marketing", href: "/industries/pressure-washing-marketing" },
  { title: "Power Washing Marketing", href: "/industries/power-washing-marketing" },
  { title: "Holiday Lighting Marketing", href: "/industries/holiday-lighting-marketing" },
  { title: "Water Heater Cleaning Marketing", href: "/industries/water-heater-cleaning-marketing" },
  { title: "Exterior Cleaning Meta Ads", href: "/services/exterior-cleaning-meta-ads" },
];

export const exteriorBlogs = [
  { title: "Meta Ads for Exterior Cleaning Companies", href: "/blog/meta-ads-for-exterior-cleaning-companies" },
  { title: "Window Cleaning Lead Generation Strategy", href: "/blog/window-cleaning-lead-generation-strategy" },
  { title: "Roof Washing Ads and Seasonal Demand", href: "/blog/roof-washing-ads-seasonal-demand" },
  { title: "Pressure Washing vs Power Washing Keywords", href: "/blog/pressure-washing-vs-power-washing-keywords" },
  { title: "Holiday Lighting Campaigns for Exterior Cleaning Companies", href: "/blog/holiday-lighting-campaigns-exterior-cleaning" },
  { title: "Water Heater Cleaning Marketing Keywords", href: "/blog/water-heater-cleaning-marketing-keywords" },
];

export function PillCloud({ items = exteriorKeywords }: { items?: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
          {item}
        </span>
      ))}
    </div>
  );
}

export function ProofStats() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {exteriorProof.map((item) => (
        <div key={item.label} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-light">{item.label}</p>
          <p className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold mt-3 text-foreground">{item.value}</p>
          <p className="text-sm text-muted mt-2 leading-relaxed">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function RelatedExteriorLinks({ current }: { current?: string }) {
  return (
    <section className="py-16 border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Exterior cleaning growth cluster</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {exteriorPages.filter((page) => page.href !== current).map((page) => (
            <Link key={page.href} href={page.href} className="rounded-2xl border border-border bg-white p-5 hover:border-accent transition-colors">
              <span className="font-bold text-foreground">{page.title}</span>
              <span className="block text-sm text-muted mt-2">Open page →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyCards() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {exteriorCaseStudies.map((study) => (
        <Link key={study.href} href={study.href} className="rounded-3xl border border-border bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Case study</p>
          <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold tracking-tight text-foreground">{study.title}</h3>
          <p className="text-muted leading-relaxed mt-4">{study.desc}</p>
          <span className="inline-block mt-6 font-bold text-accent">Read case study →</span>
        </Link>
      ))}
    </div>
  );
}

export function BlogCluster() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {exteriorBlogs.map((post) => (
        <Link key={post.href} href={post.href} className="rounded-2xl border border-border bg-white p-5 hover:border-accent transition-colors">
          <span className="font-bold text-foreground">{post.title}</span>
          <span className="block text-sm text-muted mt-2">Read blog →</span>
        </Link>
      ))}
    </div>
  );
}

export function ExteriorHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-hero">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <Link href="/" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1 mb-8">← Home</Link>
        <p className="text-accent font-bold text-xs uppercase tracking-widest mb-4">{eyebrow}</p>
        <h1 className="font-[family-name:var(--font-jakarta)] text-4xl md:text-[4.3rem] font-extrabold leading-[1.04] tracking-tight max-w-5xl">
          {title}
        </h1>
        <p className="text-muted text-lg md:text-xl leading-relaxed max-w-3xl mt-7">{description}</p>
        <div className="mt-8"><PillCloud /></div>
      </div>
    </section>
  );
}

export function ExteriorCta() {
  return (
    <section className="py-20 bg-foreground text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Work with a specialist</p>
        <h2 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-5xl font-extrabold tracking-tight">
          Need more qualified exterior cleaning leads?
        </h2>
        <p className="text-white/70 leading-relaxed mt-5 max-w-2xl mx-auto">
          I help exterior cleaning, window cleaning, roof washing, pressure washing, power washing, holiday lighting, and related home service companies build practical paid-media systems around qualified enquiries and booked jobs.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link href="/contact" className="rounded-full bg-white text-foreground px-7 py-3 font-bold">Discuss your campaign</Link>
          <Link href="/case-studies/exterior-cleaning-448-visible-leads" className="rounded-full border border-white/20 px-7 py-3 font-bold text-white hover:bg-white/10">View proof</Link>
        </div>
      </div>
    </section>
  );
}
