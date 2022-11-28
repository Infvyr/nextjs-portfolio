"use client";

import { useRef } from "react";
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	useDisclosure
} from "@chakra-ui/react";
import { ConnectMedia, Menu } from "components";
import { BsGrid } from "react-icons/bs";

export function MobileMenu() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<Button
				ref={btnRef}
				variant="ghost"
				onClick={onOpen}
				sx={{ "&:hover": { bgColor: "transparent" } }}
				title="Menu"
			>
				<BsGrid />
			</Button>

			<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton sx={{ "&:hover": { bgColor: "transparent" } }} />
					<DrawerHeader>
						<ConnectMedia />
					</DrawerHeader>

					<DrawerBody pt="40px" borderTop="1px solid currentColor">
						<Menu onClick={onClose} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
