import { QuoteIcon, StarIcon } from "lucide-react";
import { TESTIMONIALS } from "../utils/landing-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Loved by builders"
                    title="People get more done with Cortex"
                    description="Developers, students and teams use Cortex AI every day to think, write and ship faster."
                />
                <div className="mt-14 grid gap-4 md:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <Reveal key={t.name} delay={i * 100}>
                            <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                                <QuoteIcon className="size-6 text-primary/40" />
                                <div
                                    className="mt-3 flex gap-0.5"
                                    aria-label="5 out of 5 stars"
                                >
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <StarIcon
                                            key={s}
                                            className="size-4 fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>
                                <blockquote className="mt-4 flex-1 text-sm leading-relaxed">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-3">
                                    <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary dark:text-[oklch(0.72_0.16_265)]">
                                        {t.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                    <span>
                                        <span className="block text-sm font-medium">
                                            {t.name}
                                        </span>
                                        <span className="block text-xs text-muted-foreground">
                                            {t.role}
                                        </span>
                                    </span>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
