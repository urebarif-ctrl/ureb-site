import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE_NAME}. Read the terms and conditions governing the use of our website and services.`,
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
};

export default function Terms() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">
          Legal
        </p>
        <h1 className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-muted text-sm mb-12">
          Last updated: September 2026
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Agreement to Terms
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              By accessing or using urebarif.com, you agree to be bound by these
              Terms of Service. If you do not agree with any part of these
              terms, you may not access the website or use our services.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Services
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              {SITE_NAME} provides digital marketing consulting services
              including Meta Ads management, Google Ads/PPC management, SEO, and
              growth consulting. Specific deliverables, timelines, and fees are
              agreed upon individually with each client prior to engagement.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Intellectual Property
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              All content on this website — including text, graphics, logos,
              images, and software — is the property of {SITE_NAME} and is
              protected by intellectual property laws. You may not reproduce,
              distribute, or create derivative works without written permission.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Client Engagements
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-3">
              All consulting engagements operate on a month-to-month basis
              unless otherwise specified in a separate agreement. Either party
              may terminate with 30 days written notice.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Results shared on this website represent outcomes from real
              campaigns. Individual results vary based on industry, budget,
              competition, and other factors. Past performance does not
              guarantee future results.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Limitation of Liability
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              {SITE_NAME} shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of our website or services. Our total liability shall not exceed
              the amount paid by you for services in the preceding 12 months.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Third-Party Links
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              This website may contain links to third-party websites. We are not
              responsible for the content, privacy policies, or practices of
              these external sites.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Changes to Terms
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              We reserve the right to modify these terms at any time. Changes
              will be posted on this page with an updated revision date.
              Continued use of the website after changes constitutes acceptance.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Contact
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Questions about these terms? Contact us at{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="text-accent hover:underline"
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
