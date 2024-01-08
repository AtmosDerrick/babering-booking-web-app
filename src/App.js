import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

function App() {
  return (
    <div className="bg-white h-[100vh]">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
