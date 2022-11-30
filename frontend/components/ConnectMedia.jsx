"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Box, Link } from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsFillEnvelopeOpenFill } from "react-icons/bs";
import { initial, animate, exit, transition } from "util/motions";

const MediaIcons = [
	{
		id: "linkedin",
		icon: <BsLinkedin />,
		title: "Visit LinkedIn profile",
		url: "https://www.linkedin.com/in/vasile-novatchii"
	},
	{
		id: "github",
		icon: <BsGithub />,
		title: "Visit Github profile",
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
		<LazyMotion features={domAnimation}>
			<Box
				as={m.nav}
				role="menu"
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				<Box as="ul" listStyleType="none" display="flex" align="center" gap={5}>
					{MediaIcons.map((item) => (
						<Box as="li" key={item.id}>
							<Link
								href={item.url}
								target="_blank"
								title={item.title}
								aria-label={item.title}
								fontSize={["15px", "20px"]}
								textDecoration="none !important"
								pos="relative"
								_focusVisible={{
									display: "block",
									boxShadow: "outline"
								}}
							>
								{item.icon}
							</Link>
						</Box>
					))}
				</Box>
			</Box>
		</LazyMotion>
	);
}
