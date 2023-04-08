"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<p color="red.200">Something went wrong!</p>
			<button onClick={() => reset()}>Retry</button>
		</div>
	);
}
