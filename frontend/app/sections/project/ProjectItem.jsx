import { useRef } from "react";
import {
	Button,
	Flex,
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
	useDisclosure
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import { blurDataUrl } from "util/theme-config";
import { MdZoomOutMap } from "react-icons/md";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

import "react-image-gallery/styles/css/image-gallery.css";

const sxFigure = {
	"&": {
		position: "relative",
		aspectRatio: "16 / 9",
		overflow: "hidden"
	},
	"&:hover": {
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
	"&:hover:before": {
		width: "100%"
	},
	"&:hover .zoom": {
		visibility: "visible",
		opacity: 1,
		transform: "translate(-50%,-50%) scale(1)",
		transition: "transform 300ms ease-in-out, opacity 300ms ease-in-out"
	}
};

export function ProjectItem(props) {
	const { project } = props;
	const { poster, title, description, images, tags, repoUrl, liveUrl } = project;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const finalRef = useRef(null);

	return (
		<Flex flexDirection="column" gap={5}>
			<Flex
				as="figure"
				justifyContent="center"
				pos="relative"
				onClick={onOpen}
				tabIndex={-1}
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
					<MdZoomOutMap size={30} />
				</Flex>
				<Image
					src={poster}
					width={250}
					height={250}
					alt="placeholder"
					placeholder="blur"
					blurDataURL={blurDataUrl}
					style={{ width: "100%", objectFit: "cover" }}
				/>
				<Modal isOpen={isOpen} onClose={onClose} finalFocusRef={finalRef} isCentered>
					<ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
					<ModalContent maxW="80vw" minH="calc(100% - 130px)" bg="none">
						<ModalHeader>{title} Gallery</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<ImageGallery
								items={images}
								showPlayButton={false}
								showThumbnails={false}
								showIndex
								lazyload
							/>
						</ModalBody>
					</ModalContent>
				</Modal>
			</Flex>
			<Flex as="header" flexDirection="column" alignItems="center" gap={4} flex={1}>
				<Heading as="h3" fontSize={["xl", "xl", "xl", "2xl"]}>
					{title}
				</Heading>
				<Text textAlign="center">{description}</Text>
			</Flex>
			{!!tags.length && (
				<Flex as="footer" justifyContent="center" flexWrap="wrap" gap={3} alignContent="flex-end">
					{tags.map((tag) => (
						<Tag key={tag} cursor="default">
							{tag}
						</Tag>
					))}
				</Flex>
			)}
			<HStack mt={5} spacing={3}>
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
		</Flex>
	);
}
