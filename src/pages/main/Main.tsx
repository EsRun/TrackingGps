import Nav from "../../layout/Nav";
import Side from "../../layout/Side";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Nav />
      <Outlet />
      <Side />
    </>
  );
}
