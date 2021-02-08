// Common Javascript Interview Question

// What is the difference between "var", "let", "const"?

// Create variables

// let const were introduce in ES6

// var scope is global or locally (function)
var example = "1"
function localScope() {
    var example = "2"
    console.log(example)
}

console.log(example)
// 1
localScope()
// 2

// var can be redeclared or reassigned
var color = "blue"
var color = "red"
console.log(color)
// red

var school = "high"
school = "middle"
console.log(school)

// var is hoisted and initialized with undefined
console.log(magic)
// undefined
var magic = "cards"

// let is blocked scope {}

{
    var numbers = '1'
}

console.log(numbers)
// 1

// let can reassigned but not redeclared
let money = "100"
money = "200"
console.log(money)
// 200

// let is hoisted to the top but not initialized
// console.log(black)
// let black = "0"

// const same with blocked scope and hoisted for let

// const can't be redeclared or reassigned
// const favorite = 'sushi'
// favorite = 'pizza'
// console.log(favorite)