import React from "react"

export default function TemporalityButton ({className, onClick, children}) {
  return (
    <>
      {/* <div className="active-switcher-item w-10 bg-red-800 h-full flex justify-center items-center transition-all hover:bg-red-600 hover:cursor-pointer hover:transition-all delay-75" onClick={handleTemporalityChart}>1D</div>
      <div className="w-10 bg-red-800 h-full flex justify-center items-center transition-all hover:bg-red-600 hover:cursor-pointer hover:transition-all delay-75" onClick={handleTemporalityChart}>7D</div>
      <div className="w-10 bg-red-800 h-full flex justify-center items-center transition-all hover:bg-red-600 hover:cursor-pointer hover:transition-all delay-75" onClick={handleTemporalityChart}>1M</div>
      <div className="w-10 bg-red-800 h-full flex justify-center items-center transition-all hover:bg-red-600 hover:cursor-pointer hover:transition-all delay-75" onClick={handleTemporalityChart}>3M</div> */}
      <div className={className} onClick={onClick}>{children}</div>

    </>
  )
};
