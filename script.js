const numbers = document.querySelectorAll("button.num")
const calcs = document.querySelectorAll("button.calc")
const results = document.querySelectorAll("button.result")
let first = 0

const display = document.querySelector(".display")
let input = numbers.forEach((number) => 
    number.addEventListener("click", function() {
    display.innerText += this.innerText
    first = display.innerText
})) // by class naem?
    //make two lines. one for display and one internal calculation


console.log(display.innerText)

calcs.forEach((calc) => 
    calc.addEventListener("click", function() {
    if (display.innerText.slice(-1) == "x" || display.innerText.slice(-1) == "%" 
    || display.innerText.slice(-1) == "+" || display.innerText.slice(-1) == "-" ) {


        input = `${input} ${this.innerText}`}
    }))


numbers.forEach((number) => 
    number.addEventListener("click", e => {
    console.log(e)}))