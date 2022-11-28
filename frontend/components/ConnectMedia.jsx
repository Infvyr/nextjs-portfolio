"use client";

import { BsLinkedin, BsGithub, BsFillEnvelopeOpenFill } from "react-icons/bs";
import { Box, Link as ChakraLink } from "@chakra-ui/react";

const MediaIcons = [
	{
		id: "linkedin",
		icon: <BsLinkedin />,
		title: "Visit my LinkedIn profile",
		url: "https://www.linkedin.com/in/vasile-novatchii"
	},
	{
		id: "github",
		icon: <BsGithub />,
		title: "Visit my Github profile",
		url: "https://github.com/Infvyr"
	},
	{
		id: "mail",
		icon: <BsFillEnvelopeOpenFill />,
		title: "Send me an email",
		url: "mailto://vnovatchi@gmail.com"
	}
];

export function ConnectMedia() {
	if (MediaIcons.length === 0) {
		return null;
	}

	return (
		<Box as="nav" role="menu">
			<Box as="ul" listStyleType="none" display="flex" align="center" gap={5}>
				{MediaIcons.map((item) => (
					<Box as="li" key={item.id}>
						<ChakraLink
							href={item.url}
							target="_blank"
							title={item.title}
							fontSize={["15px", "20px"]}
							textDecoration="none !important"
							pos="relative"
						>
							{item.icon}
						</ChakraLink>
					</Box>
				))}
			</Box>
		</Box>
	);
}
