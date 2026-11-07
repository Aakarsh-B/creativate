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
		<header className="fixed inset-x-0 top-0 z-[99] px-[12px] pt-[12px] lg:pt-[16px]">
			<div className="mx-auto flex h-[60px] lg:h-[68px] w-full max-w-[1320px] items-center justify-between rounded-full border border-white/10 bg-primaryDark/70 pl-[20px] pr-[8px] lg:pl-[28px] backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
				<Logo />

				<nav className="hidden lg:flex items-center gap-[4px]">
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
				</nav>

				<div className="block lg:hidden">
					<MobileNav
						menuList={data?.header_left_menu}
						actionList={data?.header_right_menu}
					/>
				</div>

				<div className={`hidden lg:block`}>
					<ActionMenuList data={data?.header_right_menu} />
				</div>
			</div>
		</header>
	);
};

export default Header;
