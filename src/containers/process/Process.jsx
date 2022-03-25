import React from "react";

import { Place } from "../../components";
import "./process.scss";
const Process = () => {
  const data = [1, 2, 3, 4];

  return (
    <div className="process">
      {data.map((item) => (
        <Place id={item} />
      ))}
    </div>
  );
};

export default Process;
