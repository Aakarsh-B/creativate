import SectionLayout from "@/templates/SectionLayout";
import ImageLoader from "@/utils/ImageLoader";

const DescBannerWithImage = ({ data }: any) => {
	return (
		<SectionLayout className={``}>
			<div
				className={`px-[20px] py-[37px] lg:px-[80px] lg:py-[60px] bg-[#191B35] rounded-[8px] overflow-hidden relative`}>
				<span
					className={`absolute w-full h-[15px] top-0 right-0 left-0 bg-[linear-gradient(91.94deg,#336CFB_0%,#11C3C1_100%)]`}
				/>
				<div className="max-w-[660px] ml-0 mr-auto text-center lg:text-left z-[1]">
					<h2
						className={`font-[500] text-primaryLight text-[32px] leading-[38px] mb-[14px] lg:text-[40px] lg:leading-[48px] lg:mb-[14px]`}>
						{data?.title}
					</h2>
					<p
						className={`text-primaryLight font-[400] text-[20px] leading-[24px]`}>
						{data?.description}
					</p>
				</div>
				<div className="absolute lg:w-[35%] lg:max-w-[600px] h-full top-0 right-0 hidden lg:block z-[0]">
					<ImageLoader
						src={data?.bg_image}
						fill
						alt="Banner"
						className="z-[2]"
					/>
				</div>
			</div>
		</SectionLayout>
	);
};

export default DescBannerWithImage;
