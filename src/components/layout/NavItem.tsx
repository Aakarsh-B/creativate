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

	const isActive = pathname === extractPathFromUrl(route);

	const menuClassName = `group cursor-pointer transition-all duration-300 ease-expo ${
		!ctaMenu
			? `relative shrink-0 rounded-full font-[500] text-[17px] lg:text-[15px] leading-[20px] ${
					isActive
						? "text-primaryLight bg-white/10"
						: "text-primaryLight/70 hover:text-primaryLight hover:bg-white/[0.06]"
			  } ${footer ? "" : "px-[16px] py-[14px] lg:py-[10px]"}`
			: `inline-flex items-center justify-center gap-[8px] rounded-full bg-lime text-primaryDark font-[600] text-[17px] lg:text-[15px] leading-[20px] px-[22px] h-[56px] lg:h-[50px] hover:bg-primaryLight`
	} ${!footer ? "text-center w-full lg:w-auto" : ""} ${className ? className : ""}`;

	return (
		<>
			{!targetStripe ? (
				<Link
					href={`${route}`}
					className={`${menuClassName}`}
					onClick={handleClick}>
					{menuText}
					{ctaMenu && (
						<span className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
							↗
						</span>
					)}
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
