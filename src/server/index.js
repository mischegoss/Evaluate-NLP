require('dotenv').config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// set aylien API credentias
var textapi = new aylien({
    application_id: "your-api-id",
    application_key: "your-key"
  });

//sentiment analysis
  textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
    }
  });

  // Express server and routes 
  
const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


