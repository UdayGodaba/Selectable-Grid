import React, { useState } from "react";

const SelectableGrid = ({ rows, columns }) => {
  const [selected, setSelected] = useState([]);
  const [ref, setRef] = useState([]);

  const gridArray = [];
  for (let i = 1; i <= rows * columns; i++) {
    gridArray.push(i);
  }

  const handleMouseDown = (val) => {
    setRef([val]);
    setSelected([val]);
  };

  const handleMouseEnter = (val) => {
    let minVal = Math.min(ref[0], val);
    let maxVal = Math.max(ref[0], val);
    let arr = [];
    let x1 = Math.floor((minVal - 1) / columns);
    let y1 = (minVal - 1) % columns;
    let x2 = Math.floor((maxVal - 1) / columns);
    let y2 = (maxVal - 1) % columns;
    for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
      for (let j = Math.min(y1, y2); j <= Math.max(y1, y2); j++) {
        arr.push(i * columns + j + 1);
      }
    }
    setSelected(arr);
  };

  const handleMouseUp = () => {
    setSelected([]);
    setRef([]);
  };

  return (
    <div id="grid" style={{ "--columns": columns }} onMouseUp={handleMouseUp}>
      {gridArray.map((val, idx) => (
        <div
          key={idx}
          id="box"
          className={selected.includes(val) ? "selected" : ""}
          onMouseDown={() => handleMouseDown(val)}
          onMouseEnter={() => {
            ref.length > 0 && handleMouseEnter(val);
          }}
        >
          {val}
        </div>
      ))}
    </div>
  );
};

export default SelectableGrid;
