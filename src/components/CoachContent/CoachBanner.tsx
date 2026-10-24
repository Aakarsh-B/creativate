import SectionLayout from "@/templates/SectionLayout";
import AnimateInView from "@/templates/animateInView";
import AccentText from "@/utils/accentText";
import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";

// Fanned stack of sample posts: back-left, back-right, front-centre
const CardPlacement = [
	"left-0 top-[10%] -rotate-[9deg] z-[1]",
	"right-0 top-[10%] rotate-[9deg] z-[1]",
	"left-1/2 -translate-x-1/2 top-0 z-[2]",
];

const CoachBanner = ({ data }: any) => {
	return (
		<section className="relative">
			<div className="pointer-events-none absolute -top-[260px] left-1/2 h-[560px] w-[min(900px,100vw)] -translate-x-1/2 rounded-full bg-primaryBlue/25 blur-[140px]" />
			<SectionLayout className="relative">
				<div className="flex flex-col gap-[48px] lg:flex-row lg:items-center lg:gap-[56px]">
					<div className="w-full text-center lg:w-[55%] lg:text-left">
						<AnimateInView
							reset={false}
							animation={"translateFromBottom"}>
							<h1 className="mb-[20px] text-[40px] leading-[1] font-[500] tracking-[-0.045em] text-primaryLight sm:text-[52px] lg:text-[68px] xl:text-[76px]">
								<AccentText text={data?.title} />
							</h1>
							<p className="mx-auto mb-[32px] max-w-[540px] text-[17px] leading-[1.55] text-primaryLight/60 lg:mx-0 lg:text-[19px]">
								{data?.description}
							</p>
						</AnimateInView>
						<div className="flex flex-col justify-center gap-[10px] sm:flex-row lg:justify-start">
							<Link
								href={data?.primary_cta?.link ?? "#"}
								target="_blank"
								className="group inline-flex h-[56px] items-center justify-center gap-[10px] rounded-full bg-lime px-[26px] text-[16px] font-[600] text-primaryDark transition-colors duration-300 hover:bg-primaryLight">
								{data?.primary_cta?.label}
								<span className="transition-transform duration-300 ease-expo group-hover:rotate-45">
									↗
								</span>
							</Link>
							<Link
								href={data?.secondary_cta?.link ?? "#"}
								className="inline-flex h-[56px] items-center justify-center rounded-full border border-white/15 px-[26px] text-[16px] font-[500] text-primaryLight transition-colors duration-300 hover:border-white/40 hover:bg-white/[0.06]">
								{data?.secondary_cta?.label}
							</Link>
						</div>
					</div>
					{data?.images?.length > 0 && (
						<div className="relative mx-auto aspect-[10/9] w-full max-w-[420px] lg:w-[45%] lg:max-w-none">
							{data.images.slice(0, 3).map((img: any, index: number) => (
								<div
									key={img.src}
									className={`absolute aspect-[4/5] w-[54%] overflow-hidden rounded-[18px] shadow-[0_30px_70px_rgba(0,0,0,0.55)] ring-1 ring-white/10 ${CardPlacement[index]}`}>
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
		</section>
	);
};

export default CoachBanner;
