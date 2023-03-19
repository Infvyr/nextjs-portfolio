const author = "Vasile Novatchii";
const description =
	"A front-end developer from Moldova, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://vasile-novatchii.netlify.app";
export const AppMetadata = {
	title: {
		default: `${author} | Portfolio`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Vasile Novatchii",
		"Portfolio website",
		"React Portfolio",
		"Next.js Portfolio",
		"Frontend Developer Portfolio",
		"Chakra Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
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
