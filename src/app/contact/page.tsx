import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ContactForm } from "@/components/contact-form";
import { SITE_URL, SITE_EMAIL } from "@/lib/constants";

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
    email: "launchifye@mail.tradexsys.net",
    url: SITE_URL,
    jobTitle: "Growth & Performance Marketing Consultant",
    sameAs: [
      "https://www.linkedin.com/in/ureb-arif-digital-marketing-seo/",
      "https://www.upwork.com/freelancers/digitalmarketingandseo",
    ],
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
                      href="mailto:launchifye@mail.tradexsys.net"
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      launchifye@mail.tradexsys.net
                    </a>
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
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/ureb-arif-digital-marketing-seo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      linkedin.com/in/ureb-arif
                    </a>
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
                        d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76M11.25 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S1.5 17.385 1.5 12s4.365-9.75 9.75-9.75z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Upwork</p>
                    <a
                      href="https://www.upwork.com/freelancers/digitalmarketingandseo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      Top Rated Freelancer Profile
                    </a>
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
