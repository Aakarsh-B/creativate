"use client";

import { NavItemsParams } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({
	route,
	menuText,
	targetId,
	targetStripe,
	ctaMenu,
	className,
	handleClick,
	footer,
}: NavItemsParams) => {
	const pathname = usePathname();

	function extractPathFromUrl(url: any) {
		// Regular expression to match the path after the domain
		const pathRegex = /(?:https?:\/\/)?[^\/]+(.+)/;
		const match = url.match(pathRegex);
		if (match && match[1]) {
			return match[1];
		} else {
			return null;
		}
	}

	const menuClassName = `${
		pathname === extractPathFromUrl(route)
			? "active max-lg:bg-[#161830] rounded-[4px]"
			: ""
	} group cursor-pointer tracking-wide ${
		!ctaMenu
			? `shrink-0 lg:mr-[14px] xl:mr-[20px] last:mr-0 relative font-[500] text-[20px] leading-[22px] text-primaryLight`
			: `bg-primaryBlue border-[2px] border-solid border-primaryBlue hover:opacity-75 flex items-center justify-center rounded-[8px] text-primaryLight text-center px-[10px] text-[24px] leading-[28px] xl:px-[20px] xl:text-[20px] xl:leading-[24px]  w-full h-[77px] xl:h-[45px]`
	} cursor-pointer transition-all duration-300 ease-in-out capitalize ${
		!footer ? "py-[16px] lg:py-0 text-center" : ""
	} w-full lg:w-auto`;

	return (
		<>
			{!targetStripe ? (
				<Link
					href={`${route}`}
					className={`${menuClassName}`}
					onClick={handleClick}>
					{menuText}
				</Link>
			) : (
				<>
					{pathname === "/" && (
						<Link
							className={`${menuClassName}`}
							href={`#${targetId}`}
							data-target={targetId ? targetId : undefined}
							onClick={handleClick}>
							<span className={`${!ctaMenu ? "" : `shrink-0`}`}>
								{menuText}
							</span>
						</Link>
					)}
				</>
			)}
		</>
	);
};

export default NavItems;
