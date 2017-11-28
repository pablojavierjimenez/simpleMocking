
const CONFIG = require('../config');
const FILE_SYSTEM = require('fs');


/**
 * Create Required Path
 * @param {*} requestParamsObject
 */
exports.createRequirePath = ( requestParamsObject ) => {

  let final = {};

  final = getRequestPath( requestParamsObject );

  final = createFilePath( final );

  final = checkIfFileExist( final );

  return final;
};


let getRequestPath = ( paramsObject ) => {
  let pathObject= {
    path: CONFIG.baseMockDir
  };
  let arrayKeys = Object.keys( paramsObject );
  console.log(arrayKeys+"\n");

  for(let i=0; i < arrayKeys.length; i++){
    let key = arrayKeys[i];
    let value = paramsObject[key];

    pathObject.path = pathObject.path + value + '/';
    pathObject.pathRecursive = pathObject.path + value;
    pathObject.pathLevel = i + 1;
  }

  return pathObject;
};

let createFilePath = (Obj) => {
  let temporalPath = Obj.path.slice(0, ( Obj.path.length - 1 ) );
  Obj.pathRecursive = Obj.pathRecursive + '.json';
  Obj.path = temporalPath + '.json';
  Obj.pathPost = temporalPath+ '/index.createdByPost.json';

  return Obj;
};

let checkIfFileExist = (obj) => {

  if ( FILE_SYSTEM.existsSync( obj.pathRecursive ) )
  {
    obj.path = obj.pathRecursive;
  }
  else if ( !FILE_SYSTEM.existsSync( obj.path ) )
  {
    let temporalPath = obj.path.slice(0, ( obj.path.length - 5 ) );
    obj.path = temporalPath + '/index.json';
  }
  else
  {
    console.log('ninguno EXISTE ¯\\_(o_O)_/¯  ¯\\_(0_0)_/¯  ¯\\_(ಥ_ಥ)_/¯ ');
  }

  return obj;
};
