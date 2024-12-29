import { useState, useEffect } from "react";
import { CourseCardProps } from "../../../types/Course";

import CourseCard from "../../generic/CourseCard/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);

  const url: string = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getCourses();
  });
  const getCourses = async () => {
    const resp = await fetch(url + "/courses");
    const jsonResp = await resp.json();
    setCourses(jsonResp);
  };

  return (
    <div>
      {courses.map((course) => (
        <CourseCard key={course.courseID} {...course} />
      ))}
    </div>
  );
}
