import {
  faBell,
  faCalendarCheck,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleInfo,
  faClockRotateLeft,
  faGift,
  faHouse,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="relative  lg:w-1/2 lg:mx-auto">
      <div className="w-full lg:w-1/2  z-30 fixed h-[10vh] py-2 bg-primary flex justify-between items-center px-4">
        <div className="text-center">
          <button
            onClick={() => {
              setMenu(!menu);
            }}>
            {!menu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <FontAwesomeIcon icon={faXmark} className="text-lg text-white" />
            )}
          </button>
        </div>
        <div className="text-base font-medium text-secondary">GemQueue</div>
        <div>
          <div className="text-sm text-white">
            <FontAwesomeIcon icon={faBell} className="text-lg" />
          </div>
        </div>
      </div>
      <div
        className={
          menu
            ? "fixed h-[90vh] mt-16 z-10 bg-secondary w-3/4 lg:w-1/4 shadow-sm bg-opacity-90 transition-all"
            : "absolute ml-[-70rem]  transition-all h-[90vh] h-[90vh] mt-16"
        }>
        <div>
          <div className="flex justify-center pt-4">
            <div className="w-16 h-16 bg-gray rounded-full"></div>
          </div>
          <div className="text-center pt-2 font-semibold text-dark_primary">
            <p>@atmos</p>
          </div>
        </div>
        <ul className="px-2 mt-12">
          <Link to="/">
            <li className="mb-10 text-dark_primary  text-sm">
              <FontAwesomeIcon icon={faHouse} className="text-lg" />

              <span className="pl-2"> Home</span>
            </li>
          </Link>

          <Link to="/appointments">
            <li className="mb-10 text-dark_primary  text-sm">
              <FontAwesomeIcon icon={faCalendarCheck} className="text-lg" />

              <span className="pl-2"> Appointments</span>
            </li>
          </Link>
          <Link to="/favourite">
            <li className="mb-10 text-dark_primary  text-sm">
              <FontAwesomeIcon icon={faHeart} className="text-lg" />

              <span className="pl-2"> Favourite Saloon / Stylist</span>
            </li>
          </Link>
          <Link>
            <li className="mb-10 text-dark_primary  text-sm">
              <FontAwesomeIcon icon={faClockRotateLeft} className="text-lg" />

              <span className="pl-2"> History</span>
            </li>
          </Link>
          <Link>
            <li className="mb-10 text-dark_primary  text-sm">
              <FontAwesomeIcon icon={faGift} className="text-lg" />

              <span className="pl-2"> Promotions</span>
            </li>
          </Link>
          <Link>
            <li className="mb-10 text-dark_primary  text-sm">
              <FontAwesomeIcon icon={faCircleInfo} className="text-lg" />

              <span className="pl-2"> Help & Support</span>
            </li>
          </Link>
        </ul>
        <div className="absolute bottom-10 font-bold text-base pl-4">
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
