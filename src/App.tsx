import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Main from "./pages/main/Main";
import Text from "./pages/main/Text";
import Tracking from "./pages/main/Tracking";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={<PrivateRoute component={<Main />} authenticated={auth} />}
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
