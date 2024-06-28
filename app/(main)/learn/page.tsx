import React from "react";
import StickyWrapper from "@/components/stickyWrapper";
import FeedWrapper from "@/components/feedWrapper";
import Header from "./_components/header";
import UserProgress from "@/components/userProgress";
function Learn() {
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title="French" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "French", imageSrc: "fr-flag.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
}

export default Learn;
