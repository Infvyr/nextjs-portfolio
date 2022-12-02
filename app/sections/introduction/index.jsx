"use client";

import { useEffect, useState, useRef, useContext } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import {
	Flex,
	GridItem,
	Button,
	Heading,
	Highlight,
	Grid,
	Text,
	useMediaQuery,
	useColorModeValue
} from "@chakra-ui/react";
import { WelcomeAnimation } from "./IntroAnimation";
import { useScrollTo } from "hooks";
import { LayoutContext } from "context/layout";

export function WelcomeSection() {
	const ref = useRef(null);
	const { introRef, setIntroHeight } = useContext(LayoutContext);
	const isInView = useInView(ref, { once: true });

	const { scrollToEl } = useScrollTo();
	const [isAnimationVisible] = useMediaQuery("(min-width: 768px)");
	const subTitleColor = useColorModeValue("blackAlpha.600", "whiteAlpha.600");
	const highlightColor = useColorModeValue("blue.500", "blue.500");

	let [count, setCount] = useState(0);
	const [text] = useState([
		"create modern UI based on your design,",
		"build interactive UI using React,",
		"develop responsive websites using Next.js."
	]);

	const onClick = (e) => {
		scrollToEl(e);
	};

	useEffect(() => {
		let interval = setInterval(() => {
			setCount(count + 1);

			if (count === 3) {
				setCount(0);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [count]);

	useEffect(() => {
		setIntroHeight(introRef.current?.offsetHeight);
	}, [introRef, setIntroHeight]);

	return (
		<LazyMotion features={domAnimation}>
			<Grid
				as="section"
				id="intro"
				className="section"
				gap={5}
				templateAreas={[`"content"`, `"content"`, `"content animation"`]}
				gridTemplateColumns={["1fr", "1fr", "1fr 0.5fr", "1fr 0.7fr"]}
				alignItems="center"
				ref={introRef}
			>
				<GridItem area="content" py={[0, 0, 10]}>
					<Heading
						as="h1"
						size={["xl", "2xl", "2xl", "2xl", "3xl"]}
						lineHeight="shorter !important"
						mr={[null, null, null, "-25%"]}
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<Highlight query={["passionate", "Vasile"]} styles={{ color: highlightColor }}>
							Hi, I&apos;m Vasile a passionate front-end developer.
						</Highlight>
					</Heading>

					<Flex direction="column" overflow="hidden" pos="relative" mt={3}>
						<Text
							fontSize={["lg", "x-large"]}
							tabIndex="0"
							ref={ref}
							sx={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							I
							<Text
								as="span"
								pos="absolute"
								top={count === 0 ? "0" : count === 1 ? "-100%" : count === 2 ? "-200%" : "0"}
								left={3}
								display="flex"
								flexDirection="column"
								transition="top .5s ease-in-out"
								tabIndex="0"
							>
								{text.map((element) => (
									<TextElement key={element} element={element} />
								))}
							</Text>
						</Text>
					</Flex>

					<Text
						fontSize={["md", "lg"]}
						color={subTitleColor}
						mt={3}
						mb={10}
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						Stick around to see some of my work.
					</Text>
					<Button
						aria-label="Latest projects"
						p="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateY(50px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
						}}
					>
						<Link
							href="#projects"
							onClick={onClick}
							style={{ display: "block", padding: "0 16px", lineHeight: "40px" }}
						>
							See my latest projects
						</Link>
					</Button>
				</GridItem>

				{isAnimationVisible && (
					<GridItem area="animation">
						<WelcomeAnimation />
					</GridItem>
				)}
			</Grid>
		</LazyMotion>
	);
}

function TextElement({ element }) {
	const firstWord = <b>{element.split(" ").at(0)}</b>;
	const restWords = element.split(" ").slice(1).join(" ");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<Text
			as="span"
			tabIndex="0"
			ref={ref}
			sx={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
		>
			{firstWord} {restWords}
		</Text>
	);
}
