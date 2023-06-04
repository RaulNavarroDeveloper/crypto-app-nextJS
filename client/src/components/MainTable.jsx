import React from "react";
import Link from "next/link";
export default function MainTable ({children, coinsWithTickers}) { 
    return (
        <table className="table table-auto w-full mt-5 rounded-md">
          <thead className="h-10 color-secundario">
            <tr>
              <th className="font-bold text-md">Rank</th>
              <th className="font-bold text-md">Name</th>
              <th className="font-bold text-md">Price</th>
              <th className="font-bold text-md">1h %</th>
              <th className="font-bold text-md">24h %</th>
              <th className="font-bold text-md">7d %</th>
              <th className="font-bold text-md">Market Cap</th>
              <th className="font-bold text-md">Volume 24h</th>
              <th className="font-bold text-md">Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
          {coinsWithTickers && coinsWithTickers.map((coin, index) => (
          <tr className="h-14 min-h-full border-solid border-black border-2 hover:bg-blue-100" key={index}>
            <td className="text-center">
              {coin.rank}
            </td>
            <td className="font-bold">
              <Link href={`/currencies/${coin.id}`} className="block w-full h-full">
                <div className="flex space-x-4 items-center">
                  <img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} width="25" height="25"></img>
                  <p>{coin.name}<span className='text-slate-400 font-bold ml-2'>{coin.symbol}</span></p>
                </div>
              </Link>
            </td>
            <td className="text-center">
              ${parseFloat(coin.quotes.USD.price).toFixed(2)}
            </td>
            <td className={`text-center ${coin.quotes.USD.percent_change_1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {coin.quotes.USD.percent_change_1h}%
            </td>
            <td className={`text-center ${coin.quotes.USD.percent_change_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {coin.quotes.USD.percent_change_24h}%
            </td>
            <td className={`text-center ${coin.quotes.USD.percent_change_7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {coin.quotes.USD.percent_change_7d}%
            </td>
            <td className="text-center">
            ${(coin.quotes.USD.market_cap).toLocaleString()}
            </td>
            <td className="text-center">
            ${(coin.quotes.USD.volume_24h).toLocaleString()}
            </td>
            <td className="text-center font-medium">
              {(coin.circulating_supply).toLocaleString() + ' ' + coin.symbol}
            </td>
          </tr>
        ))}
          </tbody>

        </table>
    )
}