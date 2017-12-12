window.addEventListener("load", bindEve);
function bindEve() {
    document.querySelector("#computeButton").addEventListener("click", perfonAction);
}
function perfonAction() {
    var price;
    var quantity;
    var amount;
    price = document.querySelector("#price").value;
    quantity = document.querySelector("#quantity").value;
    amount = price * quantity;
    document.querySelector("#result").innerHTML = amount.toString();
}
