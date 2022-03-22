import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./sideBar.scss";
const SideBar = () => {
  const handleButtonClick = (e) => {
    const target = e.target;
    const navButton = document.querySelectorAll(".SideBar--btn");
    for (let i = 0; i < navButton.length; i++)
      navButton[i].className = navButton[i].className.replace("active", "");
    target.className = target.className + " active";
    navigate(`/home/${e.target.id}`);
  };

  const navigate = useNavigate();

  return (
    <div className="SideBar">
      <div className="item">
        <Button
          id="tour"
          className="SideBar--btn active"
          onClick={handleButtonClick}
        >
          Tour
        </Button>
      </div>
      <div className="item">
        <Button
          id="process"
          className="SideBar--btn "
          onClick={handleButtonClick}
        >
          Tiến trình
        </Button>
      </div>
      <div className="item">
        <Button id="file" className="SideBar--btn " onClick={handleButtonClick}>
          Hồ sơ
        </Button>
      </div>
      <div className="item">
        <Button
          id="history"
          className="SideBar--btn "
          onClick={handleButtonClick}
        >
          Lịch sử
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
