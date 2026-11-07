import WorkDetailsBanner from "@/components/OurWork/Details/WorkDetailsBanner";
import WorkDetailsRecommendation from "@/components/OurWork/Details/WorkDetailsRecommendation";
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

export async function generateStaticParams() {
	const data = await getContent(`/our-work?acf_format=standard&per_page=100`);

	return data.map((work: any) => ({
		slug: work.slug,
	}));
}

async function getData(params: string) {
	return getContent(`/our-work/?slug=${params}&acf_format=standard`);
}

async function getWorkData() {
	return getContent(`/our-work?acf_format=standard&_fields=id,slug,title,excerpt,acf`);
}

export async function generateMetadata({
	params,
}: {
	params: any;
}): Promise<Metadata> {
	const pageData = await getContent(`/our-work/?slug=${params.slug}&acf_format=standard`);

	const work = pageData[0];
	const meta = work?.acf?.metadata;

	return pageMetadata({
		title: meta?.title || work?.title?.rendered,
		description: meta?.description || work?.excerpt?.rendered,
		path: `/our-work/${params.slug}`,
		image: work?.acf?.featured_image,
		imageAlt: plainText(work?.title?.rendered),
	});
}

const WorkDetails = async ({ params }: { params: { slug: string } }) => {
	const pageData = await getData(params.slug);
	const data = pageData[0];

	const allWork = await getWorkData();
	const filteredPosts = allWork
		.filter((post: any) => data?.acf.other_works.includes(post.id))
		.slice(0, 2);

	const title = plainText(data?.title?.rendered);
	const path = `/our-work/${params.slug}`;
	const structuredData = [
		{
			"@context": "https://schema.org",
			"@type": "CreativeWork",
			name: `${title}: ${data?.acf?.about_client?.service ?? "Case study"}`,
			description: clampDescription(
				data?.acf?.metadata?.description || data?.excerpt?.rendered
			),
			image: data?.acf?.featured_image
				? `${SITE_URL}${data.acf.featured_image}`
				: undefined,
			url: `${SITE_URL}${path}`,
			creator: { "@id": `${SITE_URL}/#organization` },
			dateModified: data?.modified_gmt ? `${data.modified_gmt}Z` : undefined,
		},
		breadcrumbJsonLd([
			{ name: "Home", path: "/" },
			{ name: "Our Work", path: "/our-work" },
			{ name: title, path },
		]),
	];

	return (
		<div className="pt-[120px] pb-[80px] md:pt-[170px] md:pb-[140px] bg-primaryDark">
			<JsonLd data={structuredData} />
			<SectionLayout>
				<WorkDetailsBanner
					title={data?.title?.rendered}
					bannerImage={data?.acf?.banner_image}
					clientDetails={data?.acf.about_client}
				/>
				{data?.content?.rendered && (
					<div
						className="blog-details mt-[56px] md:mt-[80px] max-w-[740px] mx-auto"
						dangerouslySetInnerHTML={{
							__html: data?.content?.rendered,
						}}
					/>
				)}
				<WorkDetailsRecommendation
					sectionTitle={"More work"}
					data={filteredPosts}
				/>
			</SectionLayout>
		</div>
	);
};

export default WorkDetails;
