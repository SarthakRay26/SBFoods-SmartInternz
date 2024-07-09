import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ setIsLogged }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8787/api/UserAuth/SignIn`, {
        email, password
      });
      console.log(response.data);
      if (response.data.isAdmin) {
        console.log("Admin logged in successfully");
        setIsLogged(true);
        localStorage.setItem("token", response.data.token);
        navigate('/Admin');
      } else {
        alert("You are not an Admin");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center border pb-10 border-red-500 rounded-xl w-3/4 max-w-xl">
        <div className="w-full px-4 text-center mb-4 flex flex-col">
          <h1 className="text-white mb-4">Login with an Admin Account</h1>
          <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
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
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;