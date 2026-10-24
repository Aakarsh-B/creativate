import ImageLoader from "@/utils/ImageLoader";

const ClientDetCard = ({ type, title }: any) => {
	let head: any;
	switch (type) {
		case "service":
			head = "Service";
			break;

		case "client":
			head = "Client";
			break;

		case "date":
			head = "Date";
			break;

		case "location":
			head = "Location";
			break;

		default:
			head = "Service";
	}
	return (
		<div className="relative px-[24px] py-[12px] w-auto md:px-[30px] md:py-[20px] md:max-w-[calc(50%_-_12px)] md:w-full xl:max-w-1/4 xl:w-auto mx-auto md:mx-0 rounded-[8px] text-[#F2F0EB] inline-flex md:flex md:flex-col text-center md:text-left overflow-hidden">
			<span className="bg-[rgba(20,_20,_22,_0.6)] absolute inset-0 w-full h-full z-0 backdrop-blur-[8px]" />
			<h5 className="text-[16px] leading-[24px] font-[600] md:text-[18px] md:leading-[24px] md:mb-[10px] mr-[8px] md:mr-0 z-[1]">
				{head}
			</h5>
			<p className="text-[18px] leading-[22px] font-[400] md:text-[20px] md:leading-[26px] z-[1]">
				{title}
			</p>
		</div>
	);
};

const WorkDetailsBanner = ({ title, bannerImage, clientDetails }: any) => {
	return (
		<div className="relative block md:h-[466px]">
			<div className="relative pt-[36.2%] min-h-[140px] max-w-[600px] mx-auto md:min-h-auto md:max-w-full rounded-[16px] md:absolute md:h-full md:inset-0 md:w-full md:rounded-[24px] overflow-hidden imgloader z-0">
				<ImageLoader
					src={bannerImage}
					alt={title}
					fill
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="max-w-[600px] mt-[16px] lg:mt-0 md:px-[20px] lg:px-0 mx-auto md:max-w-full xl:max-w-[1024px] md:absolute md:-bottom-[20%] xl:bottom-[-50px] md:left-1/2 md:-translate-x-1/2 w-full">
				<h2 className="text-[#F2F0EB] text-[32px] leading-[38px] font-[500] text-center lg:text-left lg:text-[40px] lg:leading-[48px] line-clamp-4">
					{title}
				</h2>
				<div className="flex flex-col md:flex-row justify-start flex-wrap gap-[16px] md:gap-[24px] mt-[16px] md:mt-[24px] lg:mt-[32px]">
					{clientDetails?.service && (
						<ClientDetCard
							type={"service"}
							title={clientDetails?.service}
						/>
					)}
					{clientDetails?.client && (
						<ClientDetCard
							type={"client"}
							title={clientDetails?.client}
						/>
					)}
					{clientDetails?.date && (
						<ClientDetCard
							type={"date"}
							title={clientDetails?.date}
						/>
					)}
					{clientDetails?.location && (
						<ClientDetCard
							type={"location"}
							title={clientDetails?.location}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default WorkDetailsBanner;
