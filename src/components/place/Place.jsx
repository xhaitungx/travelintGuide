import React from "react";

import "./place.scss";
const Place = () => {
  return (
    <div className="place--container">
      <div className="place--img">
        <img src={require("./sth.png")} />
        <small className="status going">Đang đến</small>
      </div>
      <div className="place--information">
        <h3>Tên địa điểm: Heaven</h3>
        <p>Vị trí: Cloud street</p>
      </div>
    </div>
  );
};

export default Place;
