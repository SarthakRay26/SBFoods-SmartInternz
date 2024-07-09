import React from "react";
import thali from "@/assets/thali.webp";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards.jsx";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThreeDCardDemo } from "@/components/threeDCardDemo.jsx";
import Footer from "@/components/Footer";
import Delivery from "@/assets/5952766.png"
import food from "@/assets/food.png"
import support from "@/assets/technical-support.png"

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 text-center">
      <div className="w-full md:w-1/2 ml-0 md:ml-10">
        <p className="text-white md:text-6xl text-3xl mb-10">
          <span className="text-red-500">Swift</span> and
          <span className="text-red-500"> delectable cuisine delivered </span>
          with an adventurous spirit
        </p>
        <button className="text-l bg-orange-500 rounded-full w-2/3 md:w-1/3 h-12 mb-2">
          Order Now
        </button>
        <br />
        <button className="text-l border border-orange-500 rounded-full w-2/3 md:w-1/3 h-12 text-orange-500">
          Track Order
        </button>
      </div>
      <div>
        <img src={thali} alt="Thali" />
      </div>
    </div>
  );
};

const testimonials = [
  { quote: "Italian", name: "Pizza \n Pasta \n Risotto \n Lasagna \n Tiramisu" },
  { quote: "Chinese", name: "Manchurian \n Fried Rice \n Noodles \n Spring Rolls \n Dimsums" },
  { quote: "Gujrati", name: "Dhokla \n Thepla \n Khandvi \n Fafda \n Khaman" },
  { quote: "South Indian", name: "Dosa \n Idli \n Vada \n Sambar \n Chutney" },
  { quote: "North Indian", name: "Roti \n Naan \n Paneer \n Butter Chicken \n Biryani" },
];

export function CardMain({ img, title, description, ...props }) {
  // Added xl:max-w-lg for screens wider than 1024px
  return (
    <Card className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-black">
      <CardHeader className="flex flex-row items-center space-x-4">
        <img src={img} className="w-1/3" alt="Thali" />
        <div>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const getFoodItems = async () => {
  const response = await fetch("http://localhost:8787/api/Food/FoodItems");
  const data = await response.json();
  return data;
};

const foods = await getFoodItems();

const generateThreeDCardData = () => foods;

const DeliveryPage = ({isLogged, setCartItems,cartItems}) => {
  const threeDCardItems = generateThreeDCardData();

  return (
    <>
      <Header />
      <div className="flex justify-center w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 justify-items-center">
          <CardMain
            img={Delivery}
            title={"Fast Delivery"}
            description={"Promise to Deliver within 30 minutes"}
          />
          <CardMain
            img={food}
            title={"Quality Food"}
            description={"Made with the best ingredients"}
          />
          <CardMain
            img={support}
            title={"24/7 Support"}
            description={"We're here for you anytime"}
          />
        </div>
      </div>
      <InfiniteMovingCardsDemo />
      <div className="flex justify-center w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 justify-items-center">
          {threeDCardItems.map((item, index) => (
            <ThreeDCardDemo setCartItems={setCartItems} cartItems={cartItems} key={index} image={item.image} title={item.title} price={item.price} addToCart={true} isLogged={isLogged}/>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DeliveryPage;
