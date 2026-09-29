import { STACK } from "../utils/landing-data";

export function LogoStrip() {
    const items = [...STACK, ...STACK];
    return (
        <section
            aria-label="Built with"
            className="border-y border-border/60 bg-muted/30 py-8"
        >
            <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Built on a modern, production-grade stack
            </p>
            <div className="relative mx-auto max-w-5xl overflow-hidden mask-[linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)">
                <ul className="animate-marquee flex w-max gap-14 pr-14">
                    {items.map((name, i) => (
                        <li
                            key={`${name}-${i}`}
                            aria-hidden={i >= STACK.length}
                            className="text-lg font-semibold tracking-tight whitespace-nowrap text-muted-foreground/80"
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
