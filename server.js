const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/wine-register'));
app.use('/wines', proxy('wine-register.herokuapp.com'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/wine-register/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 80);