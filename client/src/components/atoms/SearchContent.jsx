import React, { useState } from "react"
import { CircularProgress } from "@mui/material";

export default function SearchContent ({}) {
    const [searchResult, setSearchResult] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [err, setErr] = useState("");
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        if(e.target.value.length > 1) {
            searchInput(e.target.value);
        } else {
            setSearchResult(null);
        }
    }
    console.log(userInput,searchResult);
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
  return (
    <div className="w-72 h-60">
        <div className="flex items-center justify-around mt-2">
            <box-icon name='search' color="gray" size="sm"></box-icon>
            <input type="text" className="h-9 rounded-lg" onChange={handleInputChange}/>
            <box-icon type='solid' name='x-circle' color="gray" class="cursor-pointer"></box-icon>
        </div>
        {
            searchResult ? searchResult.map((coin) => (
                <div className="flex justify-around">
                    <img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} alt="" width="25" height="25" />
                    <p>{coin.name}</p>
                    <p>{coin.symbol}</p>
                    <p>#{coin.rank}</p>
                </div>
            ))
            :
            <p>Busca algo</p>
        }
        {
            userInput.length > 1 && !searchResult && (
                <CircularProgress></CircularProgress>
            )
        }
    </div>
  )
};
