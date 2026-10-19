'use client';

import { useEffect, useState } from "react";

const useMediaQuery = (query?: any) => {
	const [size, setSize] = useState<boolean>(false);

	useEffect(() => {
		function updateSize() {
			let media: any = window.matchMedia(query);
			setSize(media.matches);
		}

		window.addEventListener("resize", updateSize);

		updateSize();

		return () => window.removeEventListener("resize", updateSize);
	}, [query]);

	return size;
};

export default useMediaQuery;
