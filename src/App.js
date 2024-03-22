import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignInPage from "./page/Authentication/SignIn/SignInPage";
import SignUpPage from "./page/Authentication/SignUp/SignUpPage";
import Home from "./page/HomePage/Home";
import NotFound from "./page/NotFound";
import TestPage from "./page/TestPage";
import PublicProfilePage from "./page/PublicProfilePage/PublicProfilePage";

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(
    localStorage.getItem("userAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("userAuthenticated", userAuthenticated);
  }, [userAuthenticated]);
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route
            path="/"
            element={<SignInPage setUserAuthenticated={setUserAuthenticated} />}
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/home"
            element={
              userAuthenticated ? (
                <Home
                  userAuthenticated={userAuthenticated}
                  setUserAuthenticated={setUserAuthenticated}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/publicprofile/:userId"
            element={
              userAuthenticated ? (
                <PublicProfilePage
                  userAuthenticated={userAuthenticated}
                  setUserAuthenticated={setUserAuthenticated}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/testpage"
            element={
              userAuthenticated ? (
                <TestPage userAuthenticated={userAuthenticated} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
