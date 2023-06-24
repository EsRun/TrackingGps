import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Main from "./pages/main/Main";
import Text from "./pages/main/Text";
import Tracking from "./pages/main/Tracking";

function App() {
  const [auth, setAuth] = useState(true);
  
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>로딩 중. . .</div>}>
                <Text />
              </Suspense>
            }
          />
          <Route
            path="/s"
            element={
              <Suspense fallback={<div>로딩 중. . .</div>}>
                <Tracking />
              </Suspense>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
