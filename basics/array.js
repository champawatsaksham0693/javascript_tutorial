/*
    -> Collection of element in single variable

    -> In Javascript arrays are resizeable, and it contains mix types of element means we can enter Number, String, Boolean etc. in same array

    -> In Javascript when we use array-copy-operations then it creates the shallow copies

    -> A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.(Jo bhi change array me karenge vo original me bhi change hoga)

    -> A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too
*/

//Declaration of Array
const myArray = [0,1,4,2,3,4]
const myHeros = ["IronMan","Thor","Hulk","AntMan","SpiderMan"];
const myArr = new Array(0,1,2,3,4,5,6)
console.log(myArray[2]);

//Methods and Operations on Array 

myArray.push(8); // Tnsert an element from top.
myArray.pop(); // Remove an element from top 
myArray.pop();
myArray.pop();
myArray.unshift(7); //Insert an element from 0th index
myArray.shift(); // Remove an element from 0th index
console.log(myArray);
console.log(myArray.includes(7)); // kya humari array me 7 hai ya nahi ? always answer in true false
console.log(myArray.indexOf(4)); //value exist karti hai to index dega varna -1 dega

const newArr = myArray.join();
//After using Join Operation newArr type was change it converts into string
console.log(myArray);
console.log(newArr);

//Here are two main and very important operation Slice and Splice
console.log("A" ,myArray); //This is our Original Array

const newAr = myArray.slice(1,3); 
console.log(newAr); //Print the element starting from 1 and end at n-1 index
console.log("B" ,myArray); //No change in original  Array 

const newAr2 = myArray.splice(1,3);
console.log(newAr2); //Print the element starting from 1 and end at n index
console.log("C" ,myArray); // There is change in original array, the change is that it contains those element which are not sliced or we can say array exclude those elements.


//+++++++++++++++++++++++++++++++++ Array -2 +++++++++++++++++++++++++++++++++

const marvel_heros = ["Thor", "Spider-Man", "IronMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

marvel_heros.push(dc_heros);
console.log(marvel_heros [3][1]);
console.log(marvel_heros); //It create subarray of dc_heros in array of marvel_heros [ 'Thor', 'Spider-Man', 'IronMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]


// To split it into a single array we use concatnate function
const heros = marvel_heros.concat(dc_heros);
console.log(heros);

const all_heros = [...marvel_heros , ...dc_heros]; //New and easy method for concat of array
console.log(all_heros);

// array ke ander array or uske andar ek or array or sabko milakar ek array me convert karne ka tareeka -
const array = [1,2,3,[4,5,6],7,[8,9,0],[9,7,[8,6,5,4]]];
const newAr3 = array.flat(Infinity);
console.log(newAr3); 

// kuch value di gayi hai use check karna ki vo array me hai ya nahi ?
console.log(Array.isArray("Saksham"));

// humne check kiya to pata chala ki vo array nahi hai to now ab hum ise array me convert karte hai 
console.log(Array.from("Saksham"));

console.log(Array.from({Name: "Saksham"})); //It print empty array because we doesn't specify that what we are trying to print either Key or Value. (Very Intresting Case)

// Now we have multiple variable and we have to convert into array 
let marks1 = 65;
let marks2 = 70;
let marks3 = 75;

console.log(Array.of(marks1,marks2,marks3));