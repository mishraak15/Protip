import React, { useState } from "react";
import "./SideOptions.css";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaChevronDown, FaChevronUp, FaSearchDollar } from "react-icons/fa";

export default function SideOptions({ category, setCategory }) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="SideOptions flex">
      <span>Empowering Financial Advisory Journey</span>

      <div
        className="sideoption-element flex"
        style={
          category === "Dashboard"
            ? { backgroundColor: "#5e5e5e" }
            : { backgroundColor: "" }
        }
        onClick={() => setCategory("Dashboard")}
      >
        <IoHomeSharp />
        <span>Dashboard</span>
      </div>

      <div
        className="sideoption-element flex"
        style={
          category === "TopSchemes"
            ? { backgroundColor: "#5e5e5e" }
            : { backgroundColor: "" }
        }
        onClick={() => setCategory("TopSchemes")}
      >
        <RiMoneyDollarCircleFill />
        <span>Top Schemes</span>
      </div>

      <div
        className="sideoption-element flex"
        style={
          category === "Clients"
            ? { backgroundColor: "#5e5e5e" }
            : { backgroundColor: "" }
        }
        onClick={() => setCategory("Clients")}
      >
        <IoIosPeople />
        <span>Clients</span>
      </div>

      <div
        className="sideoption-element flex"
        onClick={() => setShowOptions((pre) => !pre)}
      >
        <FaSearchDollar />
        <span>Utilities</span>
        {!showOptions && <FaChevronDown style={{ alignSelf: "flex-end" }} />}
        {showOptions && <FaChevronUp />}
      </div>
      {showOptions && (
        <div className="sideoptions-utilities-options">
          <div className="sideoption-element">Rolling Return Calculator</div>
          <div className="sideoption-element">Task Manager</div>
          <div className="sideoption-element">Goal Planner</div>
          <div className="sideoption-element">Model Portfolios</div>
          <div className="sideoption-element">Calculator</div>
          <div className="sideoption-element">Forms</div>
          <div className="sideoption-element">Market Data</div>
        </div>
      )}
    </div>
  );
}
