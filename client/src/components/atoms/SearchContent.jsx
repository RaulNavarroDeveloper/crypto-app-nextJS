import React, { useEffect, useState } from "react"
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import RecentCoinSearch from "./RecentCoinSearch";

export default function SearchContent ({handleClose}) {
    const [searchResult, setSearchResult] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [recentUserSearches, setRecentUserSearches] = useState(null);
    const [err, setErr] = useState("");
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        if(e.target.value.length > 1) {
            searchInput(e.target.value);
        } else {
            setSearchResult(null);
        }
    }
    // console.log(userInput,searchResult);
    function searchInput(input){
        return fetch(`http://localhost:3000/api/coins/search-coins?q=${input}`)
        .then(async function (res) {
            const result = await res.json();
            setSearchResult(result);
        })
        .catch(err => {
            setErr(err);
        })
    }

    useEffect(() => {
        const lsData =  JSON.parse(localStorage.getItem("recentSearches"));
        console.log(lsData);
        if(lsData){
            setRecentUserSearches(lsData)
        }
    },[])

    function handleLinkSearchClick (coin) {
        const lsData = JSON.parse(localStorage.getItem("recentSearches")) || [];
        
        if(lsData.length >= 3)lsData.shift();
        lsData.push(coin);
        // if(!lsData){
            localStorage.setItem("recentSearches", JSON.stringify(lsData))
        // } else {
        // }
    }
    console.log(recentUserSearches);
  return (
    <div className="w-72 h-60 relative">
        <div className="flex items-center justify-around mt-2">
            <box-icon name='search' color="gray" size="sm"></box-icon>
            <input type="text" placeholder="Search a coin" className="h-9 rounded-lg" onChange={handleInputChange}/>
            <box-icon type='solid' name='x-circle' color="gray" class="cursor-pointer" onClick={handleClose}></box-icon>
        </div>
        {
            searchResult ? searchResult.map((coin) => (
                <div className="">
                    <Link href={`/currencies/${coin.id}`} onClick={() => handleLinkSearchClick({name: coin.name, symbol: coin.symbol})}>
                        <div className="flex justify-around items-center bg-neutral-300 mb-2 rounded-md w-11/12 m-auto py-0.5">
                            <img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} alt="coin logo preview" width="25" height="25" />
                            <p className="text-sm font-bold">{coin.name}</p>
                            <p>{coin.symbol}</p>
                            <p>#{coin.rank}</p>
                        </div>
                    </Link>
                </div>
            ))
            :
            <div>
                <div className="absolute bottom-50 left-50">Type something...</div>
                <div className="absolute bottom-0 ms-3 mb-3">
                    <p className="text-sm text-slate-600">Recent searches</p>
                    <div className="flex space-x-2">
                    {
                        recentUserSearches && recentUserSearches?.map((search) => (
                            <RecentCoinSearch symbol={search.symbol} name={search.name}></RecentCoinSearch>
                        ))
                    }
                    </div>
                </div>
            </div>
        }
        {
            userInput.length > 1 && !searchResult && (
                <CircularProgress className="m-auto mt-5"></CircularProgress>
            )
        }
    </div>
  )
};
