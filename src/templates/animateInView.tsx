"use client";

import React, { useRef } from "react";
import { motion, stagger, useInView } from "framer-motion";

interface AnimateInViewProps {
	children: React.ReactNode;
	reset: boolean;
	animation:
		| "translateFromLeft"
		| "translateFromRight"
		| "translateFromTop"
		| "translateFromBottom"
		| "zoomInCenter"
		| "zoomOutCenter";
	delay?: any;
	className?: string | null;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({
	children,
	reset,
	animation,
	delay = 0,
	className,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: !reset });

	// ANIMATION TYPES
	const spring = {
		type: "spring",
		damping: 10,
		stiffness: 100,
		duration: 0.5,
		delay: delay,
	};

	// ANIMATE ACTION
	const getPositionValues = (animation: string) => {
		switch (animation) {
			case "translateFromLeft":
				return {
					initial: { x: "-7%", opacity: 0 },
					animate: { x: 0, opacity: 1 },
				};
			case "translateFromRight":
				return {
					initial: { x: "7%", opacity: 0 },
					animate: { x: 0, opacity: 1 },
				};
			case "translateFromTop":
				return {
					initial: { y: "-7%", opacity: 0 },
					animate: { y: 0, opacity: 1 },
				};
			case "translateFromBottom":
				return {
					initial: { y: "7%", opacity: 0 },
					animate: { y: 0, opacity: 1 },
				};
			case "zoomInCenter":
				return {
					initial: { scale: 0 },
					animate: { scale: [0, 1, 0.5, 1] },
				};
			case "zoomOutCenter":
				return {
					initial: { scale: 1 },
					animate: { scale: [1, 0, 0.5, 0] },
				};
			default:
				return {
					initial: { x: "-7%", opacity: 0 },
					animate: { x: 0, opacity: 1 },
				};
		}
	};

	const { initial, animate } = getPositionValues(animation);

	return (
		<div
			ref={ref}
			className={className ? className : ""}>
			{isInView && (
				<motion.div
					initial={initial}
					animate={animate}
					transition={spring}>
					{children}
				</motion.div>
			)}
		</div>
	);
};

export default AnimateInView;
