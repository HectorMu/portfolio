import React from "react";
import { Hero, Navbar, Layout } from "./components";
import "./css/main.css";
import "./css/utilities.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
};

export default App;
