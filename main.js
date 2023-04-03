//Задание1
let arr = ['morgen', 'nikolay', 'alexander', 'yulduz', 'timati'];
let longestString = arr.filter(str => str.length === Math.max(...arr.map(str => str.length)))[0];
console.log(longestString);

// let arr = ['morgen', 'nikolay', 'alexander', 'yulduz', 'timati'];
// let longestString = arr.sort((a, b) => b.length - a.length)[0];
// console.log(longestString);


// //Задание2
let numbers = [2, 4, 1, 4, 7, 3, 2, 7, 9, 3, 2];
let evenNumbers = numbers.filter(num => num % 2 === 0);
let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(evenNumbers)
console.log(oddNumbers);

