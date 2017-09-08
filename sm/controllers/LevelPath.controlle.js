
const CONFIG = require('../config');
const FILE_SYSTEM = require('fs');

/**
 *
 */
exports.getData = (req, res) => {
  let dataPath = createRequirePath(req.params);
  FILE_SYSTEM.readFile(dataPath.path, 'utf8', (err, data) => {
    try {
      res.json(JSON.parse(data));
    } catch (err) {
      //if (err) throw err;
      res.status(404).send(CONFIG.errorMessage);
    }
  });
};

/**
 * Create Required Path
 * @param {*} requestParamsObject
 */
let createRequirePath = (requestParamsObject) => {

  let final = {
    path: CONFIG.baseMockDir,
    pathLevel: 1
  };

  let ObjArrayKeys = Object.keys(requestParamsObject);

  for(let i=0; i < ObjArrayKeys.length; i++){
    let key = ObjArrayKeys[i];
    let value = requestParamsObject[key];

    final.path = final.path + value + '/';
    final.pathLevel = i + 1;
  }

  final.path = final.path + 'index.json';
  console.log(final.path);
  return final;
};

/**
 *
 * @param {*} path
 */
let checkIfIsFolder = (path) => {
  // path = final.path.slice(0, ( final.path.length - 1 ) );
};
