import { SectionLayoutParams } from "@/lib/types";

const SectionLayout = ({ children, className }: SectionLayoutParams) => {
	return (
		<div
			className={`w-[88%] max-w-[1280px] mx-auto relative block ${
				className ? className : ""
			}`}>
			{children}
		</div>
	);
};

export default SectionLayout;
