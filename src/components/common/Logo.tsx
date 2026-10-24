import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href={'/'}
			className="flex items-center justify-center shrink-0 transition-opacity duration-300 hover:opacity-80 z-[99]">
			<ImageLoader
				src={"/images/logo.svg"}
				width={163}
				height={34}
				alt="Logo"
				style={{
					width: "auto",
				}}
				priority
				className="max-w-[118px] md:max-w-[130px] xl:max-w-[140px]"
			/>
		</Link>
	);
};

export default Logo;
