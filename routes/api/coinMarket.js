const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const Bitcoin = require('../../models/bitcoin.js');
const rp = require('request-promise');
const mongoose = require("mongoose");
const axios = require('axios');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

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

      const bitcoin = new Bitcoin({
        price: response.data[1].quote.USD.price
      })

      bitcoin.save().then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({ message: err })
      })

      // res.send(response.data[1].quote.USD)

    }).catch((err) => {
      console.log('API call error:', err.message);
    });

});

// checks if user has an account
router.post('/', (req, res) => {

  console.log("api route hit");

  console.log(req.body);

  const bitcoin =  new Bitcoin({
    price: req.body.price
  })

  console.log(bitcoin);

  bitcoin.save()
  .then(data => { res.json(data)} )
  .catch(err => res.json({ message: err }))

});



checker = () => {
  rp(requestOptions).then(response => {
    console.log(response.data[1].quote.USD);

    const bitcoin = new Bitcoin({
      price: response.data[1].quote.USD.price
    })
  
    bitcoin.save().then(data => {
      return;
    })
    .catch(err => {
      res.json({ message: err })
    })
  
  }).catch((err) => {
    console.log('API call error:', err.message);
  })
}

setInterval(checker, 3000);

module.exports = router;



