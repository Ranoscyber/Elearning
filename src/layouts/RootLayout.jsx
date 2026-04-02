import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Topbar />
      <Header />

      <Outlet />

      <Footer/>
    </>
  );
}

export default RootLayout;
