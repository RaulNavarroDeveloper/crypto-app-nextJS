import React from "react"

export default function PercentajeColored ({className, percentajeChanged}) {
    // console.log(percentajeChanged);
  return (
    <div className={className}>
        {percentajeChanged < 0 ? (
        <box-icon
          type="solid"
          name="down-arrow"
          size="10px"
          color="red"
        ></box-icon>
      ) : (
        <box-icon
          type="solid"
          name="up-arrow"
          size="10px"
          color="green"
        ></box-icon>
      )}
      <span className="ms-1">{percentajeChanged}%</span>
    </div>
  )
};
