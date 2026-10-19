"use client";

import { faqProps } from "@/lib/types";
import React, { useState, useRef, useEffect } from "react";
import useOnResize from "@/utils/hooks/useOnResize";
import SectionTitle from "@/components/common/SectionTitle";

const FaqList: React.FC<faqProps> = ({ title, desc, faqList, className }) => {
	const { width: isResize } = useOnResize();
	const [hgt, setHeight] = useState<any>(0);
	const [selected, setSelected] = useState(0);
	const answerRef = useRef<any>([]);
	const activeTabRef = useRef<any>([]);

	// UPDATE OPEN & CLOSE OF ACCORDIAN BASED ON CLICK
	const openAccordion = (index: any) => {
		setHeight(answerRef?.current[index].offsetHeight);
		setSelected(index);
	};

	// UPDATE HEIGHT OF ANSWER TAB & IMAGE
	useEffect(() => {
		setTimeout(() => {
			setHeight(answerRef?.current[selected]?.offsetHeight);
		}, 350);
	}, [selected, hgt, isResize]);

	return (
		<div className={`w-full lg:w-1/2 ${className ? className : ""}`}>
			<div className="px-[24px] lg:px-0 pb-[30px]">
				{title && (
					<SectionTitle className={`text-primaryLight mb-[20px]`}>
						{title}
					</SectionTitle>
				)}
				{desc && (
					<p className="text-[20px] leading-[24px] text-center text-primaryLight font-[400] md:text-left opacity-50">
						{desc}
					</p>
				)}
			</div>
			{faqList.length > 2 &&
				faqList.map((item: any, index: any) => (
					<div
						key={index}
						ref={(element: any) =>
							(activeTabRef.current[index] = element)
						}
						className={`relative group ${
							selected === index ? "active " : ""
						} px-[24px] py-[24px] lg:px-[32px] border-b border-primaryLight/30`}
						onClick={() => {
							openAccordion(index);
						}}>
						<h3
							className={`text-primaryLight cursor-pointer font-[500] text-[20px] leading-[28px] text-left transition-[padding] duration-300 ease-in-out mb-[8px] relative flex items-start justify-between`}>
							<p className="w-[90%]">{item?.question}</p>
							<span
								className={`w-[18px] h-[18px] relative top-[8px]`}>
								<span className="absolute bg-primaryLight border-solid border-primaryLight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] transition-all duration-300 ease-linear"></span>
								<span className="absolute bg-primaryLight border-solid border-primaryLight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] rotate-90 group-[.active]:rotate-0 origin-center transition-all duration-300 ease-linear"></span>
							</span>
						</h3>
						<div
							className={`block relative h-0 overflow-hidden transition-all duration-300 ease-out`}
							style={{
								height: selected === index ? `${hgt}px` : "0px",
							}}>
							<div
								ref={(element: any) =>
									(answerRef.current[index] = element)
								}>
								<p
									className={`text-primaryLight font-normal text-[16px] leading-[20px] w-full md:w-[88%] mr-auto ml-0 opacity-50`}
									dangerouslySetInnerHTML={{
										__html: item.answer,
									}}
								/>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default FaqList;
