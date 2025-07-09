import React from "react";

function Button({ title, onClick, isOperator, isEquals, isClear }) {
  let buttonClasses = "w-full h-16 rounded-xl text-2xl font-semibold transition-all duration-150 active:scale-95";
  let textClasses = "text-white";

  if (isOperator) {
    buttonClasses += " bg-orange-500 hover:bg-orange-600";
  } else if (isEquals) {
    buttonClasses += " bg-green-600 hover:bg-green-700 col-span-2"; // Make equals button wider
  } else if (isClear) {
    buttonClasses += " bg-red-600 hover:bg-red-700 col-span-2"; // Make AC button wider
  } else {
    buttonClasses += " bg-gray-700 hover:bg-gray-600";
  }

  return (
    <button className={`${buttonClasses} ${textClasses}`} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;