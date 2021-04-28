import React, { useState, useEffect } from "react";

const ComponentC = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("budi");

  // useEffect(() => {
  //   console.log("yes");

  //   // Update the document title using the browser API
  //   document.title = `${number} times`;
  // }, [number]);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log("helo");

  //   document.title = `${number} times`;
  // });

  // useEffect(() => {
  //   document.title = `${number} times`;
  // }, []);

  // useEffect(()=>{

  // })

  return (
    <div>
      Number: {number}
      name:{name}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={() => setName("ruri")}>changeName</button>
    </div>
  );
};

export default ComponentC;
