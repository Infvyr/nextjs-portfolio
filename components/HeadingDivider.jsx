"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Flex, Heading as Heading } from "@chakra-ui/react";
import { initial, animate, exit, transition } from "util/motions";

export function HeadingDivider({ title = "" }) {
	return (
		<Flex as="header" alignItems="center">
			<LazyMotion features={domAnimation}>
				<Heading
					as={m.h2}
					display="flex"
					alignItems="center"
					gap={4}
					pos="relative"
					w="100%"
					textTransform="uppercase"
					tabIndex="0"
					sx={{
						"&:after": {
							content: '""',
							backgroundImage: "inherit",
							height: "1px",
							flex: 1
						}
					}}
					initial={initial}
					animate={animate}
					exit={exit}
					transition={transition}
				>
					{title}
				</Heading>
			</LazyMotion>
		</Flex>
	);
}
