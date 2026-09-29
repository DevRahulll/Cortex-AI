import { cn } from "@/lib/utils";

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
