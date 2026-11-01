"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import ImageLoader from "@/utils/ImageLoader";

const SectionHead = ({ data }: any) => (
	<div className="mb-[40px] grid grid-cols-1 gap-[24px] lg:mb-[56px] lg:grid-cols-12 lg:items-end">
		<div className="lg:col-span-7">
			<SectionTitle className="text-primaryLight">{data?.title}</SectionTitle>
		</div>
		<p className="text-center text-[17px] leading-[1.55] text-primaryLight/60 lg:col-span-5 lg:text-left">
			{data?.description}
		</p>
	</div>
);

const Wrap = ({ children }: any) => (
	<section className="relative bg-primaryDark py-[64px] lg:py-[100px]">
		<SectionLayout>{children}</SectionLayout>
	</section>
);

// Version A: list on the left, one image panel on the right that changes with
// the active service. Section height never changes.
export const ServicesSplit = ({ data }: any) => {
	const [active, setActive] = useState(0);
	const items = data?.work_list ?? [];
	const current = items[active];

	return (
		<Wrap>
			<SectionHead data={data} />
			<div className="grid grid-cols-1 gap-[24px] lg:grid-cols-12 lg:gap-[48px]">
				<ul className="border-t border-white/10 lg:col-span-6">
					{items.map((item: any, index: number) => {
						const isActive = active === index;
						return (
							<li
								key={index}
								className="border-b border-white/10">
								<button
									type="button"
									aria-pressed={isActive}
									onClick={() => setActive(index)}
									onMouseEnter={() => setActive(index)}
									className="grid w-full grid-cols-[36px_1fr] gap-[8px] py-[20px] text-left lg:py-[24px]">
									<span className="pt-[8px] text-[14px] font-[500] text-muted tabular-nums">
										0{index + 1}
									</span>
									<span>
										<span
											className={`block text-[26px] leading-[1.1] font-[500] tracking-[-0.03em] transition-colors duration-300 lg:text-[34px] ${
												isActive ? "text-lime" : "text-primaryLight/60"
											}`}>
											{item?.title}
										</span>
										<span
											className={`grid transition-all duration-500 ease-expo ${
												isActive
													? "mt-[8px] grid-rows-[1fr] opacity-100"
													: "grid-rows-[0fr] opacity-0"
											}`}>
											<span
												className="overflow-hidden text-[16px] leading-[1.5] text-primaryLight/60"
												dangerouslySetInnerHTML={{ __html: item?.description }}
											/>
										</span>
									</span>
								</button>
							</li>
						);
					})}
				</ul>
				<Link
					href={current?.project_link ?? "#"}
					className="group relative order-first block aspect-[16/10] overflow-hidden rounded-[24px] bg-surface lg:order-none lg:col-span-6 lg:aspect-auto lg:min-h-[420px]">
					{items.map((item: any, index: number) => (
						<ImageLoader
							key={index}
							src={item.project_image}
							alt={item.project_image_alt}
							fill
							sizes="(max-width: 1024px) 92vw, 640px"
							className={`object-cover object-top transition-opacity duration-500 ${
								active === index ? "opacity-100" : "opacity-0"
							}`}
						/>
					))}
					<span className="absolute bottom-[14px] left-[14px] rounded-full bg-primaryDark/80 px-[14px] py-[8px] text-[13px] text-primaryLight backdrop-blur">
						{current?.project_title} · {current?.link_label} ↗
					</span>
				</Link>
			</div>
		</Wrap>
	);
};

// Version B: all four services visible at once as cards, nothing to open.
export const ServicesCards = ({ data }: any) => {
	const items = data?.work_list ?? [];

	return (
		<Wrap>
			<SectionHead data={data} />
			<div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 sm:gap-[16px] lg:grid-cols-4">
				{items.map((item: any, index: number) => (
					<Link
						key={index}
						href={item?.project_link ?? "#"}
						className="group flex overflow-hidden rounded-[20px] border border-white/[0.08] bg-surface transition-colors duration-300 hover:border-lime/40 sm:flex-col sm:rounded-[24px]">
						<div className="relative w-[112px] shrink-0 overflow-hidden bg-surfaceRaised sm:aspect-[16/10] sm:w-auto">
							<ImageLoader
								src={item.project_image}
								alt={item.project_image_alt}
								fill
								sizes="(max-width: 640px) 112px, (max-width: 1024px) 46vw, 300px"
								className="object-cover object-top transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.04]"
							/>
						</div>
						<div className="flex flex-1 flex-col p-[16px] sm:p-[20px] lg:p-[24px]">
							<h3 className="mb-[6px] text-[20px] leading-[1.15] sm:mb-[8px] sm:text-[22px] font-[500] tracking-[-0.025em] text-primaryLight transition-colors duration-300 group-hover:text-lime">
								{item?.title}
							</h3>
							<p
								className="text-[15px] leading-[1.5] text-primaryLight/55"
								dangerouslySetInnerHTML={{ __html: item?.description }}
							/>
						</div>
					</Link>
				))}
			</div>
		</Wrap>
	);
};

// Version C: compact rows with a small thumbnail in each.
export const ServicesRows = ({ data }: any) => {
	const items = data?.work_list ?? [];

	return (
		<Wrap>
			<SectionHead data={data} />
			<ul className="border-t border-white/10">
				{items.map((item: any, index: number) => (
					<li
						key={index}
						className="border-b border-white/10">
						<Link
							href={item?.project_link ?? "#"}
							className="group grid grid-cols-[1fr_96px] items-center gap-[16px] py-[14px] md:grid-cols-[40px_1fr_1fr_96px_44px] md:gap-[20px] lg:grid-cols-[56px_1.2fr_1fr_112px_44px] lg:gap-[24px]">
							<span className="hidden text-[14px] font-[500] text-muted tabular-nums md:block">
								0{index + 1}
							</span>
							<div className="md:contents">
								<h3 className="text-[24px] leading-[1.1] font-[500] tracking-[-0.03em] text-primaryLight transition-colors duration-300 group-hover:text-lime md:text-[28px] lg:text-[36px]">
									{item?.title}
								</h3>
								<p
									className="mt-[6px] text-[15px] leading-[1.45] text-primaryLight/55 md:mt-0"
									dangerouslySetInnerHTML={{ __html: item?.description }}
								/>
							</div>
							<div className="relative aspect-[3/2] overflow-hidden rounded-[10px] bg-surfaceRaised">
								<ImageLoader
									src={item.project_image}
									alt={item.project_image_alt}
									fill
									sizes="112px"
									className="object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-[1.06]"
								/>
							</div>
							<span className="hidden h-[44px] w-[44px] items-center justify-center rounded-full border border-white/15 text-primaryLight transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-primaryDark md:flex">
								↗
							</span>
						</Link>
					</li>
				))}
			</ul>
		</Wrap>
	);
};
