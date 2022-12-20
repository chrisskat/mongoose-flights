const express = require('express')
const router = express.Router()

const destinationsCtrl = require('../controllers/destinations')

router.get('/flights/:id', destinationsCtrl.show)
router.post('/flights/:id/destinations', destinationsCtrl.create)
// router.get('/flights/:id/destinations', destinationsCtrl.show)

module.exports = router