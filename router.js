require('dotenv').config()

const express = require('express')
const router = express.Router()
const animals = require('./controllers/animals')

router.get('/api/animales', animals.getAnimals)
router.post('/api/animales', animals.insertAnimals)
router, get('/', connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return;
    }

    console.log('connected as id ' + connection.threadId)
}))

module.exports = router