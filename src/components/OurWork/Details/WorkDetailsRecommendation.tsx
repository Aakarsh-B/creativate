import React from "react";
import WorkItem from "../WorkItem";

const WorkDetailsRecommendation = ({ sectionTitle, data }: any) => {
	return (
		<div className="mt-[80px] border-t border-white/10 pt-[56px] md:mt-[120px] md:pt-[80px]">
			<h2 className="mb-[32px] text-center text-[36px] leading-[1.05] font-[500] tracking-[-0.035em] text-primaryLight md:text-left lg:mb-[48px] lg:text-[52px]">
				{sectionTitle}
			</h2>
			<div className="grid grid-cols-1 gap-x-[16px] gap-y-[48px] md:grid-cols-2">
				{data?.map((item: any, index: number) => {
					return (
						<React.Fragment key={index}>
							<WorkItem
								featImage={item?.acf?.featured_image}
								blogLink={item?.acf?.current_blog_url}
								title={item?.title?.rendered}
								websiteLink={
									item?.acf?.about_client?.website_url
								}
								shortDesc={item?.excerpt?.rendered}
								className={``}
							/>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default WorkDetailsRecommendation;
