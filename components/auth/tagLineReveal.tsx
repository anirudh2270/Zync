"use client";

import React from "react";
import Logo from "../ui/logo";
import * as motion from "motion/react-client";

const TagLineReveal = () => {
	return (
		<motion.div
			layout
			className="flex items-center gap-2 self-center font-medium justify-center">
			<motion.div
				transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
				initial={{ width: "200px" }}
				animate={{ width: "300px" }}
				className="relative overflow-hidden inline-flex items-center">
				<div className="size-6 rounded-md mr-2">
					<Logo />
				</div>
				Zync
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-gray-400 text-sm z-10 ms-2">
					|
				</motion.span>
				<motion.span
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 77, opacity: 1 }}
					transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
					className="absolute left-0 pl-2 text-gray-400 text-sm mt-[3px] whitespace-nowrap">
					Effortless Team Communication
				</motion.span>
			</motion.div>
		</motion.div>
	);
};

export default TagLineReveal;
