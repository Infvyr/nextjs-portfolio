"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	return (
		<Box as="section" id="about" className="section">
			<HeadingDivider title="About me" />
			<Flex direction="column" gap={3} pt={10} pb={16} maxW="5xl">
				<Text fontSize="xl" tabIndex="0">
					My name is Vasile. I have been a front-end developer for 5 years. I have started my
					programming journey as Wordpress developer. Now I&apos;m in love with React and Next.js.
					In the future I see myself learning React Native or Flutter, because of my big interest in
					these technologies.
				</Text>
				<Text fontSize="xl" tabIndex="0">
					I have studied computer science at Technical University of Moldova where I definitely fall
					in love with the front-end part of web development.
				</Text>
				<Text fontSize="xl" tabIndex="0">
					I enjoy learning technologies I like. I love diving into React world and Next.js
					framework.
				</Text>
				<Text fontSize="xl" tabIndex="0">
					Spending time working, improving, reading interesting front-end articles or watching new
					videos of popular teachers is something I enjoy a lot, as it is something I use for many
					hours daily. It allows me to be familiar with cutting-edge technologies and save time when
					I start some project.
				</Text>
			</Flex>

			<TimeLine />
		</Box>
	);
}
