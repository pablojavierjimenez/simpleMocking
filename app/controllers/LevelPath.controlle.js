const FILE_SYSTEM = require('fs');
const ENCODING = "utf8";

function LevelPathController (configs, helpers) {
  /**
   *
   * @param {Object} req
   * @param {Oblect} res
   * @returns {Object} data
   */
  let _getData = (req, res) => {
    // console.log('levelpathcontrolloe::->',req);
    let dataPath = helpers.createRequirePath(req.params);
    // console.log('aca es donde intentare encontrar el .json::-> ',dataPath.path);
    FILE_SYSTEM.readFile(dataPath.path, ENCODING, (err, data) => {
      try {
        res.json(JSON.parse(data));
      } catch (err) {
        // if (err) throw err;
        res.status(404).send(configs.errorMessage);
      }
    });
  };

  let _postData = (req, res) => {
    //console.log(req.params, req.query, req.originalUrl, req.body);
    let dataPath = helpers.createRequirePath(req.params);
    var content = JSON.stringify(req.body);

    FILE_SYSTEM.writeFile(dataPath.pathPost, content, ENCODING, (err) => {
      try {
        res.json(JSON.parse(content));
        console.log("The file was succesfully saved!");
      } catch (err) {
        // if (err) console.log(err);
        res.status(404).send(configs.errorMessage);
      }
    });
  };

  return {
    getData: _getData,
    postData: _postData
  }
};

module.exports = LevelPathController;
