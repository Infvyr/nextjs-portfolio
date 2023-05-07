import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export function Filter({ onClick = (f) => f }) {
	const animRef = useRef(null);
	const isInView = useInView(animRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<div
				ref={animRef}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
			>
				<h3 aria-label="Filter projects" tabIndex="0">
					Filter by:
				</h3>
				<div>
					<button onClick={() => onClick(undefined)} aria-label="Show all projects">
						All
					</button>
					<button onClick={() => onClick("React")} aria-label="Filter projects by react">
						<FaReact size="20" />
					</button>
					<button onClick={() => onClick("Next")} aria-label="Filter projects by next">
						<TbBrandNextjs size="20" />
					</button>
					<button onClick={() => onClick("Javascript")} aria-label="Filter projects by javascript">
						<TbBrandJavascript size="20" />
					</button>
				</div>
			</div>
		</LazyMotion>
	);
}
