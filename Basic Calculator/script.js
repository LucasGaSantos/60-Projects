<<<<<<< HEAD
const buttonsEl = document.querySelectorAll("button")

const inputFieldEl = document.getElementById("result")

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () =>{
    const buttonValue = buttonsEl[i].textContent    
    if(buttonValue === "C") {
        clearResult()
    } else if (buttonValue === "=") {
        calculateResult()
    } else {
        appendValue(buttonValue)
    }
    })
}

function clearResult(){
    inputFieldEl.value = ""
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue    
=======
const buttonsEl = document.querySelectorAll("button")

const inputFieldEl = document.getElementById("result")

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () =>{
    const buttonValue = buttonsEl[i].textContent    
    if(buttonValue === "C") {
        clearResult()
    } else if (buttonValue === "=") {
        calculateResult()
    } else {
        appendValue(buttonValue)
    }
    })
}

function clearResult(){
    inputFieldEl.value = ""
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue    
>>>>>>> 9d4f9c7ae51eb98fd7441e22e69d0871c3470012
}