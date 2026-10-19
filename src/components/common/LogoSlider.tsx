"use client";

import ImageLoader from "@/utils/ImageLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = ({ desktopView, mobileView, logoSlider, customerStories }: any) => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: desktopView,
		slidesToScroll: 1,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 0,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: mobileView,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			{logoSlider !== undefined && (
				<Slider {...settings}>
					{logoSlider.map((item: any, i: number) => (
						<div
							key={i}
							className={`${customerStories ? 'lg:w-full' : '!w-[80px] lg:!w-full'} relative !inline-flex items-center justify-center h-[36px] lg:h-[46px]`}>
							<ImageLoader
								key={i}
								src={item.logo}
								alt={item.logo_alt}
								width={110}
								height={45}
							/>
						</div>
					))}
				</Slider>
			)}
		</>
	);
};

export default LogoSlider;
