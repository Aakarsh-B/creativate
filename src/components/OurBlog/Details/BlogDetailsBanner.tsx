import ImageLoader from "@/utils/ImageLoader";
import AnimateInView from "@/templates/animateInView";
import Link from "next/link";

const BlogDetailsBanner = ({ title, bannerImage, date }: any) => {
	return (
		<div className="relative">
			<div className="mx-auto max-w-[920px] text-center">
				<div className="mb-[28px] flex items-center justify-center gap-[12px] text-[14px] text-primaryLight/60">
					<Link
						href="/our-blog"
						className="transition-colors duration-300 hover:text-lime">
						← Blog
					</Link>
					{date && (
						<>
							<span className="h-[4px] w-[4px] rounded-full bg-white/30" />
							<span>
								{new Date(date).toLocaleDateString("en-IN", {
									day: "numeric",
									month: "long",
									year: "numeric",
								})}
							</span>
						</>
					)}
				</div>
				<AnimateInView
					reset={false}
					animation={"translateFromBottom"}>
					<h1
						className="text-[36px] leading-[1.05] font-[500] tracking-[-0.04em] text-primaryLight md:text-[56px] lg:text-[68px]"
						dangerouslySetInnerHTML={{ __html: title }}
					/>
				</AnimateInView>
			</div>
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
		</div>
	);
};

export default BlogDetailsBanner;
