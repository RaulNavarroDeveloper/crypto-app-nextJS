import React, { useEffect, useState } from "react"
import TemporalityButton from "../atoms/TemporalityButton"

export default function TemporalityChartContainer ({onDatosChange}) {
  const [temporality, setTemporality] = useState("");
  function handleTemporalityChange (newTemp){
    setTemporality(newTemp)
    onDatosChange(newTemp)
  }

  // useEffect(() => {
  //   // console.log("hago un fetch");
  // },  [temporality])
  // console.log(temporality);
  const baseClass = "w-10 bg-red-800 h-full flex justify-center items-center transition-all hover:bg-red-600 hover:cursor-pointer hover:transition-all delay-75";
  return (
    <div className="bg-green-500 h-10 w-56 flex space-x-1">
      <TemporalityButton className={`${baseClass} + ${temporality === "1d" ? "bg-red-300" : ""}`} onClick={()=> handleTemporalityChange("1d")}>1D</TemporalityButton>
      <TemporalityButton className={`${baseClass} + ${temporality === "7d" ? "bg-red-300" : ""}`} onClick={()=> handleTemporalityChange("7d")}>7D</TemporalityButton>
      <TemporalityButton className={`${baseClass} + ${temporality === "30d" ? "bg-red-300" : ""}`} onClick={()=> handleTemporalityChange("30d")}>30D</TemporalityButton>
      <TemporalityButton className={`${baseClass} + ${temporality === "90d" ? "bg-red-300" : ""}`} onClick={()=> handleTemporalityChange("90d")}>90D</TemporalityButton>
      {/* <TemporalityButton className={`${baseClass} + ${temporality === "365d" ? "bg-red-300" : ""}`} onClick={()=> handleTemporalityChange("365d")}>1Y</TemporalityButton> */}
    </div>
  )
};
