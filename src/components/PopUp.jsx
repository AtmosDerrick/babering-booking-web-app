import React from "react";
import Popup from "reactjs-popup";

function PopUp({ word, instruction }) {
  return (
    <div>
      <Popup trigger={<button> {word} </button>} modal nested>
        {(close) => (
          <div className="mx-2 bg-gray p-2  rounded-md h-[7rem] shadow-xl">
            <div className="w-full ">{instruction}</div>
            <div className="flex justify-center mt-6 gap-4">
              <button
                className="text-center w-full bg-secondary rounded-md"
                onClick={() => close()}>
                Cancel
              </button>
              <button className="text-center w-full border rounded-md">
                Yes
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopUp;
