export default function handler(req, res) {
    const {coinID, interval} = req.query;
    const today = new Date();
    const oneYearAgoPlusOneDay = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate() + 1).toISOString().substring(0, 10);
      if(req.method == "GET") {
        return fetch(`https://api.coinpaprika.com/v1/tickers/${coinID}/historical?start=${oneYearAgoPlusOneDay}&interval=${interval}`)
            .then(data => {
              return data.json()
            })
            .then(data => {
                return res.status(200).json(data)
            })
      }
    }