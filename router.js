require('dotenv').config()

const express = require('express')
const router = express.Router()
const animals = require('./controllers/animals')

router.get('/api/animales', animals.getAnimals)
router.post('/api/animales', animals.insertAnimals)
router.get('/', animals.testConnection)

module.exports = router