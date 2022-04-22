import React from "react";
import { Button } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import "./sideBar.scss";
const SideBar = () => {
  // const handleButtonClick = (e) => {
  //   const target = e.target;
  //   const navButton = document.querySelectorAll(".SideBar--btn");
  //   for (let i = 0; i < navButton.length; i++)
  //     navButton[i].className = navButton[i].className.replace("active", "");
  //   target.className = target.className + " active";
  //   navigate(`/home/${e.target.id}`);
  // };

  const navigate = useNavigate();
  const navItems = [
    { id: "/", label: "Tour" },
    { id: "/home/process", label: "Tiến trình" },
    { id: "/home/file", label: "Hồ sơ" },
  ];
  return (
    <div className="SideBar">
      {navItems.map((item) => (
        <NavLink
          to={item.id}
          className={({ isActive }) =>
            isActive ? "itemNav itemNav--active" : "itemNav"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
//
