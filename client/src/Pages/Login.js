import React from "react";

const Login = () => {
  return (
    <div className="relative w-full h-screen flex flex-row justify-center items-center">
      <img
        src="https://images.pexels.com/photos/5128653/pexels-photo-5128653.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-5128653.jpg&fm=jpg"
        className="bg-red-100 w-2/3 h-full object-cover"
      ></img>
      <div className=" w-1/2  h-full flex flex-col justify-center items-center gap-y-5 bg-[#f6f1eb]">
        <h2 className="text-2xl">SIGN IN</h2>
        <form className="flex flex-col justify-start  gap-y-4 ">
          <input
            type="text"
            className="border border-black text-inherit text-black outline-none bg-transparent px-2 py-1"
            placeholder="Username"
          />
          <input
            type="text"
            className="border border-black text-inherit text-black outline-none bg-transparent px-2 py-1"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full text-white px-3 py-2 bg-[#B41823] rounded"
          >
            Sign in
          </button>
          <div className="flex flex-col justify-start gap-y-2 ">
            <a className="underline text-left">Forgot password</a>

            <a className="underline text-let">Create a new account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
