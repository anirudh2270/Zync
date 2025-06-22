import Image from "next/image";
import React from "react";

const Logo = ({
	width = 80,
	height = 80,
	className,
}: {
	width?: number;
	height?: number;
	className?: string;
}) => {
	return (
		<Image
			height={height}
			width={width}
			src={"/logo/logo.png"}
			alt="logo"
			className={`${className}`}
		/>
	);
};

export default Logo;
