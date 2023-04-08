"use client";

import { BsMoon, BsSun } from "react-icons/bs";

export function ColorMode() {
	const colorMode = "light";

	return (
		<button
			onClick={() => {}}
			title={`Switch color mode to ${colorMode === "light" ? "dark" : "light"}`}
		>
			<div>
				<BsMoon />
			</div>
			<div>
				<BsSun />
			</div>
		</button>
	);
}
