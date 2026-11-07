import ImageLoader from "@/utils/ImageLoader";

// Infinite CSS marquee; the list is rendered twice so the loop is seamless
const LogoSlider = ({ logoSlider, className }: any) => {
	if (!logoSlider?.length) return null;

	const loop = [...logoSlider, ...logoSlider];

	return (
		<div
			className={`marquee-mask relative w-full overflow-hidden ${
				className ? className : ""
			}`}>
			<div className="flex w-max animate-marquee items-center gap-[56px] hover:[animation-play-state:paused]">
				{loop.map((item: any, i: number) => (
					<div
						key={i}
						aria-hidden={i >= logoSlider.length}
						className="relative flex h-[40px] w-[120px] shrink-0 items-center justify-center opacity-60 grayscale transition-opacity duration-300 hover:opacity-100 hover:grayscale-0">
						<ImageLoader
							src={item.logo}
							alt={item.logo_alt}
							fill
							sizes="120px"
							className="object-contain"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default LogoSlider;
