import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

type FooterProps = {
  onCheck: () => void;
  status: "correct" | "incorrect" | "none" | "completed";
  disabled?: boolean;
  lessonId?: boolean;
};
function Footer({ onCheck, status, disabled, lessonId }: FooterProps) {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");
  return (
    <footer
      className={cn(
        "lg:h-[140px] h-[100px] border-t-2",
        status === "correct" && "border-transparent bg-green-100",
        status === "incorrect" && "border-transparent bg-rose-100"
      )}
    >
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            You got it right!
          </div>
        )}
        {status === "incorrect" && (
          <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
            <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Try again.
          </div>
        )}
        {status === "completed" && (
          <Button
            variant={"default"}
            size={isMobile ? "sm" : "lg"}
            onClick={() => redirect(`/lesson/${lessonId}`)}
          >
            Practice again
          </Button>
        )}
        <Button
          disabled={disabled}
          className="ml-auto"
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          variant={status === "incorrect" ? "danger" : "secondary"}
        >
          {status === "none" && "Check"}
          {status === "correct" && "Next"}
          {status === "incorrect" && "Retry"}
          {status === "completed" && "Continue"}
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
