import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OverviewData from "./OverviewData";

export default function Layout ({children, home}) {
    const [marketData, setMarketData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/coins/overview')
        .then(async function (res) {
            const data = await res.json();
            setMarketData(data);
        })
        // const data = res.json;
        // setMarketData(data)
    }, [])
    return (
        <div className="">
            <Head>
                <title>CoinMarketDev</title>
                <meta name="description" content="A site where you can find all the information about cryptocurrencies" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <OverviewData marketData={marketData && marketData}></OverviewData>
            <Navbar></Navbar>
            <header className="flex justify-center items-center h-10 bg-indigo-500">
                <h1 className="text-xl">CryptoApp</h1>
            </header>
            <main className="container w-full mx-auto">{children}</main>
            <Footer></Footer>
        </div>
    )
}