"use client";

// import { sliderList } from "@/lib/constants";
import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const StackSlider = ({ sliderList }: any) => {
	const cardsContainerRef = useRef<HTMLDivElement | null>(null);

	const changeSlide = () => {
		const cards =
			cardsContainerRef.current?.querySelectorAll(".stack-card__item");

		if (cards) {
			cards.forEach((card) => {
				const currPosition = Number(card.getAttribute("data-position"));
				const newPosition =
					currPosition > sliderList.length
						? sliderList.length
						: currPosition < 0
						? 1
						: currPosition - 1;

				const intervalId = setTimeout(() => {
					card.setAttribute(
						"data-position",
						currPosition === 1
							? sliderList.length
							: newPosition.toString()
					);
				}, 150);

				if (currPosition === 1) {
					// Add opacity 0 and remove it after 0.5 seconds
					// card.style.opacity = "0";
					card.classList.add("hide");
					setTimeout(() => {
						// card.removeAttribute("style");
						card.classList.remove("hide");
					}, 500);
				}

				return () => clearInterval(intervalId);
			});
		}
	};

	useEffect(() => {
		const intervalId = setInterval(() => changeSlide(), 5000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<div className="w-full flex items-center justify-center">
				<div
					ref={cardsContainerRef}
					className="stack-card cardHolder relative w-[320px] h-[320px] md:w-[320px] md:h-[320px] xl:w-[450px] xl:h-[450px] transition-all duration-500 ease-in-out">
					{sliderList.length > 0 &&
						sliderList.map((item: any, index: number) => (
							<div
								key={index}
								className={`stack-card__item absolute w-full h-full max-w-full lg:max-w-[85%] max-h-full lg:max-h-[85%] rounded-[12px] overflow-hidden`}
								data-position={index + 1}>
								<div className="relative w-full h-full">
									{item.project_image && (
										<div className="stack-img__item absolute w-full h-full inset-0 object-cover z-[1]">
											<ImageLoader
												src={item.project_image}
												alt={item.project_image_alt}
												className={`object-cover rounded-[12px]`}
												fill
											/>
										</div>
									)}
									<div className="flex items-center justify-between absolute right-0 bottom-[15px] left-0 z-[3] px-[15px] pt-[10px] lg:px-[16px]">
										<span className="text-[16px] leading-[20px] font-[400] text-primaryLight lg:text-[18px] lg:leading-[22px]">
											{item?.project_title}
										</span>
										<Link
											href={item?.project_link}
											className="text-[14px] leading-[16px] font-[400] text-primaryLight lg:text-[15px] lg:leading-[18px] flex items-center justify-center underline">
											{item?.link_label}
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
							</div>
						))}
				</div>
			</div>
			{/* <div onClick={changeSlide}>
				<p className="text-primaryLight">Next</p>
			</div> */}
		</>
	);
};

export default StackSlider;
