/*W05:Programming Task*/

/*Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const templeList = [];

/* async displayTemples FUcntion */
const displayTemples = (temples) => {
    templesElement.innerHTML = "";

    temples.forEach((temple) =>{
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async get temples function using fetch()*/
const getTemples = async ()=> {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (response.ok){
            templeList.length = 0;
            const data = await response.json();
            templeList.push(...data);
            displayTemples(templeList);
        }else {
            console.error("Failed to fetch temple data.");
        }
    }catch (error) {
        console.error("An error occurred while fetching temple data.", error);
    }
};
/* reset Function */ 
const reset = () =>{
    templesElement.innerHTML = "";
};

/* sortBy Function*/ 
const sortBy = (temples) => {
    const filter = document.getElementById("sortBy").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter((temple)=> !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple)=> new Date (temple.dedicated)< new Date(1950, 0,1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};

getTemples();

/* event Listener */
document.querySelector("#sortBy").addEventListener("change",() =>{
    sortBy(templeList);
});

