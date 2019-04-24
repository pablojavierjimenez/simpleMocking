const defaultConfig = {
  siteConfig: {
    baseHostDir: "Server",
    baseMockDir: ["exampleSiteDir"],
    staticsDir: "public",
    baseApiPath: "", //default '', pero normalmente aca tendria que poner '/api'
    runningAppPort: "3000",
    allowDomine: "http://localhost", // que dominio puede hacerme request 'http://10.26.131.106'
    allowDominePort: "5000", // desde que puerto puede hacerme request
  },
  errorMessage: {
    status: "404",
    code: "1000",
    message:
      "No se encontro este recurso, quiza no haya una carpeta o rchivo en el cuall se encuentren los datos Mockeado"
  },
  myLevelPath: {
    first: "/:firstLevelPath",
    second: "/:firstLevelPath/:secondLevelPath",
    third: "/:firstLevelPath/:secondLevelPath/:thirdLevelPath",
    fourth:
      "/:firstLevelPath/:secondLevelPath/:thirdLevelPath/:fourthLevelPath",
    fifth:
      "/:firstLevelPath/:secondLevelPath/:thirdLevelPath/:fourthLevelPath/:fifthLevelPath",
    sixth:
      "/:firstLevelPath/:secondLevelPath/:thirdLevelPath/:fourthLevelPath/:fifthLevelPath/:sixthLevelPath",
    seventh:
      "/:firstLevelPath/:secondLevelPath/:thirdLevelPath/:fourthLevelPath/:fifthLevelPath/:sixthLevelPath/:seventhLevelPath",
    eighth:
      "/:firstLevelPath/:secondLevelPath/:thirdLevelPath/:fourthLevelPath/:fifthLevelPath/:sixthLevelPath/:seventhLevelPath/:eighthLevelPath",
    ninth:
      "/:firstLevelPath/:secondLevelPath/:thirdLevelPath/:fourthLevelPath/:fifthLevelPath/:sixthLevelPath/:seventhLevelPath/:eighthLevelPath/:ninth",
    tenth:
      "/:firstLevelPath/:secondLevelPath/:thirdLevelPath/:fourthLevelPath/:fifthLevelPath/:sixthLevelPath/:seventhLevelPath/:eighthLevelPath/:ninth/:tenth"
  },
  defaultApiPage: `
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My JSON Server - Fake online REST server for teams</title>
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
    <link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css">
    <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css">
    <link rel="stylesheet" href="/styles/index.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/highlight.js/9.10.0/styles/color-brewer.min.css">
    <link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <style>
      div{
        width: 100%;
        text-align: center;
        background: hsl(0,100%,100%);
        height: 100%;
        justify-content: center;
        align-items: center;
        color: #5b5b5b;
      }
      h1{
        font-size: 10rem;
        text-shadow: 0 0 15px #a4a4a4;
      }
      h1.bowtie{
        letter-spacing: -5.5rem;
        margin-left: -6.5rem;
        color: black;
      }
      h3{
        font-size: 8rem;
        display:block;
      }
    </style>
  </head>
  <body>
    <div>
      <h3>S-Moking</h3>
      <h1 class="bowtie">►◉◄</h1>
      <h1>Api Works!!!</h1>
    </div>
  </body>`
};

module.exports = defaultConfig;
