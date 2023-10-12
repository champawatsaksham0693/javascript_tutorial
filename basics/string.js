const Name = "Saksham Jain"
const age = 20

// // console.log("My Name is" +Name);
// console.log(`Hello My Name is ${Name} and I am ${age} year old.`); //new method to print the string or concatnate string.

//New method for declaration of string 
const newName = new String("Saksham_Champawat")
// console.log(newName.length);
// console.log(newName.__proto__);

// console.log(newName.toLowerCase());
// console.log(newName.toUpperCase());
// console.log(newName.charAt(15));
// console.log(newName.valueOf());
// console.log(newName.trim());
// console.log(newName.substring(2)); // value at 0 index and 1 index ko chor ke baki string print karega
// console.log(newName.substring(0,4));//(starting char value with 0 and end with 3)
// console.log(newName.startsWith('Sak' ,2));//(search string and position)
// console.log(newName.startsWith('Sak'));//(search string)
// console.log(newName.split('_'));//(seperator)
// console.log(newName.slice(-7,-3)); //(index start , index end)
//console.log(newName.replace('Champawat','Jain'));//(searchValue, replaceValue)

const MobNum = '9602481231'
//console.log(MobNum.padStart(13,'*'));// Output is :- ***9602481231

const lastNum = MobNum.slice(-3);
const newNum = lastNum.padStart(MobNum.length,'*')
// console.log(newNum);
console.log(`Hello My Name is ${Name} and I am ${age} years old. Nice to Meet you all of you, So Lets Connect with you My Contact Number is ${newNum}`);

