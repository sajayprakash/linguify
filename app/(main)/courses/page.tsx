import { getCourses } from "@/db/queries";
import React from "react";
import List from "./list";

async function Courses() {
  const courses = await getCourses();
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl">Language Courses</h1>
      <List courses={courses} activeCourseId={1} />
    </div>
  );
}

export default Courses;
