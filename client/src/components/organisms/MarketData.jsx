import React from "react"
import SupplyData from "../molecules/SupplyData"
import VolumeData from "../molecules/VolumeData"
import MarketCapData from "../molecules/MarketCapData"
import AthData from "../molecules/AthData"

export default function MarketData ({tickerData}) {
  // console.log(tickerData)
  
  return (
    <section className="w-full h-48 grid grid-cols-4 bg-stone-400">
      <MarketCapData marketCap={tickerData.quotes.USD.market_cap} marketCapChange24h={tickerData.quotes.USD.market_cap_change_24h}></MarketCapData>
      <VolumeData volume24h={tickerData.quotes.USD.volume_24h} volumeChange24h={tickerData.quotes.USD.volume_24h_change_24h}></VolumeData>
      <SupplyData maxSupply={tickerData.max_supply} circulatingSupply={tickerData.circulating_supply} symbol={tickerData.symbol}></SupplyData>
      <AthData athPrice={tickerData.quotes.USD.ath_price} athDate={tickerData.quotes.USD.ath_date} percentFromAth={tickerData.quotes.USD.percent_from_price_ath}></AthData>
    </section>

  )
};