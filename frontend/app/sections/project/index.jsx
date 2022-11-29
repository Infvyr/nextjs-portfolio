"use client";

import { Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
import { HeadingDivider, Loader } from "components";
import { ProjectItem } from "./ProjectItem";
import { fetcher } from "util/fetcher";

const DynamicLoader = dynamic(() => import("components/Loader").then((mod) => mod.Loader));

const url = process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS;

export function ProjectsSection() {
	const { data, error } = useSWR(url, fetcher, { suspense: true });
	const projects = data?.result;

	if (error && !data) {
		return null
	}

	return (
		<Box as="section" id="projects" className="section">
			<HeadingDivider title="Latest projects" />
			<Box py={8} />

			<Suspense fallback={<DynamicLoader width="100%" />}>
				<SimpleGrid spacingY={10} spacingX={6} columns={[1, 1, 3]}>
					{projects
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						?.map((project) => (
							<ProjectItem key={project._id} project={project} />
						))}
				</SimpleGrid>
			</Suspense>

			<Center mt={[8, 8, 16]}>
				<Link href="/projects" tabIndex={-1} aria-label="Go to project page">
					<Button aria-label="See more projects">More projects</Button>
				</Link>
			</Center>
		</Box>
	);
}
