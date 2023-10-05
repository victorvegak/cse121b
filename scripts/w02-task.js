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
let favoriteFoods = ["Pizza", "Pasta", "Burgers"];

let foodListElement = document.createElement("p");

foodListElement.textContent = favoriteFoods.join(", ");
foodElement.appendChild(foodListElement);

let newFood = "Ice Cream";

favoriteFoods.push(newFood);

let updatedFoodListElement1 = document.createElement("p");
updatedFoodListElement1.textContent = favoriteFoods.join(", ");

foodElement.appendChild(updatedFoodListElement1);

let removedFood = favoriteFoods.shift();


foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.pop();

let updatedFoodListElement2 = document.createElement("p");
updatedFoodListElement2.textContent = favoriteFoods.join(", ");

foodElement.appendChild(updatedFoodListElement2);









