import React from "react"

export default function MinRange ({low}) {
  return (
    <div className="text-sm">
        Min: {low.toFixed(2)}
    </div>
  )
};
