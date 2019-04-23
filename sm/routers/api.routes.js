/**
 * IMPORTS
 */
const LevelPathController = require('../controllers/LevelPath.controlle');
const CONFIG = require('../config');


/* GET api listing. */
const apiDefault = (req, res) => {
  res.send(CONFIG.defaultApiPage);
};


function apiRoutes(app) {
  app.use(function (req, res, next) {
    var allowedCORS = `${CONFIG.allowDomine}:${CONFIG.allowDominePort}` || '*';
    console.log(CONFIG.baseApiPath);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  /* GET api listing. */
  app.route('/sm')
    .get(apiDefault);

  // hotelListController Routes
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.first)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.second)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.third)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.fourth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.fifth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.sixth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.seventh)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.eighth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.ninth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(CONFIG.baseApiPath + CONFIG.myLevelPath.tenth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  app.use(function (req, res, next) {

    res.status(404).send(CONFIG.errorMessage);
  })
};

module.exports = apiRoutes;
