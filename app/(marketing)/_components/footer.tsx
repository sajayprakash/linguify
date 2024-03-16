import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex  items-center justify-evenly h-full">
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/fr-flag.svg"
            alt="French"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/in-flag.svg"
            alt="Tamil"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Tamil
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/in-flag.svg"
            alt="Hindi"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Hindi
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          <Image
            src="/jp-flag.svg"
            alt="Japanese"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
}
