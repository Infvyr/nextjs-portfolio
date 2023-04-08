/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./context/**/*.{js,ts,jsx,tsx}"
	],
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
					light: "#71c5ee",
					normal: "#025091"
				}
			}
		}
	},
	plugins: []
};
