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
					light: "#fbf8f3",
					dark: "#232332",
					purple: "#7928CA",
					pink: "#FF0080"
				},
				blue: {
					lighter: "#71c5ee",
					light: "#3182ce",
					normal: "#025091"
				}
			},
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
				"out-back": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
			},
			backgroundImage: {
				inherited: "inherit"
			}
		}
	},
	plugins: []
};