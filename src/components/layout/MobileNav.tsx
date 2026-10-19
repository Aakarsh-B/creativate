"use client";

import { useState } from "react";
import NavItems from "./NavItem";
import { motion } from "framer-motion";
import ActionMenuList from "./ActionMenuList";

const MobileNav = ({ menuList, actionList }: any) => {
	const [isMobOpen, setIsMobOpen] = useState(false);

	const handleClick = () => {
		setIsMobOpen(!isMobOpen);
	};

	return (
		<>
			<button
				className="flex flex-col items-center justify-center z-[99] relative"
				onClick={handleClick}>
				<span
					className={`bg-primaryLight block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						isMobOpen
							? "rotate-45 translate-y-1"
							: "-translate-y-0.5"
					}`}></span>
				<span
					className={`bg-primaryLight block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
						isMobOpen ? "opacity-0" : "opacity-100"
					}`}></span>
				<span
					className={`bg-primaryLight block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						isMobOpen
							? "-rotate-45 -translate-y-1"
							: "translate-y-0.5"
					}`}></span>
			</button>
			{isMobOpen && (
				<span className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-[9]" />
			)}
			<motion.div
				className={`max-w-[450px] h-[100vh] overflow-y-scroll w-full flex flex-col justify-between items-center fixed top-0 ${
					isMobOpen ? "right-0" : "-right-full"
				} transition-all duration-300 ease-in-out z-[10] bg-primaryDark rounded-lg pt-[98px] pb-[40px] px-[5px] gap-y-[100px]`}>
				<nav className="flex items-center flex-col justify-center max-w-[340px] lg:max-w-full w-full">
					{menuList.length > 0 &&
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
				<nav className="flex items-center flex-col justify-center max-w-[340px] lg:max-w-full w-full">
					{actionList.length > 0 &&
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
				<ActionMenuList />
			</motion.div>
		</>
	);
};

export default MobileNav;
