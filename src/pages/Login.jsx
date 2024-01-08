import React from "react";
import logo from "../Assets/Images/glamque logo1.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-primary ">
      <div className="w-full h-[30vh] pt-12  flex items-center">
        <div className="text-center mb-8 px-2">
          {/* Replace 'logo.png' with your actual logo */}
          <img src={logo} alt="Logo" className=" mx-auto mb-4" />
          <p className="text-sm text-secondary">
            Styled to Perfection, Booked with Ease.
          </p>
        </div>
      </div>
      <div className="h-[70vh] bg-white rounded-tl-[5rem]">
        <div className=" py-12 px-2 shadow-md w-full h-full  ">
          <h2 className="text-xl font-semibold text-center">Login</h2>
          <form className="pt-12">
            <div className="mb-8">
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-primary p-2 rounded-2xl text-sm"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-6 ">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-primary p-2 rounded-2xl text-sm"
                placeholder="Password"
                required
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-primary text-white p-2 rounded transition-colors hover:bg-dark_primary focus:outline-none focus:shadow-outline-blue">
                Login
              </button>
            </div>

            <div className="w-full flex justify-center">
              <div className="absolute bottom-6 text-center ">
                <p className="w-full text-center text-gray">
                  I don't have an account{" "}
                  <span className="text-secondary drop-shadow-sm">Signup</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
