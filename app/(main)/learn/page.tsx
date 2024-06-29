import React from "react";
import StickyWrapper from "@/components/stickyWrapper";
import FeedWrapper from "@/components/feedWrapper";
import Header from "./header";
import UserProgress from "@/components/userProgress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

async function Learn() {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
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
