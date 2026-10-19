import React from "react";
import BlogItem from "../BlogItem";
import Link from "next/link";

const BlogDetailsRecommendation = ({ sectionTitle, data }: any) => {
	return (
		<div className="pt-[50px] md:pt-[100px]">
			<h3 className="text-[32px] leading-[38px] font-[500] text-center text-[#F4F4F4] mb-[32px] lg:mb-0 lg:text-[40px] lg:leading-[48px]">
				{sectionTitle}
			</h3>
			<div className="md:flex md:items-start md:justify-start md:flex-wrap">
				{data?.map((item: any, index: number) => {
					return (
						<React.Fragment key={index}>
							<BlogItem
								featImage={item?.acf?.featured_image}
								blogLink={item?.acf?.current_blog_url || item?.slug}
								title={item?.title?.rendered}
								className={``}
							/>
						</React.Fragment>
					);
				})}
			</div>
			<div className="relative block text-center">
				<Link
					href={`/our-blog`}
					className="border-[#F4F4F4] border-solid border-[1px] rounded-[8px] py-[16px] px-[32px] block sm:inline-block mt-[30px] md:mt-0 opacity-100 hover:opacity-60 transition-all duration-300 ease-in-out">
					<span className="text-[24px] leading-[30px] font-[400] text-[#F4F4F4]">
						View all blogs
					</span>
				</Link>
			</div>
		</div>
	);
};

export default BlogDetailsRecommendation;
