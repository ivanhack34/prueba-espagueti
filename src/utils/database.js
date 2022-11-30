const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'users',
    username: 'postgres',
    password: 'root'
})

module.exports = db