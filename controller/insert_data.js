const express = require("express");
const route = express.Router()

route.get('/data', (req, res) => {
    res.render('insert_form')
})

route.post('/data', (req, res) => {
    const data = req.body();

})