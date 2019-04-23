/*
 * DEPENDEncies
 */
const path = require('path');
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const CONFIG = require('./sm/config');
const SITES_CONFIG = require('./sm/sitesConfig');
/**
 * Get Api Router
 */
const app = express();
const apiRoutes = require('./sm/routers/api.routes'); //importing route

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

/**
 * Point static path to dist
 */
app.use(express.static(path.join(__dirname, CONFIG.staticsDir)));

/**
 * Set api routes
 */
apiRoutes(app);

/**
 *
 * @param {number} actualPort is a number actual setted by process.env.PORT || 3000
 * @param {object} processArgs object with all parameters recived by argument on console
 */
function changePortIfIsSettedByArguments(actualPort, processArgs) {
  var myArgs = processArgs.slice(2),
    portPosition = myArgs.indexOf('-p'),
    portValue = actualPort;

  if (portPosition != -1) {
    var portValueFromArg = parseInt(myArgs[portPosition + 1]);
    if (typeof (portValueFromArg) == 'number') {
      console.log('ES un puerto VALIDO', portValueFromArg);
      portValue = portValueFromArg;
    } else {
      console.log('NO es un puerto valido, ' + portValueFromArg + ' deberia ser un numero')
    }
  }
  return portValue;
}

/**
 * Catch all other routes and return the index file
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
var startPort = process.env.PORT || '3000';
const port = changePortIfIsSettedByArguments(startPort, process.argv);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
  console.log(`\n baseMockDir: ${CONFIG.baseMockDir}`);
  console.log(`\n baseApiPath: ${CONFIG.baseApiPath}`);
  console.log(`\n APP running on ${CONFIG.allowDomine}:${port}\n API running on ${CONFIG.allowDomine}:${port}/${CONFIG.baseApiPath}/ping`);
});
