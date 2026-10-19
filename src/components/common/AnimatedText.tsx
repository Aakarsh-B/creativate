"use client";

import { AnimatedTextParams } from "@/lib/types";
import { motion } from "framer-motion";
import React from "react";

const fadeIn = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const slideUp = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const AnimatedText = ({
	wrapperClass,
	text,
	className,
}: AnimatedTextParams) => {
	return (
		<div className={`${wrapperClass}`}>
			<motion.p
				className={`inline-block w-full text-primaryDark ${
					className ? className : ""
				}`}
				variants={fadeIn}
				initial="initial"
				animate="animate">
				{text.split(" ").map((word, index) => (
					<motion.span
						key={word + "-" + index}
						variants={slideUp}
						className="inline-block">
						{word}&nbsp;
					</motion.span>
				))}
			</motion.p>
		</div>
	);
};

export default AnimatedText;
