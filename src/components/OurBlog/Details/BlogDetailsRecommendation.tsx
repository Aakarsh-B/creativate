import React from "react";
import BlogItem from "../BlogItem";
import Link from "next/link";

const BlogDetailsRecommendation = ({ sectionTitle, data }: any) => {
	return (
		<div className="mt-[80px] border-t border-white/10 pt-[56px] md:mt-[120px] md:pt-[80px]">
			<h2 className="mb-[32px] text-center text-[36px] leading-[1.05] font-[500] tracking-[-0.035em] text-primaryLight md:text-left lg:mb-[48px] lg:text-[52px]">
				{sectionTitle}
			</h2>
			<div className="grid grid-cols-1 gap-x-[16px] gap-y-[48px] md:grid-cols-2">
				{data?.map((item: any, index: number) => {
					return (
						<React.Fragment key={index}>
							<BlogItem
								featImage={item?.acf?.featured_image}
								blogLink={item?.acf?.current_blog_url || item?.slug}
								title={item?.title?.rendered}
								date={item?.date}
								className={``}
							/>
						</React.Fragment>
					);
				})}
			</div>
			<div className="relative block text-center">
				<Link
					href={`/our-blog`}
					className="mt-[48px] inline-flex h-[52px] items-center justify-center rounded-full border border-white/15 px-[26px] text-[15px] font-[500] text-primaryLight transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.06]">
					View all posts
				</Link>
			</div>
		</div>
	);
};

export default BlogDetailsRecommendation;
