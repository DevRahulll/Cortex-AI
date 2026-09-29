import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return <SignIn fallbackRedirectUrl="/chat" signUpUrl="/sign-up" />;
}
