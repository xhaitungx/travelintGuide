import React from "react";

import { Header, SideBar, FooterNav } from "../../containers";
import { ComponentsRouter } from "../../components";
import "./home.scss";
const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="sidebar--container">
          <SideBar />
        </div>
        <div className="component padding-section">
          <ComponentsRouter />
        </div>
      </div>

      <div className="footerNav--container">
        <FooterNav />
      </div>
    </div>
  );
};

export default Home;
