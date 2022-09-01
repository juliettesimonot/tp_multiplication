//data du dom
const displayFirstNumber = document.querySelector('.number1');
const displaySecondNumber = document.querySelector('.number2');
const input = document.querySelector('input');
const buttonResult = document.querySelector('.result');
const fails = document.querySelector('.fails span');
const victory = document.querySelector('.victory span');
const buttonRestart = document.querySelector('.restart');
const message = document.querySelector('.message');

//variables
let firstNumber;
let secondNumber;
let countFails = 0;
let countVictory = 0;



//Lancer un calcul aléatoire
function getRandomInt() {
    return Math.floor(Math.random() * 11);
}

function randomNumbers(){
    firstNumber = getRandomInt();
    secondNumber = getRandomInt();
    displayFirstNumber.textContent = firstNumber;
    displaySecondNumber.textContent = secondNumber;
}

window.onload = randomNumbers();


// verifier input un nombre entier 
function isNumber(input){
    try {
        if(isNaN(Number(input))==true ){
            alert("Veuillez saisir un nombre entier");
        }else{
            isValid(input);
        }
    } catch (error) {
        alert("Saisie inconnue, veuillez saisir un nombre entier");
    }
   
}

//verifier si resultat correct
function isValid(input){
    message.textContent="Message : ";
    let goodResult = firstNumber*secondNumber;
    if(input==goodResult){
        message.textContent += "Bravo!"
        countVictory++;
        victory.textContent= " "+countVictory;
        randomNumbers();
    }else{
        message.textContent += "Oups ce n'est pas le bon résultat!"
        countFails++;
        fails.textContent= " "+countFails;
    }
}


//modifier les donnees au cick
buttonResult.addEventListener('click', e=>{
    e.preventDefault();
    let userInput = Number(input.value);
    isNumber(userInput);
    input.value="";
})

buttonRestart.addEventListener('click', e=>{
    e.preventDefault();
    randomNumbers();
    countFails=0;
    countVictory=0;
    victory.textContent= "0";
    fails.textContent= "0";
    message.textContent="Message :";
    input.value="";
})