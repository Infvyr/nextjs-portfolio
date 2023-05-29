const author = "Vasile Novatchii";
const description =
	"Software developer from Moldova, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://vasile-novatchii.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://vasile-novatchii.netlify.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Vasile Novatchii",
		"Vasile Novatchii - software developer",
		"Frontend developer",
		"Flutter developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://vasile-novatchii.netlify.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://vasile-novatchii.netlify.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
