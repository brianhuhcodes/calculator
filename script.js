const numbers = document.querySelectorAll("button.num")
const calcs = document.querySelectorAll("button.calc")
const results = document.querySelectorAll("button.result")
const displayMain = document.querySelector(".displayMain")
const displayFirst = document.querySelector(".displayFirst")
const displaySecond = document.querySelector(".displaySecond")
const tempDisplay = document.querySelector(".tempDisplay")
const operand = document.querySelector(".operand")
const back = document.getElementById("back")
const ce = document.getElementById("ce")

let first = ""
let oper = ""
let opered = 0 // if = is entered and trying to use the keypad to start a new calc
let second = ""
displayFirst.innerText = '0'

ce.addEventListener('click', function() {
    displayFirst.innerText = 0
    displaySecond.innerText = ''
    tempDisplay.innerText = ''
    operand.innerText = ''
    first = ''
    oper = ''
    second = ''

})




back.addEventListener('click', function() {
    if (displayFirst.innerText != "0" && displayFirst.innerText != "") {
        displayFirst.innerText = displayFirst.innerText.slice(0, displayFirst.innerText.length - 1)
        first = displayFirst.innerText
        if (displayFirst.innerText == "") {
            displayFirst.innerText = "0"
            first = 0
        }
    }
    else if (displayFirst.innerText == "") {
        displaySecond.innerText = displaySecond.innerText.slice(0, displaySecond.innerText.length - 1)
        second = displaySecond.innerText
        if (displaySecond.innerText == "") {
            displaySecond.innerText = "0"
            second = 0
        }
    }
})



numbers.forEach((number) => {
        number.addEventListener("click", function() {           
            if (oper == '') {
                if (opered == 1) {
                    displayFirst.innerText = "0"
                    opered = 0
                }
                displayFirst.innerText += this.innerText
                displayFirst.innerText = Number(displayFirst.innerText)
                first = displayFirst.innerText 
                calc()
                console.log("number first OR oper ===''")
            }
    
            else if (oper !== '') {

                displayFirst.innerText = ''
                displaySecond.innerText += this.innerText
                displaySecond.innerText =  Number(displaySecond.innerText)
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
    opered = 1
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
    return (parseInt(a)/parseInt(b)).toPrecision(3)
}

function multip(a, b) {
    return parseInt(a)*parseInt(b)
}
