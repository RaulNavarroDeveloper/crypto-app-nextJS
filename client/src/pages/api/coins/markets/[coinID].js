export default function handler(req, res) {
    const {coinID} = req.query;
      if(req.method == "GET") {
        return fetch(`https://api.coinpaprika.com/v1/coins/${coinID}/markets`)
            .then(data => {
              return data.json()
            })
            .then(data => {
                const limitedData = data.slice(0,20);
            // console.log(limitedData[24].quotes.USD.price)
            return res.status(200).json(limitedData)
            })
      }
    }