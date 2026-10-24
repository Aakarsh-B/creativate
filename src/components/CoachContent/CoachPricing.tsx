"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import SectionLabel from "@/components/common/SectionLabel";
import ImageLoader from "@/utils/ImageLoader";

type Currency = "usd" | "inr";

const formatPrice = (amount: number, currency: Currency) =>
	currency === "usd"
		? `$${amount.toLocaleString("en-US")}`
		: `₹${amount.toLocaleString("en-IN")}`;

const CoachPricing = ({ pricing, templatePack, bookingLink }: any) => {
	const [currency, setCurrency] = useState<Currency>("usd");

	return (
		<section className="relative bg-primaryDark py-[80px] lg:py-[140px]">
			<span
				id="pricing"
				className="targetCode top-[-90px]"
			/>
			<SectionLayout className={``}>
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px] mb-[40px] lg:mb-[56px]">
					<div className="max-w-[700px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start gap-[20px]">
						<SectionLabel>Pricing</SectionLabel>
						<SectionTitle className={`text-primaryLight`}>
							{pricing?.title}
						</SectionTitle>
						<p className="text-[17px] leading-[1.55] text-center lg:text-left text-primaryLight/60">
							{pricing?.description}
						</p>
					</div>
					<div
						role="group"
						aria-label="Currency"
						className="self-center lg:self-auto flex p-[4px] bg-surface border border-white/[0.08] rounded-full shrink-0">
						{(["usd", "inr"] as Currency[]).map((c) => (
							<button
								key={c}
								type="button"
								aria-pressed={currency === c}
								onClick={() => setCurrency(c)}
								className={`font-[600] text-[14px] leading-[20px] px-[18px] h-[40px] rounded-full transition-all duration-300 ease-in-out ${
									currency === c
										? "bg-lime text-primaryDark"
										: "text-primaryLight/60 hover:text-primaryLight"
								}`}>
								{c === "usd" ? "USD $" : "INR ₹"}
							</button>
						))}
					</div>
				</div>

				{pricing?.founding_note && (
					<p className="mb-[16px] px-[20px] py-[14px] rounded-[16px] border border-lime/30 bg-lime/[0.06] text-primaryLight text-[16px] leading-[24px] text-center lg:text-left">
						{pricing.founding_note}
					</p>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
					{pricing?.packages?.filter((pkg: any) => !pkg.addon).map((pkg: any) => (
						<article
							key={pkg.name}
							className={`relative flex flex-col rounded-[24px] overflow-hidden p-[28px] lg:p-[32px] border ${
								pkg.highlight
									? "bg-primaryBlue border-primaryBlue"
									: "bg-surface border-white/[0.08]"
							}`}>
							{pkg.highlight && (
								<span className="absolute top-[24px] right-[24px] font-[600] text-[11px] leading-[16px] uppercase tracking-[0.12em] bg-lime text-primaryDark rounded-full px-[10px] py-[5px]">
									Most popular
								</span>
							)}
							<h3 className="text-primaryLight font-[500] text-[26px] leading-[32px] tracking-[-0.025em] mb-[6px] pr-[110px]">
								{pkg.name}
							</h3>
							<p className="text-primaryLight/65 text-[15px] leading-[22px] mb-[24px]">
								{pkg.tagline}
							</p>
							<p className="text-primaryLight mb-[22px]">
								{pkg.prefix && (
									<span className="text-[16px] text-primaryLight/60 mr-[6px]">
										{pkg.prefix}
									</span>
								)}
								<span className="font-[500] tracking-[-0.04em] text-[48px] leading-[1]">
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
										className="flex gap-[10px] text-primaryLight/85 text-[15px] leading-[22px] py-[10px] border-b border-primaryLight/10 last:border-0">
										<span
											aria-hidden
											className="text-lime shrink-0">
											✓
										</span>
										{f}
									</li>
								))}
							</ul>
							<Link
								href={bookingLink}
								target="_blank"
								className={`flex items-center justify-center rounded-full text-[15px] font-[600] h-[52px] border transition-all duration-300 ease-in-out ${
									pkg.highlight
										? "bg-lime border-lime text-primaryDark hover:bg-primaryLight hover:border-primaryLight"
										: "border-white/15 text-primaryLight hover:border-white/40 hover:bg-white/[0.06]"
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
							className="mt-[16px] relative rounded-[24px] overflow-hidden bg-surface border border-white/[0.08] p-[28px] lg:px-[40px] lg:py-[32px] flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[40px]">
							<div className="lg:w-[30%] shrink-0">
								<p className="text-lime font-[500] uppercase tracking-[0.14em] text-[12px] leading-[18px] mb-[10px]">
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
										className="flex gap-[10px] text-primaryLight/85 text-[15px] leading-[22px] py-[8px]">
										<span
											aria-hidden
											className="text-lime shrink-0">
											✓
										</span>
										{f}
									</li>
								))}
							</ul>
							<div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-[14px]">
								<p className="text-primaryLight">
									<span className="font-[500] tracking-[-0.04em] text-[40px] leading-[1]">
										{formatPrice(pkg[currency], currency)}
									</span>
									<span className="text-[16px] text-primaryLight/60 ml-[6px]">
										{pkg.period}
									</span>
								</p>
								<Link
									href={bookingLink}
									target="_blank"
									className="flex items-center justify-center rounded-full text-[15px] font-[600] h-[52px] px-[24px] border border-white/15 text-primaryLight hover:border-white/40 hover:bg-white/[0.06] transition-all duration-300 ease-in-out">
									Add to your website
								</Link>
							</div>
						</article>
					))}

				{templatePack && (
					<div className="mt-[64px] lg:mt-[100px] relative flex flex-col lg:flex-row lg:items-center gap-[28px] lg:gap-[56px] rounded-[28px] border border-white/[0.08] bg-surface p-[16px] lg:p-[24px] lg:pr-[56px]">
						<div className="relative w-full lg:w-[48%] aspect-[4/3] shrink-0 rounded-[18px] overflow-hidden">
							<ImageLoader
								src={templatePack.image}
								fill
								sizes="(max-width: 1024px) 88vw, 600px"
								alt="Fitness Coach Bold template pack preview"
								className="object-cover"
							/>
						</div>
						<div className="flex flex-col justify-center text-center lg:text-left px-[8px] pb-[16px] lg:p-0">
							<p className="text-lime font-[500] uppercase tracking-[0.14em] text-[12px] leading-[18px] mb-[12px]">
								{templatePack.eyebrow}
							</p>
							<h3 className="text-primaryLight font-[500] text-[30px] leading-[1.1] tracking-[-0.03em] lg:text-[40px] mb-[14px]">
								{templatePack.title}
							</h3>
							<p className="text-primaryLight/60 text-[16px] leading-[1.55] mb-[24px]">
								{templatePack.description}
							</p>
							<p className="text-primaryLight mb-[24px]">
								<span className="font-[500] tracking-[-0.04em] text-[48px] leading-[1]">
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
									className="self-center lg:self-start bg-lime hover:bg-primaryLight flex items-center justify-center rounded-full text-primaryDark text-[16px] font-[600] px-[26px] h-[56px] transition-all duration-300 ease-in-out">
									{templatePack.cta_label}
								</Link>
							) : (
								<span className="self-center lg:self-start flex items-center justify-center rounded-full border border-white/15 text-primaryLight/50 text-[16px] px-[26px] h-[56px]">
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
