import React, { useState } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./footerNav.scss";
const FooterNav = () => {
  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    const target = e.target;
    navigate(`/home/${e.target.id}`);
    const navButton = document.querySelectorAll(".footerNav--btn");
    for (let i = 0; i < navButton.length; i++)
      navButton[i].className = navButton[i].className.replace("active", "");
    target.className = target.className + " active";
  };
  return (
    <div className="footerNav">
      <div className="item">
        <Button
          id="tour"
          className="footerNav--btn active"
          onClick={handleButtonClick}
        >
          Tour
        </Button>
      </div>
      <div className="item">
        <Button
          id="process"
          className="footerNav--btn "
          onClick={handleButtonClick}
        >
          Tiến trình
        </Button>
      </div>
      <div className="item">
        <Button
          id="file"
          className="footerNav--btn "
          onClick={handleButtonClick}
        >
          Hồ sơ
        </Button>
      </div>
      <div className="item">
        <Button
          id="history"
          className="footerNav--btn "
          onClick={handleButtonClick}
        >
          Lịch sử
        </Button>
      </div>
    </div>
  );
};

export default FooterNav;
