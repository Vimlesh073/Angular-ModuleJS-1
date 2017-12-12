
window.addEventListener("load",bindEvents);

function bindEvents(){

    document.querySelector("#computeId").addEventListener("click",compute);
    document.querySelector("#clearId").addEventListener("click",clearAll);


}

function compute(){


    var price = document.querySelector("#price").value;
    var quantity = document.querySelector("#quantity").value;

    var totalPrice = price*quantity;


    document.querySelector("#res").innerHTML = totalPrice;


}


function clearAll(){

    var htmlObject = document.querySelectorAll("input[type='text']");

    Array.prototype.forEach.call(htmlObject,(e)=>e.value="");


}