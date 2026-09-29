import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
    return (
        <Link
            href="/"
            className={cn(
                "inline-flex items-center gap-2 font-semibold tracking-tight",
                className,
            )}
        >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm">
                C
            </span>
            <span className="text-base">Cortex AI</span>
        </Link>
    );
}
