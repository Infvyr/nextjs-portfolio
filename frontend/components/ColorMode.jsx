"use client";

import { Button, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

export function ColorMode() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			bg="transparent"
			onClick={toggleColorMode}
			sx={{ "&:hover": { bgColor: "transparent" } }}
			title={`Switch color mode to ${colorMode === "light" ? "dark" : "light"}`}
		>
			{colorMode === "light" ? <BsMoon /> : <BsSun />}
		</Button>
	);
}
