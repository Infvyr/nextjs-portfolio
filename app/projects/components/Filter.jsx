import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Flex, Button, Heading, HStack } from "@chakra-ui/react";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export function Filter({ onClick = (f) => f }) {
	const animRef = useRef(null);
	const isInView = useInView(animRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<Flex
				py={8}
				gap={3}
				alignItems="center"
				ref={animRef}
				sx={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
			>
				<Heading as="h3" fontSize="xl" aria-label="Filter projects" tabIndex="0">
					Filter by:
				</Heading>
				<HStack>
					<Button
						variant="outline"
						onClick={() => onClick(undefined)}
						aria-label="Show all projects"
					>
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
		</LazyMotion>
	);
}
