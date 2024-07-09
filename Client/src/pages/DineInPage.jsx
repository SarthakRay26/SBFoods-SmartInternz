import Footer from '@/components/Footer'
import React from 'react'
import { ThreeDCardDemo } from "@/components/threeDCardDemo.jsx";


const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 text-center mt-10 mb-10">
      <div className="w-full md:w-1/2 ml-0 md:ml-10">
        <p className="text-white md:text-6xl text-3xl mb-10">
          <span className="text-red-500">Swift</span> and
          <span className="text-red-500"> delectable cuisine on your table </span>
          with an adventurous spirit
        </p>
        <button className="text-l bg-orange-500 rounded-full w-2/3 md:w-1/3 h-12 mb-2">
          Order Now
        </button>
        <br />
        <button className="text-l border border-orange-500 rounded-full w-2/3 md:w-1/3 h-12 text-orange-500">
          Make A Reservation
        </button>
      </div>
      <div>
        <img className='rounded-xl' src="https://th.bing.com/th/id/OIG3.oOnMfXIO7pWwNzC4nCL.?w=270&h=270&c=6&r=0&o=5&dpr=1.8&pid=ImgGn" alt="Thali" />
      </div>
    </div>
  );
};

const getFoodItems = async () => {
  const response = await fetch("http://localhost:8787/api/Food/FoodItems");
  const data = await response.json();
  return data;
};

const foods = await getFoodItems();

const generateThreeDCardData = () => foods;

const DineInPage = () => {

  const threeDCardItems = generateThreeDCardData();

  return (
    <div>
      <Header />
      <div className="flex justify-center w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 justify-items-center">
          {threeDCardItems.map((item, index) => (
            <ThreeDCardDemo key={index} image={item.image} title={item.title} price={item.price} hasInput={true}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DineInPage