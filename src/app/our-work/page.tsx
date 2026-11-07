import OurWorkList from "@/components/OurWork/OurWorkList";
import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import { Metadata } from "next";
import React from "react";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getContent(`/pages?slug=work&acf_format=standard`);

	const meta = pageData[0]?.acf?.metadata;

	return pageMetadata({
		title: meta?.title,
		description: meta?.description,
		path: "/our-work",
	});
}

async function getData() {
	return getContent(`/pages?slug=work&acf_format=standard`);
}

async function getWorkData() {
	return getContent(`/our-work?&acf_format=standard&per_page=100`);
}

const OurWork = async () => {
	const pageData = await getData();
	const data = pageData[0].acf;

	const workData = await getWorkData();
	const workList = workData;

	return (
		<>
			<div className="pt-[120px] lg:pt-[180px] bg-primaryDark">
				<DescBannerWithImage data={data?.banner} />
				<OurWorkList data={workList} />
			</div>
		</>
	);
};

export default OurWork;
