let display = document.getElementById('display')
let currentExpression = "";

function appendSymbol(symbol){
    if(symbol === '←'){
        currentExpression = currentExpression.slice(0, -1);
    }else{
        currentExpression += symbol;
    }
    updateDisplay()
}

function clearDisplay(){
    currentExpression = "";
    updateDisplay()
}

function updateDisplay(){
    display.textContent = currentExpression || "0";
}

function calculate(){
    try{
        const result = eval(currentExpression);
        currentExpression = result.toString();
        updateDisplay();
    }catch (error){
        display.textContent = "Error";
        currentExpression = ""
    }
}