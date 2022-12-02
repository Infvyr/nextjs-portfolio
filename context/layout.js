"use client";

import { createContext, useRef, useState } from "react";
import { Container } from "@chakra-ui/react";
import { useInView } from "framer-motion";

export const LayoutContext = createContext(null);

export function LayoutProvider({ children }) {
	const introRef = useRef(null);
	const footerRef = useRef(null);
	const [introHeight, setIntroHeight] = useState(0);
	const isFooterInView = useInView(footerRef);

	return (
		<LayoutContext.Provider
			value={{ introRef, introHeight, setIntroHeight, footerRef, isFooterInView }}
		>
			<Container maxW="container.xl">{children}</Container>
		</LayoutContext.Provider>
	);
}
