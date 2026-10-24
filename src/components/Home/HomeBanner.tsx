import LogoSlider from "../common/LogoSlider";
import SectionLayout from "@/templates/SectionLayout";
import Link from "next/link";
import AnimateInView from "@/templates/animateInView";
import AccentText from "@/utils/accentText";
import ImageLoader from "@/utils/ImageLoader";

const HomeBanner = ({ data, logoSlider }: { data: any; logoSlider: any }) => {
	const projects = data?.banner_slider ?? [];

	return (
		<section className="grain relative overflow-hidden bg-primaryDark pt-[120px] pb-[60px] md:pt-[150px] lg:pt-[180px] lg:pb-[90px]">
			{/* Ambient background */}
			<div className="grid-lines pointer-events-none absolute inset-0" />
			<div className="pointer-events-none absolute -top-[220px] left-1/2 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-primaryBlue/30 blur-[140px]" />
			<div className="pointer-events-none absolute top-[180px] -right-[140px] h-[360px] w-[360px] rounded-full bg-lime/15 blur-[120px]" />

			<SectionLayout className="relative z-[1]">
				<AnimateInView
					reset={false}
					animation={"translateFromBottom"}
					className="mb-[28px] flex justify-center lg:justify-start">
					<p className="inline-flex items-center gap-[10px] rounded-full border border-white/10 bg-white/[0.04] px-[14px] py-[8px] text-[13px] leading-[16px] font-[500] text-primaryLight/80 backdrop-blur">
						<span className="relative flex h-[8px] w-[8px]">
							<span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-lime" />
						</span>
						{data?.key_phrase || "Brand · Web · Growth studio — Kochi, India"}
					</p>
				</AnimateInView>

				<AnimateInView
					reset={false}
					animation={"translateFromBottom"}
					delay={0.05}>
					<h1 className="mx-auto max-w-[1180px] text-center text-[44px] leading-[0.98] font-[500] tracking-[-0.045em] text-primaryLight sm:text-[60px] md:text-[76px] lg:mx-0 lg:text-left lg:text-[96px] 2xl:text-[108px]">
						<AccentText text={data?.title} />
					</h1>
				</AnimateInView>

				<div className="mt-[32px] flex flex-col items-center gap-[28px] lg:mt-[48px] lg:flex-row lg:items-end lg:justify-between">
					<AnimateInView
						reset={false}
						animation={"translateFromBottom"}
						delay={0.12}
						className="max-w-[460px]">
						<p className="text-center text-[17px] leading-[1.55] text-primaryLight/60 lg:text-left lg:text-[19px]">
							{data?.description}
						</p>
					</AnimateInView>
					<AnimateInView
						reset={false}
						animation={"translateFromBottom"}
						delay={0.18}
						className="flex w-full flex-col gap-[10px] sm:w-auto sm:flex-row">
						<Link
							href={`${data?.button_link ?? "#"}`}
							className="group inline-flex h-[58px] items-center justify-center gap-[10px] rounded-full bg-lime px-[28px] text-[16px] font-[600] text-primaryDark transition-all duration-300 ease-expo hover:bg-primaryLight">
							{data?.button_text}
							<span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-primaryDark text-lime transition-transform duration-300 ease-expo group-hover:rotate-45">
								↗
							</span>
						</Link>
						<Link
							href="/our-work"
							className="inline-flex h-[58px] items-center justify-center rounded-full border border-white/15 px-[28px] text-[16px] font-[500] text-primaryLight transition-all duration-300 ease-expo hover:border-white/40 hover:bg-white/[0.06]">
							See our work
						</Link>
					</AnimateInView>
				</div>

				{/* Featured projects bento */}
				{projects.length > 0 && (
					<AnimateInView
						reset={false}
						animation={"translateFromBottom"}
						delay={0.25}
						className="mt-[56px] lg:mt-[80px]">
						<div className="grid grid-cols-1 gap-[12px] md:grid-cols-12 md:grid-rows-2 md:gap-[16px]">
							{projects.slice(0, 3).map((item: any, index: number) => (
								<Link
									key={index}
									href={item?.project_link ?? "#"}
									className={`group relative block overflow-hidden rounded-[24px] bg-surface ${
										index === 0
											? "aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-[520px]"
											: "aspect-[16/10] md:col-span-5 md:aspect-auto md:min-h-[252px]"
									}`}>
									<ImageLoader
										src={item.project_image}
										alt={item.project_image_alt}
										fill
										sizes="(max-width: 768px) 100vw, 60vw"
										priority={index === 0}
										className="object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.04]"
									/>
									<span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
									<div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-[18px] md:p-[24px]">
										<div>
											<p className="text-[12px] uppercase tracking-[0.14em] text-primaryLight/60">
												Case study 0{index + 1}
											</p>
											<p className="mt-[4px] text-[20px] font-[500] tracking-[-0.02em] text-primaryLight md:text-[24px]">
												{item?.project_title}
											</p>
										</div>
										<span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-primaryLight text-primaryDark transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:bg-lime">
											↗
										</span>
									</div>
								</Link>
							))}
						</div>
					</AnimateInView>
				)}

				{/* Client logos */}
				<div className="mt-[56px] flex flex-col items-center gap-[20px] lg:mt-[72px] lg:flex-row lg:gap-[40px]">
					<p className="shrink-0 text-[13px] uppercase tracking-[0.14em] text-muted">
						Trusted by growing brands
					</p>
					<LogoSlider logoSlider={logoSlider} />
				</div>
			</SectionLayout>
		</section>
	);
};

export default HomeBanner;
