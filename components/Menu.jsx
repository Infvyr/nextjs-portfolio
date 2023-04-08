"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useScrollTo } from "hooks";
import { BsArrowReturnLeft } from "react-icons/bs";
import { initial, animate, exit, transition } from "util/motions";

const MenuItems = [
	{ id: "0", name: "Introduction", url: "#intro" },
	{ id: "1", name: "About", url: "#about" },
	{ id: "2", name: "Projects", url: "#projects" },
	{ id: "3", name: "Tech", url: "#tech" }
];

export function Menu({ onClick = () => {} }) {
	let content, mainMenu, backMenu;
	const pathname = usePathname();
	const { scrollToEl } = useScrollTo();

	const sortCallback = (a, b) => a.id - b.id;

	const handleOnClick = (e) => {
		scrollToEl(e);

		window.setTimeout(() => {
			onClick();
		}, 350);
	};

	mainMenu = (
		<m.div initial={initial} animate={animate} exit={exit} transition={transition} role="menu">
			<div>
				{MenuItems.sort(sortCallback).map((menuItem) => (
					<div key={menuItem.id}>
						<a href={menuItem.url} title={menuItem.name} onClick={handleOnClick}>
							{menuItem.name}
						</a>
					</div>
				))}
			</div>
		</m.div>
	);

	backMenu = (
		<m.div initial={initial} animate={animate} exit={exit} transition={transition}>
			<Link href="/" title="Back to main page" tabIndex={-1}>
				<button aria-label="Go to main page">
					<span>
						<BsArrowReturnLeft />
					</span>
					Back to main
				</button>
			</Link>
		</m.div>
	);

	content = pathname === "/projects" ? backMenu : mainMenu;

	if (MenuItems.length === 0) {
		return null;
	}

	return <LazyMotion features={domAnimation}>{content}</LazyMotion>;
}
