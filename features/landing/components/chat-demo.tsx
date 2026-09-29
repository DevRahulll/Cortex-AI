"use client";

import { useEffect, useState } from "react";
import { SparklesIcon } from "lucide-react";

const SCRIPT = [
    {
        user: "Explain debouncing in JavaScript with a short example.",
        ai: "Debouncing delays a function until the user has stopped triggering it for a set time - perfect for search boxes and resize handlers.\n\nfunction debounce(fn, wait = 300) {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), wait);\n  };\n}",
    },
    {
        user: "Give me a 3-step plan to learn linear algebra in a month.",
        ai: "1. Weeks 1-2: vectors, matrices and the geometry of transformations.\n2. Week 3: determinants, eigenvalues and eigenvectors.\n3. Week 4: apply it - PCA, least squares and a small project.",
    },
];

export function ChatDemo() {
    const [index, setIndex] = useState(0);
    const [typed, setTyped] = useState(0);
    const turn = SCRIPT[index];

    useEffect(() => {
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (typed < turn.ai.length) {
            // Reduced motion: reveal the whole answer at once instead of typing it.
            const id = setTimeout(
                () => setTyped((n) => (reduce ? turn.ai.length : n + 2)),
                reduce ? 0 : 22,
            );
            return () => clearTimeout(id);
        }
        if (reduce) return; // keep the finished answer on screen
        const id = setTimeout(() => {
            setIndex((i) => (i + 1) % SCRIPT.length);
            setTyped(0);
        }, 3800);
        return () => clearTimeout(id);
    }, [typed, turn]);

    const done = typed >= turn.ai.length;
    const [prose, ...codeParts] = turn.ai
        .slice(0, typed)
        .split("\n\nfunction ");
    const hasCode = codeParts.length > 0;

    return (
        <div
            role="img"
            aria-label="Animated preview of a Cortex AI conversation"
            className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card/80 text-left shadow-2xl shadow-primary/10 ring-1 ring-foreground/5 backdrop-blur"
        >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-muted-foreground">
                    Cortex AI - New chat
                </span>
            </div>

            <div className="flex min-h-72 flex-col gap-4 p-5 text-sm sm:min-h-80">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-primary-foreground">
                    {turn.user}
                </div>

                <div className="flex gap-3">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-muted">
                        <SparklesIcon className="size-3.5 text-primary dark:text-[oklch(0.72_0.16_265)]" />
                    </span>
                    <div className="min-w-0 flex-1 space-y-3 leading-relaxed">
                        <p className="whitespace-pre-line">
                            {prose}
                            {!hasCode && !done && (
                                <span className="animate-caret ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-foreground" />
                            )}
                        </p>
                        {hasCode && (
                            <pre className="overflow-x-auto rounded-xl bg-muted p-3 font-mono text-xs leading-relaxed">
                                {"function " + codeParts.join("\n\nfunction ")}
                                {!done && (
                                    <span className="animate-caret ml-0.5 inline-block h-3.5 w-0.5 translate-y-0.5 bg-foreground" />
                                )}
                            </pre>
                        )}
                    </div>
                </div>
            </div>

            <div className="border-t border-border p-3">
                <div className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-2.5 text-sm text-muted-foreground">
                    Ask Cortex anything...
                    <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        ↑
                    </span>
                </div>
            </div>
        </div>
    );
}
