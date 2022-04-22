import React from "react";

import { Routes, Route } from "react-router-dom";
import { Login, Home } from "../../pages";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home/*" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default PageRouter;
