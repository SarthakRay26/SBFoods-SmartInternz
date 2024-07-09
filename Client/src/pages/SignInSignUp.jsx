import React, { useState } from "react";
import axios from "axios";

const SignInSignUp = ({setIsLogged}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event, type) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8787/api/UserAuth/${type}`, {
        email,password
      });
      console.log(response.data);
      if(type === "SignIn" && response.data.message === 'User logged in successfully'){
        setIsLogged(true);
        localStorage.setItem("token", response.data.token);
        console.log(localStorage.getItem("token"));
      }
      if (response.data.message === "User registered successfully") {
        setIsLogged(true);
        const signInResponse = await axios.post(`http://localhost:8787/api/UserAuth/SignIn`, {
          email,password
        });
        localStorage.setItem("token", signInResponse.data.token);
        console.log(localStorage.getItem("token"));
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center border pb-10 border-red-500 rounded-xl w-3/4 max-w-xl">
        <div className="w-full px-4 text-center mb-4 flex flex-col">
          <h1 className="text-white mb-4">Welcome! Please Sign In or Sign Up</h1>
          <form className="flex flex-col justify-between h-full">
            <div>
              <input
                className="text-white bg-transparent border border-gray-300 p-2 rounded-md mb-4 w-full"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="text-white bg-transparent border border-gray-300 p-2 rounded-md mb-4 w-full"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-around">
              <button
                className="text-white bg-red-500 p-2 rounded-md mt-2 w-1/3"
                type="submit"
                onClick={(e) => handleSubmit(e, "SignIn")}
              >
                Sign In
              </button>
              <button
                className="text-white bg-red-500 p-2 rounded-md mt-2 w-1/3"
                type="submit"
                onClick={(e) => handleSubmit(e, "SignUp")}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;