const express = require('express')

const app = express()

console.log('Hello world');

app.listen(5000, () => console.log('Server running at port 5000'))