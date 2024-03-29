import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import MainShop from "./pages/MainShop";
import Appointments from "./pages/Appointments";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <div className="bg-white  ">
      <Routes>
        <Route index element={<Home />} />

        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mainshop" element={<MainShop />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
