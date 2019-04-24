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

var Helper = new HELPER(CONFIG, process.argv);
var NewConfig = Helper.setParametersRecivedByArgs();
let staticDirPath = `.${NewConfig.siteConfig.baseHostDir}${NewConfig.siteConfig.baseMockDir}/${NewConfig.siteConfig.staticsDir}`;

const app = express();
const apiRoutes = require('./Routes/api.routes'); //importing route
/**--------------------------**/

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
app.set('port', NewConfig.siteConfig.runningAppPort);

/**---- Create HTTP server ----**/
const server = http.createServer(app);

/**---- Listen on provided port, on all network interfaces. ----**/
server.listen( NewConfig.siteConfig.runningAppPort, () => {
  Helper.consoleMessage( NewConfig );
});
