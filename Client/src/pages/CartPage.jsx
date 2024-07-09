import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems }) => {

  const Navigate = useNavigate();

  const [cart, setCart] = useState(cartItems);
  const [address,setAddress] = useState('');
  const [userID, setUserID] = useState('');

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
  };

  const getUser = () => {
    axios.post('http://localhost:8787/api/findUserByToken', { "userToken": localStorage.getItem('token') })
      .then((res) => {
        setUserID(res.data.user._id);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  getUser();

  const handleCartSubmit = () => {
    const data = {
      "userId": userID,
      "orderItems": cart,
      "address": address
    }
    axios.post('http://localhost:8787/api/Order/AddOrder', data)
      .then((res) => {
        console.log(res.data);
        if(res.data.message === 'Order placed successfully'){
          alert('Order placed successfully');
          localStorage.setItem('cartItems', JSON.stringify([]));
          setCart([]);
          Navigate('/Home')
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="max-w-[75vw] mx-auto bg-black shadow-lg rounded-lg overflow-hidden border-2 border-white p-4 mt-10">
        {cart.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center">
                <div className="w-1/3">
                  <img
                    className="object-cover w-full rounded-lg h-[200px]"
                    src={item.image}
                    alt="Cart"
                  />
                </div>
                <div className="w-2/3 p-4 flex justify-between items-center">
                  <div>
                    <h1 className="text-gray-300 font-bold text-xl">
                      {item.title}
                    </h1>
                    <h2 className="text-gray-500 text-lg pt-10">{item.price}</h2>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {index < cart.length - 1 && <hr className="border-gray-700 my-4" />}
          </div>
        ))}
      </div>
      <center>
        <h1 className="text-white mt-10">
          Cart Total : {
            cart.reduce((acc, item) => acc + parseFloat(item.price), 0)
          }
        </h1>
        <input 
          type="text"
          className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2 flex-grow text-black mt-10"
          placeholder="Your Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <button onClick={() => (handleCartSubmit())} className="bg-green-500 p-2 mt-4 rounded-md">Place order</button>
      </center>
    </>
  );
};

export default CartPage;