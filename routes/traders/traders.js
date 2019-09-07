const express = require('express')
const router = express.Router()
const User = require('../../database/models/user')

router.get('/', (req, res, next) => {
    console.log(req.user)

    User.find({}).sort({ date: -1 })
    .then(function(dbUser) {

      console.log("traders list sent");
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
})

module.exports = router