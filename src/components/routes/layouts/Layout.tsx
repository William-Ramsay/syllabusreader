import { Outlet } from "react-router-dom";
import "./Layout.scss";

import Footer from "../../generic/Footer/Footer";
import TopNav from "../../generic/TopNav/TopNav";

export default function Layout() {
  return (
    <div className="layout">
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  );
}
