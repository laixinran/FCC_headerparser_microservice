// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// request to /api/whoami should return a JSON object with your IP address in the ipaddress key, your preferred language in the language key, your software in the software key.
app.get('/api/whoami', (req, res) => {
  const myip = req.socket.remoteAddress;
  const mylanguage = req.headers['accept-language'];
  const mysoftware = req.headers['user-agent'];
  res.json({ipaddress: myip, language: mylanguage, software: mysoftware});
});


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
