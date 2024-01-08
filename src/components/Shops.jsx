import React from "react";
import OneShop from "./OneShop";
import { useNavigate } from "react-router-dom";

function Shops() {
  const shops = [
    {
      id: 1,
      name: "Chic Cuts",
      location: "123 Main Street, Cityville",
      images: [
        "https://i.pinimg.com/564x/9f/f4/6a/9ff46a9cba4a7a0b7fd8da32358df240.jpg",
        "https://example.com/chic_cuts_2.jpg",
        "https://example.com/chic_cuts_3.jpg",
      ],
      status: "Open",
      ratings: 4.5,
    },
    {
      id: 2,
      name: "Glamour Lounge",
      location: "456 Oak Avenue, Townsville",
      images: [
        "https://i.pinimg.com/564x/1c/42/a8/1c42a8195d90d73f84055895b6ce1484.jpg",
        "https://example.com/glamour_lounge_2.jpg",
        "https://example.com/glamour_lounge_3.jpg",
      ],
      status: "Closed",
      ratings: 3.8,
    },
    {
      id: 3,
      name: "Style Haven",
      location: "789 Pine Street, Villagetown",
      images: [
        "https://i.pinimg.com/564x/47/33/af/4733af0299f8ab4b18bb70bdbe75149a.jpg",
        "https://example.com/style_haven_2.jpg",
        "https://example.com/style_haven_3.jpg",
      ],
      status: "Open",
      ratings: 4.2,
    },
    {
      id: 1,
      name: "Chic Cuts",
      location: "123 Main Street, Cityville",
      images: [
        "https://i.pinimg.com/564x/9f/f4/6a/9ff46a9cba4a7a0b7fd8da32358df240.jpg",
        "https://example.com/chic_cuts_2.jpg",
        "https://example.com/chic_cuts_3.jpg",
      ],
      status: "Open",
      ratings: 4.5,
    },
    {
      id: 2,
      name: "Glamour Lounge",
      location: "456 Oak Avenue, Townsville",
      images: [
        "https://i.pinimg.com/564x/1c/42/a8/1c42a8195d90d73f84055895b6ce1484.jpg",
        "https://example.com/glamour_lounge_2.jpg",
        "https://example.com/glamour_lounge_3.jpg",
      ],
      status: "Closed",
      ratings: 3.8,
    },
    {
      id: 3,
      name: "Style Haven",
      location: "789 Pine Street, Villagetown",
      images: [
        "https://i.pinimg.com/564x/47/33/af/4733af0299f8ab4b18bb70bdbe75149a.jpg",
        "https://example.com/style_haven_2.jpg",
        "https://example.com/style_haven_3.jpg",
      ],
      status: "Open",
      ratings: 4.2,
    },
    // Add more shop objects as needed
  ];

  const navigate = useNavigate();

  const openShop = () => {};

  return (
    <div className="bg-white py-2">
      <h3 className="py-4 text-sm px-2 font-bold">Near By Shops </h3>
      {shops.map((item) => (
        <div
          className="mb-2 bg-gray py-2 px-2"
          onClick={() => {
            navigate("/mainshop/");
          }}>
          <OneShop
            profileImage={item.images[0]}
            name={item.name}
            location={item.location}
            status={item.status}
            ratings={item.ratings}
          />
        </div>
      ))}
    </div>
  );
}

export default Shops;
