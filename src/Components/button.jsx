import React from "react";

function Button({ title, ...props }) {
  return (
    <div {...props}>
      <button className="bg-gray-800 text-white text-lg w-[64px] h-[52px] m-2 rounded-xl hover:bg-gray-700 active:scale-95 transition-all">
        {title}
      </button>
    </div>
  );
}

export default Button;
