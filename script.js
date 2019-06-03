const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

function runCode(){
// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
// Using a for loop:
for (var i = 0; i < numbers.length; i++) {
    const letter = String.fromCharCode(numbers[i]);
    document.getElementById('forloop').innerHTML += " " + letter;
}


// // Using the forEach method:
numbers.forEach(element => {
    const letter = String.fromCharCode(element)
    document.getElementById('foreach').innerHTML += " " + letter;
 })
 
 
// // Using the map method:
const charArr = numbers.map(element => {
    const letter = String.fromCharCode(element);
    return letter
})

    document.getElementById('map').innerHTML += " " + charArr.join(" ");


// // 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
// // Answer:
const filteredArr = numbers.filter(element => {
    return element > 72 && element <= 88
})

document.getElementById('filter').innerHTML += " " + filteredArr.sort().join(" ");

// // 3. Display the product of all numbers using reduce
// // Answer:
const result = numbers.reduce((prev, curr) => {
    return prev * curr 
})

document.getElementById('reduce').innerHTML += " " + result;
}