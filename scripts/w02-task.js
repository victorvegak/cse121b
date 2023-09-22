/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Victor Vega";
const currentYear = new Date().getFullYear();
const profilePicture = "images/profileimg.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.createElement("img");




/* Step 4 - Adding Content */
nameElement.innerHTML =  '<strong>' + fullName + '</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profile image of Victor Vega");


/* Step 5 - Array */

const favoriteFoods = ["Pizza", "Pasta", "Burgers"];

foodElement.textContent = favoriteFoods.join(", ");

const newFavoriteFood = "Ice Cream";

favoriteFoods.push(newFavoriteFood);

foodElement.textContent=  favoriteFoods.join(", ");

favoriteFoods.shift();

foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

favoriteFoods.pop();

foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");




