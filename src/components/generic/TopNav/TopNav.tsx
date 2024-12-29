import { Link } from "react-router-dom";
import "./TopNav.scss";

export default function TopNav() {
  return (
    <nav className="topNav">
      <Link to="/">Link 1</Link>
      <Link to="/">Link 2</Link>
      <Link to="/">Link 3</Link>
    </nav>
  );
}
