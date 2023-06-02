import React from "react"

export default function CoinPrice ({coinPrice}) {
  return (
        <div className="text-4xl font-black">
            ${parseFloat(coinPrice).toFixed(2)}
        </div>
  )
};
