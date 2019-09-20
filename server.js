const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware')

// Serve static files....
app.use(express.static(__dirname + '/dist/wine-register'));

var apiProxy = proxy('/wines', {target: 'http://wine-register.herokuapp.com', changeOrigin: true });
app.use(apiProxy)

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/wine-register/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 80);