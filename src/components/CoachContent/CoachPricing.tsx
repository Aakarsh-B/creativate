"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import ImageLoader from "@/utils/ImageLoader";

type Currency = "usd" | "inr";

const formatPrice = (amount: number, currency: Currency) =>
	currency === "usd"
		? `$${amount.toLocaleString("en-US")}`
		: `₹${amount.toLocaleString("en-IN")}`;

const CoachPricing = ({ pricing, templatePack, bookingLink }: any) => {
	const [currency, setCurrency] = useState<Currency>("usd");

	return (
		<section className="py-[50px] lg:py-[100px] bg-primaryDark relative">
			<span
				id="pricing"
				className="targetCode top-[-90px]"
			/>
			<SectionLayout className={``}>
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px] mb-[30px] lg:mb-[40px]">
					<div className="max-w-[700px] mx-auto lg:mx-0">
						<SectionTitle className={`text-primaryLight mb-[12px]`}>
							{pricing?.title}
						</SectionTitle>
						<p className="text-[20px] leading-[26px] text-center lg:text-left text-primaryLight opacity-50">
							{pricing?.description}
						</p>
					</div>
					<div
						role="group"
						aria-label="Currency"
						className="self-center lg:self-auto flex p-[4px] bg-[#141416] rounded-[8px] shrink-0">
						{(["usd", "inr"] as Currency[]).map((c) => (
							<button
								key={c}
								type="button"
								aria-pressed={currency === c}
								onClick={() => setCurrency(c)}
								className={`font-poppins font-[600] text-[15px] leading-[20px] px-[18px] h-[40px] rounded-[6px] transition-all duration-300 ease-in-out ${
									currency === c
										? "bg-primaryBlue text-primaryLight"
										: "text-primaryLight/60 hover:text-primaryLight"
								}`}>
								{c === "usd" ? "USD $" : "INR ₹"}
							</button>
						))}
					</div>
				</div>

				{pricing?.founding_note && (
					<p className="mb-[24px] px-[20px] py-[14px] rounded-[8px] border border-primaryBlue/50 bg-primaryBlue/10 text-primaryLight text-[18px] leading-[24px] text-center lg:text-left">
						{pricing.founding_note}
					</p>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{pricing?.packages?.filter((pkg: any) => !pkg.addon).map((pkg: any) => (
						<article
							key={pkg.name}
							className={`relative flex flex-col rounded-[8px] overflow-hidden px-[24px] pt-[40px] pb-[28px] ${
								pkg.highlight
									? "bg-cardBg"
									: "bg-[#141416]"
							}`}>
							<span className="absolute w-full h-[10px] top-0 right-0 left-0 bg-[linear-gradient(91.94deg,#336CFB_0%,#11C3C1_100%)]" />
							{pkg.highlight && (
								<span className="absolute top-[22px] right-[20px] font-poppins font-[600] text-[12px] leading-[16px] uppercase tracking-[0.1em] bg-primaryLight text-primaryDark rounded-[4px] px-[8px] py-[4px]">
									Most popular
								</span>
							)}
							<h3 className="text-primaryLight font-[500] text-[26px] leading-[32px] mb-[6px]">
								{pkg.name}
							</h3>
							<p className="text-primaryLight/60 text-[17px] leading-[22px] mb-[22px]">
								{pkg.tagline}
							</p>
							<p className="text-primaryLight mb-[22px]">
								{pkg.prefix && (
									<span className="text-[16px] text-primaryLight/60 mr-[6px]">
										{pkg.prefix}
									</span>
								)}
								<span className="font-poppins font-[600] text-[40px] leading-[44px]">
									{formatPrice(pkg[currency], currency)}
								</span>
								<span className="text-[16px] text-primaryLight/60 ml-[6px]">
									{pkg.period}
								</span>
							</p>
							<ul className="flex-1 mb-[26px]">
								{pkg.features?.map((f: string) => (
									<li
										key={f}
										className="flex gap-[10px] text-primaryLight/85 text-[17px] leading-[22px] py-[8px] border-b border-primaryLight/10 last:border-0">
										<span
											aria-hidden
											className="text-[#11C3C1] shrink-0">
											✓
										</span>
										{f}
									</li>
								))}
							</ul>
							<Link
								href={bookingLink}
								target="_blank"
								className={`flex items-center justify-center rounded-[8px] text-[18px] leading-[22px] h-[48px] border-[2px] border-solid transition-all duration-300 ease-in-out ${
									pkg.highlight
										? "bg-primaryBlue border-primaryBlue text-primaryLight hover:opacity-75"
										: "border-primaryLight/40 text-primaryLight hover:border-primaryLight"
								}`}>
								Book a free call
							</Link>
						</article>
					))}
				</div>

				{pricing?.packages
					?.filter((pkg: any) => pkg.addon)
					.map((pkg: any) => (
						<article
							key={pkg.name}
							className="mt-[24px] relative rounded-[8px] overflow-hidden bg-[#141416] px-[24px] pt-[36px] pb-[28px] lg:px-[40px] lg:py-[32px] flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[40px]">
							<span className="absolute w-full h-[10px] top-0 right-0 left-0 bg-[linear-gradient(91.94deg,#456FF1_0%,#EA88CE_100%)]" />
							<div className="lg:w-[30%] shrink-0">
								<p className="font-poppins text-primaryBlue font-[600] uppercase tracking-[0.12em] text-[13px] leading-[18px] mb-[8px]">
									Add-on
								</p>
								<h3 className="text-primaryLight font-[500] text-[26px] leading-[32px] mb-[6px]">
									{pkg.name}
								</h3>
								<p className="text-primaryLight/60 text-[17px] leading-[22px]">
									{pkg.tagline}
								</p>
							</div>
							<ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-[24px]">
								{pkg.features?.map((f: string) => (
									<li
										key={f}
										className="flex gap-[10px] text-primaryLight/85 text-[17px] leading-[22px] py-[8px]">
										<span
											aria-hidden
											className="text-[#11C3C1] shrink-0">
											✓
										</span>
										{f}
									</li>
								))}
							</ul>
							<div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-[14px]">
								<p className="text-primaryLight">
									<span className="font-poppins font-[600] text-[34px] leading-[40px]">
										{formatPrice(pkg[currency], currency)}
									</span>
									<span className="text-[16px] text-primaryLight/60 ml-[6px]">
										{pkg.period}
									</span>
								</p>
								<Link
									href={bookingLink}
									target="_blank"
									className="flex items-center justify-center rounded-[8px] text-[18px] leading-[22px] h-[48px] px-[24px] border-[2px] border-solid border-primaryLight/40 text-primaryLight hover:border-primaryLight transition-all duration-300 ease-in-out">
									Add to your website
								</Link>
							</div>
						</article>
					))}

				{templatePack && (
					<div className="mt-[50px] lg:mt-[80px] relative flex flex-col lg:flex-row lg:items-center gap-[28px] lg:gap-[56px]">
						<div className="relative w-full lg:w-[48%] aspect-[4/3] shrink-0 rounded-[8px] overflow-hidden">
							<ImageLoader
								src={templatePack.image}
								fill
								sizes="(max-width: 1024px) 88vw, 600px"
								alt="Fitness Coach Bold template pack preview"
								className="object-cover"
							/>
						</div>
						<div className="flex flex-col justify-center text-center lg:text-left">
							<p className="font-poppins text-primaryBlue font-[600] uppercase tracking-[0.12em] text-[14px] leading-[20px] mb-[12px]">
								{templatePack.eyebrow}
							</p>
							<h3 className="text-primaryLight font-[500] text-[28px] leading-[34px] lg:text-[34px] lg:leading-[42px] mb-[14px]">
								{templatePack.title}
							</h3>
							<p className="text-primaryLight/60 text-[18px] leading-[24px] mb-[24px]">
								{templatePack.description}
							</p>
							<p className="text-primaryLight mb-[24px]">
								<span className="font-poppins font-[600] text-[40px] leading-[44px]">
									{formatPrice(templatePack[currency], currency)}
								</span>
								<span className="text-[16px] text-primaryLight/60 ml-[8px]">
									one-time
								</span>
							</p>
							{templatePack.link ? (
								<Link
									href={templatePack.link}
									target="_blank"
									className="self-center lg:self-start bg-primaryBlue border-[2px] border-solid border-primaryBlue hover:opacity-75 flex items-center justify-center rounded-[8px] text-primaryLight text-[20px] leading-[24px] px-[24px] h-[52px] transition-all duration-300 ease-in-out">
									{templatePack.cta_label}
								</Link>
							) : (
								<span className="self-center lg:self-start flex items-center justify-center rounded-[8px] border-[2px] border-solid border-primaryLight/20 text-primaryLight/50 text-[20px] leading-[24px] px-[24px] h-[52px]">
									{templatePack.soon_label}
								</span>
							)}
						</div>
					</div>
				)}
			</SectionLayout>
		</section>
	);
};

export default CoachPricing;
