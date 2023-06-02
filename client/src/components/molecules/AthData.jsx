import React from "react"
import PercentajeColored from "../atoms/PercentajeColored";

export default function AthData ({athPrice, athDate, percentFromAth}) {
  const formattedDate = athDate.substring(0,10);
  // console.log(formattedDate)
  return (
    <div className="w-4/5 mx-auto mt-2 bg-prueba">
      <h2 className="font-bold">ATH Info</h2>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div>Higgest Price:</div>
          <div>${athPrice.toFixed(2)}</div>
        </div>
        <div className="flex justify-between">
          <div>ATH Date:</div>
          <div>{formattedDate}</div>
        </div>
      </div>
      <PercentajeColored className={`font-bold ${percentFromAth > 0 ? 'text-green-500' : 'text-red-500'}`} percentajeChanged={percentFromAth}></PercentajeColored>
    </div>
  )
};
