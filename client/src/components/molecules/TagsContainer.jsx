import React from "react";
import InfoCoinButton from "../atoms/InfoCoinButton";

export default function TagsContainer({ tags }) {
  return (
    <div className="border border-slate-600 mt-4">
      <div>
        <h4 className="ms-4 font-bold mb-1 text-sm text-neutral-800">Tags:</h4>
      </div>
      <div className="flex space-x-4 ms-4">
        {tags.map((tag, index) => (
          <InfoCoinButton key={index} className="bg-slate-300 rounded-md px-2 flex items-center py-1">
            <div className="text-xs text-neutral-800 font-bold">{tag.name}</div>
          </InfoCoinButton>
        ))}
      </div>
    </div>
  );
}
