import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "context/layout";

export function useScrollTop() {
	const [position, setPosition] = useState("static");
	const { introHeight, isFooterInView } = useContext(LayoutContext);

	useEffect(() => {
		const toggleVisibility = () => {
			const isVisibleScrollTopBtn = window.scrollY > introHeight && !isFooterInView;

			if (isVisibleScrollTopBtn) {
				setPosition("fixed");
			} else {
				setPosition("static");
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, [introHeight, isFooterInView]);

	return { position };
}
