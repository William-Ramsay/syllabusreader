import { Link } from "react-router-dom";
import "./TopNav.scss";

export default function TopNav() {
  return (
    <nav className="topNav">
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/">Link 3</Link>
    </nav>
  );
}
