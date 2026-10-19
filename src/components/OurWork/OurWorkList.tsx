import SectionLayout from "@/templates/SectionLayout";
import React from "react";
import WorkItem from "./WorkItem";

const OurWorkList = ({ data }: any) => {
	return (
		<SectionLayout>
			<div className="workitem-wrap md:flex md:justify-start md:flex-wrap py-[32px] md:pt-[60px] md:pb-[100px]">
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
