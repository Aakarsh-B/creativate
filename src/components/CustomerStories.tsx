"use client";

import SectionLayout from "@/templates/SectionLayout";
import React from "react";
import SectionTitle from "./common/SectionTitle";
import Link from "next/link";
import CustomerStoryCard from "./common/CustomerStoryCard";
import Slider from "react-slick";
import ImageLoader from "@/utils/ImageLoader";
import { CustomerStoryCardProps } from "@/lib/types";
import LogoSlider from "./common/LogoSlider";
import AnimateInView from "@/templates/animateInView";

const CustomerStories = ({ data, sectionId, logoSlider }: any) => {
	const SampleNextArrow = (props: any) => {
		const { className, onClick } = props;
		return (
			<div
				className={className}
				onClick={onClick}>
				<ImageLoader
					src="./icons/slider-arrow-icon.svg"
					alt="arrow icon"
					className="z-[1]"
					width={16}
					height={14}
				/>
			</div>
		);
	};

	const SamplePrevArrow = (props: any) => {
		const { className, onClick } = props;
		return (
			<div
				className={className}
				onClick={onClick}>
				<ImageLoader
					src="./icons/slider-arrow-icon.svg"
					alt="arrow icon"
					className="z-[1]"
					width={16}
					height={14}
				/>
			</div>
		);
	};

	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
				},
			},
		],
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,
	};

	return (
		<section className={`py-[40px] xl:py-[100px] bg-primaryBlue relative`}>
			{sectionId && (
				<span
					id={sectionId}
					className="targetCode"
				/>
			)}
			<SectionLayout
				className={`flex flex-col lg:flex-row justify-between`}>
				<div className="w-full max-md:max-w-[350px] max-md:mx-auto lg:w-1/2 lg:max-w-[555px] text-center mb-[16px] md:mb-[32px] lg:mb-0 lg:flex lg:flex-col justify-between">
					<SectionTitle className={`text-primaryLight`}>
						{data?.title}
					</SectionTitle>
				</div>
				<div className="w-full max-md:max-w-[350px] max-lg:max-w-[600px] max-lg:mx-auto lg:w-1/2">
					<p className="text-[20px] leading-[24px] text-primaryLight font-[400] text-center lg:text-[24px] lg:leading-[28px] lg:text-right">
						{data?.description}
					</p>
					<Link
						href={data?.button_link}
						className="text-[20px] leading-[24px] text-primaryLight font-[400] text-center lg:text-426px] lg:leading-282px] lg:text-right mt-[10px] lg:mt-[16px] flex items-center justify-center lg:justify-end underline transition-all duration-300 ease-linear">
						{data?.button_text}
						<ImageLoader
							src={"./icons/external-link.svg"}
							alt="external link"
							width={8}
							height={8}
							className="ml-[8px] md:w-[12px] md:h-[12px]"
						/>
					</Link>
				</div>
			</SectionLayout>
			<SectionLayout className={`customer-stories mt-[40px]`}>
				<Slider {...settings}>
					{data?.review_slider.length > 2 &&
						data?.review_slider.map((item: any, index: number) => (
							<CustomerStoryCard
								key={index}
								content={item.review_desc}
								name={item.user_name}
								designation={item.user_title}
								profileImg={item.user_image}
								logo={item.logo_image}
								logoAlt={item.user_name}
							/>
						))}
				</Slider>
				<div className="h-[46px] relative mt-[20px] opacity-50">
					<LogoSlider
						desktopView={6}
						mobileView={2}
						logoSlider={logoSlider}
						customerStories={true}
					/>
					<span />
				</div>
			</SectionLayout>
		</section>
	);
};

export default CustomerStories;
