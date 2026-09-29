"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PLANS } from "../utils/landing-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Pricing({ signedIn }: { signedIn: boolean }) {
    const [yearly, setYearly] = useState(true);

    return (
        <section
            id="pricing"
            className="scroll-mt-20 border-y border-border/60 bg-muted/30 py-20 sm:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Pricing"
                    title="Simple pricing that scales with you"
                    description="Start free. Upgrade when you need more power. Cancel anytime."
                />

                <div className="mt-8 flex justify-center">
                    <div
                        role="group"
                        aria-label="Billing period"
                        className="inline-flex rounded-full border border-border bg-background p-1 text-sm"
                    >
                        {[
                            { label: "Monthly", value: false },
                            { label: "Yearly", value: true },
                        ].map((opt) => (
                            <button
                                key={opt.label}
                                type="button"
                                aria-pressed={yearly === opt.value}
                                onClick={() => setYearly(opt.value)}
                                className={cn(
                                    "rounded-full px-4 py-1.5 font-medium transition-colors",
                                    yearly === opt.value
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground",
                                )}
                            >
                                {opt.label}
                                {opt.value && (
                                    <span className="ml-1.5 text-xs opacity-80">
                                        -17%
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid items-stretch gap-4 md:grid-cols-3">
                    {PLANS.map((plan, i) => {
                        const price = yearly ? plan.yearly : plan.monthly;
                        return (
                            <Reveal
                                key={plan.name}
                                delay={i * 100}
                                className="h-full"
                            >
                                <div
                                    className={cn(
                                        "relative flex h-full flex-col rounded-3xl border bg-card p-7",
                                        plan.highlighted
                                            ? "border-primary shadow-2xl shadow-primary/15 md:scale-[1.03]"
                                            : "border-border",
                                    )}
                                >
                                    {plan.highlighted && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                                            Most popular
                                        </span>
                                    )}
                                    <h3 className="text-lg font-semibold">
                                        {plan.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {plan.tagline}
                                    </p>

                                    <p className="mt-6 flex items-baseline gap-1">
                                        <span className="text-5xl font-semibold tracking-tight">
                                            ${price}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {plan.monthly === 0
                                                ? "forever"
                                                : "/ month"}
                                        </span>
                                    </p>
                                    <p className="mt-1 h-4 text-xs text-muted-foreground">
                                        {yearly && plan.monthly > 0
                                            ? "Billed annually"
                                            : ""}
                                    </p>

                                    <Link
                                        href={signedIn ? "/chat" : "/sign-up"}
                                        className={cn(
                                            buttonVariants({
                                                variant: plan.highlighted
                                                    ? "default"
                                                    : "outline",
                                                size: "lg",
                                            }),
                                            "mt-6 h-11 w-full",
                                        )}
                                    >
                                        {plan.cta}
                                    </Link>

                                    <ul className="mt-7 space-y-3 text-sm">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2.5"
                                            >
                                                <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary dark:text-[oklch(0.72_0.16_265)]" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
