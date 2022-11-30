import { Suspense, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import {
	Button,
	Flex,
	Grid,
	Heading,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tag,
	Text,
	useDisclosure,
	useColorModeValue
} from "@chakra-ui/react";
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
	const { isOpen, onOpen, onClose } = useDisclosure();
	const finalRef = useRef(null);
	const cardRef = useRef(null);
	const isCardInView = useInView(cardRef, { once: true });

	const galleryImages = images.map((img) => ({
		original: img,
		loading: "lazy"
	}));

	const cardBgColor = useColorModeValue("whiteAlpha.800", "whiteAlpha.50");

	const onKeyDown = (event) => {
		if (event.code === "Enter" && !event.shiftKey) {
			event.preventDefault();

			onOpen();
		}
	};

	return (
		<LazyMotion features={domAnimation}>
			<Grid
				templateRows={[
					"225px 1fr",
					"225px 1fr",
					"140px 1fr minmax(min(50px, 100px), 200px)",
					"225px 1fr minmax(clamp(50px, 100px, 160px), 160px)"
				]}
				gap={5}
				pb={5}
				bgColor={cardBgColor}
				borderRadius="lg"
				ref={cardRef}
				sx={{
					transform: isCardInView
						? "none"
						: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
					opacity: isCardInView ? 1 : 0,
					transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 0.5 * index}s`
				}}
			>
				<Flex
					as="figure"
					justifyContent="center"
					pos="relative"
					onClick={onOpen}
					onKeyDown={onKeyDown}
					sx={sxFigure}
				>
					<Flex
						className="zoom"
						p={1}
						pos="absolute"
						top="50%"
						left="50%"
						w={10}
						h={10}
						alignItems="center"
						justifyContent="center"
						borderRadius="50%"
						visibility="hidden"
						opacity="0.25"
						transform="translate(-50%,-50%) scale(0.2)"
					>
						<MdZoomOutMap size={30} fill="white" />
					</Flex>
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
					<Modal isOpen={isOpen} onClose={onClose} finalFocusRef={finalRef} isCentered>
						<ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
						<ModalContent maxW="80vw" minH="calc(100% - 130px)" bg="none">
							<ModalHeader>{title} Gallery</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<Suspense fallback={<Loader width="100%" />}>
									<ImageGallery
										items={galleryImages}
										showPlayButton={false}
										showThumbnails={false}
										showIndex
										lazyload
									/>
								</Suspense>
							</ModalBody>
						</ModalContent>
					</Modal>
				</Flex>
				<Flex as="header" flexDirection="column" alignItems="center" gap={4} px={3}>
					<Heading as="h3" fontSize={["xl", "xl", "xl", "2xl"]} tabIndex="0">
						{title}
					</Heading>
					<Text textAlign="center" tabIndex="0">
						{description}
					</Text>
				</Flex>

				<Grid as="footer" gridTemplateRows="1fr 40px" gap={5} px={3}>
					{!!stack.length && (
						<Flex justifyContent="center" flexWrap="wrap" gap={3} alignContent="flex-start">
							{stack.map((tag) => (
								<Tag key={tag} cursor="default" tabIndex="0">
									{tag}
								</Tag>
							))}
						</Flex>
					)}
					<HStack py={[null, null, null, null, 5]} spacing={3} justify="center">
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
								<Button variant="ghost" aria-label="Go to repository">
									<VscSourceControl />
									<Text as="span" ml={2}>
										Source
									</Text>
								</Button>
							</Link>
						)}
						{liveUrl && (
							<Link
								href={liveUrl}
								target="_blank"
								tabIndex={-1}
								style={{
									display: "flex",
									alignItems: "center"
								}}
							>
								<Button variant="ghost" aria-label="Go live">
									<FiExternalLink />
									<Text as="span" ml={2}>
										Demo
									</Text>
								</Button>
							</Link>
						)}
					</HStack>
				</Grid>
			</Grid>
		</LazyMotion>
	);
}
