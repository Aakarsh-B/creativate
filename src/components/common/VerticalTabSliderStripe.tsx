"use client";

import React, { useState, useRef, useEffect } from "react";
import useOnResize from "@/utils/hooks/useOnResize";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";
import Slider from "react-slick";
import SectionTitle from "./SectionTitle";

const SectionHead = ({ title, description }: any) => {
	return (
		<div className="px-[25px] lg:px-0 pb-[30px]">
			<SectionTitle className={`text-primaryLight mb-[20px]`}>
				{title}
			</SectionTitle>
			<p className="text-[20px] leading-[24px] md:text-[16px] md:leading-[20px] 2xl:text-[20px] 2xl:leading-[24px] text-center text-primaryLight font-[400] md:text-left opacity-50">
				{description}
			</p>
		</div>
	);
};

const VerticalTabSliderStripe = ({ data, sectionId }: any) => {
	const isMobile = useMediaQuery("(max-width: 1024px)");

	const { width: isResize } = useOnResize();
	const [hgt, setHeight] = useState<any>(0);
	const [selected, setSelected] = useState(0);
	const targetRef = useRef<any>();
	const answerRef = useRef<any>([]);

	const activeTabRef = useRef<any>([]);
	const activeTabImgRef = useRef<any>([]);
	const [activeTabImgOffset, setActiveTabImgOffset] = useState<number>();
	const [activeTabsliderHgt, setActiveTabsliderHgt] = useState<number>();

	// UPDATE OPEN & CLOSE OF ACCORDIAN BASED ON CLICK
	const openAccordion = (index: any) => {
		setHeight(answerRef?.current[index].offsetHeight);
		setSelected(index);
	};

	// SLIDER SETTINGS
	const sliderRef = useRef<any>(null);
	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		vertical: true,
		speed: 300,
		autoplay: false,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		beforeChange: (current: any, next: any) => openAccordion(next),
	};

	// UPDATE HEIGHT OF ANSWER TAB & IMAGE
	useEffect(() => {
		setTimeout(() => {
			setHeight(answerRef?.current[selected]?.offsetHeight);
			if (!isMobile) {
				setActiveTabImgOffset(
					activeTabImgRef?.current[selected]?.offsetTop
				);
				setActiveTabsliderHgt(
					activeTabImgRef?.current[selected]?.offsetHeight
				);
			}
		}, 350);
	}, [selected, hgt, isResize]);

	const StickySlider = () => {
		sliderRef?.current?.slickGoTo(selected);
		const trackScrolling = () => {
			const headerEle = document.querySelector("header");
			const targetEle = targetRef.current;
			if (headerEle && targetEle) {
				if (!isMobile) {
					if (
						headerEle.getBoundingClientRect().bottom <=
						targetEle.getBoundingClientRect().top
					) {
						targetEle.style.position = "sticky";
						targetEle.style.top = `${
							headerEle?.offsetHeight + 10
						}px`;
					}
				} else {
					targetEle.style.position = "";
					targetEle.style.top = "";
				}
			}
		};
		document.addEventListener("scroll", trackScrolling);
		return () => document.removeEventListener("scroll", trackScrolling);
	};

	// useEffect(() => {
	// 	StickySlider();
	// }, [isResize]);

	const tabTitleStyles = `text-primaryLight cursor-pointer font-[500] text-[24px] leading-[28px] text-left transition-[padding] duration-300 ease-in-out`;
	const tabDescStyles = `text-primaryLight font-normal text-[16px] leading-[20px] lg:text-[20px] lg:leading-[24px]`;

	return (
		<section
			className={`py-[50px] pb-[25px] xl:py-[120px] bg-primaryDark relative`}>
			{sectionId && (
				<span
					id={sectionId}
					className="targetCode"
				/>
			)}
			<div
				className={`w-full sm:w-[88%] max-w-[550px] lg:max-w-[1280px] mx-auto relative block`}>
				<div className={`flex items-start justify-between`}>
					{!isMobile && (
						<>
							<div
								ref={targetRef}
								className={`shrink-0 md:w-[48%] md:max-w-[600px] h-full max-h-[780px] relative overflow-hidden rounded-[20px]`}>
								<Slider
									className={`tabSlider`}
									ref={sliderRef}
									{...settings}>
									{data?.work_list.length > 0 &&
										data?.work_list?.map(
											(item: any, index: any) => (
												<div
													key={index}
													className={`rounded-[20px] overflow-hidden transition-all duration-300 ease-out relative ${
														selected == index
															? "inline-block opacity-100"
															: "!opacity-0"
													}`}>
													<ImageLoader
														src={item.project_image}
														alt={
															item.project_image_alt
														}
														width={600}
														height={565}
														quality="90"
														style={{
															width: "100%",
															maxHeight: "565px",
															objectFit: "cover",
														}}
														priority={true}
													/>

													<div className="flex items-center justify-between absolute right-0 bottom-[15px] left-0 z-[3] px-[15px] pt-[10px] lg:px-[16px] 2xl:px-[26px]">
														<span className="text-[18px] leading-[24px] font-[400] text-primaryLight 2xl:text-[24px] 2xl:leading-[30px]">
															{
																item?.project_title
															}
														</span>
														<Link
															href={
																item?.project_link ??
																"#"
															}
															rel="noreferrer"
															className="text-[14px] leading-[16px] font-[400] text-primaryLight 2xl:text-[20px] 2xl:leading-[24px] flex items-center justify-center underline">
															{item.link_label}
															<ImageLoader
																src={
																	"./icons/external-link.svg"
																}
																alt="external link"
																width={8}
																height={8}
																className="ml-[8px] md:w-[12px] md:h-[12px] 2xl:ml-[10px]"
															/>
														</Link>
													</div>
													<span className="w-full absolute bottom-0 h-1/2 z-[2] homeCardSliderDeck" />
												</div>
											)
										)}
								</Slider>
							</div>
							<div
								className={`min-h-[375px] md:w-[52%] md:max-w-[760px] shrink-0 w-full relative lg:pl-[40px] 2xl:pl-[50px]`}>
								<SectionHead
									title={data?.title}
									description={data?.description}
								/>
								<ul>
									{data?.work_list.length > 0 &&
										data?.work_list?.map(
											(
												item: any,
												index: any,
												array: any
											) => (
												<li
													key={index}
													ref={(element: any) =>
														(activeTabRef.current[
															index
														] = element)
													}
													className={`relative group ${
														selected !== index &&
														index === selected - 1
															? "!border-b-0 "
															: selected !==
																	index &&
															  index ===
																	array.length -
																		1
															? "!border-b-0 "
															: ""
													}${
														selected === index
															? "active bg-primaryBlue rounded-[8px] px-[20px] py-[28px] md:px-[32px] md:py-[24px] flex flex-col gap-[8px]"
															: "px-[30px] border-b border-primaryLight/30 py-[20px]"
													}`}
													onClick={() => {
														openAccordion(index);
														sliderRef.current.slickGoTo(
															index
														);
													}}>
													<h3
														className={
															tabTitleStyles
														}>
														{item?.title}
													</h3>
													<div
														className={`block relative h-0 overflow-hidden transition-all duration-300 ease-out`}
														style={{
															height:
																selected ===
																index
																	? `${hgt}px`
																	: "0px",
														}}>
														<div
															ref={(
																element: any
															) =>
																(answerRef.current[
																	index
																] = element)
															}>
															<p
																className={
																	tabDescStyles
																}
																dangerouslySetInnerHTML={{
																	__html: item.description,
																}}
															/>
														</div>
													</div>
												</li>
											)
										)}
								</ul>
							</div>
						</>
					)}
					{isMobile && (
						<div
							className={`min-h-[375px] mt-[20px] block rounded-[8px] overflow-hidden`}>
							<SectionHead
								title={data?.title}
								description={data?.description}
							/>
							{data?.work_list.length > 0 &&
								data?.work_list?.map(
									(item: any, index: any, array: any) => (
										<React.Fragment key={index}>
											<div
												className={`w-[88%] relative max-w-[320px] xs:max-w-[340px] mx-auto block rounded-[10px] overflow-hidden ${
													selected === index
														? "active block my-[20px]"
														: "hidden"
												}`}>
												<ImageLoader
													src={item.project_image}
													alt={item.project_image_alt}
													width={340}
													height={320}
													quality="90"
													style={{
														width: "100%",
														maxHeight: "320px",
													}}
													priority={true}
												/>
												<div className="flex items-center justify-between absolute right-0 bottom-[15px] left-0 z-[3] px-[15px] pt-[10px] lg:px-[16px] 2xl:px-[26px]">
													<span className="text-[16px] leading-[20px] font-[400] text-primaryLight 2xl:text-[24px] 2xl:leading-[30px]">
														{item?.project_title}
													</span>
													<Link
														href={
															item?.project_link ??
															"#"
														}
														rel="noreferrer"
														className="text-[14px] leading-[16px] font-[400] text-primaryLight 2xl:text-[20px] 2xl:leading-[24px] flex items-center justify-center underline">
														{item.link_label}
														<ImageLoader
															src={
																"./icons/external-link.svg"
															}
															alt="external link"
															width={8}
															height={8}
															className="ml-[8px] md:w-[12px] md:h-[12px] 2xl:ml-[10px]"
														/>
													</Link>
												</div>
												<span className="w-full absolute bottom-0 h-1/2 z-[2] homeCardSliderDeck" />
											</div>
											<div
												ref={(element: any) =>
													(activeTabRef.current[
														index
													] = element)
												}
												className={`relative group ${
													selected !== index &&
													index === array.length - 1
														? "!border-b-0"
														: ""
												} ${
													selected === index
														? "active bg-primaryBlue rounded-[8px] px-[20px] py-[28px] md:px-[32px] md:py-[24px] flex flex-col gap-[8px]"
														: "px-[30px] border-b border-primaryLight/30 py-[20px]"
												}`}
												onClick={() => {
													openAccordion(index);
												}}>
												<h3 className={tabTitleStyles}>
													{item?.title}
												</h3>
												<div
													className={`block relative h-0 overflow-hidden transition-all duration-300 ease-out`}
													style={{
														height:
															selected === index
																? `${hgt}px`
																: "0px",
													}}>
													<div
														ref={(element: any) =>
															(answerRef.current[
																index
															] = element)
														}>
														<p
															className={
																tabDescStyles
															}
															dangerouslySetInnerHTML={{
																__html: item.description,
															}}
														/>
													</div>
												</div>
											</div>
										</React.Fragment>
									)
								)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default VerticalTabSliderStripe;
