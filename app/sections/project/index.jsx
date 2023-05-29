import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

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
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>

					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
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
		</LazyMotion>
	);
}
