import React from "react";

const Login = () => {
  return (
    <div className="relative w-full h-screen flex flex-row justify-center items-center">
      <img
        src="https://images.unsplash.com/photo-1523944339743-0fe06f079939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        className="bg-red-100 w-2/3 h-full object-cover"
      ></img>
      <div className=" w-1/2  h-full flex flex-col justify-center items-center gap-y-5 bg-[#f6f1eb]">
        <h2 className="text-2xl">REGISTER</h2>
        <form className="flex flex-col gap-y-4 ">
          <div className="grid grid-cols-2 justify-start  gap-4">
            <input
              type="text"
              className="border border-black text-inherit text-black outline-none bg-transparent px-2 py-1"
              placeholder="Name"
            />
            <input
              type="text"
              className="border border-black text-inherit text-black outline-none bg-transparent px-2 py-1"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="border border-black text-inherit text-black outline-none bg-transparent px-2 py-1"
              placeholder="Username"
            />
            <input
              type="text"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              className="form-control border border-black text-inherit text-black outline-none bg-transparent px-2 py-1"
              placeholder="E-mail"
            />
            <input
              type="password"
              className="border border-black text-inherit text-black outline-none bg-transparent px-2 py-1"
              placeholder="Password"
            />
            <input
              type="password"
              className="border border-black text-inherit text-black outline-none bg-transparent px-2 py-1"
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex justify-center items-center  gap-y-2 ">
            <button
              type="submit"
              className="w-full text-white px-3 py-2 bg-[#B41823] rounded"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
