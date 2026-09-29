import { CtaBanner } from "@/features/landing/components/cta-banner";
import { Faq } from "@/features/landing/components/faq";
import { Features } from "@/features/landing/components/features";
import { Footer } from "@/features/landing/components/footer";
import { Hero } from "@/features/landing/components/hero";
import { HowItWorks } from "@/features/landing/components/how-it-works";
import { LogoStrip } from "@/features/landing/components/logo-strip";
import { Navbar } from "@/features/landing/components/navbar";
import { Pricing } from "@/features/landing/components/pricing";
import { Testimonials } from "@/features/landing/components/testimonials";
import { auth } from "@clerk/nextjs/server";

async function LandingPage() {
    const { userId } = await auth();
    const signedIn = Boolean(userId);

    return (
        <div className="flex min-h-svh flex-col">
            <Navbar signedIn={signedIn} />
            <main className="flex-1">
                <Hero signedIn={signedIn} />
                <LogoStrip />
                <Features />
                <HowItWorks />
                <CtaBanner
                    signedIn={signedIn}
                    title="Ready to think faster?"
                    description="Create a free account and ask your first question in seconds."
                />
                <Testimonials />
                <Pricing signedIn={signedIn} />
                <Faq />
                <CtaBanner
                    signedIn={signedIn}
                    title="Your next great idea starts with a question"
                    description="Join Cortex AI today. It's free to start, and there's no credit card required."
                />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;
