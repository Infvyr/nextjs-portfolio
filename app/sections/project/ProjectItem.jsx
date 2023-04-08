import { Suspense, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import { Loader } from "components";
import { blurDataUrl } from "util/theme-config";
import { MdZoomOutMap } from "react-icons/md";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

import "react-image-gallery/styles/css/image-gallery.css";

const sxFigure = {
	"&:hover, &:focus, &:focus-within": {
		cursor: "pointer"
	},
	"&:before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: 0,
		height: "100%",
		bgColor: "blackAlpha.50",
		transformOrigin: "center",
		transition: "width 300ms ease-in-out, height 300ms ease-in-out"
	},
	"&:hover:before, &:focus:before,  &:focus-within:before": {
		width: "100%"
	},
	"&:hover .zoom, &:focus .zoom, &:focus-within .zoom": {
		visibility: "visible",
		opacity: 1,
		transform: "translate(-50%,-50%) scale(1)",
		transition: "transform 300ms ease-in-out, opacity 300ms ease-in-out"
	}
};

export function ProjectItem(props) {
	const { project, index } = props;
	const { description, images, liveUrl, poster, repoUrl, stack, title } = project;
	const finalRef = useRef(null);
	const cardRef = useRef(null);
	const isCardInView = useInView(cardRef, { once: true });

	const galleryImages = images.map((img) => ({
		original: img,
		loading: "lazy"
	}));

	const onKeyDown = (event) => {
		if (event.code === "Enter" && !event.shiftKey) {
			event.preventDefault();

			// onOpen();
		}
	};

	return (
		<LazyMotion features={domAnimation}>
			<div
				// templateRows={[
				// 	"225px 1fr",
				// 	"225px 1fr",
				// 	"140px 1fr minmax(min(50px, 100px), 200px)",
				// 	"225px 1fr minmax(clamp(50px, 100px, 160px), 160px)"
				// ]}
				ref={cardRef}
				// sx={{
				// 	transform: isCardInView
				// 		? "none"
				// 		: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
				// 	opacity: isCardInView ? 1 : 0,
				// 	transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 0.5 * index}s`
				// }}
			>
				<figure
					// onClick={onOpen}
					onKeyDown={onKeyDown}
					sx={sxFigure}
				>
					<div className="zoom">
						<MdZoomOutMap size={30} fill="white" />
					</div>
					<Image
						src={poster}
						width={250}
						height={250}
						alt="poster"
						placeholder="blur"
						blurDataURL={blurDataUrl}
						aria-label="Press enter key to open gallery"
						tabIndex="0"
						style={{ width: "100%", objectFit: "cover" }}
					/>
					<div isOpen="isOpen" onClose="onClose" finalFocusRef={finalRef}>
						{/*<div bg="none" backdropFilter="auto" backdropBlur="5px" />*/}
						<div>
							<header>{title} Gallery</header>
							{/*<ModalCloseButton />*/}
							<div>
								<Suspense fallback={<Loader width="100%" />}>
									<ImageGallery
										items={galleryImages}
										showPlayButton={false}
										showThumbnails={false}
										showIndex
										lazyload
									/>
								</Suspense>
							</div>
						</div>
					</div>
				</figure>
				<header>
					<h3 tabIndex="0">{title}</h3>
					<p tabIndex="0">{description}</p>
				</header>

				<footer>
					{!!stack.length && (
						<div>
							{stack.map((tag) => (
								<div key={tag} tabIndex="0">
									{tag}
								</div>
							))}
						</div>
					)}
					<div>
						{repoUrl && (
							<Link
								href={repoUrl}
								target="_blank"
								tabIndex={-1}
								style={{
									display: "flex",
									alignItems: "center"
								}}
							>
								<button aria-label="Go to repository">
									<VscSourceControl />
									<span>Source</span>
								</button>
							</Link>
						)}
						{liveUrl && (
							<Link href={liveUrl} target="_blank" tabIndex={-1}>
								<button aria-label="Go live">
									<FiExternalLink />
									<span>Demo</span>
								</button>
							</Link>
						)}
					</div>
				</footer>
			</div>
		</LazyMotion>
	);
}
