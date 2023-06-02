import React from "react"

export default function SupplyData ({maxSupply, circulatingSupply, symbol}) {
  return (
    <div className="mt-2 space-y-1 w-4/5 mx-auto bg-prueba"> 
      <h2 className="font-bold">Circulating Supply</h2>
      <div className="font-bold">{circulatingSupply.toLocaleString()} {symbol}</div>

      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="text-sm">Max Supply:</div>
        {maxSupply !== 0 ? <div>{maxSupply}</div> : <div>---</div>}
        </div>
        <div className="flex justify-between">
          <div className="text-sm">Total Supply:</div>
        <div>{circulatingSupply.toLocaleString()}</div>
        </div>
      </div>
    </div>
  )
};
