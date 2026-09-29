import Link from "next/link";
import { FOOTER_LINKS } from "../utils/landing-data";
import { Brand } from "./brand";

export function Footer() {
    return (
        <footer className="border-t border-border/60 bg-muted/30">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_repeat(3,1fr)]">
                <div>
                    <Brand />
                    <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                        A fast, private AI assistant for thinking, writing and
                        building.
                    </p>
                </div>

                {Object.entries(FOOTER_LINKS).map(([group, links]) => (
                    <nav key={group} aria-label={group}>
                        <h3 className="text-sm font-semibold">{group}</h3>
                        <ul className="mt-4 space-y-2.5">
                            {links.map((link) => (
                                <li key={link.label}>
                                    {link.href.startsWith("/") ? (
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>
            <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Cortex AI. All rights
                reserved.
            </div>
        </footer>
    );
}
