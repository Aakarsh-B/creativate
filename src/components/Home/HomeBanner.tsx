import LogoSlider from "../common/LogoSlider";
import SectionLayout from "@/templates/SectionLayout";
import Link from "next/link";
import StackSlider from "../common/StackSlider";
import AnimateInView from "@/templates/animateInView";

const HomeBanner = ({ data, logoSlider }: { data: any; logoSlider: any }) => {
	return (
		<section
			className={`pb-[50px] pt-[110px] md:pb-[60px] md:pt-[100px] xl:pt-[190px] xl:pb-[130px] bg-primaryDark`}>
			<SectionLayout
				className={`flex items-center flex-col lg:flex-row justify-between`}>
				<div className="w-full max-w-[600px] lg:w-[60%] lg:pr-[20px] max-lg:mb-[40px]">
					{data?.key_phrase && (
						<AnimateInView
							reset={false}
							animation={"translateFromBottom"}
							className={`w-full mx-auto mb-[30px]`}>
							<p className="titleFont text-[16px] max-lg:text-center leading-[20px] md:text-[20px] md:leading-[24px] font-[400] text-transparent bg-[linear-gradient(90deg,_#0FC7BF_0%,_#2B66DE_100%)] bg-clip-text mb-[8px] md:mb-[14px] 2xl:mb-[18px]">
								{data?.key_phrase}
							</p>
						</AnimateInView>
					)}
					<AnimateInView
						reset={false}
						animation={"translateFromBottom"}
						className={`w-full mx-auto mb-[30px]`}>
						<p className="h1 text-[32px] leading-[40px] text-center text-primaryLight font-[500] lg:text-[40px] lg:leading-[48px] lg:text-left">
							{data?.title}
						</p>
					</AnimateInView>
					<AnimateInView
						reset={false}
						animation={"translateFromBottom"}
						className={`w-full mx-auto mb-[30px] opacity-50`}>
						<p className="text-[16px] leading-[20px] text-center text-primaryLight font-[500] lg:text-[18px] lg:leading-[24px] lg:text-left">
							{data?.description}
						</p>
					</AnimateInView>
					<AnimateInView
						reset={false}
						animation={"translateFromBottom"}
						className={`block lg:inline-block text-center lg:text-left mb-[24px] md:mb-[28px] 2xl:mb-[32px]`}>
						<Link
							href={`${data?.button_link ?? "#"}`}
							className={`inline-block text-[24px] leading-[28px] lg:text-[20px] lg:leading-[24px] font-[400] text-center max-h-[80px] rounded-[8px] border border-solid border-primaryBlue w-full sm:w-auto px-[12px] py-[24px] sm:py-[16px] sm:px-[32px] bg-primaryBlue text-primaryLight hover:text-primaryBlue hover:bg-primaryLight break-words max-lg:mx-auto transition-all duration-300 ease-in-out`}>
							{data?.button_text}
						</Link>
					</AnimateInView>
					<div className="h-[46px] relative mb-[40px] lg:mb-0">
						<span className="h-[45px] w-[50px] absolute left-[-4px] top-0 blur-[2px] z-[1] logoSliderShade left" />
						<LogoSlider
							desktopView={4}
							mobileView={3}
							logoSlider={logoSlider}
						/>
						<span className="h-[45px] w-[50px] absolute right-[-4px] top-0 blur-[2px] z-[1] logoSliderShade right" />
						<span />
					</div>
				</div>
				<div className="w-full max-w-[520px] lg:w-[40%]">
					<StackSlider sliderList={data?.banner_slider} />
				</div>
			</SectionLayout>
		</section>
	);
};

export default HomeBanner;
