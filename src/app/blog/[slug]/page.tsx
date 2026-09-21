import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs } from "@/data/blogs";
import { BlogLayout } from "@/components/blog-layout";
import { SITE_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogs().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllBlogs().find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getAllBlogs().find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogLayout post={post} />;
}
