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
		<figure className="flex h-full flex-col justify-between gap-[40px] rounded-[24px] bg-white p-[28px] shadow-[0_1px_0_rgba(10,10,11,0.06)] lg:p-[40px]">
			<div>
				<span className="accent block text-[72px] leading-[0.6] text-primaryBlue">
					“
				</span>
				<blockquote className="mt-[12px] text-[20px] leading-[1.4] font-[400] tracking-[-0.015em] text-primaryDark lg:text-[26px]">
					{content}
				</blockquote>
			</div>
			<figcaption className="flex items-center justify-between gap-[16px] border-t border-primaryDark/10 pt-[24px]">
				<div className="flex items-center gap-[12px]">
					<div className="relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full bg-primaryLight">
						<ImageLoader
							src={profileImg}
							fill
							sizes="48px"
							className={`object-cover`}
							alt={name ? name : "user profile image"}
						/>
					</div>
					<div>
						<p className="text-[16px] leading-[20px] font-[600] text-primaryDark">
							{name}
						</p>
						<p className="mt-[2px] text-[14px] leading-[18px] text-primaryDark/50">
							{designation}
						</p>
					</div>
				</div>
				<div className="relative h-[36px] w-[110px] shrink-0">
					<ImageLoader
						src={logo}
						fill
						sizes="110px"
						className={`object-contain object-right`}
						alt={logoAlt ? logoAlt : "Company logo"}
					/>
				</div>
			</figcaption>
		</figure>
	);
};

export default CustomerStoryCard;
