import { useEffect, useState } from "react";
import { navigationHeight } from "utils/theme-config";

export function useScrollTo() {
	const [height, setHeight] = useState(navigationHeight);

	useEffect(() => {
		const handleResize = () => {
			if (window.matchMedia("(max-width: 480px)")) {
				setHeight(56);
			} else {
				setHeight(navigationHeight);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const scrollToEl = (e) => {
		e.preventDefault();
		const hash = e.target.hash;
		const offsetTop = document?.querySelector(hash)?.offsetTop - height;

		scroll({
			top: offsetTop,
			behavior: "smooth"
		});
	};

	return { scrollToEl };
}
