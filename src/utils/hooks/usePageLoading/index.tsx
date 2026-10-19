"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

const usePageLoading = () => {
	const [pageReady, setPageReady] = useState<any>(false);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const handleReadyState = () => {
			if (document.readyState === "complete") {
				setPageReady(true);
			}
		};

		if (document.readyState === "complete") {
			setPageReady(true);
		} else {
			document.addEventListener("DOMContentLoaded", handleReadyState);

			return () => {
				document.removeEventListener(
					"DOMContentLoaded",
					handleReadyState
				);
			};
		}
	}, [pathname, searchParams]);

	return pageReady;
};

export default usePageLoading;
