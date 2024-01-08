import React from "react";
import NavBar from "../components/NavBar";
import ImageCarousel from "../components/CarouselImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faLayerGroup,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function MainShop() {
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
    <div className="w-full overflow-hidden">
      <NavBar />
      <div>
        <div className="absolute top-[10vh] bg-gray  h-[90vh] w-full overflow-hidden ">
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
                <div className="w-1/4">
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
                <button className="border-primary flex justify-center gap-4 border-2 text-primary rounded-md w-full py-2  font-medium">
                  Join the Queue{" "}
                  <h3 className="text-xs text-primary font-semibold">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="text-dark_primary"
                    />
                    <span className="text-base text-black drop-shadow-sm pl-1">
                      4
                    </span>
                  </h3>
                </button>
                <button className="bg-primary flex justify-center gap-4 w-full py-2  rounded-md text-white font-medium mt-4">
                  Book Protocol
                  <h3 className="text-xs text-primary font-semibold">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="text-secondary"
                    />
                    <span className="text-base text-white drop-shadow-sm pl-1">
                      1
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
