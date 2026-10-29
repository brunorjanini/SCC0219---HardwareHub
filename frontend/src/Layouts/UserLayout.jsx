import UserHeader from "../components/user/UserHeader";
import Footer from "../components/user/Footer";
import { Outlet } from "react-router";
import "./UserLayout.css";

export default function UserLayout() {
  return (
    <div className="user-layout">
      <UserHeader />
      <main className="user-layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
