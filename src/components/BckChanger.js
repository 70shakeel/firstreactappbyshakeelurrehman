import React, { useState } from "react";

function BckChanger() {
  const [colour, setColour] = useState("white");
  let sh = colour;
  let hh = "black";
  if (sh === "white") {
    sh = "blue";
    hh = "blue";
  } else if (sh === "blue") {
    sh = "white";
    hh = "white";
  }
  return (
    <div
      style={{ height: "100vh", width: "100%", backgroundColor: `${colour}` }}
    >
      <h1 style={{ color: `${hh}` }}>{colour}</h1>
      <button onClick={() => setColour(`${sh}`)} style={{ color: `${hh}` }}>
        Click Me
      </button>
    </div>
  );
}

export default BckChanger;
