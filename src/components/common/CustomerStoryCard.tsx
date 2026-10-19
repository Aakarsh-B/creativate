import { CustomerStoryCardProps } from "@/lib/types";
import ImageLoader from "@/utils/ImageLoader";
import React from "react";

const CustomerStoryCard: React.FC<CustomerStoryCardProps> = ({
	content,
	name,
	designation,
	profileImg,
	logo,
	logoAlt,
}) => {
	return (
		<div className="bg-primaryLight px-[16px] py-[32px] lg:px-[40px] lg:py-[32px] md:min-h-[240px] max-w-[450px] lg:max-w-full flex flex-col justify-between rounded-[16px] mx-[10px]">
			<p className="text-[16px] leading-[24px] lg:text-[20px] text-primaryDark font-[400] text-left transition-all duration-300 ease-in-out mb-[56px] md:mb-[32px] line-clamp-5">
				{content}
			</p>
			<div className="flex items-start flex-col lg:items-center lg:flex-row justify-between w-full">
				<div className="flex items-center justify-start w-full md:max-w-1/2">
					<div className="w-[49px] h-[49px] md:w-[56px] md:h-[56px] rounded-full overflow-hidden border-[3px] border-solid border-[#EEF5FF] relative">
						<ImageLoader
							src={profileImg}
							fill
							className={`object-cover`}
							alt={name ? name : "user profile image"}
						/>
					</div>
					<div className="ml-[12px]">
						<p
							className={`text-[20px] leading-[24px] text-primaryDark font-[400] text-left line-clamp-1`}>
							{name}
						</p>
						<p
							className={`text-[16px] leading-[20px] text-primaryDark font-[400] text-left mt-[5px] opacity-50 line-clamp-1`}>
							{designation}
						</p>
					</div>
				</div>
				<div className="max-lg:mt-[20px] relative">
					<ImageLoader
						src={logo}
						height={155}
						width={205}
						className={`object-contain w-auto max-w-[205px] max-h-[40px]`}
						alt={logoAlt ? logoAlt : "Company logo"}
					/>
				</div>
			</div>
		</div>
	);
};

export default CustomerStoryCard;
