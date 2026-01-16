console.log(2 > 1);       // true
console.log(2 < 4);       // true
console.log(2 >= 1);      // true
console.log(2 == 1);      // false
console.log(2 !=1 );      // true
console.log(2 <= 5);      // true

console.log("2" > 1)      // ture
console.log("02" > 1)     // true

//equality check == and comparision > < >= <= work differently
// comparision convert null to a number ,treating it as 0.
// thats why null>=0 return as true and null>0 return as false
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
console.log(null <= 0) //true

//for every case undefind return false only
//Any numeric comparison with undefined returns false
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === strict check
// JavaScript does not have a “strict” version of >, <, >=, or <= like it has ===.
console.log("strict check result",2 === 2);  //true
console.log("strict check result",2 === "2"); //false









