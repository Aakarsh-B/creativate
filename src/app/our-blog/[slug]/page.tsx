import BlogDetailsBanner from "@/components/OurBlog/Details/BlogDetailsBanner";
import BlogDetailsRecommendation from "@/components/OurBlog/Details/BlogDetailsRecommendation";
import SectionLayout from "@/templates/SectionLayout";
import { Metadata } from "next";
import { getContent } from "@/lib/content";
import JsonLd from "@/utils/JsonLd";
import {
	SITE_URL,
	breadcrumbJsonLd,
	clampDescription,
	pageMetadata,
	plainText,
} from "@/lib/seo";

// Post dates are stored in India time without an offset
const IST = "+05:30";

export async function generateStaticParams() {
	const data = await getContent(`/our-blog?acf_format=standard&per_page=100`);

	return data.map((blog: any) => ({
		slug: blog.slug,
	}));
}

async function getData(params: string) {
	return getContent(`/our-blog/?slug=${params}&acf_format=standard`);
}

async function getBlogData() {
	return getContent(`/our-blog?acf_format=standard&_fields=id,slug,title,excerpt,acf`);
}

export async function generateMetadata({
	params,
}: {
	params: any;
}): Promise<Metadata> {
	const pageData = await getContent(`/our-blog/?slug=${params.slug}&acf_format=standard`);

	const post = pageData[0];
	const meta = post?.acf?.metadata;

	return pageMetadata({
		title: meta?.title || post?.title?.rendered,
		description: meta?.description || post?.content?.rendered,
		path: `/our-blog/${params.slug}`,
		image: post?.acf?.featured_image,
		imageAlt: plainText(post?.title?.rendered),
		type: "article",
		publishedTime: post?.date ? `${post.date}${IST}` : undefined,
	});
}

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
	const pageData = await getData(params.slug);
	const data = pageData[0];

	const allBlog = await getBlogData();
	const filteredPosts = allBlog
		.filter((post: any) => (data?.acf?.other_blogs ?? []).includes(post.slug))
		.slice(0, 2);

	const title = plainText(data?.title?.rendered);
	const path = `/our-blog/${params.slug}`;
	const structuredData = [
		{
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			headline: title,
			description: clampDescription(
				data?.acf?.metadata?.description || data?.content?.rendered
			),
			image: data?.acf?.featured_image
				? `${SITE_URL}${data.acf.featured_image}`
				: undefined,
			datePublished: data?.date ? `${data.date}${IST}` : undefined,
			mainEntityOfPage: `${SITE_URL}${path}`,
			author: { "@id": `${SITE_URL}/#organization` },
			publisher: { "@id": `${SITE_URL}/#organization` },
		},
		breadcrumbJsonLd([
			{ name: "Home", path: "/" },
			{ name: "Blog", path: "/our-blog" },
			{ name: title, path },
		]),
	];

	return (
		<div className="pt-[120px] pb-[80px] md:pt-[170px] md:pb-[140px] bg-primaryDark">
			<JsonLd data={structuredData} />
			<SectionLayout>
				<BlogDetailsBanner
					title={data?.title?.rendered}
					bannerImage={data?.acf?.banner_image}
					clientDetails={data?.acf.about_client}
					date={data?.date}
				/>
				{data?.content?.rendered && (
					<div
						className="blog-details mt-[56px] md:mt-[80px] max-w-[740px] mx-auto"
						dangerouslySetInnerHTML={{
							__html: data?.content?.rendered,
						}}
					/>
				)}
				<BlogDetailsRecommendation
					sectionTitle={"Keep reading"}
					data={filteredPosts}
				/>
			</SectionLayout>
		</div>
	);
};

export default BlogDetails;
