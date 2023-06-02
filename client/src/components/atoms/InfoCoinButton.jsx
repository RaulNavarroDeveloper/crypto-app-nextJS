import { ClassNames } from "@emotion/react"
import React from "react"

export default function InfoCoinButton ({children, className, href}) {
  return (
    <>
      <a className={className} href={href} target="blank">
        {children}
      </a>
    </>
  )
};
