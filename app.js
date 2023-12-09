require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const http = require('http')
const connection = require('./config/connection')

const app = express()

const server = http.createServer(app)

const corsOptions = {
    origin: "*",
    methods: 'GET,POST',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}

app.use(cors(corsOptions))

app.set('port', process.env.PORT) 

app.use(morgan('tiny'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.urlencoded({ extended: true }))

app.use(express(JSON))

app.use('/', require('./router'))

app.use(express.static(path.join(__dirname,'app.js')))

server.listen(app.get('port'), () => {
    console.log('server runnning')
})
