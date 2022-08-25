const handleRequest = async (request) => {
    return await serveFile(request, "pw_generator.html");
  };

serve(handleRequest, { port: 7777 });

if (typeof document !== 'undefined') {const passwordElement = document.getElementById("pw");
const copyElement = document.getElementById("copy");
const lengthElement = document.getElementById("len");
const upperElement = document.getElementById("uppercase");
const lowerElement = document.getElementById("lowercase");
const symbolsElement = document.getElementById("symbols");
const numbersElement = document.getElementById("numbers");
const creatorElement = document.getElementById("generate");
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyzåäö";
const numbers = "0123456789";
const symbols = ".,!?#€%&/()=*+-";


function getLowercase() {
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getNumbers() {
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function getCharacter() {
    const characters = [];
    if (upperElement.checked){
        characters.push(getUppercase());
    } 
    if (lowerElement.checked){
        characters.push(getLowercase());
    }
    if (numbersElement.checked){
        characters.push(getNumbers());
    }
    if (symbolsElement.checked){
        characters.push(getSymbols());
    }
    return characters[Math.floor(Math.random()*characters.length)];
}

function createPassword(){
    const len = lengthElement.value;
    let password = '';
    for(let i=0; i<len; i++) {
        const character = getCharacter();
        password += character;
    }
    passwordElement.innerText = password;
}

creatorElement.addEventListener("click", createPassword);
copyElement.addEventListener("click", ()=>{
    const textarea = document.createElement("textarea");
    const password = passwordElement.innerText;
    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
})}