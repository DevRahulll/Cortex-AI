import { STEPS } from "../utils/landing-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="scroll-mt-20 border-y border-border/60 bg-muted/30 py-20 sm:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeading
                    eyebrow="How it works"
                    title="From sign-up to answers in under a minute"
                />
                <ol className="mt-14 grid gap-8 md:grid-cols-3">
                    {STEPS.map((step, i) => (
                        <Reveal key={step.title} delay={i * 100}>
                            <li className="relative list-none rounded-3xl border border-border bg-card p-6">
                                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                                    {i + 1}
                                </span>
                                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {step.description}
                                </p>
                            </li>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
}
