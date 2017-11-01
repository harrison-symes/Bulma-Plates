const express = require('express')
const router = express.Router()

const greetingsDb = require('../db/greeting')

router.get('/', (req, res) => {
  greetingsDb.getGreetings()
    .then(greetings => {
      res.json(greetings)
    })
})

module.exports = router
