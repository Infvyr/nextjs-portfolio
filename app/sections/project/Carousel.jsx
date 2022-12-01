"use client";

import React, { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "./carousel.module.css";

export function Carousel(props) {
	const { children, show } = props;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [length, setLength] = useState(children.length);

	const [touchPosition, setTouchPosition] = useState(null);

	// Set the length to match current children from props
	useEffect(() => {
		setLength(children.length);
	}, [children]);

	const next = () => {
		if (currentIndex < length - show) {
			setCurrentIndex((prevState) => prevState + 1);
		}
	};

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	const handleTouchStart = (e) => {
		const touchDown = e.touches[0].clientX;
		setTouchPosition(touchDown);
	};

	const handleTouchMove = (e) => {
		const touchDown = touchPosition;

		if (touchDown === null) {
			return;
		}

		const currentTouch = e.touches[0].clientX;
		const diff = touchDown - currentTouch;

		if (diff > 5) {
			next();
		}

		if (diff < -5) {
			prev();
		}

		setTouchPosition(null);
	};

	return (
		<Box display="flex" w="100%" pos="relative">
			<Button
				variant="ghost"
				onClick={prev}
				pos="absolute"
				top={[-8, -8, -8, -8, "50%"]}
				transform="translateY(-50%)"
				width={[8, 12]}
				height={[8, 12]}
				zIndex={1}
				left={[
					"calc(100% - 90px)",
					"calc(100% - 108px)",
					"calc(100% - 138px)",
					"calc(100% - 138px)",
					0
				]}
				className={styles.arrow}
				disabled={!(currentIndex > 0)}
			>
				<FaAngleLeft />
			</Button>

			<Box
				w="100%"
				h="100%"
				overflow="hidden"
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
			>
				<Box
					className={`${styles["carousel-content"]} ${styles[`show-${show}`]}`}
					sx={{
						// transform: `translateX(-${currentIndex * (100 / show)}%)`,
						"@media (min-width: 480px)": {
							transform: `translateX(-${currentIndex * (100 / show)}%)`
						}
					}}
				>
					{children}
				</Box>
			</Box>

			<Button
				variant="ghost"
				onClick={next}
				pos="absolute"
				top={[-8, -8, -8, -8, "50%"]}
				transform="translateY(-50%)"
				width={[8, 12]}
				height={[8, 12]}
				zIndex={1}
				right={[0, 0, "24px", "24px", 0]}
				className={styles.arrow}
				disabled={!(currentIndex < length - show)}
			>
				<FaAngleRight />
			</Button>
		</Box>
	);
}
