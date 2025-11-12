"use client";

import { ThemeProvider } from "next-themes";

export function ThemeContext({ children }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			storageKey="theme"
			enableColorScheme={false}
		>
			{children}
		</ThemeProvider>
	);
}
