import React from "react";
import { useOutletContext } from "react-router-dom";
interface UserInfoConText {
  currentSelect: string;
}

const Text = () => {
  const { currentSelect } = useOutletContext<UserInfoConText>();
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#ccc" }}>
      테스트 페이지
      {currentSelect}
    </div>
  );
};

export default Text;
