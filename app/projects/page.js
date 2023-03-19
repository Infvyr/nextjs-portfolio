"use client";

import { useState } from "react";
import useSWR from "swr";
import { ErrorBoundary } from "react-error-boundary";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { ProjectItem } from "app/sections/project/ProjectItem";
import { Filter } from "./components/Filter";
import { fetcher } from "util/fetcher";
import Error from "../error";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_ALL_PROJECTS}`;

export default function Page() {
	const [category, setCategory] = useState();
	const filterUrl = `${process.env.NEXT_PUBLIC_SANITY_URL}?query=*%5B_type%20%3D%3D%20%22projects%22%20%26%26%20category%5B0%5D-%3Etitle%20%3D%3D%20%22${category}%22%5D%7B%0A%20%20_id%2C%0A%20%20createdAt%2C%0A%20%20%22category%22%3A%20category%5B0%5D-%3Etitle%2C%0A%20%20description%2C%0A%20%20title%2C%0A%20%20%22poster%22%3A%20poster.asset-%3Eurl%2C%0A%20%20liveUrl%2C%0A%20%20repoUrl%2C%0A%20%20%22images%22%3A%20images%5B%5D.asset-%3Eurl%2C%0A%20%20%22stack%22%3A%20stack%5B%5D-%3Etitle%0A%7D%20%7C%20order(createdAt%20desc)`;

	const fetchUrl = category ? filterUrl : url;
	const { data: filteredProjs } = useSWR(fetchUrl, fetcher);
	const filteredProjects = filteredProjs?.result;

	const onClick = (catName) => setCategory(catName);

	return (
		<Box as="section" id="projects" className="section">
			<HeadingDivider title="Relevant projects" />

			<Filter onClick={onClick} />

			<ErrorBoundary FallbackComponent={Error}>
				<SimpleGrid spacingY={10} spacingX={6} columns={[1, 1, 3]}>
					{filteredProjects
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						?.map((project) => (
							<ProjectItem key={project._id} project={project} />
						))}
				</SimpleGrid>
			</ErrorBoundary>
		</Box>
	);
}
