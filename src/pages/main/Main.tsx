import Nav from "../../layout/Nav";
import Side from "../../layout/Side";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Main() {
  const [currentSelect, setCurrentSelect] = useState(1000);
  const handleSelect = (v: any) => {
    setCurrentSelect(v);
  };

  useEffect(() => {
    console.log("Main Component", currentSelect);
  }, [currentSelect]);

  return (
    <>
      <Nav />
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <Side select={handleSelect} />
        <Outlet context={{ currentSelect }} />
      </div>
    </>
  );
}
