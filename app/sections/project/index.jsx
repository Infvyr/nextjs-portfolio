"use client";

import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { HeadingDivider } from "components";
import { ProjectItem } from "./ProjectItem";
import { fetcher } from "utils/fetcher";

const DynamicLoader = dynamic(() => import("components/Loader").then((mod) => mod.Loader));

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	const { data, error } = useSWR(url, fetcher);
	const projects = data?.result;

	if (error && !data) {
		return null;
	}

	return (
		<section id="projects" className="section">
			<HeadingDivider title="Latest projects" />
			<div />

			<Suspense fallback={<DynamicLoader width="100%" />}>
				<div>
					{projects
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						?.map((project, index) => (
							<ProjectItem key={project._id} project={project} index={index} />
						))}
				</div>
			</Suspense>

			<div>
				<Link
					href="/projects"
					tabIndex={-1}
					aria-label="Go to project page"
					ref={btnRef}
					style={{
						transform: btnRef ? "none" : "translateX(-50px)",
						opacity: isBtnInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					<button aria-label="See more projects">More projects</button>
				</Link>
			</div>
		</section>
	);
}
