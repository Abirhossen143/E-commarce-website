import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "./../Context/Shopcontex";
import Title from "./Title";
import PRoductitem from "./PRoductitem";

const LatestCollection = () => {
  const { products } = useContext(Shopcontext);

  const [latestProduct, setlatestProduct] = useState([]);

  useEffect(() => {
    setlatestProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at
          itaque voluptas quo!
        </p>
      </div>

      {/* Rendering PRoduct */}
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {latestProduct.map((item, index) => (
          <PRoductitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
