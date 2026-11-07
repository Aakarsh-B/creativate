import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import { Metadata } from "next";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getContent(`/pages?slug=privacy-policy&acf_format=standard`);

	const meta = pageData[0]?.acf?.metadata;

	return pageMetadata({
		title: meta?.title,
		description: meta?.description,
		path: "/privacy-policy",
	});
}

async function getData() {
	return getContent(`/pages?slug=privacy-policy&acf_format=standard`);
}
const PrivacyPolicy = async () => {
	const pageData = await getData();
	const data = pageData[0].acf;

	return (
		<>
			<div className="pt-[120px] lg:pt-[180px] bg-primaryDark">
				<DescBannerWithImage data={data?.banner} />
				<div
					className="blog-details w-[88%] py-[56px] md:pt-[72px] md:pb-[140px] max-w-[740px] mx-auto"
					dangerouslySetInnerHTML={{
						__html: pageData[0]?.content?.rendered,
					}}
				/>
			</div>
		</>
	);
};

export default PrivacyPolicy;
