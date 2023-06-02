export default function handler(req, res) {
    if(req.method == "GET") {
      return fetch('https://api.coinpaprika.com/v1/global')
          .then(async data => {
            const info = await data.json();

            return res.status(200).json(info);
          })
          .catch(err => {
            throw err;
          })
    }
  }