"use client";

import { useContext } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ConnectMedia, ScrollTop } from "components";
import { LayoutContext } from "context/layout";

export function AppFooter() {
	const { footerRef } = useContext(LayoutContext);
	const year = new Date().getFullYear();

	return (
		<LazyMotion features={domAnimation}>
			<footer ref={footerRef}>
				<p>Copyright &copy; {year} Vasile Novatchii</p>
				<ScrollTop />
				<ConnectMedia />
			</footer>
		</LazyMotion>
	);
}
