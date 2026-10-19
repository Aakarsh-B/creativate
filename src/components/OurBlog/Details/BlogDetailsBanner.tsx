import ImageLoader from "@/utils/ImageLoader";

const BlogDetailsBanner = ({ title, bannerImage }: any) => {
	return (
		<div className="relative block md:h-[466px]">
			<div className="relative pt-[36.2%] min-h-[140px] max-w-[600px] mx-auto md:min-h-auto md:max-w-full rounded-[16px] md:absolute md:h-full md:inset-0 md:w-full md:rounded-[24px] overflow-hidden imgloader z-0">
				<ImageLoader
					src={bannerImage}
					alt={title}
					fill
					className={`z-[0]`}
					style={{
						objectFit: "cover",
					}}
				/>
				<span className="blog-banner absolute bottom-0 left-0 w-full h-full z-[1]" />
			</div>
			<div className="max-w-[600px] mt-[16px] lg:mt-0 md:px-[20px] lg:px-0 mx-auto md:max-w-full xl:max-w-[1024px] md:absolute md:bottom-[40px] md:left-1/2 md:-translate-x-1/2 w-full z-[1]">
				<h2 className="text-[#F4F4F4] text-[32px] leading-[38px] font-[500] text-center lg:text-left lg:text-[40px] lg:leading-[48px] line-clamp-4">
					{title}
				</h2>
			</div>
		</div>
	);
};

export default BlogDetailsBanner;
