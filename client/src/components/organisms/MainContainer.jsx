import React from "react"

import NameContainer from "../molecules/NameContainer"
import RankContainer from "../molecules/RankContainer"
import SpecificInfoContainer from "../molecules/SpecificInfoContainer"
// import ContractContainer from "../molecules/ContractContainer"
import TagsContainer from "../molecules/TagsContainer"
import PriceContainer from "./PriceContainer"
import MainData from "./MainData"

export default function MainContainer ({coinData}) {
    const name = coinData.ticker.name;
    const logo = coinData.coin.logo;
    const symbol = coinData.ticker.symbol
    const rank = coinData.ticker.rank
  return (
    <section className="border border-indigo-900 h-80 bg-white grid grid-cols-5">
      <MainData className="col-span-3">
        <NameContainer 
          name={name} 
          logo={logo} 
          symbol={symbol} 
        />
        <RankContainer 
          rank={rank}
          type={coinData.coin.type}
        />
        <SpecificInfoContainer
          links={coinData.coin.links}
          whitepaper={coinData.coin.whitepaper}
          social={coinData.coin.links.facebook?.concat(coinData.coin.links.reddit, coinData.coin.links.youtube)}
        />
        {/* <ContractContainer 
          // contracts= {}
        /> */}
        <TagsContainer 
          tags={coinData.coin.tags}
        />
      </MainData>
      <PriceContainer className="col-span-2 bg-pink-200" priceData={coinData.ticker} dailyOhlc={coinData.dailyOhlc} >

      </PriceContainer>
    </section>
  )
};
