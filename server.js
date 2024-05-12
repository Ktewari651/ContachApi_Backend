const express = require('express')
const app = express()
const error = require('./Route/Middlewear/errorHandler')

PORT=5000

app.use(express.json())
require('./Route/contactRoute')(app);
app.use(error.errorHandler)

app.listen(PORT,()=>{
    console.log("Listening to", PORT);
})
console.log()


