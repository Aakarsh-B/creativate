import ImageLoader from "@/utils/ImageLoader";
import AnimateInView from "@/templates/animateInView";
import Link from "next/link";

const DetailLabels: Record<string, string> = {
	service: "Service",
	client: "Client",
	date: "Date",
	location: "Location",
};

const WorkDetailsBanner = ({ title, bannerImage, clientDetails }: any) => {
	const details = Object.keys(DetailLabels).filter((key) => clientDetails?.[key]);

	return (
		<div className="relative">
			<Link
				href="/our-work"
				className="mb-[28px] inline-flex items-center gap-[8px] text-[14px] text-primaryLight/60 transition-colors duration-300 hover:text-lime">
				← All work
			</Link>
			<AnimateInView
				reset={false}
				animation={"translateFromBottom"}>
				<h1
					className="max-w-[1100px] text-[44px] leading-[0.98] font-[500] tracking-[-0.045em] text-primaryLight md:text-[72px] lg:text-[96px]"
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			</AnimateInView>

			{details.length > 0 && (
				<dl className="mt-[40px] grid grid-cols-2 gap-x-[16px] gap-y-[24px] border-t border-white/10 pt-[24px] md:grid-cols-4">
					{details.map((key) => (
						<div key={key}>
							<dt className="mb-[6px] text-[12px] uppercase tracking-[0.14em] text-muted">
								{DetailLabels[key]}
							</dt>
							<dd className="text-[16px] leading-[1.4] text-primaryLight lg:text-[18px]">
								{clientDetails[key]}
							</dd>
						</div>
					))}
				</dl>
			)}

			<div className="relative mt-[40px] aspect-[16/10] overflow-hidden rounded-[24px] bg-surface imgloader md:aspect-[16/8] lg:mt-[56px] lg:rounded-[32px]">
				<ImageLoader
					src={bannerImage}
					alt={title}
					fill
					priority
					sizes="(max-width: 1280px) 92vw, 1280px"
					className="object-cover"
				/>
			</div>

			{clientDetails?.website_url && (
				<div className="mt-[20px] flex justify-end">
					<Link
						href={clientDetails.website_url}
						target="_blank"
						className="inline-flex h-[48px] items-center gap-[8px] rounded-full border border-white/15 px-[20px] text-[15px] text-primaryLight transition-colors duration-300 hover:border-lime hover:text-lime">
						Visit live site ↗
					</Link>
				</div>
			)}
		</div>
	);
};

export default WorkDetailsBanner;
