import React, { useState } from "react";
import ButtonPopover from "../atoms/ButtonPopover";
import InfoCoinButton from "../atoms/InfoCoinButton";


export default function SpecificInfoContainer ({links, whitepaper, social}) {
  const [anchorElWebsite, setAnchorElWebsite] = useState(null);
  const [anchorElExplorers, setAnchorElExplorers] = useState(null);
  const [anchorElCommunity, setAnchorElCommunity] = useState(null);
  // const [id, setId] = useState(undefined)
  // let open;
  
  const handleClick = (event) => {
    // console.log(event.currentTarget.dataset.button);
    if(event.currentTarget.dataset.button == "website"){
      // console.log('webb')
      setAnchorElWebsite(event.currentTarget);
      // open = Boolean(anchorElWebsite);
      // setId(open ? 'simple-popover' : undefined);
    } else if(event.currentTarget.dataset.button == "community"){
      setAnchorElCommunity(event.currentTarget);
      // open = Boolean(anchorElCommunity);
      // setId(open ? 'simple-popover' : undefined);
      // console.log('community')
    } else if (event.currentTarget.dataset.button == "explorer"){
      setAnchorElExplorers(event.currentTarget);
      // open = Boolean(anchorElExplorers);
      // setId(open ? 'simple-popover' : undefined);
      // console.log('explores')
    }
    
  };

  const handleClose = (event) => {
    // console.log(event.target)
    setAnchorElWebsite(null);
    setAnchorElCommunity(null);
    setAnchorElExplorers(null);
  };
  // console.log(open, id)
  // const open = Boolean(anchorElWebsite);
  // const id = open ? 'simple-popover' : undefined;
  return (
    <div className="flex space-x-5 border border-neutral-700 mt-3 ms-3">
      {/* <div className="bg-neutral-300 h-6 rounded-lg flex space-x-2 hover:bg-neutral-400 transition ease-in-out duration-200 delay-50 hover:transition hover:duration-200 hover:cursor-pointer">
      </div> */}
      <ButtonPopover
      id={Boolean(anchorElWebsite) ? 'simple-popover' : undefined}
      anchorEl = {anchorElWebsite}
      onClick={handleClick}
      open={Boolean(anchorElWebsite)}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      dataButton="website"
      >
        <div>
          <box-icon name="link" size="18px"></box-icon>
          <div className="capitalize font-bold">Website</div>
          <box-icon type="solid" name={anchorElWebsite ? "chevron-up" : "chevron-down"} size="18px"></box-icon>
        </div>
        <ul className="px-4">
            {links.website.map((link, index) => (
              <li key={index} className="py-2 hover:bg-neutral-100 transition-all delay-75 hover:transition-all "><a href={link} target="blank">{link}</a></li>
            ))}
        </ul>
      </ButtonPopover>
      <ButtonPopover
      id={Boolean(anchorElCommunity) ? 'simple-popover' : undefined}
      anchorEl = {anchorElCommunity}
      onClick={handleClick}
      open={Boolean(anchorElCommunity)}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      dataButton="community"
      >
        <div className="flex items-center">
          <box-icon name="user" type="solid" size="18px"></box-icon>
          <div className="capitalize font-bold">Community</div>
          <box-icon type="solid" name={anchorElCommunity ? "chevron-up" : "chevron-down"} size="17px"></box-icon>
        </div>
        <ul className="px-4">
            {social && social.map((link) => (
              <>
              <li className="py-2 hover:bg-neutral-100 transition-all delay-75 hover:transition-all "><a href={link} target="blank">{link}</a></li>
              </>
            ))}
        </ul>
      </ButtonPopover>
      <ButtonPopover
      id={Boolean(anchorElExplorers) ? 'simple-popover' : undefined}
      anchorEl = {anchorElExplorers}
      onClick={handleClick}
      open={Boolean(anchorElExplorers)}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      dataButton="explorer"
      >
        <div className="flex items-center">
          <box-icon name="search" size="18px"></box-icon>
          <div className="capitalize font-bold">Explorers</div>
          <box-icon type="solid" name={anchorElExplorers ? "chevron-up" : "chevron-down"} size="17px"></box-icon>
        </div>
        <div>
          <ul className="px-4">
              {links.explorer.map((link, index) => (
                <li key={index} className="py-2 hover:bg-neutral-100 transition-all delay-75 hover:transition-all "><a href={link} target="blank">{link}</a></li>
              ))}
          </ul>
        </div>
      </ButtonPopover>
      <InfoCoinButton className="flex items-center space-x-1 bg-neutral-300 px-2 rounded-lg hover:bg-neutral-400 hover:cursor-pointer h-6" href={links.source_code[0]}>
        <box-icon name='code-alt' size="16px"></box-icon>
        <div className="text-xs font-bold">Source Code</div>
        <box-icon name='link-external' size="16px"></box-icon>
      </InfoCoinButton>

      <InfoCoinButton className="flex items-center space-x-1 bg-neutral-300 px-2 rounded-lg hover:bg-neutral-400 hover:cursor-pointer h-6" href={whitepaper.link}>
        <box-icon name='book' size="16px"></box-icon>
        <div className="text-xs font-bold">White Paper</div>
        <box-icon name='link-external' size="16px"></box-icon>
      </InfoCoinButton>
    </div>
  )
};
