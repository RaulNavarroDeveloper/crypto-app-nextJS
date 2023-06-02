import React, { useState } from "react"

export default function MarketsData ({marketsData}) {
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = (e) => {
    showAll == false ? setShowAll(true) : setShowAll(false);
  }
  const markets = showAll ? marketsData : marketsData.slice(0,5)
  return (
    <section className="bg-green-400 w-full col-span-7">
      <h2 className="text-3xl font-bold my-2 ms-5">Markets</h2>
      <table className={`table-auto w-full mt-5 rounded-md`}>
        <thead className="h-12 color-secundario">
            <tr>
              <th className="font-extrabold text-lg">aaa</th>
              <th className="font-extrabold text-lg">Name</th>
              <th className="font-extrabold text-lg">Pair</th>
              <th className="font-extrabold text-lg">Price</th>
              <th className="font-extrabold text-lg">Volume 24h</th>
              <th className="font-extrabold text-lg">Volume in %</th>
              <th className="font-extrabold text-lg">Trust Score</th>
            </tr>
          </thead>
          <tbody>
            {markets.map((data, index) => (
              <tr key={index} className="h-14 min-h-full border-solid border-black border-2 hover:bg-blue-100">
                <td className="text-center">
                  <span>{index+1}</span>
                </td>
                <td className="text-center">
                  <a href={data.market_url} target="_blank" rel="noopener noreferrer" className="">
                    {data.exchange_name}
                  </a>
                </td>
                <td className="text-center">
                  <a href={data.market_url} target="_blank" rel="noopener noreferrer">{data.pair}</a>
                </td>
                <td className="text-center">
                  <p>${data.quotes?.USD.price.toFixed(2)}</p>
                </td>
                <td className="text-center">
                  <p>${data.quotes?.USD.volume_24h.toLocaleString()}</p>
                </td>
                <td className="text-center">
                  <p>{data.adjusted_volume_24h_share.toFixed(2)}%</p>
                </td>
                <td className="text-center">
                  <p>{data.trust_score}</p>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
          {!showAll && <button onClick={handleShowAll}>Show all</button>}
          {showAll && <button onClick={handleShowAll}>Show less</button>}
    </section>
  )
};

