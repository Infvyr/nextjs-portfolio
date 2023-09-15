"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { animate, exit, initial, transition } from "utils";

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<LazyMotion features={domAnimation}>
			<m.button
				onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				{currentTheme === "dark" ? <BsSun /> : <BsMoon />}
			</m.button>
		</LazyMotion>
	);
};
