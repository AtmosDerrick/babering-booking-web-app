import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white h-[100vh]">
      <Routes>
        <Route index element={<Home />} />

        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
