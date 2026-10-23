import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import ImageLoader from "@/utils/ImageLoader";

const CardGradient = [
	"bg-[linear-gradient(91.94deg,#336CFB_0%,#11C3C1_100%)]",
	"bg-[linear-gradient(91.94deg,#456FF1_0%,#EA88CE_100%)]",
	"bg-[linear-gradient(91.94deg,#336CFB_0%,#11C3C1_100%)]",
];

const ConceptGallery = ({ data }: any) => {
	return (
		<section className="py-[50px] lg:py-[100px] bg-primaryDark relative">
			<SectionLayout className={``}>
				<div className="max-w-[760px] mx-auto lg:mx-0 mb-[30px] lg:mb-[50px]">
					<SectionTitle className={`text-primaryLight mb-[16px]`}>
						{data?.title}
					</SectionTitle>
					<p className="text-[20px] leading-[26px] text-center lg:text-left text-primaryLight opacity-50">
						{data?.description}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{data?.items?.map((item: any, index: number) => (
						<article
							key={item.name}
							className="bg-[#191B35] rounded-[8px] overflow-hidden relative flex flex-col">
							<span
								className={`absolute w-full h-[10px] top-0 right-0 left-0 z-[2] ${CardGradient[index % CardGradient.length]}`}
							/>
							<a
								href={item.image}
								target="_blank"
								className="relative block w-full aspect-[2400/1990] bg-[#0f1022]">
								<ImageLoader
									src={item.image}
									fill
									sizes="(max-width: 768px) 88vw, (max-width: 1280px) 44vw, 420px"
									alt={`${item.name}: content concept for a ${item.niche.toLowerCase()}`}
									className="object-cover"
								/>
							</a>
							<div className="px-[24px] py-[24px]">
								<p className="font-poppins text-primaryBlue font-[600] uppercase tracking-[0.1em] text-[13px] leading-[18px] mb-[8px]">
									Content concept · {item.niche}
								</p>
								<h3 className="text-primaryLight font-[500] text-[26px] leading-[32px] mb-[10px]">
									{item.name}
								</h3>
								<p className="text-primaryLight/60 text-[18px] leading-[24px]">
									{item.style}
								</p>
							</div>
						</article>
					))}
				</div>
				<p className="text-primaryLight/40 text-[15px] leading-[20px] mt-[20px] text-center lg:text-left">
					{data?.note}
				</p>
			</SectionLayout>
		</section>
	);
};

export default ConceptGallery;
