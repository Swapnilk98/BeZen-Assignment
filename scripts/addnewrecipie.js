import addform from "./add.js"

function saved() {

    let status = JSON.parse(localStorage.getItem("loginstatus"));
    if (status != null && status[0].status == "success") {
        document.getElementById("rec").innerHTML = ""
        document.getElementById("in").innerHTML = ""
        let form = document.getElementById("forms")
        document.getElementById("forms").style.display = "block"
        form.innerHTML = addform()
        //adding new    

        document.getElementById("submit").addEventListener("click", save)
        function save(event) {
            event.preventDefault();
            let title = document.getElementById("myText").value
            let strCategory = document.getElementById("strCategory").value
            let strMealThumb = document.getElementById("strMealThumb").value
            let strInstructions = document.getElementById("strInstructions").value
            let strIngredient1 = document.getElementById("strIngredient1").value

            let alldata = JSON.parse(localStorage.getItem("Data"));
            let id = alldata.length

            let newdata = {
                idMeal: id,
                strMeal: title,
                strCategory: strCategory,
                strMealThumb: strMealThumb,
                strInstructions: strInstructions,
                strIngredient1: strIngredient1
            }
            alldata.push(newdata)
            console.log(newdata)
            localStorage.setItem("Data", JSON.stringify(alldata));
            location.reload();

        }
    }
    else {
        alert("Please Login to Add New Recipe");
        location.reload();
    }


}
export default saved