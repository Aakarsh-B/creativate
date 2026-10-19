const HandleError = ({ message, setHandleError, type }: any) => {
	let model: any;

	type === "error" && (model = "bg-primaryRed");
	type === "success" && (model = "bg-green-700");
	type === "warning" && (model = "bg-yellow-700");

	return (
		<div
			className={`fixed top-1/2 right-[20%] w-full max-w-[300px] rounded-lg transition-all duration-300 ease-in-out ${model} z-[9]`}>
			<div className="relative px-[30px] pt-[30px] pb-[20px] text-primaryLight">
				<span
					className="z-[10] absolute top-[15px] right-[15px] text-[15px] font-bold leading-[1.2] uppercase cursor-pointer"
					onClick={() => setHandleError(false)}>
					X
				</span>
				<p className="text-[18px] font-medium leading-[1.2] text-left">
					{message}
                </p>
			</div>
		</div>
	);
};

export default HandleError;
