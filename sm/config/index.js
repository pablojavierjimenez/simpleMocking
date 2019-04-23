
const DEFAULT_CONFIG = require("./defaultConfig");
const USER_CONFIG = require("./userConfig");


var setUserConfigIfItExist = {
  baseHostDir: () => {
    var hostDir = (USER_CONFIG.baseHostDir != '') ? `./${USER_CONFIG.baseHostDir}/` : `./${DEFAULT_CONFIG.baseHostDir}/`;
    return hostDir || null;
  },
  baseMockDir: () => {
    //expected as default::-> './host/exampleSiteDir/'
    var baseMockDir = `./${DEFAULT_CONFIG.baseHostDir}/${DEFAULT_CONFIG.baseMockDir}/`;
    return baseMockDir || null;
  },
  staticsDir: () => {
    //expected as default::-> './host/exampleSiteDir/public/'
    var staticsDir = (USER_CONFIG.staticsDir != '') ? `./${USER_CONFIG.staticsDir}` : `./${DEFAULT_CONFIG.staticsDir}`;
    return staticsDir || null;
  },
  baseApiPath: () => {
    var baseApiPath = (USER_CONFIG.baseApiPath != '') ? `/${USER_CONFIG.baseApiPath}` : `/${DEFAULT_CONFIG.baseApiPath}`;
    return baseApiPath || null;
  },
  allowDomine: () => {
    var allowDomine = (USER_CONFIG.allowDomine != '') ? USER_CONFIG.allowDomine : DEFAULT_CONFIG.allowDomine;
    return allowDomine || null;
  },
  allowDominePort: () => {
    var alloedPort =  (USER_CONFIG.allowDominePort != '') ? USER_CONFIG.allowDominePort : DEFAULT_CONFIG.allowDominePort;
    return alloedPort || null;
  },
}

const config = {
  baseHostDir: setUserConfigIfItExist.baseHostDir(),
  baseMockDir: setUserConfigIfItExist.baseMockDir(),
  staticsDir: setUserConfigIfItExist.staticsDir(),
  baseApiPath: '', //default '', pero normalmente aca tendria que poner '/api'
  allowDomine:      setUserConfigIfItExist.allowDomine(),     // que dominio puede hacerme request
  allowDominePort:  setUserConfigIfItExist.allowDominePort(), // desde que puerto puede hacerme request
  errorMessage:     DEFAULT_CONFIG.errorMessage,
  myLevelPath:      DEFAULT_CONFIG.myLevelPath,
  defaultApiPage:   DEFAULT_CONFIG.defaultApiPage
};

module.exports = config;
