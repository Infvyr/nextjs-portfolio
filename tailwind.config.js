/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				brand: {
					light: "#FBF8F3",
					dark: "#232332",
					purple: "#7928CA",
					pink: "#FF0080"
				},
				blue: {
					lighter: "#71c5ee",
					light: "#3182ce",
					normal: "#025091"
				},
				card: {
					dark: "rgba(255, 255, 255, 0.04)",
					light: "rgba(255, 255, 255, 0.80)"
				},
				badge: {
					dark: "rgba(226, 232, 240, 0.16)",
					light: "#F8F0E3"
				}
			},
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
				"out-back": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
			},
			transitionDuration: {
				DEFAULT: "300ms"
			},
			backgroundImage: {
				inherited: "inherit"
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".flex-center": {
					display: "flex",
					"align-items": "center",
					"justify-content": "center"
				}
			});
		}
	]
};
