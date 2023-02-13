import React, { useState } from "react";

export default function App() {
  const [leftWidth, setLeftWidth] = useState("49%");
  const [rightWidth, setRightWidth] = useState("49%");
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      setDragging(true);
    }
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      setLeftWidth(event.clientX + "px");
      setRightWidth(`calc(100% - ${event.clientX}px)`);
    }
  };

  const handleMouseUp = (event) => {
    setDragging(false);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: leftWidth,
          height: "200px",
          borderRight: "1px solid black"
        }}
      >
        Column 1
      </div>
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: rightWidth,
          height: "200px"
        }}
      >
        Column 2
      </div>
    </div>
  );
}
