import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { SafeImage } from "@/components/safe-image";

export const metadata: Metadata = {
  title: "Gallery | Ureb Arif",
  description: "A shareable gallery of Ureb Arif's personal, travel and professional photographs.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Gallery | Ureb Arif",
    description: "Personal and professional photographs from Ureb Arif.",
    images: [{ url: "/images/ureb-japan-lantern.webp", width: 1200, height: 1600 }],
  },
};

const photos = [
  { src: "/images/ureb-japan-lantern.webp", alt: "Ureb Arif photographed among illuminated lanterns", label: "Japan after dark", size: "md:row-span-2" },
  { src: "/images/ureb-neon-portrait.webp", alt: "Ureb Arif in a neon-lit street portrait", label: "Night portrait", size: "" },
  { src: "/images/ureb-digital-growth.webp", alt: "Ureb Arif digital growth strategist creative", label: "Digital growth strategist", size: "" },
  { src: "/ureb-headshot.jpg", alt: "Professional portrait of Ureb Arif", label: "Professional portrait", size: "" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-hero py-20 md:py-28">
        <div className="absolute right-[8%] top-[10%] h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Gallery</p>
          <div className="mt-4 grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h1 className="max-w-3xl font-[family-name:var(--font-jakarta)] text-4xl font-extrabold tracking-tight md:text-6xl">Photos, places and a little life outside the dashboard.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">A simple shareable collection of personal and professional photographs. This page is intentionally separate from the marketing portfolio so the photos can stand on their own.</p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">About me <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2 md:auto-rows-[360px]">
            {photos.map((photo, index) => (
              <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" className={`group relative overflow-hidden rounded-3xl bg-surface shadow-sm ring-1 ring-border ${photo.size}`}>
                <SafeImage src={photo.src} alt={photo.alt} loading={index === 0 ? "eager" : "lazy"} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-16">
                  <p className="text-sm font-bold text-white">{photo.label}</p>
                  <p className="mt-1 text-xs text-white/70">Open full image</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-surface p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold">This gallery can keep growing.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">New travel, speaking, work and personal photos can be added here without cluttering the homepage. The permanent share link is urebarif.com/gallery.</p>
            </div>
            <Link href="/contact" className="mt-5 inline-flex rounded-xl bg-foreground px-6 py-3 text-sm font-bold text-white md:mt-0">Contact me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
