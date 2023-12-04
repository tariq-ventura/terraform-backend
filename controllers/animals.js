const connection = require('../config/connection')

exports.getAnimals = async (req, res) => {
    const animales = []
    try {
        connection.query('select * from animals', (error, result) => {
            console.log(result)
            if (result.length) {
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