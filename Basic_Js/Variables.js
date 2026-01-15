const accountNumber = 1020202
let bankName = "SBI"
var branchName = "Mumbai"

state = "Maharashtra"

// accountNumber = 1234 if we declared the variable as const it won't allow to change the values later on
// prefer not to use var 
// because of issue in block scope and functional scope
bankName = "HDFC"
branchName= "Thane"
state = "UP"
console.log(accountNumber);
console.table([accountNumber,bankName,branchName,state]);