export default function handler(req, res) {
  if(req.method == "GET") {
    return fetch('https://api.coinpaprika.com/v1/tickers')
        .then(coins => {
          return coins.json()
        })
        .then(data => {
            const limitedData = data.slice(0,100);
            return res.status(200).json(limitedData)
        })
        .catch(err => {
          throw err;
        })
        
  }
}