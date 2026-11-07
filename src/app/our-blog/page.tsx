import OurBlogList from "@/components/OurBlog/OurBlogList";
import DescBannerWithImage from "@/components/common/DescBannerWithImage";
import { Metadata } from "next";
import React from "react";
import { getContent } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

async function getData() {
	return getContent(`/pages?slug=blog&acf_format=standard`);
}

async function getBlogData() {
	return getContent(`/our-blog?&acf_format=standard&per_page=100`);
}

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getContent(`/pages?slug=blog&acf_format=standard`);

	const meta = pageData[0]?.acf?.metadata;

	return pageMetadata({
		title: meta?.title,
		description: meta?.description,
		path: "/our-blog",
	});
}

const OurBlog = async () => {
	const pageData = await getData();
	const data = pageData[0].acf;

	const blogData = await getBlogData();
	const blogList = blogData;

	return (
		<>
			<div className="pt-[120px] lg:pt-[180px] bg-primaryDark">
				<DescBannerWithImage data={data?.banner} />
				<OurBlogList data={blogList} />
			</div>
		</>
	);
};

export default OurBlog;
