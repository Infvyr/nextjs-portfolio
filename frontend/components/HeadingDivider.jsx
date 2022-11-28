"use client";

import { Flex, Heading as Heading } from "@chakra-ui/react";

export function HeadingDivider({ title = "" }) {
	return (
		<Flex as="header" alignItems="center">
			<Heading
				as="h2"
				display="flex"
				alignItems="center"
				gap={4}
				pos="relative"
				w="100%"
				textTransform="uppercase"
				sx={{
					"&:after": {
						content: '""',
						backgroundImage: "inherit",
						height: "1px",
						flex: 1
					}
				}}
			>
				{title}
			</Heading>
		</Flex>
	);
}
