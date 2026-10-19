import { SectionTitleParams } from "@/lib/types";

const SectionTitle = ({ children, className }: SectionTitleParams) => {
	return (
		<h2
			className={`${className} h2 text-[32px] leading-[40px] font-[500] text-center md:text-[40px] md:leading-[48px] lg:text-left`}>
			{children}
		</h2>
	);
};

export default SectionTitle;
