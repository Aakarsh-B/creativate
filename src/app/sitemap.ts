import type { MetadataRoute } from "next";
import { getContent } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

// Post dates are stored in India time without an offset
const toDate = (value?: string) =>
	value ? new Date(`${value}+05:30`) : undefined;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const [work, blog] = await Promise.all([
		getContent(`/our-work?per_page=100`),
		getContent(`/our-blog?per_page=100`),
	]);

	const pages: MetadataRoute.Sitemap = [
		{ url: SITE_URL, changeFrequency: "monthly", priority: 1 },
		{ url: `${SITE_URL}/our-work`, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${SITE_URL}/coach-content`, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${SITE_URL}/our-blog`, changeFrequency: "weekly", priority: 0.7 },
		{ url: `${SITE_URL}/book-consultation`, changeFrequency: "yearly", priority: 0.6 },
		{ url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
		{ url: `${SITE_URL}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.2 },
	];

	const workPages: MetadataRoute.Sitemap = work.map((item: any) => ({
		url: `${SITE_URL}/our-work/${item.slug}`,
		lastModified: toDate(item.modified ?? item.date),
		changeFrequency: "yearly",
		priority: 0.7,
	}));

	const blogPages: MetadataRoute.Sitemap = blog.map((item: any) => ({
		url: `${SITE_URL}/our-blog/${item.slug}`,
		lastModified: toDate(item.modified ?? item.date),
		changeFrequency: "yearly",
		priority: 0.6,
	}));

	return [...pages, ...workPages, ...blogPages];
}
