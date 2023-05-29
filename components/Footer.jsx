"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { ConnectMedia, ScrollTop } from "components";

export function AppFooter() {
	const footerRef = useRef(null);
	const isInView = useInView(footerRef, { once: true });
	const year = new Date().getFullYear();

	return (
		<LazyMotion features={domAnimation}>
			<footer
				ref={footerRef}
				className="container-md py-10 mt-5 relative before:absolute before:top-0 before:left-4 before:w-[calc(100%-16px)] before:h-[1px] before:bg-gray-100"
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
				}}
			>
				<div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
					<p className="font-light">Copyright &copy; {year} Vasile Novatchii</p>
					<ScrollTop />
					<ConnectMedia />
				</div>
			</footer>
		</LazyMotion>
	);
}
