import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-white" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-[family-name:var(--font-jakarta)] font-extrabold text-2xl mb-4">
              UREB<span className="text-accent">.</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Independent growth marketing consultant serving US businesses.
              Specializing in Meta Ads, Google PPC, SEO, and lead generation for
              automotive dealers, rehab centers, exterior cleaning companies, and
              more.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/industries", label: "Industries" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://www.linkedin.com/in/ureb-arif-digital-marketing-seo/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.upwork.com/freelancers/digitalmarketingandseo"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Upwork
              </a>
              <a
                href="mailto:launchifye@mail.tradexsys.net"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                launchifye@mail.tradexsys.net
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Ureb Arif. All rights reserved.
          Performance marketing consultant serving businesses across the United
          States.
        </div>
      </div>
    </footer>
  );
}
