import Link from "next/link";
import { LINKEDIN_URL, UPWORK_URL, SITE_EMAIL, SITE_PHONE, SITE_WHATSAPP } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-foreground text-white" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-[family-name:var(--font-jakarta)] font-extrabold text-2xl mb-4">
              UREB<span className="text-accent">.</span>
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-4">
              Independent growth marketing consultant. Meta Ads, Google PPC,
              SEO, and lead generation for businesses across the United States,
              UK, UAE, and internationally.
            </p>
            <div className="space-y-1.5 text-sm text-zinc-400">
              <a href={`mailto:${SITE_EMAIL}`} className="block hover:text-white transition-colors">{SITE_EMAIL}</a>
              <a href={`tel:${SITE_PHONE.replace(/\s/g, "")}`} className="block hover:text-white transition-colors">{SITE_PHONE}</a>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5" aria-label="Upwork">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.795-3.057 2.838-3.057 1.513 0 2.738 1.227 2.738 2.738 0 1.513-1.228 2.664-2.738 2.664zm0-8.14c-2.032 0-3.898 1.135-4.881 2.963-.748-1.467-1.313-3.234-1.651-4.72H8.824v7.553c0 1.412-1.148 2.555-2.555 2.555a2.556 2.556 0 01-2.555-2.555V3.261H.508v7.553c0 2.826 2.301 5.127 5.127 5.127s5.127-2.301 5.127-5.127V8.584c.336.883.756 1.777 1.277 2.555l-1.08 5.072h3.264l.789-3.689c1.092.754 2.322 1.248 3.549 1.248 3.075 0 5.561-2.494 5.561-5.566.003-3.076-2.486-5.186-5.561-5.186z"/></svg>
              </a>
              <a href={`https://wa.me/${SITE_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5" aria-label="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Pages
            </h4>
            <div className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/industries", label: "Industries" },
                { href: "/hire", label: "Hire on Upwork" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Services
            </h4>
            <div className="space-y-2.5">
              {[
                { href: "/services/meta-ads", label: "Meta Ads Management" },
                { href: "/services/google-ads", label: "Google Ads & PPC" },
                { href: "/services/seo", label: "SEO & Organic Growth" },
                { href: "/services/growth-consulting", label: "Growth Consulting" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Ureb Arif. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
            <Link href="/cv" className="hover:text-white transition-colors duration-200">Ureb Arif CV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
