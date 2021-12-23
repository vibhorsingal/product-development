const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/product").then(() => {
    console.log('connection sucessfull')
}).catch((err) => {
    console.log('failed to connect')
})


