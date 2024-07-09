// src/WithHeader.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { useAuth } from "../auth/AuthProvider";
const WithHeader = ({ children, username }) => {
  const location = useLocation();
  const { user } = useAuth();
  const showHeader =
    location.pathname !== "/login" && location.pathname !== "/register";

  return (
    <>
      {showHeader && <Header user={user ? user.user_Name : null} />}
      {children}
    </>
  );
};

export default WithHeader;
