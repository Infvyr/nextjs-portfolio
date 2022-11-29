"use client";

import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { Carousel } from "./Carousel";
import { ProjectItem } from "./ProjectItem";
import { projects } from "data/projects";
import Link from "next/link";

export function ProjectsSection() {
	return (
		<Box as="section" id="projects" className="section">
			<HeadingDivider title="Latest projects" />
			<Box py={8} />

			{!!projects.length && (
				<SimpleGrid spacingY={10} spacingX={6} columns={[1, 1, 3]}>
					{projects
						.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						.map((project) => <ProjectItem key={project.title} project={project} />)
						.slice(0, 3)}
				</SimpleGrid>
			)}

			<Center mt={[8, 8, 16]}>
				<Link href="/projects" tabIndex={-1} aria-label="Go to project page">
					<Button aria-label="See more projects">More projects</Button>
				</Link>
			</Center>
		</Box>
	);
}
