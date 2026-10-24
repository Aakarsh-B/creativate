import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import { Metadata } from "next";
import { getContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getContent(`/pages?slug=privacy-policy&acf_format=standard`);

	return {
		title: pageData[0]?.acf?.metadata?.title ?? "Creativate",
		description:
			pageData[0]?.acf?.metadata?.description ??
			"Creativity and innonvation for Unstoppable Growth.",
		keywords: pageData[0]?.acf?.metadata?.keywords ?? "Creativity",
	};
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
					className="blog-details w-[88%] py-[60px] md:pb-[100px] max-w-[1000px] mx-auto"
					dangerouslySetInnerHTML={{
						__html: pageData[0]?.content?.rendered,
					}}
				/>
			</div>
		</>
	);
};

export default PrivacyPolicy;
