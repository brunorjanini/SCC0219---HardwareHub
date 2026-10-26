import UserHeader from "../components/user/UserHeader";
import Footer from "../components/user/Footer";
import { Outlet } from "react-router";

export default function UserLayout() {
  return (
    <>
      <UserHeader />
      <Outlet />
      <Footer />
    </>
  );
}
