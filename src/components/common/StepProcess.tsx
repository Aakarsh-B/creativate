import SectionLayout from "@/templates/SectionLayout";
import SectionTitle from "@/components/common/SectionTitle";
import React from "react";

const GridBgGradient = [
	"bg-[linear-gradient(91.94deg,#336CFB_0%,#11C3C1_100%)]",
	"bg-[linear-gradient(91.94deg,#336CFB_0%,#11C3C1_100%)]",
	"bg-[linear-gradient(91.94deg,#456FF1_0%,#EA88CE_100%)]",
];

interface ProcessItem {
	title: string;
	description: string;
}

interface ProcessGridProps {
	data: ProcessItem;
	className?: String;
	bgGradient?: String;
	animateDelay?: Number;
}

const StepProcess = ({ data, sectionId }: any) => {
	const processItems = data.process_item_list;

	const ProcessGrid: React.FC<ProcessGridProps> = ({
		data,
		bgGradient,
		className,
	}) => {
		return (
			<div
				className={`max-lg:mb-[24px] px-[21px] pb-[32px] pt-[45px] md:px-[24px] md:pb-[35px] md:pt-[50px] bg-[#191B35] rounded-[8px] overflow-hidden relative ${
					className ? className : ""
				}`}>
				<span
					className={`absolute w-full h-[15px] top-0 right-0 left-0 ${
						bgGradient ? bgGradient : ""
					}`}
				/>
				<h4
					className={`font-[400] text-primaryLight text-center text-[28px] leading-[34px] lg:text-[32px] lg:leading-[38px] mb-[16px] lg:mb-[20px]`}>
					{data?.title}
				</h4>
				<p
					className={`text-primaryLight font-normal text-[18px] leading-[22px] lg:text-[20px] lg:leading-[24px] text-center`}>
					{data?.description}
				</p>
			</div>
		);
	};

	return (
		<section
			className={`py-[15px] pb-[40px] lg:pt-0 lg:pb-[120px] bg-primaryDark relative`}>
			{sectionId && (
				<span
					id={sectionId}
					className="targetCode"
				/>
			)}
			<SectionLayout className={``}>
				<div className={`mx-auto max-w-[450px] lg:max-w-[750px]`}>
					<SectionTitle
						className={`text-primaryLight !text-center mb-[30px] 2xl:mb-[40px]`}>
						{data?.title}
					</SectionTitle>
				</div>
				{Object.values(processItems)?.length > 0 && (
					<div
						className={`testing flex flex-col md:flex-row md:flex-wrap justify-between`}>
						{Object.values(processItems).map(
							(item: any, index: number) => (
								<div
									key={index}
									className={`w-full max-md:max-w-[350px] md:w-[calc((100%_/_2)_-_20px)] max-lg:mx-auto lg:w-[calc((100%_/_3)_-_20px)]`}>
									<ProcessGrid
										data={item}
										bgGradient={GridBgGradient[index]}
										animateDelay={index}
									/>
								</div>
							)
						)}
					</div>
				)}
			</SectionLayout>
		</section>
	);
};

export default StepProcess;
