export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: "meta-ads" | "google-ads" | "seo" | "industry" | "strategy";
  tags: string[];
  publishDate: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const BLOG_CATEGORIES = {
  "meta-ads": { label: "Meta Ads", color: "bg-blue-100 text-blue-700" },
  "google-ads": { label: "Google Ads", color: "bg-green-100 text-green-700" },
  seo: { label: "SEO", color: "bg-purple-100 text-purple-700" },
  industry: { label: "Industry", color: "bg-amber-100 text-amber-700" },
  strategy: { label: "Strategy", color: "bg-rose-100 text-rose-700" },
} as const;
