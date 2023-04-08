"use client";

import { Logo, Menu, ColorMode, ConnectMedia } from "components";

export function AppHeader() {
	return (
		<divx>
			<div>
				<div>
					<Logo />
					<Menu />
					<div>
						<ConnectMedia />
						<ColorMode />
					</div>
				</div>
			</div>
		</divx>
	);
}
