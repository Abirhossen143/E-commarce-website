import React, { useContext, useState } from "react";
import { Shopcontext } from "../Context/Shopcontex";

const Collection = () => {
  const { products } = useContext(Shopcontext);
  const [showFilter, setShowfilter] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter option */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
        </p>
        {/* Catagory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATAGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 "></div>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Men"} />
            Men
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Women"} />
            Women
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Kids"} />
            Kids
          </p>
        </div>
        {/* Subcatagory Filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 "></div>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Topwear"} />
            Topwear
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Bottomwear"} />
            Bottomwear
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={"Winterwear"} />
            Winterwear
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
