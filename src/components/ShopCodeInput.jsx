import React, { useState } from "react";
import "../App.css";

import Pattern from "../Assets/Images/pattern.png";

function ShopCodeInput() {
  const [shopcode, setshopcode] = useState("");

  const handleInputChange = (e) => {
    setshopcode(e.target.value);
  };
  return (
    <div
      className="h-[25vh] flex justify-center items-center px-2"
      id="pattern">
      <input
        label="Your Label"
        type="text"
        placeholder="Enter Shop Code"
        value={shopcode}
        onChange={handleInputChange}
        className="text-base w-full mr-2 rounded-md p-2"
      />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-secondary">
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      </button>
    </div>
  );
}

export default ShopCodeInput;
