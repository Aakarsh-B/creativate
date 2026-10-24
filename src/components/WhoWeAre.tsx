import SectionLayout from "@/templates/SectionLayout";
import SectionLabel from "@/components/common/SectionLabel";
import AnimateInView from "@/templates/animateInView";
import Link from "next/link";

const WhoWeAre = ({ data }: { data: any }) => {
	return (
		<section className="relative bg-primaryDark py-[80px] lg:py-[140px]">
			<SectionLayout className="grid grid-cols-1 gap-[32px] lg:grid-cols-12 lg:gap-[40px]">
				<div className="flex justify-center lg:col-span-3 lg:justify-start">
					<SectionLabel index="01">{data?.title}</SectionLabel>
				</div>
				<div className="lg:col-span-9">
					<AnimateInView
						reset={false}
						animation={"translateFromBottom"}>
						<p className="text-center text-[24px] leading-[1.3] font-[400] tracking-[-0.02em] text-primaryLight md:text-[30px] lg:text-left lg:text-[36px] lg:leading-[1.25]">
							{data?.description}
						</p>
					</AnimateInView>
					<div className="mt-[40px] flex justify-center lg:justify-start">
						<Link
							href={`${data?.button_link ?? "#"}`}
							className="group inline-flex items-center gap-[14px] text-[17px] font-[500] text-primaryLight">
							<span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/20 transition-all duration-500 ease-expo group-hover:border-lime group-hover:bg-lime group-hover:text-primaryDark group-hover:rotate-45">
								↗
							</span>
							<span className="border-b border-white/20 pb-[2px] transition-colors duration-300 group-hover:border-lime">
								{data?.button_text}
							</span>
						</Link>
					</div>
				</div>
			</SectionLayout>
		</section>
	);
};

export default WhoWeAre;
