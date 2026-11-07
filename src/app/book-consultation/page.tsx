import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import BookConsultation from "@/templates/BookConsultation";
import { Metadata } from "next";
import React from "react";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getContent(`/form/?slug=book-a-consultation&acf_format=standard`);

	const meta = pageData[0]?.acf?.metadata;

	return pageMetadata({
		title: meta?.title,
		description: meta?.description,
		path: "/book-consultation",
	});
}

async function getData() {
	return getContent(`/form/?slug=book-a-consultation&acf_format=standard`);
}

const OurWork = async () => {
	const pageData = await getData();
	const data = pageData[0].acf;

	return (
		<>
			<div className="pt-[120px] lg:pt-[180px] bg-primaryDark">
				<DescBannerWithImage data={data?.banner} />
				<BookConsultation data={data?.book_consultation_form} />
			</div>
		</>
	);
};

export default OurWork;
