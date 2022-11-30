"use client";

import { useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
		alert("I have an error" + error);
	}, [error]);

	return (
		<Flex gap={5} direction="column" alignItems="center">
			<Text colorScheme="red.500">Something went wrong!</Text>
			<Button onClick={() => reset()} colorScheme="red.500">
				Retry
			</Button>
		</Flex>
	);
}
