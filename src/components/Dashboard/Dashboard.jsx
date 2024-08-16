import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import userData from "../../../util/userData";
import DonutChart from "../DonutChart/DonutChart";

export default function Dashboard() {
  const username = "Akash";
  const [greeting, setGreeting] = useState("Hello");
  const [investmentType, setInvestmentType] = useState("Total");
  const [value, setValue] = useState({ total: 0, value: 0 });
  const [shares, setShares] = useState({ total: 0, value: 0 });

  useEffect(() => {
    let d = new Date(Date.now()).getHours();
    if (d >= 4 && d <= 11) {
      setGreeting("Good Morning");
    } else if (d >= 12 && d <= 17) {
      setGreeting("Good Afternoon");
    } else if (d > 17 && d <= 22) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  function findTotalInvestment(type) {
    let total = 0;
    if (type === "Total") {
      userData?.investments?.forEach((d) => {
        total += d.investment_amount;
      });
    } else {
      userData?.investments?.forEach((d) => {
        d.investment_type === type ? (total += d.investment_amount) : "";
      });
    }
    return total;
  }

  function findTotalShares(type) {
    let total = 0;
    if (type === "Total") {
      userData?.investments?.forEach((d) => {
        total += d.shares_owned;
      });
    } else {
      userData?.investments?.forEach((d) => {
        d.investment_type === type ? (total += d.shares_owned) : "";
      });
    }
    return total;
  }

  useEffect(() => {
    let totalInves = findTotalInvestment("Total");
    let typeValueInves = findTotalInvestment(investmentType);
    setValue({ total: totalInves, value: typeValueInves });

    let totalShares = findTotalShares("Total");
    let typeValueShares = findTotalShares(investmentType);
    setShares({ total: totalShares, value: typeValueShares });
  }, [investmentType]);

  return (
    <div className="Dashboard">
      <h1>
        {greeting}, {username}!
      </h1>
      <h2>Your investments</h2>
      <div className="dashboard-investment-opt flex">
        <div
          style={
            investmentType === "Total"
              ? { backgroundColor: "#bebebeb9" }
              : { backgroundColor: "" }
          }
          onClick={() => setInvestmentType("Total")}
        >
          Total
        </div>
        <div
          style={
            investmentType === "Equity"
              ? { backgroundColor: "#bebebeb9" }
              : { backgroundColor: "" }
          }
          onClick={() => setInvestmentType("Equity")}
        >
          Equity
        </div>
        <div
          style={
            investmentType === "Bond"
              ? { backgroundColor: "#bebebeb9" }
              : { backgroundColor: "" }
          }
          onClick={() => setInvestmentType("Bond")}
        >
          Bond
        </div>
        <div
          style={
            investmentType === "Mutual Fund"
              ? { backgroundColor: "#bebebeb9" }
              : { backgroundColor: "" }
          }
          onClick={() => setInvestmentType("Mutual Fund")}
        >
          Mutual Fund
        </div>
      </div>
      <div className="donut-container flex">
        <div>
          <div>Investment</div>
          <DonutChart data={value} />
          <div>
            {value.value}/ {value.total}
          </div>
        </div>
        <div>
          <div>Shares</div>
          <DonutChart data={shares} />
          <div>
            {shares.value}/ {shares.total}
          </div>
        </div>
      </div>
    </div>
  );
}
