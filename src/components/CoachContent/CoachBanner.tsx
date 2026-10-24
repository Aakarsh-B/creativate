import SectionLayout from "@/templates/SectionLayout";
import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";

// Fanned stack of sample posts: back-left, back-right, front-centre
const CardPlacement = [
	"left-0 top-[8%] -rotate-[8deg] z-[1]",
	"right-0 top-[8%] rotate-[8deg] z-[1]",
	"left-1/2 -translate-x-1/2 top-0 z-[2]",
];

const CoachBanner = ({ data }: any) => {
	return (
		<SectionLayout className={``}>
			<div
				className={`pt-[10px] lg:pt-[20px] relative flex flex-col lg:flex-row lg:items-center gap-[36px] lg:gap-[48px]`}>
				<div className="w-full lg:w-[52%] text-center lg:text-left">
					<p className="font-poppins text-primaryBlue font-[600] uppercase tracking-[0.12em] text-[13px] leading-[18px] mb-[14px]">
						{data?.eyebrow}
					</p>
					<h1
						className={`font-[500] text-primaryLight text-[30px] leading-[36px] mb-[16px] lg:text-[40px] lg:leading-[48px]`}>
						{data?.title}
					</h1>
					<p
						className={`text-primaryLight/70 font-[400] text-[18px] leading-[24px] lg:text-[20px] lg:leading-[28px] mb-[28px]`}>
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
				{data?.images?.length > 0 && (
					<div className="relative w-full max-w-[460px] lg:max-w-none lg:w-[48%] mx-auto aspect-[10/9]">
						{data.images.slice(0, 3).map((img: any, index: number) => (
							<div
								key={img.src}
								className={`absolute w-[52%] aspect-[4/5] rounded-[8px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] ${CardPlacement[index]}`}>
								<ImageLoader
									src={img.src}
									fill
									priority
									sizes="(max-width: 1024px) 45vw, 300px"
									alt={img.alt}
									className="object-cover"
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</SectionLayout>
	);
};

export default CoachBanner;
