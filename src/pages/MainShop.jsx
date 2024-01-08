import React from "react";
import NavBar from "../components/NavBar";
import ImageCarousel from "../components/CarouselImages";

function MainShop() {
  const images = [
    "https://i.pinimg.com/564x/c3/62/c0/c362c0eeedb36948c70a5362132bc689.jpg",
    "https://i.pinimg.com/736x/4c/fd/8f/4cfd8f23b68b069447b3bcc3bc52b372.jpg",
    "https://i.pinimg.com/564x/0b/0a/9e/0b0a9ee3a14b4c274d8eb994f2ad8bcf.jpg",
  ];
  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <div className="absolute top-[10vh] bg-gray  h-[35vh] w-full overflow-hidden rounded-lg">
        <ImageCarousel images={images} />
      </div>
      <div></div>
    </div>
  );
}

export default MainShop;
