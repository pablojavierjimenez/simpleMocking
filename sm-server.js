/*
* DEPENDEncies
*/
const path = require('path');
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * Get Api Router
 */
const app = express();
const apiRoutes = require('./sm/routers/api.routes'); //importing route

app.use(cors())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
/**
 * Set api routes
 */
apiRoutes(app);

/**
 * Point static path to dist
 */
app.use(express.static(path.join(__dirname, 'dist')));


/**
 * Catch all other routes and return the index file
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () =>{
  console.log(`\n APP running on localhost:${port}\n API running on localhost:${port}/api`)
});
