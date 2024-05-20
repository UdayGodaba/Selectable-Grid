import React from "react";

const SelectableGrid = ({ rows, columns }) => {
  const gridArray = [];
  for (let i = 1; i <= rows * columns; i++) {
    gridArray.push(i);
  }

  return (
    <div id="grid" style={{ "--columns": columns }}>
      {gridArray.map((val, idx) => (
        <div key={idx} id="box">
          {val}
        </div>
      ))}
    </div>
  );
};

export default SelectableGrid;
