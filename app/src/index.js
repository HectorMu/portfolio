import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SidebarControlProvider from "./context/SidebarControlProvider";

ReactDOM.render(
  <SidebarControlProvider>
    <App />
  </SidebarControlProvider>,
  document.getElementById("root")
);
