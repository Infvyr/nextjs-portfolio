"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div>
					<p
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						My name is Vasile. I have been a front-end developer for 5 years. I have started my
						programming journey as Wordpress developer. Now I&apos;m in love with React and Next.js.
						In the future I see myself learning React Native or Flutter, because of my big interest
						in these technologies.
					</p>
					<p
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
						}}
					>
						I have studied computer science at Technical University of Moldova where I definitely
						fall in love with the front-end part of web development.
					</p>
					<p
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
						}}
					>
						I enjoy learning technologies I like. I love diving into React world and Next.js
						framework.
					</p>
					<p
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
						}}
					>
						Spending time working, improving, reading interesting front-end articles or watching new
						videos of popular teachers is something I enjoy a lot, as it is something I use for many
						hours daily. It allows me to be familiar with cutting-edge technologies and save time
						when I start some project.
					</p>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
