import Nav from "../../layout/Nav";
import Side from "../../layout/Side";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Nav />
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <Side />
        <Outlet />
      </div>
    </>
  );
}
