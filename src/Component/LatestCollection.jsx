import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "./../Context/Shopcontex";
import Title from "./Title";
import Productitem from "./PRoductitem";

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
        <p className="w-3/4 m-auto text-xs sm:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at
          itaque voluptas quo!
        </p>
      </div>

      {/* Rendering PRoduct */}
      <div className="gris grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6">
        {<Productitem value={latestProduct} />}
      </div>
    </div>
  );
};

export default LatestCollection;
