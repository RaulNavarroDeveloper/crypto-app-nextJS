import React from "react"

export default function MaxRange ({high}) {
  return (
    <div className="text-sm">Max: {high.toFixed(2)}</div>
  )
};
