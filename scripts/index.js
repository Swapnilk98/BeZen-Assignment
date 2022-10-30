import showrecipe from "./display.js";

let objsdata = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",

    strCategory: "Dessert",
    strArea: "British",
    strInstructions:
      "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, cr\u00e8me fraiche or ice cream.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    strTags: "Tart,Baking,Fruity",
    strYoutube: "https://www.youtube.com/watch?v=rp8Slv4INLk",

    strIngredient1:
      "digestive biscuits (75g/3oz), butter (200g/7oz), Bramley apples (75g/3oz), softened (75g/3oz),caster sugar (75g/3oz),free-range eggs (1 tsp),ground almonds (50g/1\u00beoz)",
  },
  

  {
    idMeal: "52893",
    strMeal: "Apple & Blackberry Crumble",
    strCategory: "Dessert",
    strArea: "British",
    strInstructions:
      "Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.\r\nMeanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.\r\nTo serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    strTags: "Pudding",
    strYoutube: "https://www.youtube.com/watch?v=4vhcOwVBDO4",
    strIngredient1: "Plain Flour(120g),Caster Sugar(60g),Butter(60g),Braeburn Apples(300g),Demerara Sugar(30g),Blackberrys(120g),Cinnamon(\u00bc teaspoon),Ice Cream(to serve)",

  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    strDrinkAlternate: null,
    strCategory: "Dessert",
    strArea: "Malaysian",
    strInstructions:
      "Mix milk, oil and egg together. Sift flour, baking powder and salt into the mixture. Stir well until all ingredients are combined evenly.\r\n\r\nSpread some batter onto the pan. Spread a thin layer of batter to the side of the pan. Cover the pan for 30-60 seconds until small air bubbles appear.\r\n\r\nAdd butter, cream corn, crushed peanuts and sugar onto the pancake. Fold the pancake into half once the bottom surface is browned.\r\n\r\nCut into wedges and best eaten when it is warm.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
    strYoutube: "https://www.youtube.com/watch?v=6R8ffRRJcrg",
    strIngredient1: "Milk(120ml),oil(60ml),eggs(2),flour(1600g),baking Powder(3 tsp),Salt(1/2 tsp),unsalted Butter(25g),sugar(45g),peanut Butter(3tbs)",
  },

  {
    idMeal: "53050",
    strMeal: "Ayam Percik",
    strDrinkAlternate: null,
    strCategory: "Chicken",
    strArea: "Malaysian",
    strInstructions:
      "In a blender, add the ingredients for the spice paste and blend until smooth.\r\nOver medium heat, pour the spice paste in a skillet or pan and fry for 10 minutes until fragrant. Add water or oil 1 tablespoon at a time if the paste becomes too dry. Don't burn the paste. Lower the fire slightly if needed.\r\nAdd the cloves, cardamom, tamarind pulp, coconut milk, water, sugar and salt. Turn the heat up and bring the mixture to boil. Turn the heat to medium low and simmer for 10 minutes. Stir occasionally. It will reduce slightly. This is the marinade/sauce, so taste and adjust seasoning if necessary. Don't worry if it's slightly bitter. It will go away when roasting.\r\nWhen the marinade/sauce has cooled, pour everything over the chicken and marinate overnight to two days.\r\nPreheat the oven to 425 F.\r\nRemove the chicken from the marinade. Spoon the marinade onto a greased (or aluminum lined) baking sheet. Lay the chicken on top of the sauce (make sure the chicken covers the sauce and the sauce isn't exposed or it'll burn) and spread the remaining marinade on the chicken. Roast for 35-45 minutes or until internal temp of the thickest part of chicken is at least 175 F.\r\nLet chicken rest for 5 minutes. Brush the chicken with some of the oil. Serve chicken with the sauce over steamed rice (or coconut rice).",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
    strTags: null,
    strYoutube: "https://www.youtube.com/watch?v=9ytR28QK6I8",
    strIngredient1: "Chicken Thighs(6),Challoots(16),Ginger(1 1/2),Garlic Clove(6),Cayenne pepper(8),Turmeric(2 tbs),cumin(2tbs),Coriander(1 1/2),fennel(1 1/2),Tamarind Paste(2 tbs),Coconut Milk(1 can),Sugar(1 tsp),Water(1 cup)",
  },

  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    strDrinkAlternate: null,
    strCategory: "Dessert",
    strArea: "British",
    strInstructions:
      "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    strTags: "Tart,Baking,Alcoholic",
    strYoutube: "https://www.youtube.com/watch?v=1ahpSTf_Pvk",
    strIngredient1: "plain flour(175g/6oz),chilled butter(75g/2\u00bdoz),cold water(2-3 tbsp),raspberry jam(1 tbsp),butter(125g/4\u00bdoz),caster sugar(125g/4\u00bdoz),ground almonds(125g/4\u00bdoz),free-range egg beaten(1),almond extract(\u00bd tsp),flaked almonds(50g/1\u00beoz)",
  },

  {
    idMeal: "52792",
    strMeal: "Bread and Butter Pudding",
    strDrinkAlternate: null,
    strCategory: "Dessert",
    strArea: "British",
    strInstructions:
      "Grease a 1 litre/2 pint pie dish with butter.\r\nCut the crusts off the bread. Spread each slice with on one side with butter, then cut into triangles.\r\nArrange a layer of bread, buttered-side up, in the bottom of the dish, then add a layer of sultanas. Sprinkle with a little cinnamon, then repeat the layers of bread and sultanas, sprinkling with cinnamon, until you have used up all of the bread. Finish with a layer of bread, then set aside.\r\nGently warm the milk and cream in a pan over a low heat to scalding point. Don't let it boil.\r\nCrack the eggs into a bowl, add three quarters of the sugar and lightly whisk until pale.\r\nAdd the warm milk and cream mixture and stir well, then strain the custard into a bowl.\r\nPour the custard over the prepared bread layers and sprinkle with nutmeg and the remaining sugar and leave to stand for 30 minutes.\r\nPreheat the oven to 180C/355F/Gas 4.\r\nPlace the dish into the oven and bake for 30-40 minutes, or until the custard has set and the top is golden-brown.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
    strTags: "Pudding,Brunch",
    strYoutube: "https://www.youtube.com/watch?v=Vz5W1-BmOE4",
    strIngredient1: "butter(25g/1oz),bread(8 thin slices),sultanas(50g/2oz),cinnamon(2 tsp),milk(350ml/12fl),double cream(50ml/2fl oz),eggs(2 free-range),sugar(25g/1oz),nutmeg(grated, to taste)",
  },

  {
    idMeal: "52803",
    strMeal: "Beef Wellington",
    strDrinkAlternate: null,
    strCategory: "Beef",
    strArea: "British",
    strInstructions:
      "Put the mushrooms into a food processor with some seasoning and pulse to a rough paste. Scrape the paste into a pan and cook over a high heat for about 10 mins, tossing frequently, to cook out the moisture from the mushrooms. Spread out on a plate to cool.\r\nHeat in a frying pan and add a little olive oil. Season the beef and sear in the hot pan for 30 secs only on each side. (You don't want to cook it at this stage, just colour it). Remove the beef from the pan and leave to cool, then brush all over with the mustard.\r\nLay a sheet of cling film on a work surface and arrange the Parma ham slices on it, in slightly overlapping rows. With a palette knife, spread the mushroom paste over the ham, then place the seared beef fillet in the middle. Keeping a tight hold of the cling film from the edge, neatly roll the Parma ham and mushrooms around the beef to form a tight barrel shape. Twist the ends of the cling film to secure. Chill for 15-20 mins to allow the beef to set and keep its shape.\r\nRoll out the puff pastry on a floured surface to a large rectangle, the thickness of a \u00a31 coin. Remove the cling film from the beef, then lay in the centre. Brush the surrounding pastry with egg yolk. Fold the ends over, the wrap the pastry around the beef, cutting off any excess. Turn over, so the seam is underneath, and place on a baking sheet. Brush over all the pastry with egg and chill for about 15 mins to let the pastry rest.\r\nHeat the oven to 200C, 400F, gas 6.\r\nLightly score the pastry at 1cm intervals and glaze again with beaten egg yolk. Bake for 20 minutes, then lower the oven setting to 180C, 350F, gas 4 and cook for another 15 mins. Allow to rest for 10-15 mins before slicing and serving with the side dishes of your choice. The beef should still be pink in the centre when you serve it.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
    strTags: "Meat,Stew",
    strYoutube: "https://www.youtube.com/watch?v=FS8u1RBdf6I",
    strIngredient1: "mushrooms(400g),English Mustard(1-2tbsp),Olive Oil(DASH),Beef Fillet(750g piece),Parma ham(6-8 Slices),Puff Pastry(500g),Flour(Dusting),Egg Yolks(2 beaten)",
  },

  {
    idMeal: "52807",
    strMeal: "Baingan Bharta",
    strDrinkAlternate: null,
    strCategory: "Vegetarian",
    strArea: "Indian",
    strInstructions:
      "Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and\r\nkeep it for roasting on an open flame. You can also grill the baingan or roast in the oven. But then you won't get\r\nthe smoky flavor of the baingan. Keep the eggplant turning after a 2 to 3 minutes on the flame, so that its evenly\r\ncooked. You could also embed some garlic cloves in the baingan and then roast it.\r\n2. Roast the aubergine till its completely cooked and tender. With a knife check the doneness. The knife should slid\r\neasily in aubergines without any resistance. Remove the baingan and immerse in a bowl of water till it cools\r\ndown.\r\n3. You can also do the dhungar technique of infusing charcoal smoky flavor in the baingan. This is an optional step.\r\nUse natural charcoal for this method. Heat a small piece of charcoal on flame till it becomes smoking hot and red.\r\n4. Make small cuts on the baingan with a knife. Place the red hot charcoal in the same plate where the roasted\r\naubergine is kept. Add a few drops of oil on the charcoal. The charcoal would begin to smoke.\r\n5. As soon as smoke begins to release from the charcoal, cover the entire plate tightly with a large bowl. Allow the\r\ncharcoal smoke to get infused for 1 to 2 minutes. The more you do, the more smoky the baingan bharta will\r\nbecome. I just keep for a minute. Alternatively, you can also do this dhungar method once the baingan bharta is\r\ncooked, just like the way we do for Dal Tadka.\r\n6. Peel the skin from the roasted and smoked eggplant.\r\n7. Chop the cooked eggplant finely or you can even mash it.\r\n8. In a kadai or pan, heat oil. Then add finely chopped onions and garlic.\r\n9. Saute the onions till translucent. Don't brown them.\r\n10. Add chopped green chilies and saute for a minute.\r\n11. Add the chopped tomatoes and mix it well.\r\n12. Bhuno (saute) the tomatoes till the oil starts separating from the mixture.\r\n13. Now add the red chili powder. Stir and mix well.\r\n14. Add the chopped cooked baingan.\r\n15. Stir and mix the chopped baingan very well with the onion\u00adtomato masala mixture.\r\n16. Season with salt. Stir and saute for some more 4 to 5 minutes more.\r\n17. Finally stir in the coriander leaves with the baingan bharta or garnish it with them. Serve Baingan Bharta with\r\nphulkas, rotis or chapatis. It goes well even with bread, toasted or grilled bread and plain rice or jeera rice.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
    strTags: "Spicy,Bun,Calorific",
    strYoutube: "https://www.youtube.com/watch?v=-84Zz2EP4h4",
    strIngredient1: "Aubergine(1 large),Onion(2),Tomatoes(2),Garlic(6 cloves),Green Chili(1),Red Chili Powder(\u00bc teaspoon),Oil(1.5 tablespoon),Coriander Leaves(1 tablespoon chopped),salt(as required)",

  },

  {
    idMeal: "52812",
    strMeal: "Beef Brisket Pot Roast",
    strDrinkAlternate: null,
    strCategory: "Beef",
    strArea: "American",
    strInstructions:
      '1 Prepare the brisket for cooking: On one side of the brisket there should be a layer of fat, which you want. If there are any large chunks of fat, cut them off and discard them. Large pieces of fat will not be able to render out completely.\r\nUsing a sharp knife, score the fat in parallel lines, about 3/4-inch apart. Slice through the fat, not the beef. Repeat in the opposite direction to make a cross-hatch pattern.\r\nSalt the brisket well and let it sit at room temperature for 30 minutes.\r\n \r\n2 Sear the brisket: You\'ll need an oven-proof, thick-bottomed pot with a cover, or Dutch oven, that is just wide enough to hold the brisket roast with a little room for the onions.\r\nPat the brisket dry and place it, fatty side down, into the pot and place it on medium high heat. Cook for 5-8 minutes, lightly sizzling, until the fat side is nicely browned. (If the roast seems to be cooking too fast, turn the heat down to medium. You want a steady sizzle, not a raging sear.)\r\nTurn the brisket over and cook for a few minutes more to brown the other side.\r\n\r\n3 Saut\u00e9 the onions and garlic: When the brisket has browned, remove it from the pot and set aside. There should be a couple tablespoons of fat rendered in the pot, if not, add some olive oil.\r\nAdd the chopped onions and increase the heat to high. Sprinkle a little salt on the onions. Saut\u00e9, stirring often, until the onions are lightly browned, 5-8 minutes. Stir in the garlic and cook 1-2 more minutes.\r\n \r\n4 Return brisket to pot, add herbs, stock, bring to simmer, cover, cook in oven: Preheat the oven to 300\u00b0F. Use kitchen twine to tie together the bay leaves, rosemary and thyme.\r\nMove the onions and garlic to the sides of the pot and nestle the brisket inside. Add the beef stock and the tied-up herbs. Bring the stock to a boil on the stovetop.\r\nCover the pot, place the pot in the 300\u00b0F oven and cook for 3 hours. Carefully flip the brisket every hour so it cooks evenly.\r\n \r\n5 Add carrots, continue to cook: After 3 hours, add the carrots. Cover the pot and cook for 1 hour more, or until the carrots are cooked through and the brisket is falling-apart tender.\r\n6 Remove brisket to cutting board, tent with foil: When the brisket is falling-apart tender, take the pot out of the oven and remove the brisket to a cutting board. Cover it with foil. Pull out and discard the herbs.\r\n7 Make sauce (optional): At this point you have two options. You can serve as is, or you can make a sauce with the drippings and some of the onions. If you serve as is, skip this step.\r\nTo make a sauce, remove the carrots and half of the onions, set aside and cover them with foil. Pour the ingredients that are remaining into the pot into a blender, and pur\u00e9e until smooth. If you want, add 1 tablespoon of mustard to the mix. Put into a small pot and keep warm.\r\n8 Slice the meat across the grain: Notice the lines of the muscle fibers of the roast. This is the "grain" of the meat. Slice the meat perpendicular to these lines, or across the grain (cutting this way further tenderizes the meat), in 1/4-inch to 1/2-inch slices.\r\nServe with the onions, carrots and gravy. Serve with mashed, roasted or boiled potatoes, egg noodles or polenta.',
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
    strTags: "Meat",
    strYoutube: "https://www.youtube.com/watch?v=gh48wM6bPWQ",
    strIngredient1: "Beef Brisket(4-5 pound),Salt(Dash),Onion(3),Garlic(5 cloves),Thyme(1 sprig),Rosemary(1 sprig),Bay Leaves(4),beef stock(2 cups),Carrots(3 large),Mustard(1 tbsp),Potatoes(4 mashed)",
  },

  {
    idMeal: "52824",
    strMeal: "Beef Sunday Roast",
    strDrinkAlternate: null,
    strCategory: "Beef",
    strArea: "British",
    strInstructions:
      "Cook the Broccoli and Carrots in a pan of boiling water until tender.\r\n\r\nRoast the Beef and Potatoes in the oven for 45mins, the potatoes may need to be checked regularly to not overcook.\r\n\r\nTo make the Yorkshire puddings:\r\nHeat oven to 230C/fan 210C/gas 8. Drizzle a little sunflower oil evenly into 2 x 4-hole Yorkshire pudding tins or a 12-hole non-stick muffin tin and place in the oven to heat through\r\nTo make the batter, tip 140g plain flour into a bowl and beat in four eggs until smooth. Gradually add 200ml milk and carry on beating until the mix is completely lump-free. Season with salt and pepper. Pour the batter into a jug, then remove the hot tins from the oven. Carefully and evenly pour the batter into the holes. Place the tins back in the oven and leave undisturbed for 20-25 mins until the puddings have puffed up and browned. Serve immediately.\r\n\r\nPlate up and add the Gravy as desired.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
    strTags: "MainMeal",
    strYoutube: "https://www.youtube.com/watch?v=2l3-dBdNehY",
    strIngredient1: "Beef(8 slices),Broccoli(12 florets),Potatoes(1 Packet),Carrots(1 packet),plain flour(140g),Eggs(4),milk(200ml),sunflower oil(drizzle (for cooking))",

  },

   {
     idMeal: "52826",
     strMeal: "Braised Beef Chilli",
     strDrinkAlternate: null,
     strCategory: "Beef",
     strArea: "Mexican",
     strInstructions:
      "Preheat the oven to 120C/225F/gas mark 1.\r\n\r\nTake the meat out of the fridge to de-chill. Pulse the onions and garlic in a food processor until finely chopped. Heat 2 tbsp olive oil in a large casserole and sear the meat on all sides until golden.\r\n\r\nSet to one side and add another small slug of oil to brown the chorizo. Remove and add the onion and garlic, spices, herbs and chillies then cook until soft in the chorizo oil. Season with salt and pepper and add the vinegar, tomatoes, ketchup and sugar.\r\n\r\nPut all the meat back into the pot with 400ml water (or red wine if you prefer), bring up to a simmer and cook, covered, in the low oven.\r\n\r\nAfter 2 hours, check the meat and add the beans. Cook for a further hour and just before serving, pull the meat apart with a pair of forks.",
     strMealThumb:
       "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
     strTags: null,
     strYoutube: "https://www.youtube.com/watch?v=z4kSoJgsu6Y",
     strIngredient1: "Beef(1kg),Onions(3),Garlic(4 cloves),Olive oil(Dash),Chorizo(300g),Cumin(2 tsp),All spice(2 tsp),Cloves(1 tsp),Cinnamon stick(1 large),Bay Leaves(3),Oregano(2 tsp dried),Ancho Chillies(2 ancho),Balsamic Vinegar(3 tbsp),Plum Tomatoes(2 x 400g),Tomato Ketchup(2 tbsp),Dark Brown Sugar(2 tbsp),Borlotti Beans(2 x 400g tins)",

   },

   {
     idMeal: "52834",
     strMeal: "Beef stroganoff",
     strDrinkAlternate: null,
    strCategory: "Beef",
     strArea: "Russian",
     strInstructions:
       "Heat the olive oil in a non-stick frying pan then add the sliced onion and cook on a medium heat until completely softened, so around 15 mins, adding a little splash of water if they start to stick at all. Crush in the garlic and cook for a 2-3 mins further, then add the butter. Once the butter is foaming a little, add the mushrooms and cook for around 5 mins until completely softened. Season everything well, then tip onto a plate.\r\nTip the flour into a bowl with a big pinch of salt and pepper, then toss the steak in the seasoned flour. Add the steak pieces to the pan, splashing in a little oil if the pan looks particularly dry, and fry for 3-4 mins, until well coloured. Tip the onions and mushrooms back into the pan. Whisk the cr\u00e8me fra\u00eeche, mustard and beef stock together, then pour into the pan. Cook over a medium heat for around 5 mins. Scatter with parsley, then serve with pappardelle or rice.",
     strMealThumb:
       "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
     strYoutube: "https://www.youtube.com/watch?v=PQHgQX1Ss74",
     strIngredient1: "Olive Oil(1 tbls),Onions(1),Garlic(1 clove),Butter(1 tbsp),Mushrooms(250g),Beef Fillet(500g),Plain flour(1 tbsp),Creme Fraiche(150g),English Mustard(1 tbsp),Beef Stock(100ml),Parsley(Topping)",
   }
];
let objdata=[];
// set data object to local storage
let olddata  = JSON.parse(localStorage.getItem("Data"));
console.log("old",olddata)
if(olddata==null)
localStorage.setItem("Data", JSON.stringify(objsdata));
else{
    objdata = JSON.parse(localStorage.getItem("Data"));
}
console.log(objdata)
let result = document.querySelector("#results");




console.log(objdata)
objdata.forEach((el) => {
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

let storeMeal = (obj) => {
  localStorage.removeItem("receipeData");
  localStorage.setItem("receipeData", JSON.stringify(obj));
  showrecipe(obj);
  
    

}

