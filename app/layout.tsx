import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import ExitModal from "@/components/modals/exitModal";
import HeartsModal from "@/components/modals/heartsModal";
import PracticeModal from "@/components/modals/practiceModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linguify",
  description:
    "Linguify is a language learning platform. Learn a new language today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
