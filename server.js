//Install express server
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');

app.use(cors());

console.log("1");

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log("2");

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

let port = process.env.PORT || 8080;

console.log("3");

var routesMapping = require('./routes/users');
app.use(routesMapping);

console.log("4");

// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log('server running on port - ' + port);
});