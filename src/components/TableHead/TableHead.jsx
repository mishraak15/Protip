import React, { useEffect, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";

export default function TableHead({ head, sortData }) {
  const [clicks, setCLicks] = useState(0);

  function sortClickHandler() {
    let asc;
    setCLicks((pre) => (pre + 1) % 3);
    let x = (clicks + 1) % 3;
    x === 0 ? (asc = "") : x === 1 ? (asc = true) : (asc = false);
    sortData(head.value, asc);
  }

  return (
    <>
      <th onClick={() => sortClickHandler()}>
        {head.name}{" "}
        {(clicks === 0 && <RiExpandUpDownFill />) ||
          (clicks === 1 && <FaCaretUp />) ||
          (clicks === 2 && <FaCaretDown />)}
      </th>
    </>
  );
}
