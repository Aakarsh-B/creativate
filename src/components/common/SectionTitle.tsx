import { SectionTitleParams } from "@/lib/types";
import AccentText from "@/utils/accentText";

const SectionTitle = ({ children, className }: SectionTitleParams) => {
	return (
		<h2
			className={`${className} h2 text-[38px] leading-[1.02] font-[500] tracking-[-0.035em] text-center md:text-[52px] lg:text-[64px] lg:text-left`}>
			{typeof children === "string" ? <AccentText text={children} /> : children}
		</h2>
	);
};

export default SectionTitle;
