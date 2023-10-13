let myDate = new Date();
console.log(myDate);// Output :-2023-10-13T16:12:00.253Z
console.log(myDate.toDateString()); // Output :-Fri Oct 13 2023
console.log(myDate.toISOString()); // Output :-2023-10-13T16:15:12.545Z
console.log(myDate.toJSON());// Output :-2023-10-13T16:15:34.636Z
console.log(myDate.toLocaleDateString()); // Output :- 10/13/2023
console.log(myDate.toLocaleString()); // Output :- 10/13/2023, 4:16:32 PM
console.log(myDate.toLocaleTimeString()); // Output :- 4:16:32 PM
console.log(myDate.toTimeString()); // Output :- 16:17:07 GMT+0000 (Coordinated Universal Time)
console.log(myDate.getTimezoneOffset()); // Output :- 0
console.log(myDate.toUTCString()); // Output :- Fri, 13 Oct 2023 16:17:07 GMT
console.log(myDate.toString()); // Output :- Fri Oct 13 2023 16:17:07 GMT+0000 (Coordinated Universal Time) 
let ceratedDate = new Date(2023,0,23)
let ceratedDate1 = new Date(2023,0,23,5,24)
let ceratedDate2 = new Date("2023-01-14")

//console.log(ceratedDate); //output is :- 2023-01-23T00:00:00.000Z
//console.log(ceratedDate1.toLocaleString()); //output is :- 1/23/2023, 5:24:00 AM
console.log(ceratedDate2.toLocaleString()); //output is :- 1/14/2023, 12:00:00 AM

let myTimeStamp = Math.floor((Date.now()/1000)) //this is in seconds
console.log(myTimeStamp);
let mynewDate = new Date()
console.log(mynewDate.getMonth()+1);
console.log(mynewDate.getDay()); 
const formatDate = mynewDate.toLocaleString('default',{
    // weekday:"long",
    // dateStyle:"full",
    month:"long"
});
console.log(formatDate);