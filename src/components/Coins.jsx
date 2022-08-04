import React from "react";

const Coins = ({
  name,
  image,
  marketcap,
  price,
  symbol,
  volume,
  priceChange,
}) => {
  return (
    <div className="pt-6 pb-12 bg-gray-300">
      <div id="card">
        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
          <div
            v-for="card in cards"
            className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
          >
            <div className="h-64 w-auto md:w-1/2">
              <img
                className="h-full w-full object-contain"
                src={image}
              />
            </div>

            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
              <h3 className="font-semibold text-lg leading-tight truncate">
                {name}
                {""}({symbol.toUpperCase()})
              </h3>
              <p>Price: ₹{price}</p>
              <p>Mkt Cap: ₹{marketcap.toLocaleString()}</p>
              <p>Volume: ₹{volume.toLocaleString()}</p>
              <p>
                {priceChange < 0 ? (
                  <p className=" text-red-600 ">{priceChange.toFixed(2)}%</p>
                ) : (
                  <p className=" text-green-500 ">{priceChange.toFixed(2)}%</p>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;
