let age=30
console.log(typeof age)

let new_age=age.toString()
console.log(typeof new_age)

let burger_price=30.5698
console.log(burger_price.toFixed(2))

const newNumber= 304.5667
console.log(newNumber.toPrecision(1))

const hundred= 100000
console.log(hundred.toLocaleString('en-IN'))

// Attribute of Numbers 
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY)

//  ++++++++++++++++++++Maths++++++++++++++++++++
console.log(Math)
console.table({'abs(-10)':Math.abs(-10),'sqrt(2)':Math.sqrt(2),
    'cos(1)':Math.cos(1),'sin(1)':Math.sin(1),
    'round(30.56)':Math.round(30.56),'ceil(4.6)':Math.ceil(4.6), 
    'ceil(4.4)':Math.ceil(4.4),'ceil(4.5)':Math.ceil(4.5),
    'floor(4.6)':Math.floor(4.6),'floor(3.9)':Math.floor(3.9),
    'min':Math.min(3,5,6,7,1),'max':Math.max(5,8,9,7)})

//+++++++++Random function+++++++++++++++++
const min=10
const max=40
console.log(Math.random())

console.log(Math.floor(Math.random() *(max-min+1))+min)

