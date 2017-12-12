window.addEventListener("load",bindEvents);
function bindEvents(){
    var buttonArr = document.querySelectorAll(".opr");
    Array.prototype.forEach.call(buttonArr
        ,(currentButton)=>
        currentButton.addEventListener("click",doOperation));
}

function doOperation(event){
    //console.log("Event is ",event.target.innerHTML);
    var firstNumber = document.querySelector("#firstno").value;
    var secondNumber = document.querySelector("#secondno").value;
    //var operationName = event.target.getAttribute("data-operationname");
    //var calcObject = new Calculator();
    //var result = calcObject[operationName](firstNumber,secondNumber);
    var operator = event.target.innerHTML;
    var result = compute(firstNumber,secondNumber,operator);
    document.querySelector("#result").innerHTML = result;
}