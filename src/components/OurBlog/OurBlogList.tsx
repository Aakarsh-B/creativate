import SectionLayout from "@/templates/SectionLayout";
import React from "react";
import BlogItem from "./BlogItem";

const OurBlogList = ({ data }: any) => {
	return (
		<SectionLayout>
			<div className="md:flex md:justify-start md:flex-wrap py-[32px] md:pt-[60px] md:pb-[100px]">
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
		</SectionLayout>
	);
};

export default OurBlogList;
