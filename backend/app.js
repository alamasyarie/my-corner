const express = require('express')
const mongoose = require('mongoose')

const app = express()

// mongoose.connect('mongodb://localhost:27017/mycorner_db', { useNewParser: true, useUnifiedTopology: true })

// const db = mongoose.conection

mongoose.connect('mongodb://localhost:27017/myCorner_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database conencted'))

console.log('Hello world');

app.listen(5000, () => console.log('Server running at port 5000'))