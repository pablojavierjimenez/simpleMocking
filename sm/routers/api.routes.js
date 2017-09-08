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
  app.route('/api/:firstLevelPath')
    .get(LevelPathController.getData);

  // Single hotel Routes
  app.route('/api/:firstLevelPath/:secondLevelPath')
    .get(LevelPathController.getData);

  // Single hotel Routes
  app.route('/api/:firstLevelPath/:secondLevelPath/:thirdLevelPath')
    .get(LevelPathController.getData);

  app.use(function (req, res, next) {
    res.status(404).send(CONFIG.errorMessage);
  })
};

module.exports = apiRoutes;
