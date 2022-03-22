import React from "react";
import { Place } from "./components";
import { Header, FooterNav } from "./containers";
import { File } from "./containers";
import "./app.scss";
import { PageRouter } from "./components";
const App = () => {
  return (
    <div>
      <PageRouter />
    </div>
  );
};

export default App;
