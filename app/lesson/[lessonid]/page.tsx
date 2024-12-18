import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";
import Quiz from "../_components/quiz";
type lessonIdPageProps = {
  params: { lessonid: number };
};
export default async function LessonIdPage({ params }: lessonIdPageProps) {
  const lessonData = getLesson(params.lessonid);
  const userProgressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }
  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;
  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialPercentage={initialPercentage}
      initialHearts={userProgress.hearts}
      userSubscription={null}
    />
  );
}
