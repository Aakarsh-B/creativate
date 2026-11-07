import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";

const WorkItem = ({
	featImage,
	title,
	websiteLink,
	blogLink,
	shortDesc,
	className,
}: any) => {
	return (
		<article className={`group relative ${className ? className : ""}`}>
			<Link
				href={`/our-work/${blogLink}`}
				className="relative block aspect-[16/11] overflow-hidden rounded-[24px] bg-surface imgloader">
				<ImageLoader
					src={featImage}
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					alt={title}
					className="object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.04]"
				/>
				<span className="absolute right-[16px] top-[16px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-primaryLight text-primaryDark opacity-0 -translate-y-[6px] transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100 group-hover:rotate-45">
					↗
				</span>
			</Link>
			<div className="mt-[20px] flex items-start justify-between gap-[16px]">
				<div>
					<h3 className="text-[24px] leading-[1.15] font-[500] tracking-[-0.025em] text-primaryLight lg:text-[28px]">
						<Link href={`/our-work/${blogLink}`}>{title}</Link>
					</h3>
					{shortDesc && (
						<div
							className="mt-[8px] line-clamp-2 text-[15px] leading-[1.5] text-primaryLight/55"
							dangerouslySetInnerHTML={{ __html: shortDesc }}
						/>
					)}
				</div>
				{websiteLink && (
					<Link
						href={websiteLink}
						target="_blank"
						className="mt-[4px] shrink-0 rounded-full border border-white/15 px-[14px] py-[7px] text-[13px] text-primaryLight/70 transition-colors duration-300 hover:border-lime hover:text-lime">
						Live site ↗
					</Link>
				)}
			</div>
		</article>
	);
};

export default WorkItem;
