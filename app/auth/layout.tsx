import { DotPatternCanvas } from "@/components/magicui/dot-pattern";
import ColorModeSwitcher from "@/components/ui/color-mode-switcher";
import AuthTemplate from "./template";
import Link from "next/link";
import TagLineReveal from "@/components/auth/tagLineReveal";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 relative">
			<div className="hidden md:block absolute top-10 right-10 p-1 rounded-lg border">
				<ColorModeSwitcher />
			</div>
			<div className="flex w-full max-w-sm flex-col gap-6 relative z-50">
				<Link href="/" className="">
					<TagLineReveal />
				</Link>
				<AuthTemplate>{children}</AuthTemplate>
			</div>
			<DotPatternCanvas dotSpacing={18} dotRadius={1} glow={false} />
		</div>
	);
}
