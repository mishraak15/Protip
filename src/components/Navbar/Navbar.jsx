import React from "react";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import { RiContrastDropFill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { LuBadgeHelp } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const username = "Akash";
  return (
    <div className="Navbar flex">

      <NavLink to="/" className="nav-left flex">
        <RiContrastDropFill className="nav-icon" />
        <span>Protip</span>
      </NavLink>

      <div className="nav-right flex">

        <NavLink to="/new" className="flex">
          <MdOutlineMessage className="nav-icon" />
          <span>What's new</span>
        </NavLink>

        <NavLink to="/help" className="flex">
          <LuBadgeHelp className="nav-icon" />
          <span>Help</span>
        </NavLink>

        <div className="flex">
          <FaUser className="nav-icon" />
          <span>{username}</span>
        </div>
        
      </div>
    </div>
  );
}
