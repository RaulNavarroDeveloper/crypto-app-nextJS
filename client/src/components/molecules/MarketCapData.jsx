import React from "react"
import PercentajeChangedPrice from "../atoms/PercentajeChangedPrice"
import PercentajeColored from "../atoms/PercentajeColored"

export default function MarketCapData ({marketCap, marketCapChange24h}) {
  return (
    <div className="mt-2 space-y-1 w-4/5 mx-auto bg-prueba">
      <h2 className="font-bold">Market Cap</h2>
      <div className="text-xl">${marketCap.toLocaleString()}</div>
      <div className="">
      {/* <PercentajeChangedPrice percent_change_24h={marketCapChange24h}></PercentajeChangedPrice> */}
      </div>
      <PercentajeColored className={`font-bold ${marketCapChange24h > 0 ? 'text-green-500' : 'text-red-500'}`} percentajeChanged={marketCapChange24h}></PercentajeColored>
    </div>
  )
};
