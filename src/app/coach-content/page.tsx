import CoachBanner from "@/components/CoachContent/CoachBanner";
import CoachPricing from "@/components/CoachContent/CoachPricing";
import ConceptGallery from "@/components/CoachContent/ConceptGallery";
import StepProcess from "@/components/common/StepProcess";
import FaqContact from "@/templates/Home/FaqContact";
import { Metadata } from "next";
import React from "react";
import { getContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getContent(`/coach-content?slug=coach-content`);

	return {
		title: pageData[0]?.metadata?.title ?? "Creativate",
		description:
			pageData[0]?.metadata?.description ??
			"Creativity and innonvation for Unstoppable Growth.",
		keywords: pageData[0]?.metadata?.keywords ?? "Creativity",
	};
}

async function getData() {
	return getContent(`/coach-content?slug=coach-content`);
}

async function getHomeData() {
	return getContent(`/pages?slug=home&acf_format=standard`);
}

const CoachContent = async () => {
	const pageData = await getData();
	const data = pageData[0];

	// Reuse the site-wide contact form and social links from the home page
	const homeData = await getHomeData();
	const home = homeData[0].acf;

	return (
		<>
			<div className="pt-[106px] lg:pt-[160px] bg-primaryDark">
				<CoachBanner data={data?.banner} />
				<ConceptGallery data={data?.concepts} />
				<CoachPricing
					pricing={data?.pricing}
					templatePack={data?.template_pack}
					bookingLink={data?.banner?.primary_cta?.link}
				/>
				<StepProcess data={data?.process} />
				<FaqContact
					sectionId={"contact-us"}
					questionsList={data?.faq}
					contactForm={home?.contact_form}
					social_links={home?.social_link_list}
				/>
			</div>
		</>
	);
};

export default CoachContent;
