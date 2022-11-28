"use client";

import { Box, Text } from "@chakra-ui/react";
import { ConnectMedia } from "components";

export function AppFooter() {
	const year = new Date().getFullYear();

	return (
		<Box
			as="footer"
			py={10}
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			flexDirection={["column", "row"]}
			gap={5}
			borderTop="1px solid currentColor"
		>
			<Text>Copyright &copy; {year} Vasile Novatchii</Text>
			<ConnectMedia />
		</Box>
	);
}
