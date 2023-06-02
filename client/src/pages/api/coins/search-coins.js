export default function handler(req, res) {
    const {q} = req.query;
    if(req.method == "GET") {
      return fetch(`https://api.coinpaprika.com/v1/search?q=${q}`)
          .then(data => {
            return data.json()
          })
          .then(data => {
          // console.log(limitedData[24].quotes.USD.price)
          return res.status(200).json(data.currencies)
          })
    }
  }