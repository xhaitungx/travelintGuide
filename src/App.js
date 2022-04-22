import React from "react";
import { LoginContext } from "./LoginContext";
import "./app.scss";
import { PageRouter } from "./components";
const App = () => {
  const checkLogin = () => {
    const guiderID = window.sessionStorage.getItem("guiderID");
    if (guiderID === null) window.location.href = "http://localhost:3000/login";
  };

  return (
    <div>
      <LoginContext.Provider value={window.sessionStorage.getItem("guiderID")}>
        <PageRouter />
      </LoginContext.Provider>
    </div>
  );
};

export default App;
