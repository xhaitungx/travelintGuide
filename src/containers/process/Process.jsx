import React from "react";

import { Place } from "../../components";
import "./process.scss";
const Process = () => {
  const data = [
    {
      name: "Đền thần",
      status: {
        label: "Đã tham quan",
        className: "done",
      },
      img: "https://motto-jp.com/media/wp-content/uploads/2020/03/eyecatch-9.jpg",
      location: "Tokyo",
    },
    {
      name: "Công viên khủng long",
      status: {
        label: "Đang đến",
        className: "going",
      },
      img: "https://halotravel.vn/wp-content/uploads/2020/01/NVL06648-696x480.jpg",
      location: "Kyoto",
    },
    {
      name: "Disneyland",
      status: {
        label: "Đợi",
        className: "wait",
      },
      img: "https://image.thanhnien.vn/w660/Uploaded/2022/juzagt/2020_09_30/anh1_ibrt.jpg",
      location: "Somewhere",
    },
  ];

  return (
    <div className="process">
      {data.map((item) => (
        <Place id={item} data={item} />
      ))}
    </div>
  );
};

export default Process;
