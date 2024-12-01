const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);  //running String w/ eval() is huge security risk. Don't use arbitrary values.
    }
    catch(error){
        display.value = "Error";
    }
}