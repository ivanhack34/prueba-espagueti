const express = require('express')

const db = require('./utils/database')

const port = 9000

const app = express()

db.authenticate()
.then(log=>console.log("Database has been authenticated!"))
.catch(err=>console.error(err.message))

db.sync()
.then(log=>console.log("Synchronization successfully!"))
.catch(err=>console.error(err.message))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
