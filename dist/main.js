/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const photo = document.querySelector(\".image\");\r\nconst summary = document.querySelector(\".summary\");\r\nconst category = document.querySelector(\".category\");\r\nconst input = document.querySelector(\"input\");\r\nconst score = document.querySelector(\".score\");\r\nconst textScore = document.querySelector(\".textScore\");\r\nconst btn = document.querySelector(\"button\");\r\nlet city;\r\n\r\nlet clearCard = function () {\r\n  category.innerHTML = \"\";\r\n  photo.style.backgroundImage = \"\";\r\n  textScore.innerHTML = \"\";\r\n  score.innerHTML = \"\";\r\n};\r\n\r\nlet formatCityName = function (nome) {\r\n  nome = nome.toLowerCase();\r\n  nome = nome.trim();\r\n  nome = nome.replaceAll(\" \", \"-\");\r\n  return nome;\r\n};\r\n\r\nconst getData = async function () {\r\n  const getScore = await fetch(\r\n    `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`\r\n  );\r\n\r\n  const dataScore = await getScore.json();\r\n  console.log(dataScore);\r\n\r\n  const getImage = await fetch(\r\n    `https://api.teleport.org/api/urban_areas/slug:${city}/images/`\r\n  );\r\n\r\n  const dataImage = await getImage.json();\r\n  if (getScore.status != 404) {\r\n    summary.innerHTML = `<h2><p>${dataScore.summary}</p><h2>`;\r\n    category.innerHTML = \"\";\r\n    textScore.innerHTML = \"CITY SCORE\";\r\n    score.innerHTML = dataScore.teleport_city_score.toFixed(2);\r\n    dataScore.categories.forEach((x) => {\r\n      category.insertAdjacentHTML(\r\n        \"afterbegin\",\r\n        `<h3>${x.name}<br> ${x.score_out_of_10.toFixed(1)}<br><h3>`\r\n      );\r\n    });\r\n    photo.style.backgroundImage = `url(${dataImage.photos[0].image.web})`;\r\n    input.value = \"\";\r\n  } else {\r\n    errorHandler(\r\n      `<h1>City not found. Check if there's a typo. <br> Remember that you have to use cities names in english. <br> If none of these problems are yours, maybe that city is not in our database.<h1>`\r\n    );\r\n    clearCard();\r\n  }\r\n};\r\n\r\nconst errorHandler = (warningMessage) => {\r\n  summary.innerHTML = `<p>${warningMessage}</p>`;\r\n  return warningMessage;\r\n};\r\nconst errorEmpty = () => {\r\n  if (!input.value) {\r\n    errorHandler(`<h1>YOU MUST WRITE A CITY<h1>`);\r\n    clearCard();\r\n  }\r\n};\r\n\r\ninput.addEventListener(\"keydown\", function (enterkey) {\r\n  if (enterkey.key === \"Enter\") {\r\n    city = formatCityName(input.value);\r\n    getData();\r\n    errorEmpty();\r\n  }\r\n});\r\n\r\nbtn.addEventListener(\"click\", function () {\r\n  city = formatCityName(input.value);\r\n  getData();\r\n  errorEmpty();\r\n});\r\n\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-dmytriy-sharov/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;