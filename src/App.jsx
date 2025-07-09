import React, { useState } from "react";
import Button from "./Components/button";

function App() {
  const [display, setDisplay] = useState("");

  const buttons = [
    "AC", "/", "*", "-",
    "7", "8", "9", "+",
    "4", "5", "6", "1",
    "2", "3", "0", "00",
    ".", "="
  ];

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setDisplay("");
    } else if (value === "=") {
      try {
        // Evaluate the expression, handling potential errors
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-200 p-8 rounded-2xl shadow-lg w-80">
        {/* Calculator Display */}
        <div className="bg-gray-900 rounded-lg text-right px-5 py-4 mb-6 text-4xl font-light text-white h-20 flex items-center justify-end overflow-hidden whitespace-nowrap">
          {display || "0"}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((item, index) => (
            <Button
              key={index}
              title={item}
              onClick={() => handleButtonClick(item)}
              isOperator={["/", "*", "-", "+", "=", "AC"].includes(item)}
              isEquals={item === "="}
              isClear={item === "AC"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;