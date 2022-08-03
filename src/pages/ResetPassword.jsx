import React from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../app/firebase";
import Footer from "../components/Footer";

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data.get("email"));
    try {
      resetPassword(data.get("email"));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <main className="flex h-screen bg-[#181818]">
        <div className="w-2/6 m-auto p-5 bg-[rgba(225,225,225,0.05)] border border-gray-500 rounded-md">
          <p
            className="text-white text-3xl font-bold text-center cursor-pointer"
            onClick={() => {
              navigate("/");
            }}>
            ⚽ Score Master ⚽
          </p>
          <form
            className="w-4/6 m-auto rounded-md p-3 bg-transparent"
            onSubmit={handleSubmit}>
            <p className="text-white text-xl text-center my-3 ">
              Enter your email below
            </p>
            <label
              htmlFor="email"
              className="inline-block text-white text-xl mt-1">
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
            <button className="w-full rounded-md my-4 p-2 text-white bg-orange-500 font-semibold text-2xl">
              Reset Password
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResetPassword;
