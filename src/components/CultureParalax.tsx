import ImageLoader from "@/utils/ImageLoader";

const CultureParalax = ({ data }: { data: any }) => {
	return (
		<section className={`bg-transparent w-full h-[376px] lg:h-[440px]`}>
			<div className="relative w-[100vw] md:w-full h-full">
				<ImageLoader
					src={data?.workculture_image}
					alt="Culture Image"
					fill
					className="object-cover object-center"
				/>
			</div>
		</section>
	);
};

export default CultureParalax;
