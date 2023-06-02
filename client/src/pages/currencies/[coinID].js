import Layout from "@/components/Layout";
import { useRouter } from "next/router";

import Container from "@/components/Container";
import MainData from "@/components/organisms/MainData";
import MarketData from "@/components/organisms/MarketData";
import ChartData from "@/components/organisms/ChartData";
import CommunityData from "@/components/organisms/CommunityData";
import MainContainer from "@/components/organisms/MainContainer";
import MarketsData from "@/components/organisms/MarketsData";
import PriceConverter from "@/components/molecules/PriceConverter";

import {loadMainCoinData, loadHistoricCoinData, loadMarketsCoinData, loadEventsCoinData} from '../../lib/load-coinData.js'

export default function CoinPage ({coinData, historicData, eventsData, marketData}) {
    const router = useRouter;
    if(router.isFallback){
        return <div>Loading</div>
    }
    // console.log(historicData);
    return (
        <Layout>
            { coinData &&
            <>
              <MainContainer coinData={coinData && coinData} />
              <MarketData tickerData={coinData && coinData.ticker} />
              <Container className="grid grid-cols-10 grid-rows-2">
                <ChartData historicalData={historicData && historicData} coinID={coinData && coinData.coin.id} />
                <CommunityData eventsData={eventsData && eventsData} />
                <MarketsData marketsData={marketData && marketData}></MarketsData>
              </Container>
              <Container className="w-3/5">
                <PriceConverter symbol={coinData && coinData.ticker.symbol} price={coinData && coinData.ticker.quotes.USD.price}></PriceConverter>
              </Container>
            </> 
            }
        </Layout>
    )
}

export async function getStaticPaths() {
    const response = await fetch('http://localhost:3000/api/coins')
    const currenciesList = await response.json();

    const paths = currenciesList.map(coin => ({
        params: {coinID: coin.id.toLowerCase()}
    }))
    return {paths, fallback:true}
}

export async function getStaticProps({params}) {
  // const res = await fetch(`http://localhost:3000/api/coins/${params.coinID}`);
  //   const coinData= await res.json();
  //   const res2 = await fetch(`http://localhost:3000/api/coins/historicData/${params.coinID}/interval/1d`)
  //     const historicData = await res2.json();
  //   const res3 = await fetch(`http://localhost:3000/api/coins/events/${params.coinID}`)
  //   const eventsData = await res3.json();
  //   const res4 = await fetch(`http://localhost:3000/api/coins/markets/${params.coinID}`)
  //   const marketData = await res4.json();
    const coinData = await loadMainCoinData(params.coinID);
    const historicData = await loadHistoricCoinData(params.coinID);
    const eventsData = await loadEventsCoinData(params.coinID);
    const marketData = await loadMarketsCoinData(params.coinID);

      return {
        props: {
          coinData,
          historicData,
          eventsData,
          marketData
        }
      }
}