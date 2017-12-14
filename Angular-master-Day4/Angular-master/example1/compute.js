window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#computeButton").addEventListener("click",compute);
    document.querySelector("#clearButton").addEventListener("click",clearAll);
}

function compute(){
    var price = document.querySelector("#price").value;
    var quantity = document.querySelector("#quantity").value;
    var amount = price * quantity;
    document.querySelector("#result").innerHTML = amount;
}

function clearAll(){
    var htmlObject = document.querySelectorAll("input[type='text']");
    Array.prototype.forEach.call(htmlObject,(e)=>e.value="");
}