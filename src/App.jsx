import React, { useState } from "react";
import Button from "./Components/button";

function App() {
  const [display, setDisplay] = useState("");

  let arr = [
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "+",
    "00",
    "0",
    "/",
  ];

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-[#2c2c2c] p-6 rounded-3xl shadow-2xl w-[300px]">
      <div className="bg-gray-200 rounded-t-xl text-right px-4 py-4 mb-5 text-2xl font-bold text-black h-[56px] overflow-hidden whitespace-nowrap">
        {display || "0"}
      </div>

      <div className="flex justify-between mb-5">
        <Button title={"AC"} onClick={() => setDisplay("")} />
        <Button title={"="} onClick={() => setDisplay(eval(display))} />
      </div>

      <div className="flex flex-wrap justify-between">
        {arr.map((item, index) => (
          <Button
            key={index}
            title={item}
            onClick={() => setDisplay((prev) => prev + item)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
