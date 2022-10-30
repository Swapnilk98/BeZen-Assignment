function addedit() {
  return `
    <form action="" id="form">
            <label for="title">Title</label>
            <input type="text" id="myText">
            <label for="strCategory">category</label>
            
            <input type="text" id="strCategory">

            <label for="strMealThumb">MealThumb</label>
            <input type="text" id="strMealThumb">


            <label for="strInstructions">Instructions</label>
            <textarea   id="strInstructions" cols="50" rows="10"></textarea>

            <label for="strIngredient1">Ingredient</label>
            <textarea   id="strIngredient1" cols="50" rows="10"></textarea>                                      

            <input type="submit" id="submit">
        </form>
    `;
}

export default addedit;
