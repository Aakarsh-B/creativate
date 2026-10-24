"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import ImageLoader from "@/utils/ImageLoader";

// Numbered service rows. Desktop: hovering a row floats its project image.
// Mobile: tapping a row expands it with the image inline.
const ServicesList = ({ data, sectionId }: any) => {
	const [open, setOpen] = useState(0);
	const items = data?.work_list ?? [];

	return (
		<section className="relative bg-primaryDark py-[80px] lg:py-[140px]">
			{sectionId && (
				<span
					id={sectionId}
					className="targetCode"
				/>
			)}
			<SectionLayout>
				<div className="mb-[48px] grid grid-cols-1 gap-[24px] lg:mb-[72px] lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-7">
						<SectionTitle className="text-primaryLight">
							{data?.title}
						</SectionTitle>
					</div>
					<p className="text-center text-[17px] leading-[1.55] text-primaryLight/60 lg:col-span-5 lg:text-left">
						{data?.description}
					</p>
				</div>

				<ul className="border-t border-white/10">
					{items.map((item: any, index: number) => {
						const isOpen = open === index;
						return (
							<li
								key={index}
								className="group relative border-b border-white/10">
								<button
									type="button"
									onClick={() => setOpen(isOpen ? -1 : index)}
									aria-expanded={isOpen}
									className="grid w-full grid-cols-[44px_1fr_auto] items-center gap-[12px] py-[24px] text-left md:grid-cols-[48px_1fr_1fr_auto] md:gap-[20px] lg:grid-cols-[80px_1fr_1fr_auto] lg:gap-[24px] lg:py-[36px]">
									<span className="text-[14px] font-[500] text-muted tabular-nums">
										0{index + 1}
									</span>
									<span className="text-[26px] leading-[1.05] font-[500] tracking-[-0.03em] text-primaryLight transition-all duration-500 ease-expo md:text-[36px] lg:text-[48px] lg:group-hover:translate-x-[12px] lg:group-hover:text-lime">
										{item?.title}
									</span>
									<span
										className="hidden text-[16px] leading-[1.5] text-primaryLight/55 md:block"
										dangerouslySetInnerHTML={{ __html: item?.description }}
									/>
									<span
										className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/15 text-primaryLight transition-all duration-500 ease-expo lg:group-hover:border-lime lg:group-hover:bg-lime lg:group-hover:text-primaryDark ${
											isOpen ? "rotate-45 max-lg:bg-lime max-lg:text-primaryDark max-lg:border-lime" : ""
										}`}>
										+
									</span>
								</button>

								{/* Desktop hover preview */}
								<div className="pointer-events-none absolute right-[90px] top-1/2 z-[2] hidden h-[200px] w-[280px] -translate-y-1/2 rotate-[-4deg] scale-90 overflow-hidden rounded-[18px] opacity-0 shadow-2xl transition-all duration-500 ease-expo lg:block lg:group-hover:rotate-[3deg] lg:group-hover:scale-100 lg:group-hover:opacity-100 xl:right-[120px]">
									<ImageLoader
										src={item.project_image}
										alt={item.project_image_alt}
										fill
										sizes="280px"
										className="object-cover"
									/>
								</div>

								{/* Expanded content */}
								<div
									className={`grid transition-all duration-500 ease-expo ${
										isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
									} lg:hidden`}>
									<div className="overflow-hidden">
										<p
											className="pb-[16px] text-[16px] leading-[1.5] text-primaryLight/60 md:hidden"
											dangerouslySetInnerHTML={{ __html: item?.description }}
										/>
										<Link
											href={item?.project_link ?? "#"}
											className="relative mb-[24px] block aspect-[16/10] overflow-hidden rounded-[18px]">
											<ImageLoader
												src={item.project_image}
												alt={item.project_image_alt}
												fill
												sizes="100vw"
												className="object-cover"
											/>
											<span className="absolute bottom-[12px] left-[12px] rounded-full bg-primaryDark/80 px-[14px] py-[8px] text-[13px] text-primaryLight backdrop-blur">
												{item?.project_title} · {item?.link_label} ↗
											</span>
										</Link>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</SectionLayout>
		</section>
	);
};

export default ServicesList;
