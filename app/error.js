"use client";

export default function Error({ error, reset }) {
	return (
		<main className="h-dvh w-full flex-center flex-col gap-5">
			<p className="text-3xl text-red-500">Something went wrong! </p>
			<p className="text-red-500">{error.toString()}</p>
			<button className="btn" onClick={() => reset()}>
				Retry
			</button>
		</main>
	);
}
