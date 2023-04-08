"use client";

import { Logo, Menu, ColorMode, ConnectMedia, MobileMenu } from "components";
import { useMediaQuery } from "../utils";

export function AppHeader() {
	const isMobile = useMediaQuery();

	return (
		<header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center gap-3">
					<Logo />
					{isMobile ? <MobileMenu /> : <Menu />}
					<div className="flex items-center gap-5">
						<ConnectMedia />
						<ColorMode />
					</div>
				</div>
			</div>
		</header>
	);
}
