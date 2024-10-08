import React from "react";

const DataRender = ({ coindata }) => {
    const change = Number(coindata?.market_cap_change_percentage_24h).toFixed(2)
  const colorofchnage =
    change > 0 ? "green" : "red";
  console.log(coindata);
  console.log(coindata?.name);
  return (
    <tr className="bg-slate-800 border-b-[1px] border-b-white">
      <td className="px-3 py-4">
        <img className="w-6" src={coindata?.image} alt={coindata?.name} />
      </td>

      <td>{coindata?.name}</td>
      <td>{coindata?.symbol?.toUpperCase()}</td>
      <td>${coindata?.current_price}</td>
      <td>${coindata?.total_volume}</td>
      <td style={{ color: colorofchnage  }}>
        {change+"%"}
      </td>
      <td>${coindata?.market_cap}</td>
    </tr>
  );
};

export default DataRender;
