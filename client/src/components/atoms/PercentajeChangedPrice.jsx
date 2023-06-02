import React from "react";

export default function PercentajeChangedPrice({ percent_change_24h }) {
  return (
    <div
      className={`w-24 text-md text-white font-bold flex justify-center items-center space-x-1 rounded-lg ${
        percent_change_24h >= 0 ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {percent_change_24h <= 0 ? (
        <box-icon
          type="solid"
          name="down-arrow"
          size="16px"
          color="white"
        ></box-icon>
      ) : (
        <box-icon
          type="solid"
          name="up-arrow"
          size="16px"
          color="white"
        ></box-icon>
      )}
      <span>{percent_change_24h}%</span>
    </div>
  );
}
