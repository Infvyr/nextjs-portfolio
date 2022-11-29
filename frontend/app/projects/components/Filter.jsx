import { Flex, Button, Heading, HStack } from "@chakra-ui/react";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export function Filter({ onClick = (f) => f }) {
	return (
		<Flex py={8} gap={3} alignItems="center">
			<Heading as="h3" fontSize="xl">
				Filter by:
			</Heading>
			<HStack>
				<Button variant="outline" onClick={() => onClick(undefined)}>
					All
				</Button>
				<Button variant="outline" onClick={() => onClick("React")}>
					<FaReact size="20" />
				</Button>
				<Button variant="outline" onClick={() => onClick("Next")}>
					<TbBrandNextjs size="20" />
				</Button>
				<Button variant="outline" onClick={() => onClick("Javascript")}>
					<TbBrandJavascript size="20" />
				</Button>
			</HStack>
		</Flex>
	);
}
