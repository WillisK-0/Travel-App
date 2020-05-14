const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const logInRouter = require('./routes/log-in')
const travelRouter = require('./routes/travel')
var session = require('express-session')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


app.use(express.urlencoded())
app.use('/css', express.static('css'))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use('/log-in', logInRouter)
app.use('/travel', travelRouter)

global.users = []
global.trips = []


app.listen(3000, () => {
    console.log("Server is running")
})
