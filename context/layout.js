"use client";

import { createContext, useRef, useState } from "react";
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
			<div>{children}</div>
		</LayoutContext.Provider>
	);
}
