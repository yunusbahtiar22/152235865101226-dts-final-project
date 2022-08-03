import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { register } from "../app/firebase";

const Register = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      await register(
        data.get("fullName"),
        data.get("email"),
        data.get("password")
      );
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <main className="flex h-screen bg-[#181818]">
        <div className="w-2/6 m-auto p-5 bg-[rgba(225,225,225,0.05)] border border-gray-500 rounded-md cursor-pointer">
          <p
            className="text-white text-3xl font-bold text-center"
            onClick={() => {
              navigate("/");
            }}>
            ⚽ Score Master ⚽
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-4/6 m-auto rounded-md p-3 bg-transparent">
            <label
              htmlFor="fullName"
              className="inline-block text-white text-xl mt-4">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              className="inline-block w-full leading-8 p-2 outline-none focus:ring-4 focus:ring-orange-500 rounded-sm"
              type="text"
              autoComplete="name"
            />
            <label
              htmlFor="email"
              className="inline-block text-white text-xl mt-4">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Email"
              className="inline-block w-full leading-8 p-2 outline-none focus:ring-4 focus:ring-orange-500 rounded-sm"
              type="text"
              autoComplete="email"
            />
            <label
              htmlFor="password"
              className="inline-block text-white text-xl mt-4">
              Password
            </label>
            <input
              autoComplete="current-password"
              id="password"
              name="password"
              placeholder="Password"
              className="inline-block w-full leading-8 p-2 outline-none focus:ring-4 focus:ring-orange-500 rounded-sm"
              type="password"
            />
            {error && <span className="text-red-500 text-lg">{error}</span>}
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-5 w-5 mt-4"
            />
            <label htmlFor="remember-me">
              <span className="text-gray-200 ml-2 p-1">
                I agree with terms and conditions
              </span>
            </label>
            <button className="w-full rounded-md my-4 p-2 text-white bg-orange-500 font-semibold text-2xl">
              Sign Up
            </button>
            <p className="text-white text-lg my-2">
              Already have an account ?{" "}
              <Link to="/login">
                <span className="underline">Sign In!</span>
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
