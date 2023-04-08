"use client";

import { Suspense } from "react";
import { AppHeader, AppFooter } from "components";
import { LayoutProvider } from "context/layout";
import { navigationHeight, footerHeight } from "util/theme-config";
import Loading from "./loading";

// export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AppHeader />

				<LayoutProvider>
					<div>
						<Suspense fallback={<Loading />}>{children}</Suspense>
					</div>
					<AppFooter />
				</LayoutProvider>
			</body>
		</html>
	);
}
