import { CourseCardProps } from "../../../types/Course";
import "./CourseCard.scss";
export default function CourseCard({
  courseID,
  courseName,
  professor,
}: CourseCardProps) {
  return (
    <div className="courseCard">
      <div className="cardTop">
        <h3>{courseName}</h3>
      </div>
      <div className="cardBottom">
        <p>{courseID}</p>
        <p>{professor}</p>
      </div>
    </div>
  );
}
