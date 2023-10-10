/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Victor Vega", 
    photo : "images/profileimg.png",
    favoriteFoods:[
        'Rice',
        'pizza',
        'Hamburguer',
        'Pasta',
        'IceCream',
    ],
    hobbies : [
        'Gaming',
        'Watch movies',
        'Listen Music',
        'Read'
    ],
    placesLived: [{ /* Populate Profile Object with placesLive objects */
        place: "Manangua, Nicaragua.",
        length: "27 years",
    },
    {
        place: "Esterillo, Costa Rica",
        length: "1 year",   
    },
    ],
};

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const photoElement = document.querySelector("#photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
const favoriteFoodsList = document.querySelector("#favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
},
);
/* Hobbies List */
const hobbiesList = document.querySelector("#hobbies");
myProfile.hobbies.forEach(hobby => {
    const listItem = document.createElement('li');
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
},
);
/* Places Lived DataList */
const placesLivedlist = document.querySelector("#places-lived");

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.innerHTML = `<strong>${place.place}</strong>`;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    placesLivedlist.appendChild(dt);
    placesLivedlist.appendChild(dd);
},
);




