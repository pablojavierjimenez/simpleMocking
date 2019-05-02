const DEFAULT_CONFIG = require('../config/defaultConfig');


function checkIfUserSiteConfigIsValid ( userConfig ) {
  let DefaultSiteConfig = DEFAULT_CONFIG.sitesConfig[0];

  let _baseHostDir = () => {
    let hostDir = (userConfig.baseHostDir != '') ? `./${userConfig.baseHostDir}/` : `./${DefaultSiteConfig.baseHostDir}/`;
    return hostDir || null;
  };

  let _baseMockDir = () => {
    //expected as default::-> './host/exampleSiteDir/'
    let finalBaseDir = [`${DefaultSiteConfig.baseMockDir}`];
    if (userConfig.baseMockDir.length >= 1) {
      finalBaseDir = userConfig.baseMockDir;
    }
    let baseMockDir = finalBaseDir;
    return baseMockDir || null;
  };

  let _runningAppPort = () => {
    //expected as default::-> './host/exampleSiteDir/public/'
    let runningAppPort = (userConfig.runningAppPort != '') ? userConfig.runningAppPort : DefaultSiteConfig.runningAppPort;
    return runningAppPort || null;
  };

  let _staticsDir = () => {
    //expected as default::-> './host/exampleSiteDir/public/'
    let staticsDir = (userConfig.staticsDir != '') ? userConfig.staticsDir : DefaultSiteConfig.staticsDir;
    return staticsDir || null;
  };

  let _baseApiPath = () => {
    let baseApiPath = (userConfig.baseApiPath !== '') ? userConfig.baseApiPath : DefaultSiteConfig.baseApiPath;
    return baseApiPath || DefaultSiteConfig.baseApiPath;
  };

  let _allowDomine = () => {
    let allowDomine = (userConfig.allowDomine != '') ? userConfig.allowDomine : DefaultSiteConfig.allowDomine;
    return allowDomine || null;
  };

  let _allowDominePort = () => {
    let alloedPort =  (userConfig.allowDominePort != '') ? userConfig.allowDominePort : DefaultSiteConfig.allowDominePort;
    return alloedPort || null;
  };

  let _siteKeyName = () => {
    //expected as default::-> './host/exampleSiteDir/public/'
    let siteKeyName = (userConfig.sitesKeyName != '') ? userConfig.sitesKeyName : DefaultSiteConfig.sitesKeyName;
    return siteKeyName || null;
  };

  let sitesConfig =( siteArray, siteName ) => {
    let item =  siteArray.filter(function(obj) {
      return obj.sitesKeyName == siteName;
    });
    return item;
  };

  let finalUserSiteConfig = {
    sitesKeyName:   _siteKeyName(),
    baseHostDir:    _baseHostDir(),
    baseMockDir:    _baseMockDir(),
    runningAppPort: _runningAppPort(),
    staticsDir:     _staticsDir(),
    baseApiPath:    _baseApiPath(),
    allowDomine:    _allowDomine(),
    allowDominePort: _allowDominePort()
  };
  return finalUserSiteConfig;
};

module.exports = checkIfUserSiteConfigIsValid;
