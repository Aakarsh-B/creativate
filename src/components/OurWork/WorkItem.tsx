"use client";

import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";
import { useEffect } from "react";

const WorkItem = ({
	featImage,
	title,
	websiteLink,
	blogLink,
	shortDesc,
	className,
}: any) => {
	useEffect(() => {
		if (document != undefined) {
			document
				.querySelectorAll(".workitem-wrap article")
				.forEach((item: any) => {
					const blogUrlElement =
						item.querySelector(".workitem--blogurl");
					if (blogUrlElement) {
						blogUrlElement.addEventListener(
							"mouseover",
							(e: any) => {
								e.target.parentElement.classList.add("hover");
							}
						);
						blogUrlElement.addEventListener(
							"mouseleave",
							(e: any) => {
								e.target.parentElement.classList.remove(
									"hover"
								);
							}
						);
					}
				});
		}
	}, []);

	return (
		<article
			className={`max-w-[390px] mx-auto mb-[32px] md:mb-0 md:mx-0 md:max-w-[640px] md:max-h-[620px] px-0 md:p-[24px] lg:p-[40px] transition-all duration-300 ease-in-out relative w-full md:w-1/2 ${
				className ? className : ""
			}`}>
			<div className="group/workItem workitem-wrapper relative">
				<div className="relative pt-[58.2%] rounded-[12px] overflow-hidden imgloader z-0 imgloader">
					<ImageLoader
						src={featImage}
						fill
						alt={title}
					/>
				</div>
				<Link
					href={`/our-work/${blogLink}`}
					className="absolute inset-0 w-full h-full z-[1] workitem--blogurl"
				/>
				<div className="workitem--head flex items-center justify-between mt-[16px]">
					<div className="flex flex-col">
						<h4 className="text-[24px] leading-[28px] font-[500] lg:leading-[36px] text-[#E6E6E6] mb-[10px]">
							{title}
						</h4>
						{websiteLink && (
							<Link
								href={websiteLink}
								className="workitem--client-url px-[10px] py-[8px] lg:px-[14px] lg:py-[10px] group bg-[#191B35] rounded-[8px] hover:bg-[#0067FF] transition-all duration-300 ease-in-out z-[1]"
								target="_blank">
								<span className="text-[16px] leading-[20px] font-[400] opacity-50 text-[#E6E6E6] group-hover:opacity-100 transition-all duration-300 ease-in-out">
									{websiteLink}
								</span>
							</Link>
						)}
					</div>
					<Link
						href={`/our-work/${blogLink}`}
						className="workitem-blog-url w-[46px] h-[46px] lg:w-[54px] lg:h-[54px] flex items-center justify-center shrink-0 bg-[#191B35] group-[.hover]/workItem:bg-[#0067FF] transition-all duration-300 ease-in-out rounded-[8px]">
						<ImageLoader
							src={"/icons/external-link.svg"}
							alt="external link"
							width={17}
							height={17}
							className="w-[13px] h-[13px] md:w-[17px] md:h-[17px]"
						/>
					</Link>
				</div>
				{shortDesc && (
					<div
						className="text-[16px] leading-[20px] font-[400] opacity-50 text-[#E6E6E6] mt-[16px] line-clamp-4 z-[0]"
						dangerouslySetInnerHTML={{ __html: shortDesc }}
					/>
				)}
			</div>
		</article>
	);
};

export default WorkItem;
