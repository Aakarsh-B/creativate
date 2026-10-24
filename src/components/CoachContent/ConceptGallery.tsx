import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import ImageLoader from "@/utils/ImageLoader";

const ConceptGallery = ({ data }: any) => {
	return (
		<section className="relative bg-primaryDark py-[80px] lg:py-[140px]">
			<SectionLayout>
				<div className="mb-[40px] grid grid-cols-1 gap-[20px] lg:mb-[64px] lg:grid-cols-12 lg:items-end">
					<div className="flex flex-col items-center lg:col-span-7 lg:items-start">
						<SectionTitle className="text-primaryLight">{data?.title}</SectionTitle>
					</div>
					<p className="text-center text-[17px] leading-[1.55] text-primaryLight/60 lg:col-span-5 lg:text-left">
						{data?.description}
					</p>
				</div>
				<div className="grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3">
					{data?.items?.map((item: any) => (
						<article
							key={item.name}
							className="group flex flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-surface">
							<a
								href={item.image}
								target="_blank"
								className="relative block aspect-[2400/1990] w-full overflow-hidden bg-surfaceRaised">
								<ImageLoader
									src={item.image}
									fill
									sizes="(max-width: 768px) 92vw, (max-width: 1280px) 46vw, 420px"
									alt={`${item.name}: content concept for a ${item.niche.toLowerCase()}`}
									className="object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.04]"
								/>
							</a>
							<div className="p-[24px] lg:p-[28px]">
								<h3 className="mb-[8px] text-[24px] leading-[1.15] font-[500] tracking-[-0.025em] text-primaryLight lg:text-[26px]">
									{item.name}
								</h3>
								<p className="text-[15px] leading-[1.5] text-primaryLight/55">
									{item.style}
								</p>
							</div>
						</article>
					))}
				</div>
				{data?.note && (
					<p className="mt-[20px] text-center text-[14px] leading-[20px] text-primaryLight/40 lg:text-left">
						{data?.note}
					</p>
				)}
			</SectionLayout>
		</section>
	);
};

export default ConceptGallery;
