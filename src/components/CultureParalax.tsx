"use client";

import ImageLoader from "@/utils/ImageLoader";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CultureParalax = ({ data }: { data: any }) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	// Card opens up from inset to near full-bleed as it scrolls into view
	const inset = useTransform(scrollYProgress, [0, 0.45], ["6%", "0%"]);
	const radius = useTransform(scrollYProgress, [0, 0.45], [40, 24]);
	const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

	return (
		<section
			ref={ref}
			className="bg-primaryDark px-[12px] lg:px-[16px]">
			<motion.div
				style={{ marginLeft: inset, marginRight: inset, borderRadius: radius }}
				className="relative mx-auto h-[360px] max-w-[1600px] overflow-hidden md:h-[480px] lg:h-[620px]">
				<motion.div
					style={{ y }}
					className="absolute inset-[-10%_0]">
					<ImageLoader
						src={data?.workculture_image}
						alt="The Creativate team at work"
						fill
						sizes="100vw"
						className="object-cover object-center"
					/>
				</motion.div>
				<span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
				<p className="absolute bottom-[20px] left-[20px] text-[13px] uppercase tracking-[0.14em] text-primaryLight/80 lg:bottom-[32px] lg:left-[36px]">
					Inside the studio
				</p>
			</motion.div>
		</section>
	);
};

export default CultureParalax;
