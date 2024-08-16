import React, { useState } from "react";
import "./Home.css";
import SideOptions from "../../components/SideOptions/SideOptions";
import TopSchemes from "../../components/TopSchemes/TopSchemes";
import Clients from "../../components/Clients/Clients";
import Dashboard from "../../components/Dashboard/Dashboard";

export default function Home() {
  const [category, setCategory] = useState("Dashboard");
  return (
    <div className="Home flex">
      <SideOptions category={category} setCategory={setCategory} />
      <div className="Home-right">
        {(category === "Dashboard" && <Dashboard />) ||
          (category === "TopSchemes" && <TopSchemes />) ||
          (category === "Clients" && <Clients />) ||
          (category === "Utilities" && "")}
      </div>
    </div>
  );
}
