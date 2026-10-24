import SectionLayout from "@/templates/SectionLayout";
import AnimateInView from "@/templates/animateInView";
import AccentText from "@/utils/accentText";

// Inner-page hero: oversized title with intro copy alongside
const DescBannerWithImage = ({ data }: any) => {
	return (
		<SectionLayout className="relative">
			<div className="pointer-events-none absolute -top-[200px] left-[10%] h-[400px] w-[min(600px,80vw)] rounded-full bg-primaryBlue/20 blur-[140px]" />
			<div className="relative grid grid-cols-1 gap-[24px] border-b border-white/10 pb-[40px] lg:grid-cols-12 lg:items-end lg:pb-[64px]">
				<AnimateInView
					reset={false}
					animation={"translateFromBottom"}
					className="lg:col-span-8">
					<h1 className="text-center text-[52px] leading-[0.95] font-[500] tracking-[-0.045em] text-primaryLight md:text-[80px] lg:text-left lg:text-[112px]">
						<AccentText text={data?.title} />
					</h1>
				</AnimateInView>
				<AnimateInView
					reset={false}
					animation={"translateFromBottom"}
					delay={0.1}
					className="lg:col-span-4">
					<p className="text-center text-[17px] leading-[1.55] text-primaryLight/60 lg:text-left">
						{data?.description}
					</p>
				</AnimateInView>
			</div>
		</SectionLayout>
	);
};

export default DescBannerWithImage;
