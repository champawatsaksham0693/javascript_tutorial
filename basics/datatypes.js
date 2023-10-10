"use strict"; //It is used to treat all the js code as new version

// alert(3+3) Because we use nodejs not browser so this line produce error if we use the browser then it will run.
/*
    So let us start the data types in js
    1. String
    2. Number (here we can also used float number)
    3. boolean
    4. Bigint (it is used for large number greater than 2 to the power 53)
    5. Null (it is used for standalone value) Here Null is defined as object also.
    6. Undefined (abhi value assign nahi ki hai) it is datatype.
    7. Symbol (used to find the unique value)
*/
let Name = "Saksham Jain" //String :- always write in " " or in ' '
let age = 20 //Number :- range is 2 to the power 53 - 1
let isElgible = false //Boolean :- In this we can answer in true or false
let state; //example of undefined
let temprature = 0;
let x = 16+4+"Volvo"//(it means it print both 20Volvo as result) if we remove the + sign after 4 then it produce error. It is act as number and then string
let x1 = "Volvo" + 16 + 4; //because it is started with string so whole act as string and output is Volvo164 

console.log(typeof temprature); //typeof is used to find the type of data types. 
console.log(typeof null); //it is object 
console.log(typeof undefined); // it is undefined
//console.table([Name,age,isElgible,state,temprature,x,x1]);