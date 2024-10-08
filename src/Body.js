import React, { useEffect, useState } from "react";
import DataRender from "./DataRender";

const Body = () => {
  const [coindata, setCoinData] = useState([]);
  const [sortByPercent , setSortByPercentage] = useState('H2L');

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const data = await response.json();
      return data;
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getData()?.then((data) => {
      setCoinData(data);
    });
  }, []);

  console.log(coindata);

  return (
    <div className="bg-slate-900 w-full h-[100vh] overflow-scroll text-white">
      <div className="w-[90%] max-w-[1000px] m-auto bg-transparent">
        <div className="flex justify-center items-center gap-4 pt-16 pb-10">
          <input
            className="w-[300px] p-2 bg-transparent border-[1px] border-white"
            type="text"
            name="SearchValue"
            id="SearchValue"
            placeholder="Search by Name or Symbol"
          />
          <button className="py-1 px-3 border-[1px] border-white">
            Sort by Mrk Capital
          </button>
          <button className="py-1 px-3 border-[1px] border-white">
            Sort by Percentage
          </button>
        </div>
        <div>
          <table className="w-full">
            <tbody>
              {coindata?.map((data) => {
                return <DataRender key={data?.id} coindata={data} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Body;
