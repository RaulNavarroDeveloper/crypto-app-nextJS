import React, { useState } from "react"
import { Popover } from "@mui/material"
import Container from "../Container";
import SearchContent from "../atoms/SearchContent";

export default function SearchCoinsContainer ({props}) {
const [anchorEl, setAnchorEl] = useState(null);

function handleClick (e) {
    setAnchorEl(e.currentTarget)
}
function handleClose() {
    setAnchorEl(null);
}

const id= Boolean(anchorEl) ? 'simple-popover' : undefined
  return (
    <>
        <div className="grid grid-cols-10 w-48 h-9 bg-gray-300 rounded-lg items-center space-x-2 hover:cursor-pointer"
            onClick={handleClick}
            aria-describedby={id}
        >
            <div className=" m-0 ml-1 p-0 col-span-2 flex items-center justify-center">
                <box-icon name='search' color="gray"></box-icon>
            </div>
            <div className="col-span-8 text-sm text-gray-700">Search Currencies</div>
        </div>
        <Popover
            id={id}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
        >
            <SearchContent></SearchContent>
        </Popover>
    </>
  )
};
