"use client";

import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useScrollTo, useScrollTop } from "hooks";
import { IoIosArrowDropup } from "react-icons/io";

export function ScrollTop() {
	const { scrollToEl } = useScrollTo();
	const { position } = useScrollTop();

	const onClick = (e) => {
		scrollToEl(e);
	};

	return (
		<Button
			aria-label="Scroll to top"
			variant="ghost"
			pos={position}
			right="0"
			bottom="1.7rem"
			zIndex="100"
			title="Scroll to top"
			onClick={onClick}
		>
			<Link href="#intro" onClick={onClick}>
				<IoIosArrowDropup size={28} />
			</Link>
		</Button>
	);
}
