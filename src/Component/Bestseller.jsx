import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "./../Context/Shopcontex";
import Title from "./Title";
import Productitem from "./Productitem";

const Bestseller = () => {
  const { products } = useContext(Shopcontext);
  const [bestSeller, setbestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setbestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          eveniet.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grids-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
