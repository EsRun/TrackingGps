import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Main from "./pages/main/Main";
import Text from "./pages/main/Text";
import Tracking from "./pages/main/Tracking";
import PrivateRoute from "./routes/PrivateRoute";

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
                <PrivateRoute component={<Text />} authenticated={auth} />
              </Suspense>
            }
          />
          <Route
            path="/s"
            element={
              <Suspense fallback={<div>로딩 중. . .</div>}>
                <PrivateRoute component={<Tracking />} authenticated={auth} />
              </Suspense>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/join" />
      </Routes>
    </>
  );
}

export default App;
