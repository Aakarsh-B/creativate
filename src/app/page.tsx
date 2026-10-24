import CultureParalax from "@/components/CultureParalax";
import CustomerStories from "@/components/CustomerStories";
import FaqContact from "@/templates/Home/FaqContact";
import HomeBanner from "@/components/Home/HomeBanner";
import WhoWeAre from "@/components/WhoWeAre";
import StepProcess from "@/components/common/StepProcess";
import ServicesList from "@/components/Home/ServicesList";
import type { Metadata } from "next";
import { getContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getContent(`/pages?slug=home&acf_format=standard`);

	return {
		title: pageData[0]?.acf?.metadata?.title ?? "Creativate",
		description:
			pageData[0]?.acf?.metadata?.description ??
			"Creativity and innonvation for Unstoppable Growth.",
		keywords: pageData[0]?.acf?.metadata?.keywords ?? "Creativity",
	};
}

async function getData() {
	return getContent(`/pages?slug=home&acf_format=standard`);
}

export default async function Home() {
	const pageData = await getData();
	const data = pageData[0].acf;

	return (
		<>
			<HomeBanner
				data={data?.home_banner}
				logoSlider={data?.logo_slider}
			/>
			<WhoWeAre data={data?.who_we_are} />
			<CultureParalax data={data?.our_culture} />
			<ServicesList
				data={data?.what_we_do}
				sectionId={"service"}
			/>
			<StepProcess
				data={data?.our_3_step_process}
				labelIndex="03"
			/>
			<CustomerStories
				data={data?.client_feedback}
				sectionId={"story"}
			/>
			<FaqContact
				sectionId={"contact-us"}
				questionsList={data?.frequent_questions}
				contactForm={data?.contact_form}
				social_links={data?.social_link_list}
			/>
		</>
	);
}
