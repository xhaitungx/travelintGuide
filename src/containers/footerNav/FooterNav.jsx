import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./footerNav.scss";
const FooterNav = () => {
  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    const target = e.target;
    const navButton = document.querySelectorAll(".footerNav--btn");
    for (let i = 0; i < navButton.length; i++)
      navButton[i].className = navButton[i].className.replace("active", "");
    target.className = target.className + " active";
    navigate(`/home/${e.target.id}`);
  };

  const navItems = [
    { id: "tour", label: "Tour" },
    { id: "process", label: "Tiến trình" },
    { id: "file", label: "Hồ sơ" },
    { id: "history", label: "Lịch sử" },
  ];

  return (
    <div className="footerNav">
      {navItems.map((item) => (
        <div className="item">
          <Button
            id={item.id}
            className="footerNav--btn active"
            onClick={handleButtonClick}
          >
            {item.label}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default FooterNav;
