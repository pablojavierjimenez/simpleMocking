const CONFIG = require('../config');
const FILE_SYSTEM = require('fs');
const HELPERS = require('../Helpers');
const ENCODING = "utf8";


exports.getData = (req, res) => {
  // console.log('levelpathcontrolloe::->',req);

  let dataPath = HELPERS.createRequirePath(req.params);

  console.log('aca esta la puta barra',dataPath);

  FILE_SYSTEM.readFile(dataPath.path, ENCODING, (err, data) => {
    try {
      res.json(JSON.parse(data));
    } catch (err) {
      // if (err) throw err;
      res.status(404).send(CONFIG.errorMessage);
    }
  });
};


exports.postData = (req, res) => {
  //console.log(req.params, req.query, req.originalUrl, req.body);
  let dataPath = HELPERS.createRequirePath(req.params);
  var content = JSON.stringify(req.body);

  FILE_SYSTEM.writeFile(dataPath.pathPost, content, ENCODING, (err) => {
    try {
      res.json(JSON.parse(content));
      console.log("The file was succesfully saved!");
    } catch (err) {
      // if (err) console.log(err);
      res.status(404).send(CONFIG.errorMessage);
    }
  });
};
