"use client";

import React, { useEffect, useRef } from "react";

interface DotPatternCanvasProps {
	dotSpacing?: number;
	dotRadius?: number;
	glow?: boolean;
	className?: string;
}

export function DotPatternCanvas({
	dotSpacing = 16,
	dotRadius = 1.5,
	glow = true,
	className = "",
}: DotPatternCanvasProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;

		let animationFrameId: number;

		const resize = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		};

		resize();
		window.addEventListener("resize", resize);

		// Precalculate dots
		const cols = Math.ceil(canvas.width / dotSpacing);
		const rows = Math.ceil(canvas.height / dotSpacing);

		const dots = Array.from({ length: cols * rows }, (_, i) => {
			const x = (i % cols) * dotSpacing;
			const y = Math.floor(i / cols) * dotSpacing;
			return {
				x,
				y,
				offset: Math.random() * Math.PI * 2,
				speed: Math.random() * 0.5 + 0.2,
			};
		});

		const render = (time: number) => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (const dot of dots) {
				const pulse = glow
					? 0.5 + 0.5 * Math.sin(dot.offset + time * 0.002 * dot.speed)
					: 1;

				ctx.beginPath();
				ctx.arc(dot.x, dot.y, dotRadius * pulse, 0, Math.PI * 2);
				const gradient = ctx.createRadialGradient(
					dot.x,
					dot.y,
					0,
					dot.x,
					dot.y,
					dotRadius * 2
				);
				gradient.addColorStop(0, "rgba(160,160,160,0.8)");
				gradient.addColorStop(1, "rgba(160,160,160,0)");

				ctx.fillStyle = glow ? gradient : "rgba(160,160,160,0.7)";
				ctx.fill();
			}

			animationFrameId = requestAnimationFrame(render);
		};

		animationFrameId = requestAnimationFrame(render);

		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", resize);
		};
	}, [dotSpacing, dotRadius, glow]);

	return (
		<canvas
			ref={canvasRef}
			className={`pointer-events-none absolute inset-0 w-full h-full ${className} [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]`}
		/>
	);
}
