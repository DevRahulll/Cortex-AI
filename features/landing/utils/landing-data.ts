import {
    Brain,
    History,
    Code,
    ShieldCheck,
    Zap,
    Search,
    type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

/** Truthful "built on" strip - these are the technologies Cortex AI actually uses. */
export const STACK = [
    "Next.js",
    "OpenAI",
    "Vercel AI SDK",
    "Clerk",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "TypeScript",
];

export type Feature = {
    title: string;
    description: string;
    icon: LucideIcon;
    badge?: string;
    className?: string;
};

export const FEATURES: Feature[] = [
    {
        title: "Real-time streaming answers",
        description:
            "Responses appear token by token, so you're reading while Cortex is still thinking. No spinners, no waiting for the full reply.",
        icon: Zap,
        className: "md:col-span-2",
    },
    {
        title: "Conversations that stick",
        description:
            "Every chat is saved to your account. Pick up any thread from any device, rename it, or clean it up whenever you like.",
        icon: History,
    },
    {
        title: "Rich, readable output",
        description:
            "Syntax-highlighted code, LaTeX math and Mermaid diagrams render right inside the chat - built for developers, students and analysts.",
        icon: Code,
    },
    {
        title: "Private by design",
        description:
            "Secure sign-in powered by Clerk. Your chats are tied to your account and never mixed with anyone else's.",
        icon: ShieldCheck,
    },
    {
        title: "Web search & tools",
        description:
            "Live web search and tool use so Cortex can look things up, cite sources and take action for you.",
        icon: Search,
        badge: "Coming soon",
        className: "md:col-span-2",
    },
    {
        title: "Context-aware reasoning",
        description:
            'Cortex remembers the whole conversation, so follow-ups like "make it shorter" or "now in TypeScript" just work.',
        icon: Brain,
    },
];

export const STEPS = [
    {
        title: "Create your free account",
        description:
            "Sign up in seconds with email or a social account. No credit card required.",
    },
    {
        title: "Ask anything",
        description:
            "Brainstorm, debug code, summarize a document, or draft an email. Just type it out.",
    },
    {
        title: "Get answers you can use",
        description:
            "Copy code, refine with follow-ups, and come back to your history whenever you need it.",
    },
];

/**
 * TODO(before launch): replace these SAMPLE testimonials with real quotes
 * from real users (and get their permission to publish them).
 */
export const TESTIMONIALS = [
    {
        quote: "Streaming answers plus clean code blocks means I stay in flow. It's become my first tab when I'm debugging.",
        name: "Shibendhu Lahiri",
        role: "Full-stack developer",
    },
    {
        quote: "I use it to outline essays and check my maths steps. The rendered equations are a huge win for studying.",
        name: "Shivam Kumar",
        role: "Engineering student",
    },
    {
        quote: "Fast, clean and distraction-free. My whole team moved over because the history is so easy to search and revisit.",
        name: "Aman Kumar",
        role: "Engineering student",
    },
];

export type Plan = {
    name: string;
    tagline: string;
    monthly: number;
    yearly: number; // per month, billed yearly
    cta: string;
    highlighted?: boolean;
    features: string[];
};

export const PLANS: Plan[] = [
    {
        name: "Free",
        tagline: "For trying Cortex and everyday questions.",
        monthly: 0,
        yearly: 0,
        cta: "Start for free",
        features: [
            "Standard model",
            "Unlimited saved conversations",
            "Code, math & diagram rendering",
            "Light & dark themes",
        ],
    },
    {
        name: "Pro",
        tagline: "For power users who want more from every chat.",
        monthly: 12,
        yearly: 10,
        cta: "Get Pro",
        highlighted: true,
        features: [
            "Everything in Free",
            "Access to advanced models",
            "Higher message limits",
            "Web search & tools (when released)",
            "Priority speed",
        ],
    },
    {
        name: "Team",
        tagline: "For teams that think and build together.",
        monthly: 29,
        yearly: 24,
        cta: "Contact sales",
        features: [
            "Everything in Pro",
            "Shared workspaces",
            "Admin controls & usage insights",
            "Priority support",
        ],
    },
];

export const FAQS = [
    {
        q: "Is Cortex AI free to use?",
        a: "Yes. The Free plan lets you chat with the standard model and keep unlimited conversation history, with no credit card needed. Upgrade only if you want advanced models and higher limits.",
    },
    {
        q: "Are my conversations private?",
        a: "Your chats are stored against your own account and protected by secure sign-in. Other users can't see them, and you can delete any conversation at any time.",
    },
    {
        q: "Which AI models does Cortex use?",
        a: "Cortex runs on OpenAI models through the Vercel AI SDK. Pro adds access to more advanced models as they're rolled out.",
    },
    {
        q: "Can Cortex search the web?",
        a: "Web search and tool use are in active development and will arrive soon. Until then, Cortex answers from its training knowledge and your conversation context.",
    },
    {
        q: "How is Cortex different from other AI chatbots?",
        a: "Cortex is focused and fast: real-time streaming, beautifully rendered code, math and diagrams, and a clean interface with no clutter. It's built to get out of your way.",
    },
    {
        q: "Can I cancel or change my plan anytime?",
        a: "Absolutely. There are no lock-in contracts. Switch plans or cancel whenever you like, and your conversation history stays with your account.",
    },
];

export const FOOTER_LINKS = {
    Product: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
    ],
    Account: [
        { label: "Sign in", href: "/sign-in" },
        { label: "Create account", href: "/sign-up" },
    ],
    // TODO: point these at real pages once they exist.
    Legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ],
};
