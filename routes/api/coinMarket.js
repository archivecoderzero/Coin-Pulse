const express = require('express')
const router = express.Router()
const CoinMarketCap = require('coinmarketcap-api')
 
const apiKey = '5a866443-ac0a-455d-82bd-61eace4e1410'
const client = new CoinMarketCap(apiKey)

const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
  qs: {
    'id': '1'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '5a866443-ac0a-455d-82bd-61eace4e1410'
  },
  json: true,
  gzip: true
};


// checks if user has an account
router.get('/', (req, res, next) => {

    console.log("api route hit");
    rp(requestOptions).then(response => {
        console.log(response.data[1].quote.USD);

      }).catch((err) => {
        console.log('API call error:', err.message);
      });

});

module.exports = router;


