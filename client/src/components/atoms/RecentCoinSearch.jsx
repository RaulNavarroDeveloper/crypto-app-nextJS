import React from "react"

export default function RecentCoinSearch ({name, symbol}) {
    const symbolLC = symbol.toLowerCase();
    const nameLC = name.toLowerCase();
    const imgURL = `https://static.coinpaprika.com/coin/${symbolLC}-${nameLC}/logo.png`
    // console.log(symbol.toLowerCase());
  return (
    <div className="bg-slate-200 w-24 py-1 flex flex-col justify-center items-center rounded-md hover:cursor-pointer hover:bg-slate-300 hover:transition-all hover:translate-y-0.5">
        <div>
            <img src={imgURL} alt={`${name} logo preview`} width="25" height="25" />
        </div>
        <p className="text-sm text-slate-600">{name}</p>
        <p className="text-xs font-bold">{symbol}</p>
    </div>
  )
};
