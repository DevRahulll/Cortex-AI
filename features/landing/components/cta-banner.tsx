import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function CtaBanner({
    signedIn,
    title,
    description,
}: {
    signedIn: boolean;
    title: string;
    description: string;
}) {
    return (
        <section className="px-4 py-16 sm:px-6 sm:py-20">
            <Reveal>
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(1_0_0/0.25),transparent_60%)]"
                    />
                    <div
                        aria-hidden
                        className="landing-grid absolute inset-0 opacity-30 invert"
                    />
                    <div className="relative">
                        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                            {title}
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
                            {description}
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Link
                                href={signedIn ? "/chat" : "/sign-up"}
                                className={cn(
                                    buttonVariants({
                                        variant: "secondary",
                                        size: "lg",
                                    }),
                                    "h-12 px-6 text-base bg-white text-neutral-900 hover:bg-white/90",
                                )}
                            >
                                {signedIn ? "Open Cortex" : "Get started free"}
                                <ArrowRightIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
