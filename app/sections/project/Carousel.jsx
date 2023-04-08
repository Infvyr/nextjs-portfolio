"use client";

import React, { useEffect, useState } from "react";
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
		<div>
			<button onClick={prev} className={styles.arrow} disabled={!(currentIndex > 0)}>
				<FaAngleLeft />
			</button>

			<div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
				<div className={`${styles["carousel-content"]} ${styles[`show-${show}`]}`}>{children}</div>
			</div>

			<button onClick={next} className={styles.arrow} disabled={!(currentIndex < length - show)}>
				<FaAngleRight />
			</button>
		</div>
	);
}
