let score = 33 //number
let marks = "33"//string
let temprature = null; //object
let state = undefined; //undefined

// console.log(typeof score);
// console.log(typeof marks);
// console.log(typeof temprature);
// console.log(typeof state);
// console.log(typeof isEligible);

let inNumber = Number(state)
// console.log(typeof state);
// console.log(inNumber);

/*
    1. When we convert a number into a number then it convert easily 
    2. When we convert this type of number into number means:- "334" => 334 and type convert from string to number 
    3. When we convert this type of number into number means:- "33abcd" => NaN (Not a Number) it show NaN as output but type is convert from string to number 
    4. true => 1 ; false => 0;
*/

let isEligible = 1
let isElg = Boolean(isEligible)
// console.log(typeof isEligible);
// console.log(typeof isElg);
// console.log(isElg);

/*
    1 => true; 34 => true; "saksham" => true
    0 => false; " " => false
 */
//****************Operators and Operations*********************

let str1 = "Hello ";
let str2 = "Saksham"
let str3 = str1 + str2;
//console.log(str3);

// console.log(2+2); //Addition
// console.log(2-2); //Subtraction
// console.log(2*2); //Multiplication
// console.log(2**3); //Exponent (Power)
// console.log(2/2); //Division
// console.log(2%4); //Modulous

//console.log((3+4)*5); //output is 35 (This is the correct way of writing the code because in this we use the paranthesis so it gives us proper output and it also doesn't produce any confusion)
// console.log("1"+2); //output is 12
// console.log(1+"2");//output is 12
// console.log("1"+2+2);//output is 122
// console.log(1+2+"2");//output is 32

// console.log(+true); //output is 1
// console.log(+""); //output is 0

let num1, num2, num3;
num1 = num2 = num3 = (2+2);
// console.log(num1);
// console.log(num2);
// console.log(num3);

let counter = 100
counter++;
// console.log(counter);
++counter;
// console.log(counter);
counter--;
// console.log(counter);
--counter;
// console.log(counter);