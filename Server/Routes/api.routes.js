/**
 * IMPORTS
 */
const LEVEL_PATH_CONTROLLER = require('../controllers/LevelPath.controlle');
const CONFIG = require('../config');


/* GET api listing. */
const apiDefault = (req, res) => {
  res.send(config.sitesConfig.defaultApiPage);
};


function apiRoutes(app, config, helpers) {

  let LevelPathController = new LEVEL_PATH_CONTROLLER(config, helpers);

  app.use(function (req, res, next) {
    var allowedCORS = `${config.sitesConfig.allowDomine}:${config.sitesConfig.allowDominePort}` || '*';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  /* GET api listing. */
  app.route('/sm')
    .get(apiDefault);

  // hotelListController Routes
  // console.log(config.sitesConfig.baseApiPath + config.myLevelPath.first);
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.first)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.second)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.third)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.fourth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.fifth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.sixth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.seventh)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.eighth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.ninth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  // Catching rout Level
  app.route(config.sitesConfig.baseApiPath + config.myLevelPath.tenth)
    .get(LevelPathController.getData)
    .post(LevelPathController.postData);

  app.use(function (req, res, next) {
    res.status(404).send(config.sitesConfig.errorMessage);
  })
};

module.exports = apiRoutes;
