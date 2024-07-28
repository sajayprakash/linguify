import Image from "next/image";

type QuestionBubbleProps = {
  question: string;
};

function QuestionBubble({ question }: QuestionBubbleProps) {
  return (
    <div className="flex items-center gap-x-4 mb-6">
      <Image
        src="/mascot.jpg"
        alt="Mascot"
        width={60}
        height={60}
        className="hidden lg:block rounded-full"
      />
      <Image
        src="/mascot.jpg"
        alt="Mascot"
        width={40}
        height={40}
        className="lg:hidden block rounded-full"
      />
      <div className="relative py-2 px-4 border-2 rounded-xl text-sm lg:text-base">
        {question}
        <div className="absolute -left-3 top-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90"></div>
      </div>
    </div>
  );
}

export default QuestionBubble;
