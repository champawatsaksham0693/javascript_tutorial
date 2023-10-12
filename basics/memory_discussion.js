/*
    There are two types of memory allocation
    1. Stack (In Primitive) Stack me humesha hume copy milti hai means jo bhi changes hum karte hai vo sab original value me koi bhi impact nahi daalte hai 
    
    2. Heap (In Non-Primitive) Heap me humesha hume reference milta hai means jo bhi changes hota hai vo original value me hota hai.
    
*/

let Name = "Saksham jain"
let anotherName = Name
anotherName = "Hitesh Jain";

console.log(Name);
console.log(anotherName);

let User1 = {
    Email: "saksham@google.com",
    Name: "Saksham Jain",
    Upi: "saksham@scl"
}
let User2 = User1

User1.Email = "hitesh@google.com"
User1.Name = "Hitesh Jain"

console.log(User1.Email);
console.log(User2.Name);
console.log(User1.Email);
console.log(User2.Name);

