const userConfig = {
  siteConfig: {
    baseHostDir: '',//"sites",
    baseMockDir: [],//["expenses", "totalexpense", "myAnimeList"],
    staticsDir: '', //"dist",
    baseApiPath: '', //"/api/expenses", //default '', pero normalmente aca tendria que poner '/api'
    allowDomine: '', //"http://localhost", // que dominio puede hacerme request
    allowDominePort: '', //"5000", // desde que puerto puede hacerme request
  },
  errorMessage: {
    status: "404",
    code: "1000",
    message:"FROM USER CONFIG :: -> No se encontro este recurso, quiza no haya una carpeta o rchivo en el cuall se encuentren los datos Mockeado"
  }
};

module.exports = userConfig;
