//Activity #1 Map
///let new_array  = arr.map(function callback(currentValue [, index [, array]]){
    //return element for new_array
//}[, thisArg])//

const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
    return  `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

//activity #2 map

const grades = ['A', 'B', 'A'];
function converGradeToPoints (grade) {
    let points = 0;
    if (grade === "A"){
        points = 4 ;
    } else  if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoint = grades.map(convertGradeToPoints);

//activity 3 reduce 

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function(total, item){
    return total + item;
});

const gpa = pointsTotal / gpaPoints.length;

// #2
//const pointsTotal = gpaPoints.reduce((total, item) => total + item);
//const gpa = pointsTotal / gpaPoints.length; 

// simplify 
//const gpa  = gpaPoints.reduce ((total, item) => total + item) / gpaPoints.length; //


/// activity 4  Filter 

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word){
    return word.length < 6;
});

//#2
// shortWords = words.filter ((word) => word.length < 6 );

// activity 5 indexOF 
const myArray = [ 12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);