"use client";

import { faqProps } from "@/lib/types";
import React, { useState } from "react";
import SectionTitle from "@/components/common/SectionTitle";

const FaqList: React.FC<faqProps> = ({ title, desc, faqList, className }) => {
	const [selected, setSelected] = useState(0);

	return (
		<div className={`w-full ${className ? className : ""}`}>
			<div className="mb-[40px] flex flex-col items-center gap-[20px] lg:items-start">
				{title && (
					<SectionTitle className={`text-primaryLight`}>{title}</SectionTitle>
				)}
				{desc && (
					<p className="max-w-[520px] text-center text-[17px] leading-[1.55] text-primaryLight/60 lg:text-left">
						{desc}
					</p>
				)}
			</div>
			<div className="border-t border-white/10">
				{faqList?.length > 0 &&
					faqList.map((item: any, index: number) => {
						const isOpen = selected === index;
						return (
							<div
								key={index}
								className="border-b border-white/10">
								<button
									type="button"
									aria-expanded={isOpen}
									onClick={() => setSelected(isOpen ? -1 : index)}
									className="group flex w-full items-start justify-between gap-[24px] py-[24px] text-left">
									<span
										className={`text-[18px] leading-[1.35] font-[500] tracking-[-0.01em] transition-colors duration-300 lg:text-[20px] ${
											isOpen ? "text-primaryLight" : "text-primaryLight/75 group-hover:text-primaryLight"
										}`}>
										{item?.question}
									</span>
									<span
										className={`mt-[2px] flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[18px] leading-none transition-all duration-500 ease-expo ${
											isOpen ? "rotate-45 bg-lime text-primaryDark" : "bg-white/[0.06] text-primaryLight"
										}`}>
										+
									</span>
								</button>
								<div
									className={`grid transition-all duration-500 ease-expo ${
										isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
									}`}>
									<div className="overflow-hidden">
										<p
											className="max-w-[600px] pb-[24px] text-[16px] leading-[1.6] text-primaryLight/60"
											dangerouslySetInnerHTML={{
												__html: item.answer,
											}}
										/>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default FaqList;
