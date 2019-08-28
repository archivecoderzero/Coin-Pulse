const express = require('express')
const router = express.Router()
const CoinMarketCap = require('coinmarketcap-api')
 
const apiKey = '5a866443-ac0a-455d-82bd-61eace4e1410'
const client = new CoinMarketCap(apiKey)


// checks if user has an account
router.get('/', (req, res, next) => {

    console.log("api route hit");
    client.getQuotes({id: [1], convert: 'USD'}).then(console.log).catch(console.error)})

module.exports = router;