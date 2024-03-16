import { Button } from "@/components/ui/button";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="h-20 w-full border-b-2 bg-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/mascot.jpg"
            height={40}
            width={40}
            alt="Linguify Mascot"
            className="rounded-full border-2 border-green-600"
          />
          <h1 className="text-2xl font-extrabold text-green-600">Linguify</h1>
        </div>
        <ClerkLoading>
          <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
}
