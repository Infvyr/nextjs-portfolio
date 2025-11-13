import { HeadingDivider } from "components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							I'm a results-oriented Flutter and Frontend Developer with over 7 yrs of combined
							experience in building and maintaining high-quality, cross-platform mobile and web
							applications. His technical expertise spans Flutter, React, and Next.js, with a strong
							focus on developing responsive interfaces and ensuring seamless collaboration between
							design and backend teams. He has proven success in migrating production apps from
							React Native, integrating real-time communication through FCM and Ably, and
							contributing to complex products such as a dating platform and a digital wallet.
						</p>
						<p className="my-3.5">
							I graduated from the Technical University of Moldova with a degree in Computer
							Science, where his passion for web programming first took shape. During my studies, I
							immersed mymself in learning modern technologies, constantly expanding his skills and
							exploring new programming concepts to stay ahead in a fast-evolving industry.
						</p>
						<p>
							My professional journey officially began in 2017 as a WordPress developer. This early
							stage honed my understanding of web architecture and UI implementation, while
							nurturing my curiosity for scalable, maintainable code. My enthusiasm for modern
							frontend development led me to learn React & Next.js, where I quickly discovered the
							speed and flexibility of building dynamic interfaces.
						</p>
						<p className="my-3.5">
							In December 2022, I transitioned into a role focused on React development, which soon
							opened the door to mobile app development with Flutter - a move that reshaped my
							career. Initially hesitant, I embraced the challenge and found a new passion for
							building performant, elegant, and maintainable mobile experiences. Today, I continue
							to push for clean architecture, scalability, and accessibility in every project I
							undertake.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
