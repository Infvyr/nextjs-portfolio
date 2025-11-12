"use client";

import { AboutSection, ProjectsSection, TechnologiesSection, WelcomeSection } from "app/sections";

export default function Page() {
	return (
		<main className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<TechnologiesSection />
		</main>
	);
}
