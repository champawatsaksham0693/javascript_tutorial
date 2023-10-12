console.log(2>2); //false 
console.log(2>=2); //true

console.log("2" > 1); //true (it automatically convert the datatypes)
console.log("02" > 0); //true

console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
console.log(null == 0); //false
console.log(null != 0); //true
/* The reason is that an equality check == and comparisons > < >= <= are work very differently. beacuse comparisons convert null to a number, and treating as 0. That's why when it >=0 or <=0 then it produce true as output and when if it is >0 or <0 then it produce false as output. */

console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false
console.log(undefined == 0); //false
console.log(undefined != 0); //true

// === => it is used as strict check, it check or compare the number as well as datatypes also
console.log("2" === 2); //false because data types are different.


/*
    ********************Datatype Summary**********************
    -> It is dynamically typed language.
    -> 2 types :- 1. Primitive      2. Reference(Non-Primitive)
    -> In primitive :- it has following types
        String, Number, BigInt, Symbol, Boolean, Null, Undefined
    -> In reference typed we have
        Array, Objects, Functions
*/

//Symbol 
const id = Symbol('123456')
const otherId = Symbol('123456')

console.log(id === otherId); //false is output because it symbol defines unique value if you put same parameters in it then it also define unique value for it

console.log(id == otherId); //false hi dega

const heros = ["IronMan", "Hulk", "Thor"]; //Declaration of an array
let myObj = {
    firstName: "Saksham",
    lastName: "Jain",
    age:20
}// object declaration

let myFunction = function(){
    console.log("Hello World");
} // function object declaration

console.log(myFunction()); //[Function: myFunction]
