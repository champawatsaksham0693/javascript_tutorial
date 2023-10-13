// const score = 400
// console.log(score);

// const balance = new Number(1000)
// console.log(balance);

// const Money = 1000000
// console.log(Money.toString()); // It return the num in string types
// console.log(Money.toExponential()); //It returns the value in exponential form
// console.log(Money.toLocaleString('en-In')); //It returns the Money value in the Indian arrangements
//console.log(Money.toFixed('2'));//It returns the value till two decimal
// const num = 123.89745
// console.log(num.toPrecision(3)); // It mainly focus on the three digit.
// console.log(num.toString().length); //It first convert into string and then find the length of given string which is 9

/********************** Math ************************/
// console.log(Math); //it is object 
// console.log(Math.abs(-4)); //It returns absolute value means always positive number 
// console.log(Math.round(23.586));//It give alwayas Integer not in decimal number
// console.log(Math.floor(2.4));//It returns always floor value
// console.log(Math.ceil(2.5));//It returns always top value
// console.log(Math.min(2,5,9,3,4,7,1)); // It returns the minimum number of array or we can say minimum number.
// console.log(Math.max(2,5,9,3,4,7,1)); // It returns the maximum number of array or we can say maximum number.
// console.log(Math.random()); //It always return a random decimal number between 0 and 1
// console.log((Math.random()*10)+1); //It always return a random decimal number which is greater than 1
//For example we have to create a dice thrower which is generally produce a random number than first we define range of it
const min = 1
const max = 6
const randomNumberGenerator = Math.floor(Math.random() * (max-min+1)) + min;

console.log(randomNumberGenerator);