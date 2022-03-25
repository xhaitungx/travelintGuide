import React from "react";
import { Button } from "@mui/material";
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
  const navItems = [
    { id: "tour", label: "Tour" },
    { id: "process", label: "Tiến trình" },
    { id: "file", label: "Hồ sơ" },
    { id: "history", label: "Lịch sử" },
  ];
  return (
    <div className="SideBar">
      {navItems.map((item) => (
        <div className="item">
          <Button
            id={item.id}
            className="SideBar--btn active"
            onClick={handleButtonClick}
          >
            {item.label}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
