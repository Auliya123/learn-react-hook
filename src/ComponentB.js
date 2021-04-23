import React, { useState, useMemo } from "react";

export default function ComponentB() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("calling slow function");
  // sleep(2000); //heavy function
  return num * 2;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
