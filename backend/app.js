import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import LinksRouter from './routes/LinksRouter.js'

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

app.use(cors)
app.use(express.json())
app.use(LinksRouter)

app.listen(5000, () => console.log('Server running at port 5000'))