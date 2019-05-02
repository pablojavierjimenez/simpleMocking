
const FILE_SYSTEM = require('fs');


/**
 * Create Required Path
 * @param {*} requestParamsObject
 */
var CreateRequirePath = (originalConfig, requestParamsObject) => {
  let final = {};
  final = _getRequestPath(originalConfig, requestParamsObject);
  final = _createFilePath(final);
  final = _checkIfFileExist(final);
  return final;
};

let _getRequestPath = ( config, paramsObject ) => {
  let pathFromConfig = `${config.sitesConfig.baseHostDir}${config.sitesConfig.baseMockDir}/`;
  let recivedService = '';
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
    console.log('\x1b[32m%s\x1b[0m', '\nSERVICE::->', `${config.sitesConfig.baseApiPath}/${recivedService}`);
    console.log('\x1b[33m%s\x1b[0m', 'FULL URI PATH ::->', `${config.sitesConfig.allowDomine}:${config.sitesConfig.runningAppPort}${config.sitesConfig.baseApiPath}/${recivedService}`);
  } else {
    console.log('\x1b[31m%s\x1b[0m', 'La ruta no existe o no tiene una crpeta asociada 🤔');
  }
  console.log('\x1b[36m%s\x1b[0m', 'MOKS FOLDER::-> ', pathObject.path);
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


module.exports = CreateRequirePath;
