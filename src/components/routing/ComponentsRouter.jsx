import React from "react";
import { Routes, Route } from "react-router-dom";
import { Tour, Process, File, History } from "../../containers";
const ComponentsRouter = () => {
  return (
    <Routes>
      <Route path="/tour" element={<Tour />} />
      <Route path="/process" element={<Process />} />
      <Route path="/file" element={<File />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default ComponentsRouter;
