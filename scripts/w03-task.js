/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    // function body
    return number1 + number2;
}
function addNumbers () {
    let addNumber1 = Number(document.querySelector ('#add1').value);
    let addNumber2 = Number(document.querySelector ('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);

}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
// answer =  the event listener is added outside of the function is because
//it gets executed when the page loads. it is attached to the button with the ID
// so that when that button is clicked. function will be called performing the addition.

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    // function body
    return number1 - number2;
};
const subtractNumbers = function () {
    //getting the value of the HTML form and convert them to numbers
    let subtractNumber1 = Number(document.querySelector ('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector ('#subtract2').value);

    document.querySelector("#difference").value = subtract (subtractNumber1, subtractNumber2); 
};
    document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) =>  number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    //call the multiply function
    document.querySelector('#product').value = multiply (factor1, factor2);
};
// adding 'click' event listener 
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}
function divideNumbers() {
    const dividendValue = Number(document.querySelector('#dividend').value);
    const divisorValue = Number(document.querySelector('#divisor').value);

// the quotient using the divide function 
const quotient = divide(dividendValue, divisorValue);

document.querySelector('#quotient').value = quotient;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
const currentDate = new Date();

let currentYear;

currentYear = currentDate.getFullYear();

document.getElementById("year").textContent = currentYear;

function calculateTotal() {
    const subtotal = parseFloat(document.querySelector('#subtotal').value);
    const isClubMember = document.querySelector('#member').checked;

    const discount = isClubMember ? 0.1 : 0; 
    const totalDue = subtotal * discount;

    document.querySelector('#total').textContent = `$${totalDue.toFixed(2)}`;
}
document.querySelector('#getTotal').addEventListener('click', calculateTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').textContent = numbersArray;
/* Output Odds Only Array */
document.querySelector ('#odds').textContent = numbersArray.filter(number => number% 2 === 1);
/* Output Evens Only Array */
document.querySelector ('#evens').textContent = numbersArray.filter(number => number%2 === 0).join(', ');
/* Output Sum of Org. Array */
document.querySelector ('#sumOfArray').textContent = numbersArray.reduce ((sum, number) => sum + number, 0);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
