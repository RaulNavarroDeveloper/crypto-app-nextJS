import React from "react"

export default function RankContainer ({rank, type}) {
  return (
    <div className="border border-neutral-800 mt-2 ms-3 flex space-x-6">
      <div className="text-white font-bold  bg-neutral-400 w-24 rounded-lg text-center">
        <span>Rank #</span>
        {rank}
      </div>
      <div  className="bg-neutral-300 rounded-lg px-3 text-sm flex justify-center items-center">
        {type}
      </div>
    </div>
  )
};
