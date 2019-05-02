//   esto es un ejemplo de objeto de configuracion de un sitio personalizado
// {
//   sitesKeyName: 'expense',
//   baseHostDir: '',//"sites",
//   baseMockDir: [],//["expenses", "totalexpense", "myAnimeList"],
//   staticsDir: '', //"dist",
//   baseApiPath: '', //"/api/expenses", //default '', pero normalmente aca tendria que poner '/api'
//   allowDomine: '', //"http://localhost", // que dominio puede hacerme request
//   allowDominePort: '', //"5000", // desde que puerto puede hacerme request
// }
const userConfig = {
  sitesConfig: [
    // {
    //   sitesKeyName: 'expense',
    //   baseHostDir: 'DeloitteSites',
    //   baseMockDir: ["expenses"],
    //   runningAppPort: '5555',
    //   staticsDir: '',
    //   baseApiPath: '/api/expenses',
    //   allowDomine: '',
    //   allowDominePort: '', //"5000", // desde que puerto puede hacerme request
    // },
    // {
    //   sitesKeyName: 'totalexpense',
    //   baseHostDir: 'DeloitteSites',
    //   baseMockDir: ["totalexpense"],
    //   runningAppPort: '5000',
    //   staticsDir: '',
    //   baseApiPath: '',
    //   allowDomine: '',
    //   allowDominePort: ''
    // }
  ],
  errorMessage: {
  status: "404",
  code: "1000",
  message:"FROM USER CONFIG :: -> No se encontro este recurso, quiza no haya una carpeta o rchivo en el cuall se encuentren los datos Mockeado"
  }
};

module.exports = userConfig;
