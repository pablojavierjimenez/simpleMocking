/**
 * IMPORTS
 */
const hotelController = require('../controllers/hotel.controller');
const LevelPathController = require('../controllers/LevelPath.controlle');
const CONFIG = require('../config');


/* GET api listing. */
const apiDefault = (req, res) => {
  res.send( CONFIG.defaultApiPage );
};


function apiRoutes (app) {

  /* GET api listing. */
  app.route('/api')
  .get(apiDefault);

  // hotelListController Routes
  app.route(CONFIG.myLevelPath.first)
    .get(LevelPathController.getData);

  // Catching rout Level
  app.route(CONFIG.myLevelPath.second)
    .get(LevelPathController.getData);

  // Catching rout Level
  app.route(CONFIG.myLevelPath.third)
    .get(LevelPathController.getData);

  // Catching rout Level
  app.route(CONFIG.myLevelPath.fourth)
    .get(LevelPathController.getData);

  // Catching rout Level
  app.route(CONFIG.myLevelPath.fifth)
    .get(LevelPathController.getData);

  // Catching rout Level
  app.route(CONFIG.myLevelPath.sixth)
    .get(LevelPathController.getData);

  // Catching rout Level
  app.route(CONFIG.myLevelPath.seventh)
    .get(LevelPathController.getData);

  // Catching rout Level
  app.route(CONFIG.myLevelPath.eighth)
    .get(LevelPathController.getData);

  // Catching rout Level
  app.route(CONFIG.myLevelPath.ninth)
    .get(LevelPathController.getData);

  // Catching rout Level
  app.route(CONFIG.myLevelPath.tenth)
    .get(LevelPathController.getData);

  app.use(function (req, res, next) {
    res.status(404).send(CONFIG.errorMessage);
  })
};

module.exports = apiRoutes;
