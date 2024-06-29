import { Loader2 } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="h-full w-full items-center flex justify-center">
      <Loader2 className="h-6  w-6 text-muted-foreground animate-spin" />
    </div>
  );
}

export default Loading;
