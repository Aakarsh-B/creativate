import SectionLayout from "@/templates/SectionLayout";
import Link from "next/link";

const CoachBanner = ({ data }: any) => {
	return (
		<SectionLayout className={``}>
			<div
				className={`px-[20px] py-[37px] lg:px-[80px] lg:py-[70px] bg-[#191B35] rounded-[8px] overflow-hidden relative`}>
				<span
					className={`absolute w-full h-[15px] top-0 right-0 left-0 bg-[linear-gradient(91.94deg,#336CFB_0%,#11C3C1_100%)]`}
				/>
				<div className="max-w-[820px] mx-auto lg:ml-0 text-center lg:text-left">
					<p className="font-poppins text-primaryBlue font-[600] uppercase tracking-[0.12em] text-[14px] leading-[20px] mb-[16px]">
						{data?.eyebrow}
					</p>
					<h1
						className={`font-[500] text-primaryLight text-[34px] leading-[40px] mb-[18px] lg:text-[52px] lg:leading-[60px]`}>
						{data?.title}
					</h1>
					<p
						className={`text-primaryLight/70 font-[400] text-[20px] leading-[26px] lg:text-[22px] lg:leading-[30px] mb-[32px]`}>
						{data?.description}
					</p>
					<div className="flex flex-col sm:flex-row gap-[16px] justify-center lg:justify-start">
						<Link
							href={data?.primary_cta?.link}
							target="_blank"
							className="bg-primaryBlue border-[2px] border-solid border-primaryBlue hover:opacity-75 flex items-center justify-center rounded-[8px] text-primaryLight text-[20px] leading-[24px] px-[24px] h-[52px] transition-all duration-300 ease-in-out">
							{data?.primary_cta?.label}
						</Link>
						<Link
							href={data?.secondary_cta?.link}
							className="border-[2px] border-solid border-primaryLight/40 hover:border-primaryLight flex items-center justify-center rounded-[8px] text-primaryLight text-[20px] leading-[24px] px-[24px] h-[52px] transition-all duration-300 ease-in-out">
							{data?.secondary_cta?.label}
						</Link>
					</div>
				</div>
			</div>
		</SectionLayout>
	);
};

export default CoachBanner;
