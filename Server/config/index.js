
const DEFAULT_CONFIG = require("./defaultConfig");
const USER_CONFIG = require("./userConfig");
// const user = require('../../UserSites.config.json');

function setUserSitesConfigIfItExist () {
  var sitesConfig = [];
  sitesConfig = ( USER_CONFIG.sitesConfig.length >= 1 ) ? USER_CONFIG.sitesConfig : DEFAULT_CONFIG.sitesConfig;
  return sitesConfig;
};

const config = {
  sitesConfig:      setUserSitesConfigIfItExist(),
  errorMessage:     DEFAULT_CONFIG.errorMessage,
  myLevelPath:      DEFAULT_CONFIG.myLevelPath,
  defaultApiPage:   DEFAULT_CONFIG.defaultApiPage
};

module.exports = config;
