"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "util/motions";

const logoText = "@Vasile";

export function Logo() {
	const pathname = usePathname();

	return (
		<LazyMotion features={domAnimation}>
			<m.h3 initial={initial} animate={animate} exit={exit} transition={transition}>
				{pathname === "/projects" ? (
					<Link href="/" aria-label="Go to main page" role="link">
						{logoText}
					</Link>
				) : (
					logoText
				)}
			</m.h3>
		</LazyMotion>
	);
}
