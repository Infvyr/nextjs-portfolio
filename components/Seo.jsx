import { NextSeo } from "next-seo";

export function Seo() {
	const seo = {
		title: "Vasile Novatchii",
		description:
			"A front-end developer from Moldova, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch. I create full UI from scratch or using UI libraries working with React or Next.js",
		url: "https://vasile-novatchii.netlify.app"
	};

	return (
		<NextSeo
			title={seo.title}
			titleTemplate={seo.title}
			defaultTitle={seo.title}
			description={seo.description}
			canonical={seo.url}
			openGraph={{
				type: "website",
				url: seo.url,
				title: seo.title,
				description: seo.description,
				images: [
					{
						url: "/screenshot.webp",
						width: 800,
						height: 288,
						alt: "Vasile Novatchii"
					}
				]
			}}
		/>
	);
}
