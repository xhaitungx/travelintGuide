import React from "react";

import { Routes, Route } from "react-router-dom";
import { Login, Home, Detail } from "../../pages";
import { File } from "../../containers";
const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  );
};

export default PageRouter;
