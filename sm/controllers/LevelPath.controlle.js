
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


exports.postData = (req, res) => {

    console.log(req.body);


    let dataPath = HELPERS.createRequirePath( req.params );

    //console.log(req.params, req.query, req.originalUrl);
    var content = JSON.stringify(req.body);
    var encoding = "utf8";

    FILE_SYSTEM.writeFile(dataPath.pathPost, content, encoding, (err) => {
      try {
        res.json(JSON.parse(data));
        console.log("The file was succesfully saved!");
      } catch (err) {
        //if (err) throw err;
        res.status(404).send(CONFIG.errorMessage);
      }
    });
  };
