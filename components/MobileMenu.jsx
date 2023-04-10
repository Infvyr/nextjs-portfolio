"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { BsGrid } from "react-icons/bs";
import { ConnectMedia, Menu } from "components";
import {
	animate,
	animateMobile,
	exit,
	exitMobile,
	initial,
	initialMobile,
	menuMobileHeight,
	transition
} from "utils";
import { m, AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export function MobileMenu() {
	let [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);

	return (
		<LazyMotion features={domAnimation}>
			<m.button
				onClick={onOpen}
				title="Open menu"
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				<BsGrid />
			</m.button>

			<AnimatePresence>
				{open && (
					<Dialog
						as={m.div}
						open={isOpen}
						onClose={() => null}
						className={`bg-black/90 fixed left-0 right-0 top-[${menuMobileHeight}] min-h-screen z-50`}
						initial={initialMobile}
						animate={animateMobile}
						exit={exitMobile}
					>
						<Dialog.Title
							as="div"
							className="p-6 flex items-center justify-between border-b border-b-brand-light z-10"
						>
							<ConnectMedia />
							<button
								onClick={onClose}
								className="w-10 h-10 inline-flex items-center justify-center"
							>
								<IoMdClose size="24" />
							</button>
						</Dialog.Title>
						<Dialog.Panel className="px-10">
							<Menu onClick={onClose} />
						</Dialog.Panel>
					</Dialog>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}
