import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../LoginContext";
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
    <Link
      to={`/home/detail?slug=${tour.slug}`}
      className="tour--item"
      style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}
    >
      <img
        src={`http://tour-api-dev.herokuapp.com${tour.hinh[0]}`}
        style={{ width: "20%" }}
      />
      <div style={{ width: "50%", background: "black" }}>
        <h3>Tên tour: {tour.ten}</h3>
        <h3>Ngày khởi hành: {tour.khoi_hanh}</h3>
      </div>
    </Link>
  );
  return (
    <>
      <p>Tour đã đặt</p>
      <div className="customer--tour__Container">
        {guideTour?.map((tour) => renderTour(tour))}
      </div>
    </>
  );
};

export default Tour;
