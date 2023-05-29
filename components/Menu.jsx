"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useScrollTo } from "hooks";
import { BsArrowReturnLeft } from "react-icons/bs";
import { initial, animate, exit, transition } from "utils";
import { menu, SiteRoutes, SiteStrings } from "constants";

export function Menu({ onClick = () => {} }) {
	let content, mainMenu, backMenu;
	const pathname = usePathname();
	const { scrollToEl } = useScrollTo();

	const sortAscending = (a, b) => a.id - b.id;

	const handleOnClick = (e) => {
		scrollToEl(e);
		window.setTimeout(() => onClick(), 350);
	};

	mainMenu = (
		<m.nav initial={initial} animate={animate} exit={exit} transition={transition} role="menu">
			<ul className="flex justify-center gap-5 flex-col md:flex-row items-start md:items-center">
				{menu?.sort(sortAscending).map((menuItem) => (
					<li key={menuItem.id}>
						<a
							href={menuItem.url}
							title={menuItem.name}
							onClick={handleOnClick}
							className="relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
						>
							{menuItem.name}
						</a>
					</li>
				))}
			</ul>
		</m.nav>
	);

	backMenu = (
		<m.div initial={initial} animate={animate} exit={exit} transition={transition}>
			<Link
				href={SiteRoutes?.home}
				title={SiteStrings?.backToMainPageTitle}
				className="icon-link-btn"
			>
				<span>
					<BsArrowReturnLeft />
				</span>
				{SiteStrings?.backToMainText}
			</Link>
		</m.div>
	);

	content = pathname === SiteRoutes?.projects ? backMenu : mainMenu;

	if (menu?.length === 0) {
		return null;
	}

	return <LazyMotion features={domAnimation}>{content}</LazyMotion>;
}
