import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../LoginContext";

import "./header.scss";
const Header = () => {
  const [settingOpen, setSettingOpen] = useState(false);
  const [menuOn, setMenuOn] = useState(false);
  const guiderID = useContext(LoginContext);
  const settingOptions = [
    { id: "home/detail", label: "Chi tiết", function: () => {} },
    {
      id: "login",
      label: "Đăng xuất",
      function: () => {
        window.sessionStorage.clear();
        window.location.href = "http://localhost:3000/login";
      },
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        className="icon"
        onMouseEnter={() => setMenuOn(true)}
        onMouseLeave={() => setMenuOn(false)}
        onClick={() => {
          setMenuOn(false);
        }}
      >
        {window.sessionStorage.getItem("guiderName")}
        {menuOn ? (
          <div className="setting">
            <ul className="setting--option">
              {settingOptions.map((item) => (
                <li onClick={item.function}>{item.label}</li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
//
