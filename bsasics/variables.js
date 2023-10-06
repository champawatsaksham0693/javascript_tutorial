const accId = "12345" // 
/*
    To declare a constant we have only one method which is we use "const" keyword 
    while for declaration of variable we mostly use "let" and "var" keyword
    Note :- Prefer Not to use Var because of issue in block and functional scope
*/
let accMail = "saksham@gmail.com"
var accPassword = "12345678" 
accCity = "Jaipur"

//If assignment is in constant then we can not change it later means if we write 
// accID = "123456" then it generates error after declaration.

console.log(accId);//it prints only one variables value 
console.table([accId,accMail,accPassword,accCity]);//It prints all variables value in tabular form 
let accState; //If we do not assign the value then it become undefined value while printing
accMail = "sakshamJain@gmail.com"
accPassword = "21515252"
accCity = "Delhi"
console.table([accId,accMail,accPassword,accCity, accState]);//It prints all variables value in tabular form 