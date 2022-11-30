"use client";

import { Heading } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const logoText = "@Vasile";

export function Logo() {
	const pathname = usePathname();

	return (
		<Heading as="h3" size="md" fontSize={["15px", "25px"]}>
			{pathname === "/projects" ? (
				<Link href="/" aria-label="Go to main page" role="link">
					{logoText}
				</Link>
			) : (
				logoText
			)}
		</Heading>
	);
}
