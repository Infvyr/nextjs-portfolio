export const fetcher = (url) =>
	fetch(url, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`
		}
	}).then((response) => response.json());
