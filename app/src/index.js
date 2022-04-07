import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SidebarControlProvider from "./context/SidebarControlProvider";
import { BrowserRouter as Router } from "react-router-dom";
import SessionProvider from "./context/SessionProvider";

ReactDOM.render(
  <Router>
    <SessionProvider>
      <SidebarControlProvider>
        <App />
      </SidebarControlProvider>
    </SessionProvider>
  </Router>,

  document.getElementById("root")
);
