export default function handler(req, res) {
    const {coinID} = req.query;
    if (req.method == "GET"){
        const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${coinID}`;
        const coinUrl = `https://api.coinpaprika.com/v1/coins/${coinID}`;
        const dailyOhlcURL = `https://api.coinpaprika.com/v1/coins/${coinID}/ohlcv/today`

        return Promise.all([fetch(tickerUrl), fetch(coinUrl), fetch(dailyOhlcURL)])
        .then(([tickerResponse, coinResponse, ohlcResponse]) => {
          return Promise.all([tickerResponse.json(), coinResponse.json(), ohlcResponse.json()]);
        })
        .then(([tickerData, coinData, dailyOHLCData]) => {
          const combinedData = {
            ticker: tickerData,
            coin: coinData,
            dailyOhlc: dailyOHLCData
          };
          return res.status(200).json(combinedData)
        })
        .catch((error) => {
          console.error(error);
          return res.status(500).json({ error: 'Error al obtener los datos' });
        })
      }  
}
