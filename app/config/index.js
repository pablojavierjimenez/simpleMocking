
const DEFAULT_CONFIG = require("./defaultConfig");
const USER_CONFIG = require("./userConfig");


var setUserConfigIfItExist = {
  baseHostDir: () => {
    var hostDir = (USER_CONFIG.siteConfig.baseHostDir != '') ? `./${USER_CONFIG.siteConfig.baseHostDir}/` : `./${DEFAULT_CONFIG.siteConfig.baseHostDir}/`;
    return hostDir || null;
  },
  baseMockDir: () => {
    //expected as default::-> './host/exampleSiteDir/'
    var finalBaseDir = [`${DEFAULT_CONFIG.siteConfig.baseMockDir}`];
    if (USER_CONFIG.siteConfig.baseMockDir.length > 1) {
      // console.log('userbasedir is setted ', USER_CONFIG.siteConfig.baseMockDir);
      finalBaseDir = USER_CONFIG.siteConfig.baseMockDir;
    }
    var baseMockDir = finalBaseDir;
    return baseMockDir || null;
  },
  staticsDir: () => {
    //expected as default::-> './host/exampleSiteDir/public/'
    var staticsDir = (USER_CONFIG.siteConfig.staticsDir != '') ? USER_CONFIG.siteConfig.staticsDir : DEFAULT_CONFIG.siteConfig.staticsDir;
    return staticsDir || null;
  },
  baseApiPath: () => {
    var baseApiPath = (USER_CONFIG.siteConfig.baseApiPath !== '') ? USER_CONFIG.siteConfig.baseApiPath : DEFAULT_CONFIG.siteConfig.baseApiPath;
    return baseApiPath || DEFAULT_CONFIG.siteConfig.baseApiPath;
  },
  allowDomine: () => {
    var allowDomine = (USER_CONFIG.siteConfig.allowDomine != '') ? USER_CONFIG.siteConfig.allowDomine : DEFAULT_CONFIG.siteConfig.allowDomine;
    return allowDomine || null;
  },
  allowDominePort: () => {
    var alloedPort =  (USER_CONFIG.siteConfig.allowDominePort != '') ? USER_CONFIG.siteConfig.allowDominePort : DEFAULT_CONFIG.siteConfig.allowDominePort;
    return alloedPort || null;
  },
}

const config = {
  siteConfig: {
    baseHostDir:      setUserConfigIfItExist.baseHostDir(),
    baseMockDir:      setUserConfigIfItExist.baseMockDir(),
    staticsDir:       setUserConfigIfItExist.staticsDir(),
    baseApiPath:      setUserConfigIfItExist.baseApiPath(), //default '', pero normalmente aca tendria que poner '/api'
    runningAppPort:    DEFAULT_CONFIG.siteConfig.runningAppPort,
    allowDomine:      setUserConfigIfItExist.allowDomine(),     // que dominio puede hacerme request
    allowDominePort:  setUserConfigIfItExist.allowDominePort(), // desde que puerto puede hacerme request
  },
  errorMessage:     DEFAULT_CONFIG.errorMessage,
  myLevelPath:      DEFAULT_CONFIG.myLevelPath,
  defaultApiPage:   DEFAULT_CONFIG.defaultApiPage
};

module.exports = config;
