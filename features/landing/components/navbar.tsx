"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { NAV_LINKS } from "../utils/landing-data";
import { Button, buttonVariants } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar({ signedIn }: { signedIn: boolean }) {
    const [open, setOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 border-b border-b/60 bg-background/70 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                {/* brand */}
                <nav
                    aria-label="Main"
                    className="hidden items-center gap-1 md:flex"
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                            className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle theme"
                        onClick={() =>
                            setTheme(
                                resolvedTheme === "dark" ? "light" : "dark",
                            )
                        }
                    >
                        <SunIcon className="dark:hidden" />
                        <MoonIcon className="hidden dark:block" />
                    </Button>

                    {signedIn ? (
                        <Link
                            href="/chat"
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "hidden sm:inline-flex",
                            )}
                        >
                            Open Cortex
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/sign-in"
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                        size: "lg",
                                    }),
                                    "hidden sm:inline-flex",
                                )}
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/sign-up"
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "hidden sm:inline-flex",
                                )}
                            >
                                Get started free
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {open && (
                <div className="border-t border-border/60 bg-background md:hidden">
                    <nav
                        aria-label="Mobile"
                        className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-2 flex gap-2">
                            {signedIn ? (
                                <Link
                                    href="/chat"
                                    className={cn(
                                        buttonVariants({ size: "lg" }),
                                        "flex-1",
                                    )}
                                >
                                    Open Cortex
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/sign-in"
                                        className={cn(
                                            buttonVariants({
                                                variant: "outline",
                                                size: "lg",
                                            }),
                                            "flex-1",
                                        )}
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        href="/sign-up"
                                        className={cn(
                                            buttonVariants({ size: "lg" }),
                                            "flex-1",
                                        )}
                                    >
                                        Get started
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
