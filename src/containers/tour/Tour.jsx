import React, { useContext } from "react";
import { TourDataContext } from "../../pages/home/TourDataContext";

import axios from "axios";
import "./tour.scss";
const Tour = () => {
  const dataTour = useContext(TourDataContext);

  return <div>Tour</div>;
};

export default Tour;
