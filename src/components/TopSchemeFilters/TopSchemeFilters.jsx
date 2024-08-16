import React, { useState } from "react";
import "./TopSchemeFilters.css";

export default function TopSchemeFilters({ filterData }) {
  const [scheme, setScheme] = useState("");
  const [category, setCategory] = useState("all");
  const [fund, setFund] = useState("all");

  return (
    <div className="TopSchemeFilters flex">
      <div>
        <input
          type="text"
          className="topscheme-inp"
          id="searchScheme"
          placeholder="Search Scheme"
          onChange={(e) => setScheme(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="category">Category :</label>
        <select
          name="category"
          className="topscheme-inp"
          id="category"
          defaultValue="all"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Selected</option>
          <option value="large">Lage Cap</option>
          <option value="mid">Midium Cap</option>
          <option value="small">Small Cap</option>
        </select>
      </div>

      <div>
        <label htmlFor="funds">Funds :</label>
        <select
          name="funds"
          className="topscheme-inp"
          id="funds"
          defaultValue="all"
          onChange={(e) => setFund(e.target.value)}
        >
          <option value="all">All Selected</option>
          <option value="infrastructure">Infrastructure</option>
          <option value="finance">Finance</option>
          <option value="defence">Defence</option>
          <option value="hybrid">Hybrid</option>
          <option value="equity">Equity</option>
        </select>
      </div>
      <button onClick={() => filterData(scheme, category, fund)}>Apply</button>
    </div>
  );
}
