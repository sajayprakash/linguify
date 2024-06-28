import React from "react";
type FeedWrapperProps = {
  children: React.ReactNode;
};
function FeedWrapper({ children }: FeedWrapperProps) {
  return <div className="flex-1 relative top-0 pb-10">{children}</div>;
}

export default FeedWrapper;
