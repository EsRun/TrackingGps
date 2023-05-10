import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Main from "./pages/main/Main";
import Tracking from "./pages/main/Tracking";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>로딩 중. . .</div>}>
                <Tracking />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
