const CONFIG = require('../config');
const FILE_SYSTEM = require('fs');



function Helper(originalConfig, processArgs) {

  /**
   * Create Required Path
   * @param {*} requestParamsObject
   */
  var _createRequirePath = (requestParamsObject) => {
    let final = {};
    final = _getRequestPath(requestParamsObject);
    final = _createFilePath(final);
    final = _checkIfFileExist(final);
    return final;
  };

  let _getRequestPath = (paramsObject) => {
    let pathFromConfig = `${originalConfig.siteConfig.baseHostDir}${originalConfig.siteConfig.baseMockDir}/`;
    let recivedService='';
    let pathObject = {
      path: pathFromConfig
    };
    let arrayKeys = Object.keys(paramsObject);
    // console.log('arraykey', arrayKeys+"\n");
    for (let i = 0; i < arrayKeys.length; i++) {
      let key = arrayKeys[i];
      let value = paramsObject[key];
      recivedService = recivedService + value + '/';
      pathObject.pathRecursive = pathObject.path + value;
      pathObject.pathLevel = i + 1;
    }
    pathObject.path = pathObject.path + recivedService;
    if (recivedService) {
      console.log('\nSERVICE::->', `${originalConfig.siteConfig.baseApiPath}/${recivedService}`);
      console.log('FULL URI PATH ::->', `${originalConfig.siteConfig.allowDomine}:${originalConfig.siteConfig.runningAppPort}${originalConfig.siteConfig.baseApiPath}/${recivedService}`);
    } else {
      console.log('\x1b[31m%s\x1b[0m', 'La ruta no existe o no tiene una crpeta asociada 🤔');
    }
    console.log('MOKS FOLDER::-> ', pathObject.path);
    return pathObject;
  };

  let _createFilePath = (Obj) => {
    let temporalPath = Obj.path.slice(0, (Obj.path.length - 1));
    Obj.pathRecursive = Obj.pathRecursive + '.json';
    Obj.path = temporalPath + '.json';
    Obj.pathPost = temporalPath + '.createdByPost.json';
    return Obj;
  };

  let _checkIfFileExist = (obj) => {
    if (FILE_SYSTEM.existsSync(obj.pathRecursive)) {
      obj.path = obj.pathRecursive;
    } else if (!FILE_SYSTEM.existsSync(obj.path)) {
      let temporalPath = obj.path.slice(0, (obj.path.length - 5));
      obj.path = temporalPath + '/index.json';
    } else {
      // console.log('ninguno EXISTE ¯\\_(o_O)_/¯  ¯\\_(0_0)_/¯  ¯\\_(ಥ_ಥ)_/¯ ');
    }
    return obj;
  };

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

    // console.log('runningAppPort ', originalConfig.runningAppPort);
    newConfig.siteConfig.runningAppPort = _changePortIfIsSettedByArguments(newConfig.siteConfig.runningAppPort, processArgs);
    newConfig.siteConfig.baseMockDir = _changeBaseDirectoryIfIsSettedByArguments(originalConfig.siteConfig.baseMockDir, processArgs);
    // cosas que van a pasar
    return newConfig;
  };

  let _consoleMessage = (newConfig) => {
    console.log('\x1b[36m%s\x1b[0m', '||*****************************************||');
    console.log('\x1b[36m%s\x1b[0m', '||             APP and API                 ||');
    console.log('\x1b[36m%s\x1b[0m', '||*****************************************||');
    console.log('\nSite Config:\n', newConfig.siteConfig, '\n');
    console.log('\x1b[32m%s\x1b[0m', `\nAPP running on ${newConfig.siteConfig.allowDomine}:${newConfig.siteConfig.runningAppPort}/`);
    console.log('\x1b[33m%s\x1b[0m', `\tServed from: .${newConfig.siteConfig.baseHostDir}${newConfig.siteConfig.baseMockDir}/${newConfig.siteConfig.staticsDir}/`);
    console.log('\x1b[32m%s\x1b[0m', `\nAPI running on ${newConfig.siteConfig.allowDomine}:${newConfig.siteConfig.runningAppPort}${newConfig.siteConfig.baseApiPath}`);
    console.log('\x1b[33m%s\x1b[0m', `\tServed from MOKS Directory: .${newConfig.siteConfig.baseHostDir}${newConfig.siteConfig.baseMockDir}`);
    console.log('\x1b[36m%s\x1b[0m', '---------------------------------------------------');
  };

  return {
    createRequirePath: _createRequirePath,
    setParametersRecivedByArgs: _setParametersRecivedByArgs,
    consoleMessage: _consoleMessage
  }
};

module.exports = Helper;
