import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-accent font-semibold text-xs uppercase tracking-widest mb-4">
          Legal
        </p>
        <h1 className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted text-sm mb-12">
          Last updated: September 2026
        </p>

        <div className="prose-custom space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Information We Collect
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-3">
              When you use the contact form on this website, we collect the
              information you voluntarily provide, including your name, email
              address, website URL, and any message content you submit.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              We also collect standard web analytics data through cookies and
              similar technologies, including your IP address, browser type,
              pages visited, and time spent on the site. This data is collected
              in aggregate and is not used to personally identify you.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              How We Use Your Information
            </h2>
            <ul className="space-y-2 text-muted text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#8226;</span>
                To respond to your inquiries and provide marketing consultation
                services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#8226;</span>
                To improve our website and services based on usage patterns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#8226;</span>
                To send relevant communications about our services (only with
                your consent)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#8226;</span>
                To comply with legal obligations
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Data Sharing
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted service providers
              who assist in operating our website and conducting business,
              provided they agree to keep your information confidential.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Cookies
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              This website uses cookies to enhance your browsing experience and
              analyze site traffic. You can choose to disable cookies through
              your browser settings, though this may affect certain
              functionality.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Data Security
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              We implement appropriate security measures to protect your
              personal information. However, no method of electronic
              transmission or storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Your Rights
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              You have the right to access, correct, or delete your personal
              data. You may also opt out of any marketing communications at any
              time. To exercise these rights, contact us at{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="text-accent hover:underline"
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-xl mb-3">
              Contact
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              If you have questions about this privacy policy, contact us at{" "}
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
