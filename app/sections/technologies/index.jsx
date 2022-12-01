"use client";

import { Fragment, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Heading, SimpleGrid, Flex, Text, Tooltip } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

const Technologies = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> }
		]
	},
	{
		category: "UI packages",
		items: [
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Chakra", icon: <ChakraIcon width={32} /> },
			{ name: "styled components", icon: <StyledIcon width={32} /> },
			{ name: "HeadlessUI", icon: <HeadlessUiIcon width={32} /> }
		]
	},
	{
		category: "UI tools",
		items: [
			{ name: "Figma", icon: <FaFigma size={32} /> },
			{ name: "Zeplin", icon: <ZeplinIcon width={36} /> },
			{ name: "XD", icon: <AdobeXDIcon width={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "WordPress CMS", icon: <FaWordpressSimple size={32} /> },
			{ name: "Jira", icon: <JiraIcon width={32} /> },
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "WebStorm", icon: <WebstormIcon width={32} /> }
		]
	}
];

export function TechnologiesSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<Box as="section" id="tech" className="section">
				<HeadingDivider title="Technologies" />
				<Text
					fontSize="xl"
					pt={5}
					pb={10}
					tabIndex="0"
					ref={textRef}
					style={{
						transform: isTextInView ? "none" : "translateX(-200px)",
						opacity: isTextInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					I work with the following technologies and tools:
				</Text>

				{!!Technologies.length && (
					<SimpleGrid columns={[1, null, 4]} spacing={[5, 10]}>
						{Technologies.map((tech, index) => {
							return (
								<Box
									key={tech.category}
									ref={stackRef}
									sx={{
										transform: isStackInView
											? "none"
											: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
										opacity: isStackInView ? 1 : 0,
										transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
											index === 0 ? 0 : 0.5 * index
										}s`
									}}
								>
									<Heading as="h3" fontSize="2xl" tabIndex="0">
										{tech.category}
									</Heading>
									<Flex py={5} gap={4} flexWrap="wrap">
										{tech.items.map((item) => (
											<Fragment key={item.name}>
												<Tooltip label={item.name} hasArrow arrowSize={8}>
													<span aria-label={item.name} tabIndex="0" role="img">
														{item.icon}
													</span>
												</Tooltip>
											</Fragment>
										))}
									</Flex>
								</Box>
							);
						})}
					</SimpleGrid>
				)}
			</Box>
		</LazyMotion>
	);
}
