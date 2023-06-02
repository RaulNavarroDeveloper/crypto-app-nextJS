export async function loadMainCoinData (coinID) {
    const res = await fetch(`http://localhost:3000/api/coins/${coinID}`);
    const coinData= await res.json();
    return coinData;
}

export async function loadHistoricCoinData (coinID) {
    const res2 = await fetch(`http://localhost:3000/api/coins/historicData/${coinID}/interval/1d`)
      const historicData = await res2.json();
      return historicData;
}


export async function loadEventsCoinData (coinID) {
    const res3 = await fetch(`http://localhost:3000/api/coins/events/${coinID}`)
    const eventsData = await res3.json();
    return eventsData
}

export async function loadMarketsCoinData (coinID) {
    const res4 = await fetch(`http://localhost:3000/api/coins/markets/${coinID}`)
    const marketData = await res4.json();
    return marketData
}