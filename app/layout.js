import { AppFooter, AppHeader, AppMetadata } from "components";
import { ThemeContext as ThemeContextProvider } from "context";
import { Suspense } from "react";
import "styles/globals.css";
import Loading from "./loading";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeContextProvider>
					<AppHeader />
					<Suspense fallback={<Loading />}>{children}</Suspense>
					<AppFooter />
				</ThemeContextProvider>
			</body>
		</html>
	);
}
