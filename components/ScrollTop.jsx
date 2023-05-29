"use client";

import Link from "next/link";
import { useScrollTo } from "hooks";
import { IoIosArrowDropup } from "react-icons/io";

export function ScrollTop() {
	const { scrollToEl } = useScrollTo();

	const onClick = (e) => {
		scrollToEl(e);
	};

	return (
		<Link
			href="#intro"
			onClick={onClick}
			aria-label="Scroll to top"
			className="relative flex group"
		>
			<IoIosArrowDropup size={28} />
			<span
				className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max"
			>
				Scroll to top
			</span>
		</Link>
	);
}
