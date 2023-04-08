"use client";

import { useRef } from "react";
import { BsGrid } from "react-icons/bs";

export function MobileMenu() {
	const btnRef = useRef();

	return (
		<>
			<button ref={btnRef} onClick={() => {}} title="Menu">
				<BsGrid />
			</button>
		</>
	);
}
