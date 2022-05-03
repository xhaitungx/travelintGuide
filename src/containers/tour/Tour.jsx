import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../LoginContext";
import "./tour.scss";

const Tour = () => {
  const [guideTour, setGuideTour] = useState([]);
  const guiderID = useContext(LoginContext);

  useEffect(() => {
    axios(`https://tour-api-dev.herokuapp.com/tour`).then(({ data }) => {
      const filterData = data.filter(
        (bookedTour) => bookedTour.nguoi_hd["_id"] === guiderID
      );
      setGuideTour(filterData);
    });
  }, []);

  const renderTour = (tour) => (
    <Link to={`/home/detail?slug=${tour.slug}`} className="tour--item">
      <img
        src={`http://tour-api-dev.herokuapp.com${tour.hinh[0]}`}
        style={{ width: "20%" }}
      />
      <div>
        <h3>{tour.ten}</h3>
        <h3>Khởi hành: {tour.khoi_hanh}</h3>
      </div>
    </Link>
  );
  return (
    <>
      <div className="customer--tour__Container">
        <h1>Tour Hướng Dẫn</h1>
        {guideTour?.map((tour) => renderTour(tour))}
      </div>
    </>
  );
};

export default Tour;
