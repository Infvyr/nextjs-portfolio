"use client";

import { Suspense } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { AppHeader, AppFooter } from "components";
import { LayoutProvider } from "context/layout";
import { theme, navigationHeight, footerHeight } from "util/theme-config";
import Loading from "./loading";

// export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ChakraProvider theme={theme}>
					<AppHeader />

					<LayoutProvider>
						<Box as="main" minHeight={`calc(100vh - ${navigationHeight}px - ${footerHeight}px)`}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</Box>
						<AppFooter />
					</LayoutProvider>
				</ChakraProvider>
			</body>
		</html>
	);
}
