// console.log(2>2); //false 
// console.log(2>=2); //true

// console.log("2" > 1); //true (it automatically convert the datatypes)
// console.log("02" > 0); //true

console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
console.log(null == 0); //false
console.log(null != 0); //true
/* The reason is that an equality check == and comparisons > < >= <= are work very differently. beacuse comparisons convert null to a number, and treating as 0. That's why when it >=0 or <=0 then it produce true as output and when if it is >0 or <0 then it produce false as output. */