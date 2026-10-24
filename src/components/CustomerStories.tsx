import SectionLayout from "@/templates/SectionLayout";
import React from "react";
import SectionTitle from "./common/SectionTitle";
import SectionLabel from "./common/SectionLabel";
import Link from "next/link";
import CustomerStoryCard from "./common/CustomerStoryCard";

const CustomerStories = ({ data, sectionId }: any) => {
	// The CMS list repeats entries to pad the old carousel; show each review once
	const reviews = (data?.review_slider ?? []).filter(
		(item: any, index: number, all: any[]) =>
			all.findIndex(
				(other) =>
					other.user_name === item.user_name &&
					other.review_desc === item.review_desc
			) === index
	);

	return (
		<section className="relative bg-primaryLight py-[80px] text-primaryDark lg:py-[140px]">
			{sectionId && (
				<span
					id={sectionId}
					className="targetCode"
				/>
			)}
			<SectionLayout>
				<div className="mb-[48px] grid grid-cols-1 gap-[24px] lg:mb-[64px] lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-7">
						<div className="mb-[20px] flex justify-center lg:justify-start">
							<SectionLabel
								index="04"
								className="!text-primaryDark/50 [&>span:nth-child(2)]:!text-primaryDark/30">
								Client love
							</SectionLabel>
						</div>
						<SectionTitle className="text-primaryDark">
							{data?.title}
						</SectionTitle>
					</div>
					<div className="flex flex-col items-center gap-[20px] lg:col-span-5 lg:items-start">
						<p className="text-center text-[17px] leading-[1.55] text-primaryDark/60 lg:text-left">
							{data?.description}
						</p>
						{data?.button_link && (
							<Link
								href={data?.button_link}
								className="group inline-flex h-[52px] items-center gap-[10px] rounded-full bg-primaryDark px-[24px] text-[15px] font-[600] text-primaryLight transition-colors duration-300 hover:bg-primaryBlue">
								{data?.button_text}
								<span className="transition-transform duration-300 ease-expo group-hover:rotate-45">
									↗
								</span>
							</Link>
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 gap-[12px] md:grid-cols-2 md:gap-[16px]">
					{reviews.map((item: any, index: number) => (
						<CustomerStoryCard
							key={index}
							content={item.review_desc}
							name={item.user_name}
							designation={item.user_title}
							profileImg={item.user_image}
							logo={item.logo_image}
							logoAlt={item.logo_alt || item.user_name}
						/>
					))}
				</div>
			</SectionLayout>
		</section>
	);
};

export default CustomerStories;
