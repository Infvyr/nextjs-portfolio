"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";

export function HeadingDivider({ title = "" }) {
	return (
		<header className="flex items-center">
			<LazyMotion features={domAnimation}>
				<m.h2
					tabIndex="0"
					initial={initial}
					animate={animate}
					exit={exit}
					transition={transition}
					className="heading-divider"
				>
					{title}
				</m.h2>
			</LazyMotion>
		</header>
	);
}
