import React, { useEffect, useState } from "react";
import "./TopSchemes.css";
import TopSchemeFilters from "../TopSchemeFilters/TopSchemeFilters";
import data from "../../../util/data";
import head from "../../../util/head";
import TableHead from "../TableHead/TableHead";

export default function TopSchemes() {
  const [compData, setCompData] = useState([]);
  useEffect(() => {
    setCompData([...data]);
  }, []);

  const sortData = (key, ascending) => {
    let d;
    if (ascending === "") {
      d = data;
    } else if (key === "company_name") {
      d = compData.sort((a, b) => {
        const nameA = a.company_name.toLowerCase();
        const nameB = b.company_name.toLowerCase();
        const comparison = nameA.localeCompare(nameB);
        return ascending ? comparison : -comparison;
      });
    } else {
      d = compData.sort((a, b) => {
        const aValue = parseFloat(a[key]);
        const bValue = parseFloat(b[key]);

        if (ascending) return aValue - bValue;
        else return bValue - aValue;
      });
    }

    setCompData([...d]);
  };

  function filterData(scheme, category, fund) {
    let d = data;
    if (scheme !== "") {
      scheme = scheme?.trim().toLowerCase();
      d = d.filter((item) => {
        return item.company_name.toLowerCase().includes(scheme);
      });
    }

    if (category !== "all") {
      d = d.filter((item) => {
        return item.category === category;
      });
    }

    if (fund !== "all") {
      d = d.filter((item) => {
        return item.funds === fund;
      });
    }
    setCompData([...d]);
  }

  return (
    <div className="TopSchemes">
      <TopSchemeFilters filterData={filterData} />

      {compData.length === 0 ? (
        <h1>No Match Found!!</h1>
      ) : (
        <table className="topschemes-details">
          <thead>
            <tr>
              {head.map((h, id) => {
                return <TableHead key={id} head={h} sortData={sortData} />;
              })}
            </tr>
          </thead>

          <tbody>
            {compData.map((d, id) => {
              return (
                <tr key={id}>
                  <td>{d?.company_name}</td>
                  <td>{d?.nav}</td>
                  <td>{d?.aum}</td>
                  <td>{d?.expense_ratio}</td>
                  <td>{d?.six_month}</td>
                  <td>{d?.one_year}</td>
                  <td>{d?.five_year}</td>
                  <td>{d?.ten_year}</td>
                  <td>{parseInt(d?.current_val).toLocaleString("en-IN")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
