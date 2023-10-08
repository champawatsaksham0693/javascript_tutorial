"use strict"; //It is used to treat all the js code as new version

// alert(3+3) Because we use nodejs not browser so this line produce error if we use the browser then it will run.
/*
    So let us start the data types in js
    1. String
    2. Number (here we can also used float number)
    3. boolean
    4. Bigint (it is used for large number greater than 2 to the power 53)
    5. Null (it is used for standalone value)
*/
let Name = "Saksham Jain" //String :- always write in " " or in ' '
let age = 20 //Number :- range is 2 to the power 53 - 1
let isElgible = false //Boolean :- In this we can answer in true or false
let state; //example of undefined
let temprature = 0;
let x = 16+4+"Volvo"//(it means it print both 20Volvo as result) if we remove the + sign after 4 then it produce error.
console.table([Name,age,isElgible,state,temprature,x]);