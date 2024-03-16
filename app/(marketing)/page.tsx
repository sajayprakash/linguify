import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function MarketingPage() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.jpg" fill alt="Hero Image" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-800 max-w-[480px] text-center">
          Learn, practice and master a new language with Linguify today!
        </h1>
        <ClerkLoading>
          <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="secondary" className="w-full">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button size="lg" variant="primaryOutline" className="w-full">
                I Already Have An Account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="primary" className="w-full">
              <Link href="/learn">Continue your learning journey!</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}

export default MarketingPage;
