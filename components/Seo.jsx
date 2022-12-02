export function Seo() {
	const seo = {
		author: "Vasile Novatchii",
		title: "Vasile Novatchii",
		description:
			"A front-end developer from Moldova, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js",
		url: "https://vasile-novatchii.netlify.app",
		keywords:
			"Portfolio website, React Portfolio, Next.js Portfolio, Frontend Developer Portfolio, Chakra Portfolio"
	};

	return (
		<>
			<link rel="canonical" href={seo.url} />
			<meta name="description" content={seo.description} />
			<meta name="keywords" content={seo.keywords} />
			<meta name="author" content={seo.author} />
			<meta name="og:title" content={seo.title} />
			<meta property="og:site_name" data-page-subject="true" content={seo.title} />
			<meta property="og:url" content={seo.url} />
			<meta name="og:description" content={seo.description} />
			<meta name="og:image" content={seo.url + "/screenshot.webp"} />
			<meta property="og:image:width" content="800" />
			<meta property="og:image:height" content="288" />
		</>
	);
}
