import React, { useEffect, useState } from "react"

export default function PriceConverter ({symbol, price}) {
    const [baseAmount, setBaseAmount] = useState(0);
    const [quoteAmount, setQuoteAmount] = useState(price.toFixed(2));
    function handleBaseCoinChange (e) {
        setBaseAmount(e.target.value)
        setQuoteAmount((e.target.value * price).toFixed(2));
    }
    function handleQuoteCoinChange (e) {
        setQuoteAmount(e.target.value);
        setBaseAmount((e.target.value / price).toFixed(2))
    }

    // useEffect(() => {

    // }, [baseAmount])
    // console.log(baseAmount, quoteAmount);
  return (
    <div className="bg-cyan-500">
      <h1 className="text-3xl font-bold my-2 ms-5">{symbol} to USD Converter</h1>
      <div className="flex">
        <div>
            <span>{symbol}</span>
            <input type="number" placeholder="0" value={baseAmount !== 0 ? baseAmount : 1} onChange={handleBaseCoinChange}  />
        </div>
        <div>
            <span>USD</span>
            <input type="number" placeholder="0" value={quoteAmount.toLocaleString()} onChange={handleQuoteCoinChange}/>
        </div>
      </div>
    </div>
  )
};
