import React, { useState } from "react"
// import 'boxicons';

export default function NameContainer ({name, logo, symbol}) {
    const [favorite, setFavorite] = useState(false);

    function handleClickFavorite (e) {
        e.preventDefault();
        const icon = e.currentTarget.firstChild;
        !favorite ? setFavorite(true) : setFavorite(false) 
    }
    return (
        <div className="flex ml-3 mt-3 items-center border-2 border-neutral-900">
      <img src={logo} width="30" height="30"></img>
      <h1 className="text-3xl ml-3">{name}</h1>
      <div className="bg-neutral-300 rounded-md ml-5 px-3 py-1">
        <span className="text-md font-bold">{symbol}</span>
      </div>
      <div 
      className="w-10 bg-neutral-200 border-2 border-neutral-400 flex justify-center items-center py-1 rounded-md ml-4 hover:bg-neutral-300 hover:cursor-pointer"
      onClick={handleClickFavorite}
      >
        <box-icon name="star" type={favorite ? "solid" : "regular"} color={favorite ? "rgb(234 179 8)" : "#403939"}></box-icon>
      </div>
    </div>
  )
};
