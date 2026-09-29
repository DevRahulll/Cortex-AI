import Link from "next/link";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChatDemo } from "./chat-demo";

export function Hero({ signedIn }: { signedIn: boolean }) {
    return (
        <section className="relative overflow-hidden">
            <div aria-hidden className="landing-grid absolute inset-0 -z-10" />
            <div
                aria-hidden
                className="absolute -top-48 left-1/2 -z-10 h-128 w-208 -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
            />

            <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-24 sm:pb-28">
                <a
                    href="#features"
                    className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
                >
                    <SparklesIcon className="size-3.5 text-primary dark:text-[oklch(0.72_0.16_265)]" />
                    Web search &amp; tools are on the way
                    <ArrowRightIcon className="size-3.5" />
                </a>

                <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                    Think faster with an AI that{" "}
                    <span className="text-gradient">actually keeps up</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
                    Cortex AI is your fast, private assistant for writing,
                    coding and learning. Real-time answers, beautifully rendered
                    code and math and every conversation saved.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href={signedIn ? "/chat" : "/sign-up"}
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "h-12 px-6 text-base shadow-lg shadow-primary/30",
                        )}
                    >
                        {signedIn
                            ? "Open Cortex"
                            : "Start chatting - it's free"}
                        <ArrowRightIcon />
                    </Link>
                    <a
                        href="#how-it-works"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "h-12 px-6 text-base",
                        )}
                    >
                        See how it works
                    </a>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                    No credit card required · Free plan available
                </p>

                <div className="animate-float-slow mt-14 sm:mt-20">
                    <ChatDemo />
                </div>
            </div>
        </section>
    );
}
