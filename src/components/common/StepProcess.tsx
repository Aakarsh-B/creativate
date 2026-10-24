import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import SectionLabel from "@/components/common/SectionLabel";
import AnimateInView from "@/templates/animateInView";
import React from "react";

interface ProcessItem {
	title: string;
	description: string;
}

const StepProcess = ({ data, sectionId }: any) => {
	const processItems: ProcessItem[] = Object.values(data?.process_item_list ?? {});

	return (
		<section className={`relative bg-primaryDark py-[80px] lg:py-[140px]`}>
			{sectionId && (
				<span
					id={sectionId}
					className="targetCode"
				/>
			)}
			<SectionLayout>
				<div className="mb-[48px] flex flex-col items-center gap-[20px] lg:mb-[72px] lg:items-start">
					<SectionLabel index="03">How we work</SectionLabel>
					<SectionTitle className={`text-primaryLight max-w-[760px]`}>
						{data?.title}
					</SectionTitle>
				</div>
				{processItems.length > 0 && (
					<div className="grid grid-cols-1 gap-[12px] md:grid-cols-3 md:gap-[16px]">
						{processItems.map((item, index) => (
							<AnimateInView
								key={index}
								reset={false}
								animation={"translateFromBottom"}
								delay={index * 0.08}
								className="h-full">
								<div className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/[0.08] bg-surface p-[28px] transition-colors duration-500 ease-expo hover:border-lime/40 lg:min-h-[380px] lg:p-[36px]">
									<span className="absolute -right-[10px] -top-[40px] select-none text-[180px] leading-none font-[600] tracking-[-0.06em] text-white/[0.04] transition-colors duration-500 group-hover:text-lime/10">
										{index + 1}
									</span>
									<span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/[0.06] text-[14px] font-[600] text-lime">
										0{index + 1}
									</span>
									<div className="relative">
										<h3 className="mb-[12px] text-[28px] leading-[1.1] font-[500] tracking-[-0.03em] text-primaryLight lg:text-[34px]">
											{item?.title}
										</h3>
										<p className="whitespace-pre-line text-[16px] leading-[1.55] text-primaryLight/60">
											{item?.description}
										</p>
									</div>
								</div>
							</AnimateInView>
						))}
					</div>
				)}
			</SectionLayout>
		</section>
	);
};

export default StepProcess;
