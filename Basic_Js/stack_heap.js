// stack--> primitive value (get copy of values)
// heap --> non primitive value (get object reference)

let facebookId = "niteshpandey"
let instagramId = facebookId

console.log(facebookId)
console.log(facebookId)

instagramId = "nitofficial"

console.log(facebookId)
console.log(instagramId)   //it only change the instagramId not facebookId because it receive the copy instead of reference.

let employeeOne = {
    "name":"test1",
    "department":"IT"
}

console.log(employeeOne)
let employeeTwo = employeeOne

console.log(employeeTwo)

employeeTwo.department = "Computer"
console.table([employeeOne,employeeTwo]) //both are showing same values because they are refering to the same object.

