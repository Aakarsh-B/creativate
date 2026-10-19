import OurBlogList from "@/components/OurBlog/OurBlogList";
import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import { Metadata } from "next";
import React from "react";
import { getContent } from "@/lib/content";

async function getData() {
	return getContent(`/pages?slug=blog&acf_format=standard`);
}

async function getBlogData() {
	return getContent(`/our-blog?&acf_format=standard&per_page=100`);
}

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getContent(`/pages?slug=blog&acf_format=standard`);

	console.log(pageData);

	return {
		title: pageData[0]?.acf?.metadata?.title ?? "Creativate",
		description:
			pageData[0]?.acf?.metadata?.description ??
			"Creativity and innonvation for Unstoppable Growth.",
		keywords: pageData[0]?.acf?.metadata?.keywords ?? "Creativity",
	};
}

const OurBlog = async () => {
	const pageData = await getData();
	const data = pageData[0].acf;

	const blogData = await getBlogData();
	const blogList = blogData;
	console.log('blogList', blogList.length);

	return (
		<>
			<div className="pt-[106px] lg:pt-[160px] bg-primaryDark">
				<DescBannerWithImage data={data?.banner} />
				<OurBlogList data={blogList} />
			</div>
		</>
	);
};

export default OurBlog;
