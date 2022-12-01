"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";
import { ConnectMedia } from "components";

export function AppFooter() {
	const year = new Date().getFullYear();
	const animRef = useRef(null);
	const isInView = useInView(animRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<Box
				as="footer"
				py={10}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				flexDirection={["column", "row"]}
				gap={5}
				borderTop="1px solid currentColor"
				ref={animRef}
				sx={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
				}}
			>
				<Text>Copyright &copy; {year} Vasile Novatchii</Text>
				<ConnectMedia />
			</Box>
		</LazyMotion>
	);
}
