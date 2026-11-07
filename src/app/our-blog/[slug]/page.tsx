import BlogDetailsBanner from "@/components/OurBlog/Details/BlogDetailsBanner";
import BlogDetailsRecommendation from "@/components/OurBlog/Details/BlogDetailsRecommendation";
import SectionLayout from "@/templates/SectionLayout";
import { Metadata } from "next";
import { getContent } from "@/lib/content";

export async function generateStaticParams() {
	const data = await getContent(`/our-blog?acf_format=standard&per_page=100`);

	return data.map((blog: any) => ({
		slug: blog.slug,
	}));
}

async function getData(params: string) {
	return getContent(`/our-blog/?slug=${params}&acf_format=standard`);
}

async function getBlogData() {
	return getContent(`/our-blog?acf_format=standard&_fields=id,slug,title,excerpt,acf`);
}

export async function generateMetadata({
	params,
}: {
	params: any;
}): Promise<Metadata> {
	const pageData = await getContent(`/our-blog/?slug=${params.slug}&acf_format=standard`);

	return {
		title: pageData[0]?.acf?.metadata?.title ?? "Creativate",
		description:
			pageData[0]?.acf?.metadata?.description ??
			"Creativity and innonvation for Unstoppable Growth.",
		keywords: pageData[0]?.acf?.metadata?.keywords ?? "Creativity",
	};
}

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
	const pageData = await getData(params.slug);
	const data = pageData[0];

	const allBlog = await getBlogData();
	const filteredPosts = allBlog
		.filter((post: any) => (data?.acf?.other_blogs ?? []).includes(post.slug))
		.slice(0, 2);

	return (
		<div className="pt-[120px] pb-[80px] md:pt-[170px] md:pb-[140px] bg-primaryDark">
			<SectionLayout>
				<BlogDetailsBanner
					title={data?.title?.rendered}
					bannerImage={data?.acf?.banner_image}
					clientDetails={data?.acf.about_client}
					date={data?.date}
				/>
				{data?.content?.rendered && (
					<div
						className="blog-details mt-[56px] md:mt-[80px] max-w-[740px] mx-auto"
						dangerouslySetInnerHTML={{
							__html: data?.content?.rendered,
						}}
					/>
				)}
				<BlogDetailsRecommendation
					sectionTitle={"Keep reading"}
					data={filteredPosts}
				/>
			</SectionLayout>
		</div>
	);
};

export default BlogDetails;
