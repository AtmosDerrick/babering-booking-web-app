import React from "react";
import NavBar from "../components/NavBar";
import ImageCarousel from "../components/CarouselImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import PopUp from "../components/PopUp";

function Appointments({ images }) {
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

  const queue = [
    { id: 1, name: "Alice", queueNumber: 101 },
    { id: 2, name: "Bob", queueNumber: 102 },
    { id: 3, name: "Charlie", queueNumber: 103 },
    { id: 4, name: "David", queueNumber: 104 },
    { id: 5, name: "Eve", queueNumber: 105 },
    { id: 6, name: "Frank", queueNumber: 106 },
    { id: 7, name: "Grace", queueNumber: 107 },
  ];

  return (
    <div className="bg-gray">
      <NavBar />

      <div className="lg:w-1/2 lg:mx-auto">
        <div className="absolute top-[10vh]   h-[90vh] w-full overflow-hidden lg:w-1/2 lg:mx-auto">
          <ImageCarousel images={shop.images} />
          <div className="pt-6 px-2">
            <h2 className="text-base  text-center font-semibold text-dark_primary">
              {shop.name}
            </h2>
          </div>

          <div className="mt-4 px-2 flex justify-between items-center">
            <div>
              <button className="bg-primary py-2 px-2 text-white font-medium rounded-md">
                <PopUp
                  word="Reschedule "
                  instruction="Are you sure you want to reschedule?"
                  closeBtn={true}
                />
              </button>
            </div>
            <div>
              <button className="border-primary border-b-2 shadow-md py-2 px-2 text-primary font-medium ">
                <PopUp
                  word="Leave Queue "
                  instruction="Are you sure you want leave the Queue?"
                  closeBtn={true}
                />
              </button>
            </div>
          </div>

          <div className="px-2 mt-2 bg-primary h-full rounded-s-3xl pt-2 ">
            {queue.map((item) => (
              <div
                className={
                  item.id == "5"
                    ? "flex justify-start items-center gap-2 bg-gray py-2 pb-1"
                    : "flex justify-start gap-2 py-2 pb-1 text-white"
                }>
                <div>{item.queueNumber}</div>
                <div>{item.name}</div>
                {item.id == "5" ? (
                  <h3 className="text-xs text-white font-semibold w-full text-right pr-4">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-primary text-sm "
                    />
                    <span className="text-sm text-primary drop-shadow-sm pl-1">
                      15min
                    </span>
                  </h3>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
