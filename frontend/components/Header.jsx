"use client";

import { Container, Flex, useMediaQuery } from "@chakra-ui/react";
import { Logo, Menu, MobileMenu, ColorMode, ConnectMedia } from "components";

export function AppHeader() {
	const [isMobile] = useMediaQuery("(max-width: 767px)");

	return (
		<Flex as="header" py={[2, 5]} pos="sticky" top={0} bg="inherit" boxShadow="sm" zIndex={10}>
			<Container maxW="container.xl">
				<Flex justify="space-between" align="center" flexWrap="wrap">
					<Logo />
					{isMobile ? <MobileMenu /> : <Menu />}
					<Flex align="center" gap={2}>
						{!isMobile && <ConnectMedia />}
						<ColorMode />
					</Flex>
				</Flex>
			</Container>
		</Flex>
	);
}
