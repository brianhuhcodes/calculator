const numbers = document.querySelectorAll("button.num")
const calcs = document.querySelectorAll("button.calc")
const results = document.querySelectorAll("button.result")
const displayMain = document.querySelector(".displayMain")
const displayFirst = document.querySelector(".displayFirst")
const displaySecond = document.querySelector(".displaySecond")
const tempDisplay = document.querySelector(".tempDisplay")
const operand = document.querySelector(".operand")

let first = ""
let oper = ""
let second = ""



numbers.forEach((number) => {
     
        number.addEventListener("click", function() {           


            
            if (oper === '') {
                displayFirst.innerText += this.innerText
                first = displayFirst.innerText 
                calc()
                console.log("number first OR oper ===''")
            }
    
            else if (oper !== '') {
                displayFirst.innerText = ''
                displaySecond.innerText += this.innerText
                second = displaySecond.innerText //make two lines. one for displayFirst and one internal calculation
                console.log("number second OR oper !== ''")

            }
        
        
        
        })})
    

/////////// equal button then makes the answer to displayFirst and erase displayFirst 1 and displayFirst 2 and operand

function calc() {
    calcs.forEach((calc) => 
        calc.addEventListener("click", function() {
            if (oper !== "" && first != '' && second != '') {
                console.log("calc() oper =='' and displaySeonc.innertext !== ''")
                console.log(tempDisplay.innerText)
                operate()
                tempDisplay.innerText = displayFirst.innerText

            }
            
            else if (oper === "") {
                console.log("calc() oper===''")        
                tempDisplay.innerText = displayFirst.innerText
            }

            
                oper = this.innerText
                operand.innerText = this.innerText
        //maybe second function here ?
       

    }))
}

results.forEach((result) =>
    result.addEventListener("click", operate)) //



function operate() {
    if (oper === '+') {
        displayFirst.innerText = addition(first, second)
    } else if (oper === '-') {
        displayFirst.innerText = subtraction(first, second)
    } else if (oper === '%') {
        displayFirst.innerText = division(first, second)
    } else if (oper === 'x') {
        displayFirst.innerText = multip(first, second)
    }
    console.log("operate() outside the ifs")
    first = displayFirst.innerText
    displaySecond.innerText = ""
    tempDisplay.innerText = ""
    operand.innerText = ""
    oper = ""
    second = ''
}


function addition(a, b) {
    return parseInt(a)+parseInt(b)
}

function subtraction(a, b) {
    return parseInt(a)-parseInt(b)
}

function division(a, b) {
    if (b == 0) {
        return ("cannot divide by 0")
    }
    return parseInt(a)/parseInt(b)
}

function multip(a, b) {
    return parseInt(a)*parseInt(b)
}








// numbers.forEach((number) => {
//     if (oper === '') {
//         number.addEventListener("click", function() {
//         displayFirst.innerText += this.innerText
//         first = displayFirst.innerText 
//         calc()
//         console.log('first')
//             })}
    
//     else if (oper !== '') {
//         number.addEventListener("click", function() {
//         displayFirstSecond.innerText += this.innerText
//         second = displayFirstSecond.innerText //make two lines. one for displayFirst and one internal calculation
//         console.log("second")
//         switch(oper) {
//             case '+':
//                 addition()
//                 break;
//             case '-':
//                 subtraction()
//                 break;
//             case '%':
//                 division()
//                 break;
//             case 'x':
//                 multip()
//                 break;
//         }
// })}

//     }
    
    
//     )
    
