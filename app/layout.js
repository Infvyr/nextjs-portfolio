import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "components";
import { LayoutProvider } from "context/layout";
import Loading from "./loading";
import "styles/globals.css";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AppHeader />
				<LayoutProvider>
					<Suspense fallback={<Loading />}>{children}</Suspense>
					<AppFooter />
				</LayoutProvider>
			</body>
		</html>
	);
}
