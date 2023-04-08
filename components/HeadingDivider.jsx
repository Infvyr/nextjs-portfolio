"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "util/motions";

export function HeadingDivider({ title = "" }) {
	return (
		<div>
			<LazyMotion features={domAnimation}>
				<m.h3 tabIndex="0" initial={initial} animate={animate} exit={exit} transition={transition}>
					{title}
				</m.h3>
			</LazyMotion>
		</div>
	);
}
