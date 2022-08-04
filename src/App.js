import React, { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./components/Coins";

const App = () => {
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(URL).then((response) => setCoins(response.data));
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" font-poppins">
      <p className=" mt-16 mb-12 font-extrabold text-center text-6xl shadow-inherit">CryptoNix</p>
      <div className="flex justify-center bg-gray-300">
        <form className="mt-32 shadow-lg">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search"
            className="form-control

        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </form>
      </div>
      <div>
        {filteredCoins.map((coin) => {
          return (
            <Coins
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
