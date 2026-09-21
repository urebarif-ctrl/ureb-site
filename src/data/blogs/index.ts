import type { BlogPost } from "@/types/blog";
import { metaAdsBlogs } from "./meta-ads";
import { googleAdsBlogs } from "./google-ads";
import { seoBlogs } from "./seo";
import { industryBlogs } from "./industry";
import { strategyBlogs } from "./strategy";

const allBlogs: BlogPost[] = [
  ...metaAdsBlogs,
  ...googleAdsBlogs,
  ...seoBlogs,
  ...industryBlogs,
  ...strategyBlogs,
];

export function getAllBlogs(): BlogPost[] {
  return allBlogs;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return allBlogs.find((p) => p.slug === slug);
}

export function getBlogsByCategory(category: BlogPost["category"]): BlogPost[] {
  return allBlogs.filter((p) => p.category === category);
}
