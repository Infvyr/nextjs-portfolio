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
				className="flex items-center gap-4 my-5"
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
			>
				<h3 aria-label="Filter projects" tabIndex="0">
					Filter by:
				</h3>
				<div className="flex items-center gap-4">
					<button
						className="icon-link-btn"
						onClick={() => onClick(undefined)}
						aria-label="Show all projects"
					>
						All
					</button>
					<button
						className="icon-link-btn"
						onClick={() => onClick("React")}
						aria-label="Filter projects by react"
					>
						<FaReact size="20" />
					</button>
					<button
						className="icon-link-btn"
						onClick={() => onClick("Next")}
						aria-label="Filter projects by next"
					>
						<TbBrandNextjs size="20" />
					</button>
					<button
						className="icon-link-btn"
						onClick={() => onClick("Javascript")}
						aria-label="Filter projects by javascript"
					>
						<TbBrandJavascript size="20" />
					</button>
				</div>
			</div>
		</LazyMotion>
	);
}
