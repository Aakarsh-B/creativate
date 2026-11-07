"use client";

import { useState, useEffect } from "react";
import NavItems from "./NavItem";

const MobileNav = ({ menuList, actionList }: any) => {
	const [isMobOpen, setIsMobOpen] = useState(false);

	const handleClick = () => {
		setIsMobOpen(!isMobOpen);
	};

	// Lock page scroll while the menu sheet is open
	useEffect(() => {
		document.body.style.overflow = isMobOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobOpen]);

	return (
		<>
			<button
				aria-label={isMobOpen ? "Close menu" : "Open menu"}
				aria-expanded={isMobOpen}
				className="flex h-[44px] w-[44px] flex-col items-center justify-center rounded-full bg-white/10 z-[99] relative"
				onClick={handleClick}>
				<span
					className={`bg-primaryLight block transition-all duration-300 ease-out h-[1.5px] w-[18px] rounded-sm ${
						isMobOpen ? "rotate-45 translate-y-[3.5px]" : "-translate-y-[2px]"
					}`}></span>
				<span
					className={`bg-primaryLight block transition-all duration-300 ease-out h-[1.5px] w-[18px] rounded-sm ${
						isMobOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-[2px]"
					}`}></span>
			</button>
			<div
				className={`fixed inset-x-[12px] top-[80px] z-[98] origin-top rounded-[28px] border border-white/10 bg-surface p-[12px] shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-all duration-500 ease-expo ${
					isMobOpen
						? "opacity-100 scale-100 pointer-events-auto"
						: "opacity-0 scale-95 pointer-events-none"
				}`}>
				<nav className="flex flex-col">
					{menuList?.length > 0 &&
						menuList.map((item: any) => (
							<NavItems
								key={item.menu_label}
								menuText={item.menu_label}
								route={item.route_link}
								targetId={item.target_id}
								targetStripe={item.target_stripe}
								ctaMenu={item.cta_menu}
								handleClick={handleClick}
							/>
						))}
				</nav>
				<div className="my-[8px] h-px bg-white/10" />
				<nav className="flex flex-col gap-[8px]">
					{actionList?.length > 0 &&
						actionList.map((item: any) => (
							<NavItems
								key={item.menu_label}
								menuText={item.menu_label}
								route={item.route_link}
								targetId={item.target_id}
								targetStripe={item.target_stripe}
								ctaMenu={item.cta_menu}
								handleClick={handleClick}
							/>
						))}
				</nav>
			</div>
		</>
	);
};

export default MobileNav;
