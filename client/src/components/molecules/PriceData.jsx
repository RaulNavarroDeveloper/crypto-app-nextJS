import React from "react"
import PercentajeChangedPrice from "../atoms/PercentajeChangedPrice"
import CoinPrice from "../atoms/CoinPrice"
import NameAndSymbolCoin from "../atoms/NameAndSymbolCoin"

export default function PriceData ({priceData}) {
  return (
    <div className="flex flex-col items-end mt-2">
        <NameAndSymbolCoin name={priceData.name} symbol={priceData.symbol}></NameAndSymbolCoin>
        <div className="flex space-x-4">
            <CoinPrice coinPrice={priceData.quotes.USD.price}></CoinPrice>
          <PercentajeChangedPrice percent_change_24h={priceData.quotes.USD.percent_change_24h}></PercentajeChangedPrice>
        </div>
    </div>
  )
};
