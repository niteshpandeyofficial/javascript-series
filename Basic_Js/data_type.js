"use strict";  //treat all JS code as newer version

// "Primitive (call by value)
// Number,bigint
// string
// boolean
// null -- standalone value
// undefined --value is not defined
// symbol --uniqueness

// Non primitive (call by reference value)
// Array, Objects, Function
// alert(4+5) // we are using  nodejs ,not browser

console.log(3+3);
console.log('Nitesh')

let name = "Nitesh"
let age =30
let isAvailable =true 
let tempreture 

const id =Symbol('123')
const idNew=Symbol('123')

const bigNumber=3455n
const Number=3455234435  //return only number type instead bigint 
console.log(typeof bigNumber)  //return type as bigint
console.log("compare the id",id==idNew)

console.table([name,age,isAvailable,tempreture])

//object
console.log(typeof name) //string
console.log(typeof undefined); //return undefined
console.log(typeof null);  // return object

let mydetails={
    "name":"Nitesh",
    "age":30
}
console.log(typeof mydetails);

let language=["Python","C","Java"]
const myfunction=function()
{
    console.log('Hello Friends')
}

console.log(typeof myfunction) //function but also called function object
console.log(typeof language)  //object



