import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";

const BlogItem = ({ featImage, title, blogLink, date, className }: any) => {
	return (
		<article className={`group relative ${className ? className : ""}`}>
			<Link
				href={`/our-blog/${blogLink}`}
				className="block">
				<div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-surface imgloader">
					<ImageLoader
						src={featImage}
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						alt={title}
						className="object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.04]"
					/>
				</div>
				{date && (
					<p className="mt-[20px] text-[12px] uppercase tracking-[0.16em] text-muted">
						{new Date(date).toLocaleDateString("en-IN", {
							day: "numeric",
							month: "short",
							year: "numeric",
						})}
					</p>
				)}
				<h3
					className="mt-[10px] text-[19px] leading-[1.4] font-[500] tracking-[-0.005em] text-primaryLight/90 transition-colors duration-300 group-hover:text-lime"
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			</Link>
		</article>
	);
};

export default BlogItem;
