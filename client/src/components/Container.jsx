import React from "react"

export default function Container ({className, type, children}) {
  return (
    <div className={className}>
        {children}
    </div>
  )
};
