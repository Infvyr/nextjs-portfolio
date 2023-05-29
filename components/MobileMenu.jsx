"use client";

import { useEffect, useState } from "react";
import { BsGrid } from "react-icons/bs";
import { ConnectMedia, Menu } from "components";
import {
	animate,
	animateMobile,
	exit,
	exitMobile,
	initial,
	initialMobile,
	transition
} from "utils";
import { m, AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export function MobileMenu() {
	let [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
	}, [isOpen]);

	return (
		<LazyMotion features={domAnimation}>
			<m.button
				className="p-2"
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
				{isOpen && (
					<m.div
						className={`backdrop-blur-md fixed left-0 right-0 top-0 min-h-screen z-50`}
						initial={initialMobile}
						animate={animateMobile}
						exit={exitMobile}
					>
						<header className="p-6 flex items-center justify-between border-b border-b-brand-light z-10">
							<ConnectMedia />
							<button
								onClick={onClose}
								className="w-10 h-10 inline-flex items-center justify-center"
							>
								<IoMdClose size="24" />
							</button>
						</header>
						<div className="px-6 py-10">
							<Menu onClick={onClose} />
						</div>
					</m.div>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}
