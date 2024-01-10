import React from "react";
import NavBar from "../components/NavBar";
import ShopCodeInput from "../components/ShopCodeInput";
import Shops from "../components/Shops";

function Home() {
  return (
    <div className=" ">
      <NavBar />
      <div className="relative lg:w-1/2 lg:mx-auto overflow-hidden h-[100vh]">
        <div className="absolute top-[10vh] w-full ">
          <div className="">
            <ShopCodeInput />
          </div>
          <div className="">
            <Shops />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
