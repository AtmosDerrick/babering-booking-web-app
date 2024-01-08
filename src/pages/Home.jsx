import React from "react";
import NavBar from "../components/NavBar";
import ShopCodeInput from "../components/ShopCodeInput";
import Shops from "../components/Shops";

function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="absolute top-[10vh] w-full">
        <div className="">
          <ShopCodeInput />
        </div>
        <div className="">
          <Shops />
        </div>
      </div>
    </div>
  );
}

export default Home;
