require('dotenv').config()
const connection = require('../config/connection')

exports.getAnimals = async (req, res) => {
    const animales = []
    try {
        connection.query('select * from animals', (error, result) => {
            if (result && result.length) {
                for (let i = 0; i < result.length; i++) {
                    const element = result[i].animal
                    animales.push(element)
                }
                res.send(animales)
            } else {
                res.send('error')
                console.log(error)
            }
        })
    } catch (error) {
        res.send(error)
    }
}

exports.insertAnimals = async (req, res) => {
    const query = 'INSERT INTO animals (animal) VALUES (?)';
    const values = [req.body.animal]
    connection.query(query, values, (error) => {
        if (error) {
            res.send(false)
            console.log(error)
        } else {
            res.send(true)
        }
    })
}

exports.testConnection = (req, res) => {
    var mysql = require('mysql');

    const connection = mysql.createConnection({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_PATH
    })

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            res.send('not connected')
            return;
        }
        res.send('connected')
        console.log('connected as id ' + connection.threadId);
    })
}
