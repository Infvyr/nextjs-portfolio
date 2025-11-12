"use client";

import { ConnectMedia, MobileMenu } from "components";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
// import { MobileMenu } from "./MobileMenu";
import { useMediaQuery } from "utils";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function AppHeader() {
	const isMobile = useMediaQuery();

	return (
		<header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm">
			<div className="container-md">
				<div className="flex justify-between items-center gap-3">
					<Logo />
					{isMobile ? <MobileMenu /> : <Menu />}
					<div className="flex items-center gap-5">
						{!isMobile && <ConnectMedia />}
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
