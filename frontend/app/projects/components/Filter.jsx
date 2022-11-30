import { Flex, Button, Heading, HStack } from "@chakra-ui/react";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export function Filter({ onClick = (f) => f }) {
	return (
		<Flex py={8} gap={3} alignItems="center">
			<Heading as="h3" fontSize="xl" aria-label="Filter projects" tabIndex="0">
				Filter by:
			</Heading>
			<HStack>
				<Button variant="outline" onClick={() => onClick(undefined)} aria-label="Show all projects">
					All
				</Button>
				<Button
					variant="outline"
					onClick={() => onClick("React")}
					aria-label="Filter projects by react"
				>
					<FaReact size="20" />
				</Button>
				<Button
					variant="outline"
					onClick={() => onClick("Next")}
					aria-label="Filter projects by next"
				>
					<TbBrandNextjs size="20" />
				</Button>
				<Button
					variant="outline"
					onClick={() => onClick("Javascript")}
					aria-label="Filter projects by javascript"
				>
					<TbBrandJavascript size="20" />
				</Button>
			</HStack>
		</Flex>
	);
}
