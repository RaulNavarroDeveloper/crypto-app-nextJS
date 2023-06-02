export default function handler(req, res) {
    const {base_coin_id, quote_coin_id, amount } = req.query;
    if(req.method == "GET") {
      return fetch(`https://api.coinpaprika.com/v1/price-converter?base_currency_id=${base_coin_id}&quote_currency_id=${quote_coin_id}&amount=${amount}`)
          .then(data => {
            return data.json()
          })
          .then(data => {
          // console.log(limitedData[24].quotes.USD.price)
          return res.status(200).json(data)
          })
    }
  }