import React from "react";
import { Routes, Route } from "react-router-dom";
import { Tour, Detail } from "../../containers";
const ComponentsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Tour />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  );
};

export default ComponentsRouter;
