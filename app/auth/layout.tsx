import { DotPattern } from "@/components/magicui/dot-pattern";
import ColorModeSwitcher from "@/components/ui/color-mode-switcher";
import { cn } from "@/lib/utils";
import { GalleryVerticalEnd } from "lucide-react";
import AuthTemplate from "./template";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 relative">
			<div className=" absolute top-10 right-10 p-1 rounded-lg border">
				<ColorModeSwitcher />
			</div>
			<div className="flex w-full max-w-sm flex-col gap-6 relative z-50">
				<a href="#" className="flex items-center gap-2 self-center font-medium">
					<div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
						<GalleryVerticalEnd className="size-4" />
					</div>
					Acme Inc.
				</a>
				<AuthTemplate>{children}</AuthTemplate>
			</div>
			{/* <DotPattern
				className={cn(
					"[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
				)}
			/> */}
		</div>
	);
}
