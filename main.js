const diceRoll = document.querySelector('#dice-roll')
const rollButton = document.querySelector('#roll')
const sumRoll = document.querySelector('#sum-roll')
const showButton = document.querySelector('.show')
const total = document.querySelector('#total')
const resetButton = document.querySelector('#reset-button')
const sideinput = document.querySelector('#sideinput')
let totalRolls = 0
let diceIndex =  0


const diceRolls = []


rollButton.addEventListener('click', function(){
    let userInput = diceRoll.value

    while(diceIndex < userInput){
        var random = Math.floor(Math.random() * sideinput.value) +1
        totalRolls +=  random
        diceRolls.push(random)
        diceIndex += 1
        console.log('button is pushed')
    }
    sumRoll.innerHTML = 'Sum of rolls is ' + totalRolls
    diceIndex = 0
})

showButton.addEventListener('click', function(){
    console.log(diceRolls)
    let index = 0
    while(index < diceRolls.length){
        let rollList = document.createElement('li')
        rollList.innerHTML = diceRolls[index]
        total.appendChild(rollList)
        index += 1
    }
    index = 0
})

resetButton.addEventListener('click', function(){
    console.log('dice reset');
    let reset = 0

    diceRolls.splice(0,diceRolls.length)
    diceRoll.value = "" 
    sumRoll.innerHTML = 'Sum of rolls is '
    total.innerHTML = ""
})


// ELEMENT . appendChild (thing to append)
// var element = document.createElement(tagName[, options]);