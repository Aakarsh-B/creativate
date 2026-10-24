// Small "(01) Label" eyebrow used above section headings
const SectionLabel = ({
	index,
	children,
	className,
}: {
	index?: string;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<p
			className={`inline-flex items-center gap-[10px] text-[13px] leading-[16px] font-[500] uppercase tracking-[0.14em] text-muted ${
				className ? className : ""
			}`}>
			<span className="h-[6px] w-[6px] rounded-full bg-lime" />
			{index && <span className="text-primaryLight/40">({index})</span>}
			{children}
		</p>
	);
};

export default SectionLabel;
