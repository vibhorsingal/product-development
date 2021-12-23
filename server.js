require('dotenv').config()
//require express
const express = require('express')
const app = express()

//setting up cookies and sessions
const session = require('express-session')
const flash = require('connect-flash')

const MongoStore = require('connect-mongo')
const url = process.env.MONGODB_URI || process.env.MONGO_URL
const store = MongoStore.create({ mongoUrl: url, collectionName: 'sessions' })
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}))
//passport 
const passport = require('passport')

//flash messages
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

//configuring database
require('./config/database')

app.use('/', express.static(__dirname + '/public'))
app.use('/uploads', express.static(__dirname + '/uploads'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/data', (req, res) => {
    res.render('insert_form')
})

//server listening on port 5000
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})