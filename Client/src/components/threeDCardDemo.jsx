import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.jsx";

export function ThreeDCardDemo({
  image,
  title,
  price,
  hasInput = false,
  addToCart = false,
  isLogged,
  cartItems,
  setCartItems,
}) {
  const buttonClick = () => {
    if (addToCart) {
      if (isLogged) {
        setCartItems([...cartItems, { title, price, image }]);
        console.log(cartItems);
      } else {
        alert("Please Login to add to cart");
      }
    } else {
      console.log("Ordered to your table");
    }
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[15rem] h-10 rounded-xl p-6 border">
        <div className="flex justify-center">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-300 dark:text-white"
          >
            {title}
          </CardItem>
        </div>
        <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
          <img
            src={image}
            className="h-40 w-30 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center">
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {price}
          </CardItem>
        </div>
        {hasInput && (
          <div className="flex justify-center mt-4">
            <CardItem
              as="input"
              translateZ="70"
              className="w-1/2 px-2 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              placeholder="Table Number"
              type="number"
            />
          </div>
        )}
        <div className="flex justify-center items-center mt-4">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            onClick={buttonClick}
          >
            {addToCart === false ? "Order Now" : "Add to Cart"}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}