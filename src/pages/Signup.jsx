import React, { useState } from "react";
import logo from "../Assets/Images/glamque logo1.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here, such as API calls or state updates
    console.log("Form submitted:", formData);
  };
  return (
    <div className="min-h-screen bg-primary ">
      <div className="w-full h-[25vh] pt-12  flex items-center">
        <div className="text-center mb-8 px-2">
          {/* Replace 'logo.png' with your actual logo */}
          <img src={logo} alt="Logo" className=" mx-auto mb-4" />
          <p className="text-sm text-secondary">
            Styled to Perfection, Booked with Ease.
          </p>
        </div>
      </div>
      <div className="h-[75vh] bg-white rounded-tl-[2rem]">
        <div className=" py-4 px-2 shadow-md w-full h-full  ">
          <h2 className="text-base font-semibold text-center">SignUp</h2>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-2xl text-sm"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-2xl text-sm"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-2xl text-sm"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-2xl text-sm"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-2xl text-sm"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="w-full mt-8">
              <button
                type="submit"
                className="w-full bg-primary text-white p-2 rounded transition-colors hover:bg-dark_primary focus:outline-none focus:shadow-outline-blue">
                SignUp
              </button>
            </div>

            <div className="w-full flex justify-center">
              <div className="absolute bottom-6 text-center ">
                <p className="w-full text-center text-gray">
                  I already have an account{" "}
                  <Link className="text-secondary drop-shadow-sm" to="/">
                    login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
