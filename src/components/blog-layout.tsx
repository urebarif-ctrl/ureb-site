import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { BLOG_CATEGORIES } from "@/types/blog";
import { ScrollReveal } from "@/components/scroll-reveal";

export function BlogLayout({ post }: { post: BlogPost }) {
  const cat = BLOG_CATEGORIES[post.category];
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28" aria-label="Blog post hero">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-[10%] right-[8%] w-80 h-80 bg-accent/[0.07] rounded-full blur-3xl animate-float-1" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <Link href="/blog" className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1 mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              All Articles
            </Link>
          </ScrollReveal>
          <ScrollReveal variant="blur" delay={100}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cat.color}`}>{cat.label}</span>
              <span className="text-xs text-muted">{post.readTime}</span>
              <span className="text-xs text-muted">{post.publishDate}</span>
            </div>
            <h1 className="font-[family-name:var(--font-jakarta)] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">{post.title}</h1>
            <p className="text-muted text-lg leading-relaxed">{post.excerpt}</p>
          </ScrollReveal>
        </div>
      </section>

      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ScrollReveal>
        </div>
      </article>

      <section className="border-t border-border py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal variant="blur">
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 md:p-10 text-center">
              <h2 className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold tracking-tight mb-3">Need help with your marketing?</h2>
              <p className="text-muted mb-6">Book a free 30-minute strategy call. I&apos;ll audit your current campaigns and show you exactly where the revenue opportunities are.</p>
              <Link href="/contact" className="btn-shine group inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-3.5 rounded-xl hover:bg-accent/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                Get a Free Strategy Call
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface border-t border-border py-16">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-border text-muted">{tag}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
