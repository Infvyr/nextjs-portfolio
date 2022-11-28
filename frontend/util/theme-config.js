import { extendTheme } from "@chakra-ui/react";

const navigationHeight = 80;
const footerHeight = 110;

const configColorMode = {
	initialColorMode: "system",
	useSystemColorMode: true
};

const stylesConfig = {
	global: (props) => ({
		html: {
			scrollBehavior: "smooth"
		},
		body: {
			bg: props.colorMode === "dark" ? "brand.500" : "brand.100"
		},
		".section": {
			paddingTop: ["50px", "60px"],
			paddingBottom: ["50px", "60px"]
		}
	})
};

const colors = {
	brand: {
		100: "#fbf8f3",
		300: "#7928CA",
		400: "#FF0080",
		500: "#232332"
	},
	blue: {
		300: "#71c5ee",
		700: "#025091"
	}
};

const Buttons = {
	Button: {
		variants: {
			solid: (props) => ({
				bg: props.colorMode === "dark" ? "blue.600" : "blue.500",
				color: "white",
				_hover: {
					bg: props.colorMode === "dark" ? "blue.700" : "blue.600"
				}
			})
		}
	}
};

const Headings = {
	Heading: {
		baseStyle: {
			fontWeight: "extrabold"
		},
		variants: {
			brand: (props) => ({
				bgGradient:
					props.colorMode === "dark"
						? "linear(to-l, gray.300, gray.50)"
						: "linear(to-l, gray.600, gray.900)",
				bgClip: "text"
			})
		},
		defaultProps: {
			variant: "brand"
		}
	}
};

const theme = extendTheme({
	config: configColorMode,
	styles: stylesConfig,
	colors,
	components: { ...Buttons, ...Headings }
});

const blurDataUrl =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WQ8AAlcBas53/MIAAAAASUVORK5CYII=";

export { theme, navigationHeight, footerHeight, blurDataUrl };
