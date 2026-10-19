"use client";

import { useEffect, useState } from "react";

export default function useOnResize() {
	const isClient = typeof window === "object";
	const [windowSize, setWindowSize] = useState({
		width: isClient ? window.innerWidth : 0,
		height: isClient ? window.innerHeight : 0,
	});

	useEffect(() => {
		if (!isClient) {
			return;
		}

		const changeWindowSize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", changeWindowSize);
		window.addEventListener("orientationchange", changeWindowSize);
		return () => {
			window.removeEventListener("resize", changeWindowSize);

			window.removeEventListener("orientationchange", changeWindowSize);
		};
	}, [isClient]);

	return windowSize;
}
