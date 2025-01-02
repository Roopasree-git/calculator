let result='';

function appendNumber(num){
    result+=num;
    updateDisplay();
}

function appendOperator(operator){
    result+=operator;
    updateDisplay();
}

function deleteLast(){
    result=result.slice(0,-1);   //slice(startindex,endindex)
    updateDisplay();
}

function clearDisplay(){
    result='';
    updateDisplay();
}

function calculateResult(){
    result=(Math.round(eval(result)*1000)/1000).toString();
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('display').value=result;
}