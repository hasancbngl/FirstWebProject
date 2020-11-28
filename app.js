//let and var used for variable declaration. var used for functions let used for blocks 
let number1=0
let number2=0
//function generates number between 1-88
function geneterateNumbers() {

    x=Math.floor((Math.random()*88)+1)
    return x;
}

//get the values
const generatednumber1 = document.querySelector("#generatednumber1")
const generatednumber2 = document.querySelector("#generatednumber2")
const sum = document.querySelector("#sum")
const generate = document.querySelector(".btn-generate")
const calculate = document.querySelector(".btn-calculate")

generate.addEventListener("click", function(e){

    const actions=e.currentTarget.classList;

    //generate 2 number
    if(actions.contains("btn-generate")){
        number1 = geneterateNumbers()
        number2 = geneterateNumbers()

    }
    generatednumber1.textContent = number1
    generatednumber2.textContent = number2

})

calculate.addEventListener("click", function(e){

    const actions=e.currentTarget.classList;

    //take sum of 2 numbers

    if(actions.contains("btn-calculate")) {
        total = number1 + number2
    }
    sum.textContent = total

})





