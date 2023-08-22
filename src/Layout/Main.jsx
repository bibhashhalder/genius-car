import { Outlet } from "react-router-dom";
import Header from "../pages/Sheared/Header/Header";
import Footer from "../pages/Sheared/Footer/Footer";

export default function Main() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
