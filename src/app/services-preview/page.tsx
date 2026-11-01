import {
	ServicesCards,
	ServicesRows,
	ServicesSplit,
} from "@/components/Home/ServicesVariants";
import type { Metadata } from "next";
import { getContent } from "@/lib/content";

// Temporary page for comparing services section options on the preview link.
// Delete this and ServicesVariants once a version is chosen.
export const metadata: Metadata = {
	title: "Services section options",
	robots: { index: false, follow: false },
};

const Label = ({ children }: any) => (
	<div className="flex justify-center pt-[24px]">
		<p className="rounded-full bg-primaryBlue px-[18px] py-[8px] text-[14px] font-[600] text-primaryLight shadow-lg">
			{children}
		</p>
	</div>
);

export default async function ServicesPreview() {
	const pageData = await getContent(`/pages?slug=home&acf_format=standard`);
	const data = pageData[0].acf?.what_we_do;

	return (
		<div className="bg-primaryDark pt-[100px]">
			<div>
				<Label>Version A: list + changing image</Label>
				<ServicesSplit data={data} />
			</div>
			<div className="border-t-[6px] border-primaryBlue">
				<Label>Version B: four cards</Label>
				<ServicesCards data={data} />
			</div>
			<div className="border-t-[6px] border-primaryBlue">
				<Label>Version C: compact rows + thumbnails</Label>
				<ServicesRows data={data} />
			</div>
		</div>
	);
}
