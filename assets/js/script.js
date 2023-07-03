const photo = document.querySelector(".image");
const summary = document.querySelector(".summary");
const category = document.querySelector(".category");
const input = document.querySelector("input");
const score = document.querySelector(".score");
const textScore = document.querySelector(".textScore");
const btn = document.querySelector("button");
let city;

let clearCard = function () {
  category.innerHTML = "";
  photo.style.backgroundImage = "";
  textScore.innerHTML = "";
  score.innerHTML = "";
};

let formatCityName = function (nome) {
  nome = nome.toLowerCase();
  nome = nome.trim();
  nome = nome.replaceAll(" ", "-");
  return nome;
};

const getData = async function () {
  const getScore = await fetch(
    `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
  );

  const dataScore = await getScore.json();
  console.log(dataScore);

  const getImage = await fetch(
    `https://api.teleport.org/api/urban_areas/slug:${city}/images/`
  );

  const dataImage = await getImage.json();
  if (getScore.status != 404) {
    summary.innerHTML = `<h2><p>${dataScore.summary}</p><h2>`;
    category.innerHTML = "";
    textScore.innerHTML = "CITY SCORE";
    score.innerHTML = dataScore.teleport_city_score.toFixed(2);
    dataScore.categories.forEach((x) => {
      category.insertAdjacentHTML(
        "afterbegin",
        `<h3>${x.name}<br> ${x.score_out_of_10.toFixed(1)}<br><h3>`
      );
    });
    photo.style.backgroundImage = `url(${dataImage.photos[0].image.web})`;
    input.value = "";
  } else {
    errorHandler(
      `<h1>City not found. Check if there's a typo. <br> Remember that you have to use cities names in english. <br> If none of these problems are yours, maybe that city is not in our database.<h1>`
    );
    clearCard();
  }
};

const errorHandler = (warningMessage) => {
  summary.innerHTML = `<p>${warningMessage}</p>`;
  return warningMessage;
};
const errorEmpty = () => {
  if (!input.value) {
    errorHandler(`<h1>YOU MUST WRITE A CITY<h1>`);
    clearCard();
  }
};

input.addEventListener("keydown", function (enterkey) {
  if (enterkey.key === "Enter") {
    city = formatCityName(input.value);
    getData();
    errorEmpty();
  }
});

btn.addEventListener("click", function () {
  city = formatCityName(input.value);
  getData();
  errorEmpty();
});
