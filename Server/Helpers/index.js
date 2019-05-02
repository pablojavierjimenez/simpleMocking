const CONFIG = require('../config');
const FILE_SYSTEM = require('fs');
const CreateRequirePath = require('./_createRequestPath');
const CheckIfUserSiteConfigIsValid = require('./_checkIfUserSiteConfigIsValid');

function Helper(originalConfig, processArgs) {

  /**
   *
   * @param {number} actualPort is a number actual setted by process.env.PORT || 3000
   * @param {object} processArgs object with all parameters recived by argument on console
   */
  let _changePortIfIsSettedByArguments = (actualPort, processArgs) => {
    var myArgs = processArgs.slice(2),
      portPosition = myArgs.indexOf("-p"),
      portValue = actualPort;

    if (portPosition != -1) {
        var portValueFromArg = parseInt(myArgs[portPosition + 1]);
      if (typeof portValueFromArg == "number") {
        console.log(`\t:${portValueFromArg}ES un puerto VALIDO`);
        portValue = portValueFromArg;
      } else {
        console.log("NO es un puerto valido, " + portValueFromArg + " deberia ser un numero");
      }
    }
    // console.log('helper portValue::-> ', portValue);
    return portValue;
  };

  /**
   *
   * @param {number} actualBaseDirectory is a number actual setted by process.env.PORT || 3000
   * @param {object} processArgs object with all parameters recived by argument on console
   */
  let _changeBaseDirectoryIfIsSettedByArguments = (actualBaseDirectory, processArgs) => {
    var finalDirectory = actualBaseDirectory[0],
      dirRecivedByArgs = '';
    if (processArgs.indexOf('-d') != -1) {
      dirRecivedByArgs = processArgs[processArgs.indexOf('-d') + 1];
      if (actualBaseDirectory.indexOf(dirRecivedByArgs) != -1) {
        dirRecivedByArgs = actualBaseDirectory.indexOf(dirRecivedByArgs);
        finalDirectory = actualBaseDirectory[dirRecivedByArgs];
      } else {
        console.log('\x1b[33m%s\x1b[5m', '');
        console.log('\x1b[31m%s\x1b[0m', '====== DANGER WILL ROBINSON!! ======');
        console.log('\x1b[31m%s\x1b[0m', 'parece que ese nombre no esta en el array\n');
        console.log('\x1b[36m%s\x1b[0m', 'no se encontro', dirRecivedByArgs, ' en ', actualBaseDirectory, '\nse definio el primero por default::->', finalDirectory,'\n\n');
      }
    } else if (actualBaseDirectory.length > 1) {
      console.log('\x1b[33m%s\x1b[5m', '');
      console.log('\x1b[33m%s\x1b[0m', '========= WARNNING WILL ROBINSON!! =========');
      console.log('\x1b[33m%s\x1b[0m', 'no se especifico un directorio y hay mas de una opcion en\n', actualBaseDirectory);
      console.log('\x1b[36m%s\x1b[0m', 'se definio el primero por default::->', finalDirectory);
      console.log('\x1b[36m%s\x1b[0m', 'puedes especificar el directorio correiendo el comando:');
      console.log('\x1b[47m\x1b[31m%s\x1b[0m', '\t ~$ node server.js -d miProjectDirectory \n\n');
    }

    return finalDirectory;
  }

  var _setParametersRecivedByArgs = () => {
    var newConfig = originalConfig || null;
    var newSitesConfig = sitesConfig(originalConfig.sitesConfig, processArgs);
    newConfig.sitesConfig = ( newSitesConfig.length != 0 ) ? newSitesConfig : newConfig.sitesConfig[0];
    newConfig.sitesConfig.runningAppPort = _changePortIfIsSettedByArguments(newConfig.sitesConfig.runningAppPort, processArgs);
    newConfig.sitesConfig.baseMockDir = _changeBaseDirectoryIfIsSettedByArguments(originalConfig.sitesConfig.baseMockDir, processArgs);
    return newConfig;
  };

  var sitesConfig = (siteArray, processArgs) => {
    var singleSite = {};
    var myArgPepe = processArgs.slice(2),
        siteName = processArgs[processArgs.indexOf("-s") + 1];
    var item = siteArray.filter(function (obj) {
      return obj.sitesKeyName == siteName;
    });
    singleSite = CheckIfUserSiteConfigIsValid(item[0]);
    return singleSite;
  };


  let _consoleMessage = (newConfig) => {
    console.log('\x1b[36m%s\x1b[0m', '||*****************************************||');
    console.log('\x1b[36m%s\x1b[0m', '||             APP and API                 ||');
    console.log('\x1b[36m%s\x1b[0m', '||*****************************************||');
    console.log('\nSite Config:\n', newConfig.sitesConfig, '\n');
    console.log('\x1b[32m%s\x1b[0m', `\nAPP running on ${newConfig.sitesConfig.allowDomine}:${newConfig.sitesConfig.runningAppPort}/`);
    console.log('\x1b[33m%s\x1b[0m', `\tServed from: .${newConfig.sitesConfig.baseHostDir}${newConfig.sitesConfig.baseMockDir}/${newConfig.sitesConfig.staticsDir}/`);
    console.log('\x1b[32m%s\x1b[0m', `\nAPI running on ${newConfig.sitesConfig.allowDomine}:${newConfig.sitesConfig.runningAppPort}${newConfig.sitesConfig.baseApiPath}`);
    console.log('\x1b[33m%s\x1b[0m', `\tServed from MOKS Directory: .${newConfig.sitesConfig.baseHostDir}${newConfig.sitesConfig.baseMockDir}`);
    console.log('\x1b[36m%s\x1b[0m', '---------------------------------------------------');
  };

  return {
    createRequirePath: CreateRequirePath,
    setParametersRecivedByArgs: _setParametersRecivedByArgs,
    consoleMessage: _consoleMessage
  }
};

module.exports = Helper;
