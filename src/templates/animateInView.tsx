"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

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
	const isInView = useInView(ref, { once: !reset, amount: 0.15 });
	const reduceMotion = useReducedMotion();

	// ANIMATION TYPES
	const spring = {
		duration: 0.9,
		ease: [0.16, 1, 0.3, 1],
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
					initial: { y: 28, opacity: 0 },
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

	// Children always render (so content is in the server HTML); only the
	// entrance motion waits until the block scrolls into view.
	return (
		<motion.div
			ref={ref}
			className={className ? className : ""}
			initial={reduceMotion ? false : initial}
			animate={reduceMotion || isInView ? animate : initial}
			transition={spring}>
			{children}
		</motion.div>
	);
};

export default AnimateInView;
