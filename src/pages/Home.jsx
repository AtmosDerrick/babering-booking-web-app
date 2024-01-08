import React from "react";
import NavBar from "../components/NavBar";
import ShopCodeInput from "../components/ShopCodeInput";
import Shops from "../components/Shops";

function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <ShopCodeInput />
      </div>
      <div>
        <Shops />
      </div>
    </div>
  );
}

export default Home;
