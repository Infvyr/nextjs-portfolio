"use client";

import Link from "next/link";
import { useScrollTo, useScrollTop } from "hooks";
import { IoIosArrowDropup } from "react-icons/io";

export function ScrollTop() {
	const { scrollToEl } = useScrollTo();
	const { position } = useScrollTop();

	const onClick = (e) => {
		scrollToEl(e);
	};

	return (
		<button aria-label="Scroll to top" title="Scroll to top" onClick={onClick}>
			<Link href="#intro" onClick={onClick}>
				<IoIosArrowDropup size={28} />
			</Link>
		</button>
	);
}
