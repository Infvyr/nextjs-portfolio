"use client";

import { useEffect, useRef, useState } from "react";
import { List, ListItem, Heading, Flex, Text, useColorMode } from "@chakra-ui/react";

const TimeLineData = [
	{ year: 2017, text: "Start my journey as a WordPress developer" },
	{ year: 2018, text: "Work as a WordPress developer" },
	{ year: 2021, text: "Dive completely into React.js" },
	{ year: 2022, text: "Start my journey as a React developer" }
];

export function TimeLine() {
	const { colorMode } = useColorMode();
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: "smooth" });
	};

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<List
			ref={carouselRef}
			onScroll={handleScroll}
			display="flex"
			justifyContent="space-between"
			gap={5}
			overflowX="auto"
			scrollSnapType="x mandatory"
			cursor="all-scroll"
			sx={{
				"&": {
					scrollbarWidth: "none"
				},
				"&::-webkit-scrollbar": {
					display: "none"
				}
			}}
		>
			<>
				{TimeLineData.map((item, index) => {
					return (
						<ListItem
							key={index}
							w={["calc((100% / 2) - 30px)", "calc(100% / 4)", "calc(100% / 6)"]}
							scrollSnapAlign="start"
						>
							<Flex
								index={index}
								id={`carousel__item-${index}`}
								active={activeItem}
								onClick={(e) => handleClick(e, index)}
								flexDirection="column"
								gap={3}
							>
								<Heading as="h3" fontSize="2xl" display="flex" gap={4} alignItems="center">
									{`${item.year}`}
									<svg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										xmlns="http://www.w3.org/2000/svg"
										fill={colorMode === "dark" ? "#fff" : "#232323"}
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
											fillOpacity="0.5"
										/>
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="-4.30412e-10"
												y1="0.5"
												x2="208"
												y2="0.500295"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#fff" />
												<stop offset="0.79478" stopColor="#fff" stopOpacity="0" />
											</linearGradient>
										</defs>
									</svg>
								</Heading>
								<Text letterSpacing="0.02em" fontSize="sm">
									{item.text}
								</Text>
							</Flex>
						</ListItem>
					);
				})}
			</>
		</List>
	);
}
