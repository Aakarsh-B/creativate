import Image from "next/image";

const ImageLoader = ({
	src,
	sizes,
	unoptimized,
	priority,
	loading,
	className,
	quality,
	width,
	height,
	fill,
	style,
	placeholder,
	alt,
	...all
}: any) => {
	return (
		<Image
			src={src}
			sizes={sizes}
			unoptimized={unoptimized}
			priority={priority}
			loading={loading}
			className={className}
			quality={quality}
			fill={fill}
			width={width}
			height={height}
			style={style}
			alt={alt}
			placeholder={placeholder}
			{...all}
		/>
	);
};

export default ImageLoader;
