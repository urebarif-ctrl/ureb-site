import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "@/data/blogs";
import { BLOG_CATEGORIES } from "@/types/blog";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing Insights for US Businesses",
  description:
    "Expert insights on Meta Ads, Google PPC, SEO, and lead generation for US businesses. Actionable strategies for exterior cleaning, automotive, healthcare, ecommerce, and more.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog — Digital Marketing Insights | Ureb Arif",
    description:
      "Expert insights on Meta Ads, Google PPC, SEO, and lead generation for US businesses.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  const blogs = getAllBlogs();
  const categories = Object.entries(BLOG_CATEGORIES);

  return (
    <>
      <section
        className="relative overflow-hidden py-20 md:py-28"
        aria-labelledby="blog-heading"
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-[10%] right-[8%] w-80 h-80 bg-accent/[0.07] rounded-full blur-3xl animate-float-1" />
          <div className="absolute bottom-[5%] left-[3%] w-96 h-96 bg-accent/[0.04] rounded-full blur-3xl animate-float-2" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Blog
            </p>
            <h1
              id="blog-heading"
              className="font-[family-name:var(--font-jakarta)] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Marketing insights that
              <br />
              <span className="text-accent">drive revenue.</span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
              Actionable strategies on Meta Ads, Google PPC, SEO, and lead
              generation. Written for US business owners and marketing teams who
              need results, not theory.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-2 mt-10">
              <span className="text-xs font-bold px-4 py-2 rounded-full bg-accent text-white cursor-default">
                All ({blogs.length})
              </span>
              {categories.map(([key, val]) => {
                const count = blogs.filter((b) => b.category === key).length;
                return (
                  <span
                    key={key}
                    className={`text-xs font-semibold px-4 py-2 rounded-full ${val.color} cursor-default`}
                  >
                    {val.label} ({count})
                  </span>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-label="Blog posts">
        <div className="max-w-6xl mx-auto px-6">
          {categories.map(([catKey, catVal]) => {
            const catPosts = blogs.filter((b) => b.category === catKey);
            if (catPosts.length === 0) return null;
            return (
              <div key={catKey} className="mb-20 last:mb-0">
                <ScrollReveal>
                  <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold tracking-tight mb-8 flex items-center gap-3">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${catVal.color.split(" ")[0]}`}
                    />
                    {catVal.label}
                    <span className="text-sm font-medium text-muted">
                      ({catPosts.length} articles)
                    </span>
                  </h2>
                </ScrollReveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catPosts.map((post, i) => (
                    <ScrollReveal key={post.slug} delay={i * 40}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block bg-white border border-border rounded-2xl overflow-hidden card-hover h-full"
                      >
                        <div className="p-6 flex flex-col h-full">
                          <div className="flex items-center gap-2 mb-3">
                            <span
                              className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${catVal.color}`}
                            >
                              {catVal.label}
                            </span>
                            <span className="text-[10px] text-muted">
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-sm leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-muted leading-relaxed line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                            <span className="text-[10px] text-muted">
                              {post.publishDate}
                            </span>
                            <span className="text-accent text-xs font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              Read
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        className="bg-gradient-cta py-20 md:py-24"
        aria-label="Call to action"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal variant="blur">
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-extrabold text-white tracking-tight mb-4">
              Ready to put these strategies to work?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Book a free strategy call. I&apos;ll audit your current campaigns
              and show you the specific revenue opportunities for your business.
            </p>
            <Link
              href="/contact"
              className="btn-shine group inline-flex items-center gap-2 bg-white text-foreground font-bold px-10 py-4 rounded-xl hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg animate-glow"
            >
              Book a Free Strategy Call
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
