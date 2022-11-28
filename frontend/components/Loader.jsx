"use client";

import { Center, Flex, Spinner, Text } from "@chakra-ui/react";

export function Loader({ width = "100vw" }) {
	return (
		<Center width={width} minHeight="calc(100vh - 90px - 110px)">
			<Flex direction="column">
				<Spinner width="60px" height="60px" />
				<Text>Loading...</Text>
			</Flex>
		</Center>
	);
}
