import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-white h-[100vh]">
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
