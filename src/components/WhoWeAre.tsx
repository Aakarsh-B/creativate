import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import ImageLoader from "@/utils/ImageLoader";

const WhoWeAre = ({ data }: { data: any }) => {
	const CtaButton = ({ text, link }: { text: string; link: string }) => {
		return (
			<div className="block text-center lg:text-left">
				<Link
					href={`${link ?? "#"}`}
					className={`inline-block w-full sm:w-auto text-[24px] leading-[30px] font-[400] text-center max-h-[80px] rounded-[8px] border border-solid border-primaryLight px-[32px] py-[16px] bg-primaryLight text-primaryBlue break-words lg:mx-auto`}>
					{text}
				</Link>
			</div>
		);
	};
	return (
		<section
			className={`py-[50px] lg:py-[100px] 2xl:pt-[100px] bg-primaryBlue relative overflow-hidden`}>
			<SectionLayout
				className={`flex flex-col lg:flex-row justify-between z-10`}>
				<div className="w-full max-md:max-w-[350px] max-md:mx-auto lg:w-[40%] text-center mb-[16px] md:mb-[32px] lg:mb-0 lg:flex lg:flex-col justify-between">
					<SectionTitle className={`text-primaryLight`}>
						{data?.title}
					</SectionTitle>
					<div className="max-lg:hidden">
						<CtaButton
							text={data?.button_text}
							link={data?.button_link}
						/>
					</div>
				</div>
				<div className="w-full mx-auto max-w-[600px] lg:ml-auto lg:mr-0 lg:max-w-[750px] lg:w-[60%]">
					<p className="text-[20px] leading-[24px] text-primaryLight font-[400] text-center lg:text-[26px] lg:leading-[32px] lg:text-left transition-all duration-300 ease-in-out mb-[16px] md:mb-[32px] lg:mb-0">
						{data?.description}
					</p>
					<div className="lg:hidden">
						<CtaButton
							text={data?.button_text}
							link={data?.button_link}
						/>
					</div>
				</div>
			</SectionLayout>
			<div className="hidden lg:block absolute left-[-620px] bottom-[-300px] w-[1133px] h-[611px] rotate-180 z-0">
				<ImageLoader
					src={"/images/who-we-are-bg.png"}
					fill
					alt="background-image"
				/>
			</div>
		</section>
	);
};

export default WhoWeAre;
