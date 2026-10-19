import SectionLayout from "@/templates/SectionLayout";
import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";
import NavItems from "./NavItem";
import { getContent } from "@/lib/content";

async function getData() {
	return getContent(`/footer?acf_format=standard`);
}

const Footer = async () => {
	const footer = await getData();
	const data = footer[0].acf;

	return (
		<footer className="relative w-full font-[400] text-[15px] md:text-[16px] bg-primaryBlue pt-[60px] pb-[60px]">
			<SectionLayout
				className={`flex md:items-center justify-between max-md:max-w-[300px]`}>
				{data?.footer_top_menu.length > 0 && (
					<div
						className={`flex items-start md:items-center justify-center max-md:flex-col gap-[24px]`}>
						{data?.footer_top_menu?.map((item: any) => (
							<NavItems
								key={item.menu_label}
								menuText={item.menu_label}
								route={item.route_link}
								targetId={item.target_id}
								targetStripe={item.target_stripe}
								ctaMenu={item.cta_menu}
								footer={true}
							/>
						))}
					</div>
				)}
				{data?.social_links?.length > 0 && (
					<div className="flex items-center justify-center max-md:flex-col gap-[15px]">
						{data?.social_links.map((item: any, index: number) => (
							<Link
								key={index}
								href={`${item?.link}`}
								target="_blank"
								className="max-w-[42px] max-h-[42px] md:max-w-[30px] md:max-h-[30px]">
								<ImageLoader
									src={item?.icon}
									alt="social icon"
									className="z-[1]"
									width={30}
									height={30}
								/>
							</Link>
						))}
					</div>
				)}
			</SectionLayout>
			<div className="w-full h-full py-[40px] lg:py-0 lg:h-[286px] max-w-[1440px] mx-auto relative transition-all duration-300 ease-in-out">
				<ImageLoader
					src={data?.footer_banner_image}
					alt="logo"
					className="z-[1]"
					width={1440}
					height={240}
				/>
				<ImageLoader
					src="/images/footer-logo-bg.svg"
					fill
					alt="logo"
					className="z-[2]"
				/>
			</div>
			<SectionLayout
				className={`flex items-center justify-between max-lg:flex-col pt-[20px] md:pt-0`}>
				<span className="text-[16px] leading-[20px] text-primaryLight font-[400]">
					{new Date().getFullYear()} &copy; All Rights Reserved.
				</span>

				<div className={`flex items-center justify-center gap-[24px]`}>
					{data?.footer_bottom_menu?.map((item: any, index: any) => (
						<Link
							key={index}
							href={`/${item?.target_id}`}
							target="_blank"
							className="text-[16px] leading-[20px] text-primaryLight font-[400]">
							{item?.menu_label}
						</Link>
					))}
				</div>
			</SectionLayout>
		</footer>
	);
};

export default Footer;
