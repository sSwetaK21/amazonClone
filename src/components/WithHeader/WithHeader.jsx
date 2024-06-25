// src/WithHeader.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
const WithHeader = ({ children, username }) => {
  const location = useLocation();
  const showHeader =
    location.pathname !== "/login" && location.pathname !== "/register";

  return (
    <>
      {showHeader && <Header username={username} />}
      {children}
    </>
  );
};

export default WithHeader;
