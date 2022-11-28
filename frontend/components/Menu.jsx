"use client";

import { Box, Link as ChakraLink, Button, useMediaQuery } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useScrollTo } from "hooks/useScrollTo";
import { BsArrowReturnLeft } from "react-icons/bs";

const MenuItems = [
	{ id: "0", name: "Introduction", url: "#intro" },
	{ id: "1", name: "About", url: "#about" },
	{ id: "2", name: "Projects", url: "#projects" },
	{ id: "3", name: "Tech", url: "#tech" }
];

const linkCustomStyles = {
	"&:hover": {
		textUnderline: "none"
	},
	"&:after": {
		content: '""',
		position: "absolute",
		left: 0,
		bottom: "-3px",
		height: "2px",
		backgroundColor: "var(--chakra-colors-chakra-body-text)",
		width: 0,
		transition: "width 300ms ease-in-out"
	},
	"&:hover:after": {
		width: "100%"
	}
};

export function Menu({ onClick = () => {} }) {
	let content, mainMenu, backMenu;
	const pathname = usePathname();
	const [isMobile] = useMediaQuery("(max-width: 767px)");
	const { scrollToEl } = useScrollTo();

	const sortCallback = (a, b) => a.id - b.id;

	const handleOnClick = (e) => {
		scrollToEl(e);

		window.setTimeout(() => {
			onClick();
		}, 350);
	};

	mainMenu = (
		<Box as="nav" role="menu" flex={[1, 0]}>
			<Box
				as="ul"
				listStyleType="none"
				display="flex"
				align={isMobile ? "flex-start" : "center"}
				gap={5}
				flexDirection={isMobile ? "column" : "row"}
			>
				{MenuItems.sort(sortCallback).map((menuItem) => (
					<Box as="li" key={menuItem.id}>
						<ChakraLink
							href={menuItem.url}
							title={menuItem.name}
							fontSize={["15px", "20px"]}
							fontWeight="medium"
							textDecoration="none !important"
							pos="relative"
							sx={linkCustomStyles}
							onClick={handleOnClick}
						>
							{menuItem.name}
						</ChakraLink>
					</Box>
				))}
			</Box>
		</Box>
	);

	backMenu = (
		<Link href="/" title="Back to main page" tabIndex={-1}>
			<Button variant="ghost" leftIcon={<BsArrowReturnLeft />}>
				Back to main
			</Button>
		</Link>
	);

	content = pathname === "/projects" ? backMenu : mainMenu;

	if (MenuItems.length === 0) {
		return null;
	}

	return content;
}
