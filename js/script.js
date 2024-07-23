//Start Function that take an array and return sum of their element
const sumForm=document.querySelector(".sum-form")
function calculateSum(e) {
    e.preventDefault();
    const inputSum = document.querySelector(".sum-input");
    // console.log(inputSum);
    const numbersStr = inputSum.value;
    // console.log(numbersStr)
    const numbersArray = numbersStr.split(",").map((num)=>Number(num));
    // console.log(numbersArray)
    const total= totalSum(numbersArray);
    // console.log(total)

    const resultElement = document.querySelector(".total-sum");
    resultElement.textContent = `${total}`;
}
function totalSum(arr){
    return arr.reduce((acc, curr) => acc + curr , 0);
}
sumForm.addEventListener("submit",calculateSum);
//End Function that take an array and return sum of their element


//Start Function that take an array and return Graatest Number of their element
const searchForm=document.querySelector(".search-form")
function findLargestNumber(e) {
    e.preventDefault();
    const inputSearch = document.querySelector(".search-input");
    // console.log(inputSearch);
    const numbersStrSearch = inputSearch.value;
    // console.log(numbersStrSearch)
    const numbersArraySearch = numbersStrSearch.split(",").map((num)=>Number(num));
    // console.log(numbersArraySearch)
    const total= search(numbersArraySearch);
    // console.log(total)

    const resultElement = document.querySelector(".total-search");
    resultElement.textContent = `${total}`;
}
function search(arr){
    return Math.max(...arr);
}
searchForm.addEventListener("submit",findLargestNumber);
//End Function that take an array and return Graatest Number of their element


//Start Function that take an array and return Graatest Number of their element
const reverseForm=document.querySelector(".reverse-form")
function reverseText(e) {
    e.preventDefault();
    const inputReverse = document.querySelector(".reverse-input");
    // console.log(inputSearch);
    const originalText = inputReverse.value;
    // console.log(numbersStrSearch)
    const total= reverse(originalText);
    // console.log(total)

    const resultElement = document.querySelector(".total-reverse");
    resultElement.textContent = `${total}`;
}
function reverse(text){
    return text.split("").reverse().join("");
}
reverseForm.addEventListener("submit",reverseText);
//End Function that take an array and return Graatest Number of their element


//Start Function that take an array and return Graatest Number of their element
const duplicatedForm=document.querySelector(".duplicate-form")
function removeDuplicates(e) {
    e.preventDefault();
    const inputDuplicated = document.querySelector(".duplicate-input");
    // console.log(inputSearch);
    const numbersStrDublicated = inputDuplicated.value;
    // console.log(numbersStrSearch)
    const numbersArrayDuplicated = numbersStrDublicated.split(",").map((num)=>Number(num));
    // console.log(numbersArraySearch)
    const total= uniqueNumbers(numbersArrayDuplicated);
    // console.log(total)

    const resultElement = document.querySelector(".total-duplicate");
    resultElement.textContent = `${total}`;
}
function uniqueNumbers(arr){
    return arr.filter((el,index,array) => {
        return array.indexOf(el) === index;
    });;
}
duplicatedForm.addEventListener("submit",removeDuplicates);
//End Function that take an array and return Graatest Number of their element

