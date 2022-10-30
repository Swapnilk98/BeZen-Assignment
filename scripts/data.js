
import { navbar, searchBar } from "./navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
document.querySelector(".search").innerHTML = searchBar();
let rec = document.querySelector("#rec");

import getData from "./mealbhandar.js";

import showrecipe from "./display.js";
let form = document.getElementById("forms")
let result = document.querySelector("#result");
let getQuery = async () => {
  let query = search.value;
  form.style.display = "none"
  if (query == "") {
    result.style.display = "none";
    form.style.display = "block"
    document.getElementById("forms").style.display="none"
  } else {
   
   let alldata = JSON.parse(localStorage.getItem("Data"));
    let data=alldata.filter(function(el){
      if(el.strMeal.includes(query) || el.strIngredient1.includes(query))
      return el;
    })
    console.log("data:", data);
    
    result.style.display = "block";
    result.innerHTML = "";

    data.forEach((el) => {
      let name = document.createElement("div");

      name.addEventListener("click", () => {
        result.style.display = "none";
        storeMeal(el);
      });

      let p = document.createElement("p");
      p.innerText = el.strMeal;
      let img = document.createElement("img");
      img.src = el.strMealThumb;

      name.append(img, p);
      result.append(name);
    });
  }
};

let timerId;
function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function () {
    func();
  }, delay);
}

let search = document.getElementById("search");
search.addEventListener("keyup", () => {
  debounce(getQuery, 500);
});

let storeMeal = (obj) => {
  localStorage.removeItem("receipeData");
  localStorage.setItem("receipeData", JSON.stringify(obj));
  showrecipe(obj);
};
