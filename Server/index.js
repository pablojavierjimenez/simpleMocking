/*
 * DEV DEPENDENCIES
 */
const path = require('path');
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/**---- APP DEPENDENCIES ----**/
const HELPER = require('./Helpers');
const CONFIG = require('./config');

// console.log(CONFIG.sitesConfig);

var Helper = new HELPER(CONFIG, process.argv);
// console.log(Helper);

var NewConfig = Helper.setParametersRecivedByArgs();

let staticDirPath = `.${NewConfig.sitesConfig.baseHostDir}${NewConfig.sitesConfig.baseMockDir}/${NewConfig.sitesConfig.staticsDir}`;

/**--------------------------**/

/*****************************
 *     START EXPRESS JS
 *****************************/
const app = express();
const apiRoutes = require('./Routes/api.routes');

/**---- Get Api Router ----**/
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

/**---- Point static path to dist ----**/
app.use(express.static(path.join(__dirname, staticDirPath)));

/**---- Set api routes ----**/
apiRoutes(app, NewConfig, Helper);

/**---- Catch all other routes and return the index file ----**/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**---- Get port and store in Express. ----**/
app.set('port', NewConfig.sitesConfig.runningAppPort);

/**---- Create HTTP server ----**/
const server = http.createServer(app);

/**---- Listen on provided port, on all network interfaces. ----**/
server.listen(NewConfig.sitesConfig.runningAppPort, () => {
  Helper.consoleMessage(NewConfig);
});
