"use client";

import { Button, SlideFade, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

export function ColorMode() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			variant="ghost"
			onClick={toggleColorMode}
			sx={{ "&": { position: "relative" }, "&:hover": { bgColor: "transparent" } }}
			title={`Switch color mode to ${colorMode === "light" ? "dark" : "light"}`}
		>
			<SlideFade
				offsetY="20px"
				offsetX="20px"
				in={colorMode === "light"}
				style={{
					position: "absolute"
				}}
			>
				<BsMoon />
			</SlideFade>
			<SlideFade
				offsetY="20px"
				offsetX="-20px"
				in={colorMode === "dark"}
				style={{
					position: "absolute"
				}}
			>
				<BsSun />
			</SlideFade>
		</Button>
	);
}
