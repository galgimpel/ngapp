//Install express server
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');

app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

let port = process.env.PORT || 8080;

// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log('server running on port - ' + port);
});