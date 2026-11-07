import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Preview deployments stay out of search results; only the live site is indexed
export default function robots(): MetadataRoute.Robots {
	if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
		return { rules: { userAgent: "*", disallow: "/" } };
	}

	return {
		rules: { userAgent: "*", allow: "/" },
		sitemap: `${SITE_URL}/sitemap.xml`,
		host: SITE_URL,
	};
}
