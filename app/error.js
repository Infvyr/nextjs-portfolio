"use client";

import { useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<Flex gap={5} direction="column" alignItems="center">
			<Text color="red.200">Something went wrong!</Text>
			<Button onClick={() => reset()} variant="outline" colorScheme="red">
				Retry
			</Button>
		</Flex>
	);
}
