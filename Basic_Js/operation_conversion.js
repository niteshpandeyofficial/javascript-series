
let score="10"

console.log(typeof score);
console.log(typeof(score)) // we can use the typeof like above also

let newScore=Number(score)
console.log(newScore);
console.log(typeof newScore);

// string "123" ==> 123
// alphanumeric "123ab" ==> NaN
// boolean true ==> 1 , false ==> 0

let isAvailable =0
let booleanIsAvailable =Boolean(isAvailable)
console.log(booleanIsAvailable);

// 1 ==> true 0 ==> false
// "" ==> false "nitesh" =>true
//any integer number or string return true only.
//empty string and zero number always return false.

let randomNumber =34
let stringNumber =String(randomNumber)
console.log(randomNumber)
console.log(typeof stringNumber)

//number to string conversion

// *********** Operation ************
let value = 3
let negValue = -value
console.log("Negative value",negValue);


console.log("Addition",2+2)
console.log("Multiplication",2*2)
console.log("Division",2/3)
console.log("Power",2**3);
console.log("modulo",2%5);
// console.log("floor division",5//6) floor division is not supported by JS like this
console.log(Math.floor(5/6)); // we can use like this


let str1="Good Morning"
let str2=" Nitesh"

let finalString = str1+str2
console.log(finalString);

console.log("1" + 2);     //12
console.log("1" + 2 + 2); //122
console.log(2 + 2 + "1"); //41

// ###### Assignement ########
let num1,num2
num1=num2=num3=4 // creates num3 as a GLOBAL variable,its dangerous
// when we are using "use strict" then it will raise the error as ReferenceError: num3 is not defined 
console.table([num1,num2,num3]);


let counter = 10
++counter
console.log("Prefix",counter); //11
counter++
console.log("Postfix",counter); //12















