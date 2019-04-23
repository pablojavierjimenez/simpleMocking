/*
 * DEPENDEncies
 */
const path = require("path");
const http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const CONFIG = require("./sm/config/original-config");


/**
 * Get Api Router
 */
const app = express();
const apiRoutes = require("./sm/routers/api.routes"); //importing route

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
); // for parsing application/x-www-form-urlencoded

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
    portPosition = myArgs.indexOf("-p"),
    portValue = actualPort;

  if (portPosition != -1) {
    var portValueFromArg = parseInt(myArgs[portPosition + 1]);
    if (typeof portValueFromArg == "number") {
      console.log("ES un puerto VALIDO", portValueFromArg);
      portValue = portValueFromArg;
    } else {
      console.log("NO es un puerto valido, " + portValueFromArg + " deberia ser un numero");
    }
  }
  return portValue;
}
/**
 *
 * @param {number} actualBaseDirectory is a number actual setted by process.env.PORT || 3000
 * @param {object} processArgs object with all parameters recived by argument on console
 */
function changeBaseDirectoryIfIsSettedByArguments(actualBaseDirectory, processArgs) {

  var defaultDir = `./${DEFAULT_CONFIG.baseHostDir}/${DEFAULT_CONFIG.baseHostDir[0]}/${DEFAULT_CONFIG.staticsDir}/`;
  var usenDir = `./${USER_CONFIG.baseHostDir}/${USER_CONFIG.baseHostDir[0]}/${USER_CONFIG.staticsDir}/`;
  console.log('actualbasedirectory :: ->', actualBaseDirectory.length);
  var finalDirectory = actualBaseDirectory[0],
  dirRecivedByArgs = '';

  if (processArgs.indexOf('-d') != -1) {
    dirRecivedByArgs = processArgs[processArgs.indexOf('-d') + 1];

    if ( actualBaseDirectory.indexOf(dirRecivedByArgs) != -1) {
      dirRecivedByArgs = actualBaseDirectory.indexOf(dirRecivedByArgs);
      finalDirectory = actualBaseDirectory[dirRecivedByArgs];
    } else {
      console.log('\x1b[31m%s\x1b[0m','\n==== DANGER WILL ROBINSON!! ======\nparece que ese nombre no esta en el array');
      console.log('\x1b[36m%s\x1b[0m','no se encontro',dirRecivedByArgs,' en ', actualBaseDirectory,'\nse definio el primero por default::->', finalDirectory);
    }

  } else if ( actualBaseDirectory.length > 1 ) {
    console.log('\x1b[33m%s\x1b[0m','\n====== WARNNING WILL ROBINSON!! ======');
    console.log('\x1b[33m%s\x1b[0m','no se especifico un directorio y hay mas de una opcion en\n', actualBaseDirectory);
    console.log('\x1b[36m%s\x1b[0m','se definio el primero por default::->', finalDirectory);
    console.log('\x1b[36m%s\x1b[0m','puedes especificar el directorio correiendo el comando:');
    console.log('\x1b[47m\x1b[31m%s\x1b[0m','\t ~$ node server.js -d miProjectDirectory ');
    // return finalDirectory;
  }

return finalDirectory;
}
/**
 * Catch all other routes and return the index file
 */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

/**
 * Get port from environment and store in Express.
 */
var startPort = process.env.PORT || "3000";
const port = changePortIfIsSettedByArguments(startPort, process.argv);
CONFIG.baseMockDir = changeBaseDirectoryIfIsSettedByArguments(CONFIG.baseMockDir, process.argv);
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// console.log("appConfig:: ", appConfig);

/**
 * Listen on provided port, on all network interfaces.
 */
console.log('\x1b[36m%s\x1b[0m', '----------------------------------------');
server.listen(port, () => {
  console.log('\x1b[33m%s\x1b[0m', `\n baseMockDir: ${CONFIG.baseMockDir}`);
  console.log('\x1b[33m%s\x1b[0m', `\n APP running on ${CONFIG.allowDomine}:${port}\n API running on ${CONFIG.allowDomine}:${port}/api`);
});
