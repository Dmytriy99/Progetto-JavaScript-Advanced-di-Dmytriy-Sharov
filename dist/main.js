(() => {
  const e = document.querySelector(".image"),
    t = document.querySelector(".summary"),
    n = document.querySelector(".category"),
    o = document.querySelector("input"),
    r = document.querySelector(".score"),
    a = document.querySelector(".textScore"),
    c = document.querySelector("button");
  let i,
    s = function () {
      (n.innerHTML = ""),
        (e.style.backgroundImage = ""),
        (a.innerHTML = ""),
        (r.innerHTML = "");
    },
    u = function (e) {
      return (e = (e = e.toLowerCase()).trim()).replaceAll(" ", "-");
    };
  const l = async function () {
      const c = await fetch(
          `https://api.teleport.org/api/urban_areas/slug:${i}/scores/`
        ),
        u = await c.json();
      console.log(u);
      const l = await fetch(
          `https://api.teleport.org/api/urban_areas/slug:${i}/images/`
        ),
        y = await l.json();
      404 != c.status
        ? ((t.innerHTML = `<h2><p>${u.summary}</p><h2>`),
          (n.innerHTML = ""),
          (a.innerHTML = "CITY SCORE"),
          (r.innerHTML = u.teleport_city_score.toFixed(2)),
          u.categories.forEach((e) => {
            n.insertAdjacentHTML(
              "afterbegin",
              `<h3>${e.name}<br> ${e.score_out_of_10.toFixed(1)}<br><h3>`
            );
          }),
          (e.style.backgroundImage = `url(${y.photos[0].image.web})`),
          (o.value = ""))
        : (m(
            "<h1>City not found. Check if there's a typo. <br> Remember that you have to use cities names in english. <br> If none of these problems are yours, maybe that city is not in our database.<h1>"
          ),
          s());
    },
    m = (e) => ((t.innerHTML = `<p>${e}</p>`), e),
    y = () => {
      o.value || (m("<h1>YOU MUST WRITE A CITY<h1>"), s());
    };
  o.addEventListener("keydown", function (e) {
    "Enter" === e.key && ((i = u(o.value)), l(), y());
  }),
    c.addEventListener("click", function () {
      (i = u(o.value)), l(), y();
    });
})();
