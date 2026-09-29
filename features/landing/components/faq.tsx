import { ChevronDownIcon } from "lucide-react";
import { FAQS } from "../utils/landing-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Faq() {
    return (
        <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Questions, answered"
                    description="Still unsure? Here's what people usually ask before signing up."
                />
                <Reveal className="mt-12">
                    <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
                        {FAQS.map((item) => (
                            <details
                                key={item.q}
                                className="group px-6 py-5 open:bg-muted/40"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium [&::-webkit-details-marker]:hidden">
                                    {item.q}
                                    <ChevronDownIcon className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {item.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
