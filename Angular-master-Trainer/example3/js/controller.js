window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#add").addEventListener("click",doAdd);
}

function doAdd(){
    var id = document.querySelector("#id").value;
    var name = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;
    var pdate = document.querySelector("#date").value;
    var color = document.querySelector("#color").value;
    var url = document.querySelector("#url").value;
    var itemObject = new Item(id, name, price, pdate,color,url);
    ItemOperations.add(itemObject);
    printItem(itemObject);
}

function printItem(itemObject){
    var tbody = document.querySelector("#items");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in itemObject){
    var td = tr.insertCell(index);
    td.innerHTML = itemObject[key];
    index++;
    }
}