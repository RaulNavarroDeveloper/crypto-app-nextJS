import React from "react"

export default function NameAndSymbolCoin ({name, symbol}) {
  return (
    <>
      <p className="text-md text-slate-800 font-bold align mb-2">Precio de {name}({symbol})</p>
    </>
  )
};
