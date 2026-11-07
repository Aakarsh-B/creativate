import SectionLayout from "@/templates/SectionLayout";
import ImageLoader from "@/utils/ImageLoader";
import Link from "next/link";
import NavItems from "./NavItem";
import { getContent } from "@/lib/content";

async function getData() {
	return getContent(`/footer?acf_format=standard`);
}

async function getHeaderData() {
	return getContent(`/header?acf_format=standard`);
}

const Footer = async () => {
	const footer = await getData();
	const data = footer[0].acf;

	// Reuse the header's booking CTA so the link lives in one place
	const header = await getHeaderData();
	const bookingCta = header[0]?.acf?.header_right_menu?.find(
		(item: any) => item.cta_menu
	);

	const legalLinks = data?.footer_bottom_menu?.filter((item: any) => item?.target_id);
	const address = data?.footer_bottom_menu?.find((item: any) => !item?.target_id);

	return (
		<footer className="relative overflow-hidden bg-primaryDark px-[12px] pb-[12px] lg:px-[16px] lg:pb-[16px]">
			<div className="relative overflow-hidden rounded-[32px] bg-primaryBlue">
				<div className="grain pointer-events-none absolute inset-0" />
				<div className="pointer-events-none absolute -bottom-[200px] -left-[120px] h-[480px] w-[480px] rounded-full bg-lime/30 blur-[140px]" />

				{/* Closing CTA */}
				<SectionLayout className="relative pt-[72px] pb-[56px] lg:pt-[120px] lg:pb-[80px]">
					<div className="flex flex-col items-center gap-[32px] lg:flex-row lg:items-end lg:justify-between">
						<h2 className="max-w-[900px] text-center text-[44px] leading-[0.98] font-[500] tracking-[-0.045em] text-primaryLight md:text-[72px] lg:text-left lg:text-[96px]">
							Let’s build something <span className="accent">bold</span>.
						</h2>
						{bookingCta && (
							<Link
								href={bookingCta.route_link}
								className="group flex h-[150px] w-[150px] shrink-0 flex-col items-center justify-center gap-[6px] rounded-full bg-lime text-center text-[15px] font-[600] leading-[1.2] text-primaryDark transition-transform duration-500 ease-expo hover:scale-105 lg:h-[180px] lg:w-[180px] lg:text-[16px]">
								<span className="text-[24px] transition-transform duration-500 ease-expo group-hover:rotate-45">
									↗
								</span>
								<span className="max-w-[110px]">{bookingCta.menu_label}</span>
							</Link>
						)}
					</div>
				</SectionLayout>

				<SectionLayout className="relative border-t border-white/20 py-[32px]">
					<div className="flex flex-col items-center gap-[24px] md:flex-row md:justify-between">
						{data?.footer_top_menu.length > 0 && (
							<nav className="flex flex-wrap items-center justify-center gap-[4px]">
								{data?.footer_top_menu?.map((item: any) => (
									<NavItems
										key={item.menu_label}
										menuText={item.menu_label}
										route={item.route_link}
										targetId={item.target_id}
										targetStripe={item.target_stripe}
										ctaMenu={item.cta_menu}
										footer={true}
										className="px-[14px] py-[8px]"
									/>
								))}
							</nav>
						)}
						{data?.social_links?.length > 0 && (
							<div className="flex items-center gap-[8px]">
								{data?.social_links.map((item: any, index: number) => (
									<Link
										key={index}
										href={`${item?.link}`}
										target="_blank"
										aria-label="Social profile"
										className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/15 transition-colors duration-300 hover:bg-primaryDark">
										<ImageLoader
											src={item?.icon}
											alt=""
											width={20}
											height={20}
											className="h-[20px] w-[20px] object-contain"
										/>
									</Link>
								))}
							</div>
						)}
					</div>
				</SectionLayout>

				{/* Oversized wordmark */}
				<div
					aria-hidden
					className="relative select-none overflow-hidden px-[12px]">
					<p className="translate-y-[18%] whitespace-nowrap text-center text-[23vw] leading-[0.8] font-[600] tracking-[-0.07em] text-primaryLight/95 2xl:text-[330px]">
						creativate
					</p>
				</div>
			</div>

			<div className="flex flex-col items-center gap-[12px] px-[8px] pt-[20px] text-[13px] leading-[18px] text-primaryLight/50 lg:flex-row lg:justify-between">
				<span>© {new Date().getFullYear()} Creativate. All rights reserved.</span>
				{address && <span className="text-center">{address.menu_label}</span>}
				<div className="flex items-center gap-[20px]">
					{legalLinks?.map((item: any, index: any) => (
						<Link
							key={index}
							href={`/${item?.target_id}`}
							className="transition-colors duration-300 hover:text-primaryLight">
							{item?.menu_label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
