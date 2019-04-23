const DEFAULT_CONFIG = require("./defaultConfig");
const USER_CONFIG = require("./userConfig");


console.log('default::->',DEFAULT_CONFIG.baseMockDir, '\nuser::->',USER_CONFIG.baseMockDir);
const config = {
  baseHostDir: (USER_CONFIG.baseHostDir != '') ? `./${USER_CONFIG.baseHostDir}/` : `./${DEFAULT_CONFIG.baseHostDir}/`,
  baseMockDir: (USER_CONFIG.baseMockDir.length != 0 ) ? `./${USER_CONFIG.baseHostDir}/${USER_CONFIG.baseMockDir}/` : [`./${DEFAULT_CONFIG.baseHostDir}/${DEFAULT_CONFIG.baseMockDir}/`],
  staticsDir: (USER_CONFIG.staticsDir != '') ? `./${USER_CONFIG.staticsDir}` : `./${DEFAULT_CONFIG.staticsDir}`,
  baseApiPath: (USER_CONFIG.baseApiPath != '') ? `/${USER_CONFIG.baseApiPath}` : `/${DEFAULT_CONFIG.baseApiPath}`,
  allowDomine: (USER_CONFIG.allowDomine != '') ? USER_CONFIG.allowDomine : DEFAULT_CONFIG.allowDomine, // que dominio puede hacerme request
  allowDominePort: (USER_CONFIG.allowDominePort != '') ? USER_CONFIG.allowDominePort : DEFAULT_CONFIG.allowDominePort, // desde que puerto puede hacerme request
  errorMessage: DEFAULT_CONFIG.errorMessage,
  myLevelPath: DEFAULT_CONFIG.myLevelPath,
  defaultApiPage: DEFAULT_CONFIG.defaultApiPage
};

console.log('config basemokdir', config.baseMockDir)
module.exports = config;
