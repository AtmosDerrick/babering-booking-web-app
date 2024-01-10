import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ImageCarousel from "../components/CarouselImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faLayerGroup,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";

function MainShop() {
  const [like, setLike] = useState(false);
  const shop = {
    id: 3,
    name: "Style Haven",
    location: "789 Pine Street, Villagetown",
    images: [
      "https://i.pinimg.com/564x/c3/62/c0/c362c0eeedb36948c70a5362132bc689.jpg",
      "https://i.pinimg.com/736x/4c/fd/8f/4cfd8f23b68b069447b3bcc3bc52b372.jpg",
      "https://i.pinimg.com/564x/0b/0a/9e/0b0a9ee3a14b4c274d8eb994f2ad8bcf.jpg",
    ],
    status: "Open",
    ratings: 4.2,
  };
  return (
    <div className="  w-full overflow-hidden bg-white ">
      <NavBar />
      <div className=" lg:w-1/2 lg:mx-auto">
        <div className="absolute top-[10vh] bg-gray  h-[90vh] w-full overflow-hidden lg:w-1/2 lg:mx-auto ">
          <ImageCarousel images={shop.images} />
          <div
            className="mt-8
          ">
            <div>
              <div className="w-full px-2 flex justify-between items-center pb-4">
                <div className="w-full">
                  <h2 className="text-base font-semibold text-dark_primary">
                    {shop.name}
                  </h2>
                  <h3 className="text-xs">{shop.location}</h3>
                </div>
                <div className="w-2/4 flex justify-start items-center gap-4">
                  <h3
                    className="text-sm"
                    onClick={() => {
                      setLike(true);
                    }}>
                    {like ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-primary drop-shadow-sm">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-primary">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    )}
                  </h3>{" "}
                  <h3 className="text-sm">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-base text-secondary"
                    />
                    <span className="ml-2">{shop.ratings}</span>
                  </h3>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xs">
                  Sit qui ad sit non magna ex mollit aute cillum proident quis
                  magna deserunt.
                </h3>
              </div>
              <div className="px-2 mt-4 ">
                <div>
                  <h3 className="text-xs text-primary font-semibold">
                    Slot Available:{" "}
                    <span className="text-lg text-black drop-shadow-sm">
                      12
                    </span>
                  </h3>
                </div>
              </div>
              <div className="w-full px-2 mt-12 ">
                <button className="border-primary items-center flex justify-center gap-4 border-2 text-primary rounded-md w-full py-2  font-medium">
                  Join the Queue{" "}
                  <h3 className="text-xs text-primary font-semibold">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="text-dark_primary"
                    />
                    <span className="text-sm text-black drop-shadow-sm pl-1">
                      9
                    </span>
                  </h3>
                  <h3 className="text-xs text-primary font-semibold">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-dark_primary text-sm"
                    />
                    <span className="text-sm text-black drop-shadow-sm pl-1">
                      1hr:30min
                    </span>
                  </h3>
                </button>
                <button className="bg-primary text-white mt-8 items-center flex justify-center gap-4 border-2  rounded-md w-full py-2  font-medium">
                  Book Protocol
                  <h3 className="text-xs text-white font-semibold">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="text-white"
                    />
                    <span className="text-sm text-secondary drop-shadow-sm pl-1">
                      4
                    </span>
                  </h3>
                  <h3 className="text-xs text-white font-semibold">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-white text-sm"
                    />
                    <span className="text-sm text-white  drop-shadow-sm pl-1">
                      15min
                    </span>
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainShop;
