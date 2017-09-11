
const CONFIG = require('../config');
const FILE_SYSTEM = require('fs');
const HELPERS = require('../Helpers');



exports.getData = (req, res) => {

  let dataPath = HELPERS.createRequirePath( req.params );

  //console.log(req.params, req.query, req.originalUrl);
  console.log(dataPath);

  FILE_SYSTEM.readFile(dataPath.path, 'utf8', (err, data) => {
    try {
      res.json(JSON.parse(data));
    } catch (err) {
      //if (err) throw err;
      res.status(404).send(CONFIG.errorMessage);
    }
  });
};
