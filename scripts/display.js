import addform from "./add.js"
import saved from "./addnewrecipie.js"
let showrecipe = (obj) => {
  const ingrediantdata = () => {
    return `<div id="ingri"><h2>Ingredients</h2></div>
        `;
  };



  console.log(obj);
  rec.innerText = "";

  let div2 = document.createElement("div");
  div2.id = "recipe";
  let btns = document.createElement("div");
  btns.id = "addbtns"
  let addbtn = document.createElement("button")
  addbtn.innerHTML = "Add New Rcipie"
  addbtn.id = "addbtn"
  addbtn.addEventListener("click", () => {
    saved();


  });
  let editbtn = document.createElement("button")
  editbtn.innerHTML = "Edit Recipie"
  editbtn.id = "editntn"
  editbtn.addEventListener("click", () => {
    let status = JSON.parse(localStorage.getItem("loginstatus"));
    console.log("status",status)
    if (status != null && status[0].status == "success") {
      document.getElementById("forms").style.display = "block"

      document.getElementById("rec").innerHTML = ""
      document.getElementById("in").innerHTML = ""
      let form = document.getElementById("forms")

      form.innerHTML = addform()
      let obj = JSON.parse(localStorage.getItem("receipeData"));
      console.log("obj", obj)

      document.getElementById("myText").defaultValue = obj.strMeal;
      document.getElementById("strCategory").defaultValue = obj.strCategory;
      document.getElementById("strMealThumb").defaultValue = obj.strMealThumb;
      document.getElementById("strInstructions").defaultValue = obj.strInstructions;
      document.getElementById("strIngredient1").defaultValue = obj.strIngredient1;

      document.getElementById("submit").addEventListener("click", save)
      function save(event) {
        event.preventDefault();
        let title = document.getElementById("myText").value
        let strCategory = document.getElementById("strCategory").value
        let strMealThumb = document.getElementById("strMealThumb").value
        let strInstructions = document.getElementById("strInstructions").value
        let strIngredient1 = document.getElementById("strIngredient1").value

        let alldata = JSON.parse(localStorage.getItem("Data"));

        let upd_obj = alldata.findIndex((objs => objs.idMeal == obj.idMeal));
        alldata[upd_obj].strMeal = title
        alldata[upd_obj].strCategory = strCategory
        alldata[upd_obj].strMealThumb = strMealThumb
        alldata[upd_obj].strInstructions = strInstructions
        alldata[upd_obj].strIngredient1 = strIngredient1
        console.log("d", alldata[upd_obj])



        localStorage.setItem("Data", JSON.stringify(alldata));
        location.reload();

      }
    }
    else {
      alert("Please Login First");
    }



  });

  btns.append(addbtn, editbtn)

  let title = document.createElement("h1");
  title.innerHTML = obj.strMeal;
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = obj.strMealThumb;
  div.append(img);
  let div1 = document.createElement("div");

  let head = document.createElement("h3");
  head.innerHTML = `category : ${obj.strCategory}`;
  let para = document.createElement("p");
  para.innerHTML = obj.strInstructions;
  div1.append(head, para);
  div2.append(div, div1);
  rec.append(btns, title, div2);
  let ing = document.querySelector("#in");
  ing.innerHTML = ingrediantdata();
  let el = obj;
  for (let key in el) {
    console.log("e", key);

    let ingr = document.querySelector("#ingri");
    let mes = document.querySelector("#mes");

    if (key.includes("strIngredient")) {
      if (el[key].trim()) {
        console.log("l", el[key]);
        var td = document.createElement("p");
        td.innerText = el[key];
        ingr.append(td);
      }
    }
    if (key.includes("strMeasure")) {
      if (el[key].trim()) {
        var td2 = document.createElement("p");
        td2.innerText = el[key];
        mes.append(td2);
      }
    }
  }

};

export default showrecipe;
