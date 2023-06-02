import React from "react"
import LinearProgress from "@mui/material/LinearProgress";
import MaxRange from "../atoms/MaxRange";
import MinRange from "../atoms/MinRange";
export default function PriceRange ({coinPrice, low, high}) {
    const porcentaje = ((coinPrice - low) / (high - low) * 100);
  return (
    <div className="flex space-x-5 items-center mt-5 justify-center">
        <MinRange low={low}></MinRange>
        <LinearProgress variant="determinate" value={porcentaje} className="py-1 rounded-lg w-56"></LinearProgress>
        <MaxRange high={high}></MaxRange>
    </div>
  )
};
