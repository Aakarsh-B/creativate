import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import BookConsultation from "@/templates/BookConsultation";
import { Metadata } from "next";
import React from "react";
import { getContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getContent(`/form/?slug=book-a-consultation&acf_format=standard`);

	return {
		title: pageData[0]?.acf?.metadata?.title ?? "Creativate",
		description:
			pageData[0]?.acf?.metadata?.description ??
			"Creativity and innonvation for Unstoppable Growth.",
		keywords: pageData[0]?.acf?.metadata?.keywords ?? "Creativity",
	};
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
