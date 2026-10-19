import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href={'/'}
			className="flex items-center justify-center md:mr-[25px] xl:mr-[45px] 2xl:mr-[55px] transition-all duration-300 ease-in-out z-[99]">
			<ImageLoader
				src={"/images/logo.svg"}
				width={163}
				height={34}
				alt="Logo"
				style={{
					width: "auto",
				}}
				priority
				className="max-w-[126px] md:max-w-[135px] xl:max-w-[163px]"
			/>
		</Link>
	);
};

export default Logo;
