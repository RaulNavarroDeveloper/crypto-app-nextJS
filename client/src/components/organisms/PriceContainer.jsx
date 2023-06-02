import React, { useEffect } from "react";
import PriceData from "../molecules/PriceData";
import PriceRange from "../molecules/PriceRange";

export default function PriceContainer({ className, priceData, dailyOhlc }) {
  // console.log(dailyOhlc)
  return (
    <div className={className}>
      <PriceData priceData={priceData}></PriceData>
      <PriceRange coinPrice={priceData.quotes.USD.price} low={dailyOhlc[0].low} high={dailyOhlc[0].high}></PriceRange>
    </div>
  );
}
