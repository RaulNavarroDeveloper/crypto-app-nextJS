import React from "react";
import { Popover } from "@mui/material";
import { Button } from "@mui/material";

export default function ButtonPopover({
  children,
  id,
  anchorEl,
  onClick,
  open,
  onClose,
  anchorOrigin,
  transformOrigin,
  dataButton,
}) {
  // console.log(children[0].props.children)
  return (
    <>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={onClick}
        className="space-x-1 h-6 p-0 px-1 bg-neutral-300 hover:bg-neutral-400"
        data-button={dataButton}
      >
        {children[0].props.children}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {children[1]}
      </Popover>
    </>
  );
}
