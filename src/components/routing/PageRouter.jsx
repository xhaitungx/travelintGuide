import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Home, Detail } from "../../pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home/*" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  );
};

export default PageRouter;
