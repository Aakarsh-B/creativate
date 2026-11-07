import SectionLayout from "@/templates/SectionLayout";
import React from "react";
import BlogItem from "./BlogItem";

const OurBlogList = ({ data }: any) => {
	return (
		<SectionLayout>
			<div className="grid grid-cols-1 gap-x-[32px] gap-y-[56px] py-[48px] md:grid-cols-2 md:gap-y-[72px] md:py-[72px] lg:grid-cols-3 lg:gap-x-[48px] lg:gap-y-[96px] lg:pb-[140px]">
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
		</SectionLayout>
	);
};

export default OurBlogList;
