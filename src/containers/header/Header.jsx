import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./header.scss";
const Header = () => {
  const [settingOpen, setSettingOpen] = useState(false);
  const settingOptions = [
    { id: "home/detail", label: "Chi tiết" },
    { id: "login", label: "Đăng xuất" },
  ];
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        className="icon"
        onClick={() => {
          setSettingOpen(!settingOpen);
        }}
      >
        icon
        {settingOpen ? (
          <div className="setting">
            <ul className="setting--option">
              {settingOptions.map((item) => (
                <li onClick={() => navigate(`/${item.id}`)}>{item.label}</li>
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
