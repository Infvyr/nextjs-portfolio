"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";
import { SiteRoutes, SiteStrings } from "../constants";

export function Logo() {
	const pathname = usePathname();

	return (
		<LazyMotion features={domAnimation}>
			<m.h3
				className="text-xl md:text-2xl font-bold"
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				{pathname === SiteRoutes.projects ? (
					<Link href={SiteRoutes.home} aria-label="Go to home page" role="link">
						{SiteStrings.textLogo}
					</Link>
				) : (
					<>{SiteStrings.textLogo}</>
				)}
			</m.h3>
		</LazyMotion>
	);
}
