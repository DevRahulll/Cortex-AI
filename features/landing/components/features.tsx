import { cn } from "@/lib/utils";
import { FEATURES } from "../utils/landing-data";
// import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Features() {
    return (
        <section id="features" className="scroll-mt-20 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Features"
                    title="Everything you need, nothing you don't"
                    description="A focused chat experience built for speed, clarity and getting real work done."
                />

                <div className="mt-14 grid gap-4 md:grid-cols-3">
                    {FEATURES.map((f, i) => (
                        <Reveal
                            key={f.title}
                            delay={(i % 3) * 80}
                            className={f.className}
                        >
                            <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                                <div
                                    aria-hidden
                                    className="absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100 sm:opacity-0"
                                />
                                <div className="flex items-center justify-between">
                                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:text-[oklch(0.72_0.16_265)]">
                                        <f.icon className="size-5" />
                                    </span>
                                    {f.badge && (
                                        <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:text-[oklch(0.78_0.13_265)]">
                                            {f.badge}
                                        </span>
                                    )}
                                </div>
                                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                                    {f.title}
                                </h3>
                                <p
                                    className={cn(
                                        "mt-2 text-sm leading-relaxed text-muted-foreground",
                                    )}
                                >
                                    {f.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    className,
}: {
    eyebrow: string;
    title: string;
    description?: string;
    className?: string;
}) {
    return (
        <div className={cn("mx-auto max-w-2xl text-center", className)}>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase dark:text-[oklch(0.72_0.16_265)]">
                {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-base text-pretty text-muted-foreground sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
