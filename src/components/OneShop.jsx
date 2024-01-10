import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function OneShop({ profileImage, name, location, status, ratings }) {
  return (
    <div className="w-full flex  justify-start gap-2">
      <div>
        <img src={profileImage} className="bg-gray w-16 h-16 rounded-md" />
      </div>
      <div>
        <h2 className="text-base font-semibold text-dark_primary">{name}</h2>
        <h3 className="text-xs">{location}</h3>
        <div className="w-full grid grid-cols-2 mt-2">
          <h3 className="text-sm">
            <FontAwesomeIcon icon={faStar} />
            <span className="ml-2">{ratings}</span>
          </h3>

          <h3 className="text-xs">
            <span className="mr-2">
              <FontAwesomeIcon
                icon={faCircle}
                className={status == "Open" ? "text-green-500" : "text-red-500"}
              />
            </span>
            {status}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default OneShop;
