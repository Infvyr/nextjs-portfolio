"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";
import { socialMedia } from "../constants";

export function ConnectMedia() {
	if (socialMedia.length === 0) {
		return null;
	}

	return (
		<LazyMotion features={domAnimation}>
			<m.nav role="menu" initial={initial} animate={animate} exit={exit} transition={transition}>
				<ul className="flex items-center gap-5">
					{socialMedia.map((item) => (
						<li key={item.id}>
							<a
								href={item.url}
								target="_blank"
								aria-label={item.title}
								className="text-2xl relative group flex"
							>
								{item.icon}
								<span
									className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max"
								>
									{item.title}
								</span>
							</a>
						</li>
					))}
				</ul>
			</m.nav>
		</LazyMotion>
	);
}
