import React from "react"
import PercentajeColored from "../atoms/PercentajeColored"

export default function VolumeData ({volume24h, volumeChange24h}) {
  return (
    <div className="mt-2 space-y-1 w-4/5 mx-auto bg-prueba">
      <h2 className="font-bold">Volume 24h</h2>
      <div className="text-xl">${volume24h.toLocaleString()}</div>
      <PercentajeColored className={`font-bold ${volumeChange24h > 0 ? 'text-green-500' : 'text-red-500'}`} percentajeChanged={volumeChange24h}></PercentajeColored>
    </div>
  )
};
