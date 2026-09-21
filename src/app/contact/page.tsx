import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { FormSwitcher } from "@/components/form-switcher";
import { SITE_URL, SITE_EMAIL, SITE_PHONE, SITE_WHATSAPP, LINKEDIN_URL, UPWORK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Book a Free Strategy Call",
  description:
    "Book a free 30-minute marketing strategy call with Ureb Arif. Get a custom audit of your current campaigns and discover specific revenue opportunities for your US business. No obligation, no pitch.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Ureb Arif — Free Strategy Call",
    description:
      "Book a free 30-minute call. Get a custom audit and discover revenue opportunities for your business.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ureb Arif",
  description:
    "Book a free strategy call with Ureb Arif, independent growth marketing consultant for US businesses.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Person",
    name: "Ureb Arif",
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    url: SITE_URL,
    jobTitle: "Growth & Performance Marketing Consultant",
    sameAs: [LINKEDIN_URL, UPWORK_URL],
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={contactSchema} />

      <section className="py-20 md:py-28" aria-labelledby="contact-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Get In Touch
              </p>
              <h1
                id="contact-heading"
                className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
              >
                Let&apos;s build your revenue engine.
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Book a free 30-minute strategy call. No pitch, no obligation.
                I&apos;ll review your current marketing setup and tell you
                exactly where the revenue opportunities are for your US business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a
                      href="mailto:hello@urebarif.com"
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      hello@urebarif.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a href={`tel:${SITE_PHONE.replace(/\s/g, "")}`} className="text-sm text-muted hover:text-accent transition-colors">{SITE_PHONE}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <a href={`https://wa.me/${SITE_WHATSAPP}?text=${encodeURIComponent("Hi Ureb, I visited your website and would like to discuss my marketing needs.")}`} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors">Chat on WhatsApp</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">LinkedIn</p>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors">linkedin.com/in/ureb-arif</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.795-3.057 2.838-3.057 1.513 0 2.738 1.227 2.738 2.738 0 1.513-1.228 2.664-2.738 2.664zm0-8.14c-2.032 0-3.898 1.135-4.881 2.963-.748-1.467-1.313-3.234-1.651-4.72H8.824v7.553c0 1.412-1.148 2.555-2.555 2.555a2.556 2.556 0 01-2.555-2.555V3.261H.508v7.553c0 2.826 2.301 5.127 5.127 5.127s5.127-2.301 5.127-5.127V8.584c.336.883.756 1.777 1.277 2.555l-1.08 5.072h3.264l.789-3.689c1.092.754 2.322 1.248 3.549 1.248 3.075 0 5.561-2.494 5.561-5.566.003-3.076-2.486-5.186-5.561-5.186z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Upwork</p>
                    <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors">Top Rated Consultant Profile</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Location</p>
                    <p className="text-sm text-muted">
                      Karachi, PK — Serving US, UK, UAE & international businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <FormSwitcher />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
