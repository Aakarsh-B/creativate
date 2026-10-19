import NavItems from "./NavItem";
import ActionMenuList from "./ActionMenuList";
import MobileNav from "./MobileNav";
import Logo from "@/components/common/Logo";
import { getContent } from "@/lib/content";

async function getData() {
	return getContent(`/header?acf_format=standard`);
}

const Header = async () => {
	const header = await getData();
	const data = header[0].acf;

	return (
		<header className="py-1 lg:py-2 fixed inset-0 w-full h-[60px] lg:h-[90px] z-[99] bg-primaryDark">
			<div className="w-[88%] max-w-[1280px] mx-auto flex items-center justify-between h-full">
				<div className="flex items-center justify-between">
					<Logo />
					<div className="hidden lg:flex items-center justify-end">
						{data?.header_left_menu.length > 0 &&
							data?.header_left_menu.map((item: any) => (
								<NavItems
									key={item.menu_label}
									menuText={item.menu_label}
									route={item.route_link}
									targetId={item.target_id}
									targetStripe={item.target_stripe}
									ctaMenu={item.cta_menu}
								/>
							))}
					</div>
				</div>

				<div className="block lg:hidden">
					<MobileNav menuList={data?.header_left_menu} actionList={data?.header_right_menu} />
				</div>

				<div className={`hidden lg:block`}>
					<ActionMenuList data={data?.header_right_menu} />
				</div>
			</div>
		</header>
	);
};

export default Header;
