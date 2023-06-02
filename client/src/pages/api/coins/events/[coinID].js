export default function handler(req, res) {
    const {coinID} = req.query;
      if(req.method == "GET") {
        return fetch(`https://api.coinpaprika.com/v1/coins/${coinID}/events`)
            .then(data => {
              return data.json()
            })
            .then(data => {
                return res.status(200).json(data)
            })
      }
    }