import React, { useContext } from "react";
import { TourDataContext } from "../../pages/home/TourDataContext";

import { Place } from "../../components";
import "./process.scss";
const Process = ({ processData }) => {
  const renderLichTrinh = (processData) =>
    processData?.map((item) => (
      <Place id={item.id_dia_diem["_id"]} data={item.id_dia_diem} />
    ));
  return <div className="process">{renderLichTrinh(processData)}</div>;
};

export default Process;
//
