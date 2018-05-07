const birdsDb = require('../db/birds')

const router = require('express').Router()


router.get('/', (req, res) => {
  birdsDb.getBirds()
    .then(birds => res.json(birds))
})

router.delete('/:id', (req, res) => {
  birdsDb.delBird(req.params.id)
    .then(() => res.sendStatus(202))
})

module.exports = router
