// Require modules
const express = require('express')
const path = require('path')
const carDb = require('./data/cars-db')
// Create the Express app
const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

  
// Mount middleware (app.use)
  
  
// Mount routes
app.get('/', function(req, res) {
    res.redirect('/home')
})

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/cars', function(req, res) {
    const cars = carDb.getAll()
    res.render('cars/index', {
        cars: cars
    })
})
app.listen(3000, function() {
    console.log('Listening on port 3000')
})


