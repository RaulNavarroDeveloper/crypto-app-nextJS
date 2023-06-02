import React from "react"

export default function OverviewData ({marketData}) {
  return (
    <div className="h-14 bg-blue-500">
        {marketData && (
            <div className="flex items-center space-x-6 h-full">
                <div className="flex items-center border border-slate-900 border-solid">
                    <p className="text-sm text-stone-800">Cryptos: </p>
                    <span className="font-bold">{marketData.cryptocurrencies_number}</span>
                </div>
                <div className="flex items-center border border-slate-900 border-solid">
                    <p className="text-sm text-stone-800">Market Cap: </p>
                    <span>${(marketData.market_cap_usd).toLocaleString()}</span>
                </div>
                <div className="flex items-center border border-slate-900 border-solid">
                    <p className="text-sm text-stone-800">Volume 24h: </p>
                    <span>${(marketData.volume_24h_usd).toLocaleString()}</span>
                </div>
                <div className="flex items-center border border-slate-900 border-solid">
                    <p className="text-sm text-stone-800">BTC Dominance: </p>
                    <span>{marketData.bitcoin_dominance_percentage}%</span>
                </div>
                <div className="flex items-center border border-slate-900 border-solid">
                    <p className="text-sm text-stone-800">24h Market Cap Change:</p>
                    <span 
                    className={`font-bold ${marketData.market_cap_change_24h > 0 ? "text-green-500" : "text-red-500"} `}
                    >
                        {marketData.market_cap_change_24h}%
                    </span>
                </div>
            </div>
        )}
    </div>
  )
};