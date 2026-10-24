import SectionLayout from "@/templates/SectionLayout";
import React from "react";
import WorkItem from "./WorkItem";

const OurWorkList = ({ data }: any) => {
	return (
		<SectionLayout>
			<div className="grid grid-cols-1 gap-x-[16px] gap-y-[56px] py-[48px] md:grid-cols-2 md:py-[72px] lg:pb-[140px] [&>article:nth-child(even)]:md:mt-[80px]">
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
		</SectionLayout>
	);
};

export default OurWorkList;
