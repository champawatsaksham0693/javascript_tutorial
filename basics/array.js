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


