import React, { useContext } from "react";
import { TourDataContext } from "../../pages/home/TourDataContext";

import { Place } from "../../components";
import "./process.scss";
const Process = () => {
  const { lich_trinh } = useContext(TourDataContext);
  const renderLichTrinh = (lich_trinh) =>
    lich_trinh?.map((item) => (
      <Place id={item.id_dia_diem["_id"]} data={item.id_dia_diem} />
    ));
  return <div className="process">{renderLichTrinh(lich_trinh)}</div>;
};

export default Process;
