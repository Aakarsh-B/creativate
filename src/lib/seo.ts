import type { Metadata } from "next";

// Shared SEO settings and helpers for page metadata and structured data.

export const SITE_URL = "https://creativate.in";
export const SITE_NAME = "Creativate";
export const DEFAULT_TITLE =
	"Creativate | Web Design, Branding & Social Media Agency in Kochi";
export const DEFAULT_DESCRIPTION =
	"Design + development for startups and small businesses. Websites, branding and social media with fast turnaround, transparent communication and results you can measure.";
export const SHARE_IMAGE = {
	url: "/og/share.png",
	width: 1200,
	height: 630,
	alt: "Creativate: websites that make your business look world-class",
};

export const CONTACT = {
	email: "team@creativate.in",
	phone: "+91-8848015809",
	address: {
		streetAddress: "8F, Royal Palace, Manjelipadam Road, Vadakkekotta",
		addressLocality: "Ernakulam",
		addressRegion: "Kerala",
		postalCode: "682301",
		addressCountry: "IN",
	},
	sameAs: [
		"https://www.instagram.com/team.creativate/",
		"https://www.facebook.com/profile.php?id=100095059033738",
	],
};

// Strips tags and entities from WordPress-style HTML so it can be used as plain text
export const plainText = (html = "") =>
	html
		.replace(/<[^>]*>/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/&#8217;|&rsquo;/g, "’")
		.replace(/&#8216;|&lsquo;/g, "‘")
		.replace(/&#8220;|&#8221;|&quot;/g, '"')
		.replace(/&amp;/g, "&")
		.replace(/&#\d+;/g, "")
		.replace(/\s+/g, " ")
		.trim();

// Search results cut descriptions around 160 characters; end on a whole word
export const clampDescription = (text = "", max = 158) => {
	const clean = plainText(text);
	if (clean.length <= max) return clean;
	const cut = clean.slice(0, max);
	return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:]$/, "")}…`;
};

const absoluteUrl = (url: string) =>
	url.startsWith("http") ? url : `${SITE_URL}${url}`;

const withBrand = (title: string) =>
	/creativate/i.test(title) ? title : `${title} | ${SITE_NAME}`;

type PageSeo = {
	title?: string;
	description?: string;
	path: string;
	image?: string;
	imageAlt?: string;
	type?: "website" | "article";
	publishedTime?: string;
	modifiedTime?: string;
	noindex?: boolean;
};

export function pageMetadata({
	title,
	description,
	path,
	image,
	imageAlt,
	type = "website",
	publishedTime,
	modifiedTime,
	noindex,
}: PageSeo): Metadata {
	const fullTitle = title ? withBrand(plainText(title)) : DEFAULT_TITLE;
	const desc = clampDescription(description || DEFAULT_DESCRIPTION);
	// Absolute URLs so every app that reads the tags can fetch the image
	const images = image
		? [{ url: absoluteUrl(image), alt: imageAlt || plainText(title) }]
		: [{ ...SHARE_IMAGE, url: absoluteUrl(SHARE_IMAGE.url) }];

	return {
		title: { absolute: fullTitle },
		description: desc,
		alternates: { canonical: path },
		openGraph: {
			type,
			url: path,
			siteName: SITE_NAME,
			locale: "en_IN",
			title: fullTitle,
			description: desc,
			images,
			...(type === "article" ? { publishedTime, modifiedTime } : {}),
		},
		twitter: {
			card: "summary_large_image",
			title: fullTitle,
			description: desc,
			images: images.map((i) => i.url),
		},
		...(noindex ? { robots: { index: false, follow: true } } : {}),
	};
}

export const organizationJsonLd = () => ({
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	"@id": `${SITE_URL}/#organization`,
	name: SITE_NAME,
	url: SITE_URL,
	logo: `${SITE_URL}/og/logo.png`,
	image: `${SITE_URL}${SHARE_IMAGE.url}`,
	description: DEFAULT_DESCRIPTION,
	email: CONTACT.email,
	telephone: CONTACT.phone,
	address: { "@type": "PostalAddress", ...CONTACT.address },
	areaServed: "Worldwide",
	knowsAbout: [
		"Web design",
		"Web development",
		"Logo design",
		"Branding",
		"UI/UX design",
		"Social media marketing",
	],
	sameAs: CONTACT.sameAs,
});

export const websiteJsonLd = () => ({
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${SITE_URL}/#website`,
	name: SITE_NAME,
	url: SITE_URL,
	publisher: { "@id": `${SITE_URL}/#organization` },
	inLanguage: "en-IN",
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((item, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: item.name,
		item: `${SITE_URL}${item.path}`,
	})),
});
