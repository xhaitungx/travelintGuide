import React from "react";
import { Button } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import "./footerNav.scss";
const FooterNav = () => {
  const navigate = useNavigate();

  const navItems = [
    { id: "/", label: "Tour" },
    { id: "/home/process", label: "Tiến trình" },
    { id: "/home/file", label: "Hồ sơ" },
  ];

  return (
    <div className="footerNav">
      {navItems.map((item) => (
        <NavLink
          to={item.id}
          className={({ isActive }) =>
            isActive ? "itemFooterNav itemFooterNav--active" : "itemFooterNav"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default FooterNav;
// 