window.addEventListener("load",bindEvents);

function bindEvents(){

    document.querySelector("#add").addEventListener("click",doAdd);
    document.querySelector("#delete").addEventListener("click",deleteItem);


    //VK
    document.querySelector("#save").addEventListener("click",saveItem);
    document.querySelector("#load-local").addEventListener("click",loadLocalItem);
    document.querySelector("#sort").addEventListener("click",sortItem);
    document.querySelector("#load").addEventListener("click",loadItem);

}
////
function loadItem(){



}
////
function sortItem(){


    console.log("sort fun called");

    var itemObj = ItemOperations.itemArray;      

    var tData  =itemObj.sort((a,b)=>a.id-b.id)  ; //for ascending

    console.log("after sort");
    var tbody = document.querySelector("#items");
    tbody.innerHTML = "";

    console.log("before bind to table");
    tData.forEach(printItem);
    console.log("table binded");


}
////
function loadLocalItem(){

    
    

        var data =localStorage.getItem('itemObj');    
        var ItemOperations =JSON.parse(data);
        
        console.log('retrievedItemObject: ', ItemOperations);

        var tbody = document.querySelector("#items");
        tbody.innerHTML = "";

        ItemOperations.forEach(printItem);



}
///
function saveItem(){

    var itemObj = ItemOperations.itemArray;    
    var itemJSON = JSON.stringify(itemObj);

    // Put the object into storage
    localStorage.setItem('itemObj', itemJSON);

    ////for test only
    // Retrieve the object from storage
    var retrievedItemObject = localStorage.getItem('itemObj');

    console.log('retrievedItemObject: ', JSON.parse(retrievedItemObject));

}

function deleteItem(){

    ItemOperations.delete();
    printItemTable();
    updateCount();
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
function printItemTable(){
    var tbody = document.querySelector("#items");
    tbody.innerHTML = "";
    ItemOperations.itemArray.forEach(printItem);
}
function printItem(itemObject){
   
    var tbody = document.querySelector("#items");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in itemObject){
        if(key=='markForDelete'){
            continue;
        }
        var td = tr.insertCell(index);
    td.innerHTML = itemObject[key];
    index++;
    }
    var operationTd = tr.insertCell(index);
    operationTd.appendChild(createIcon("images/delete.png",markDelete,itemObject.id));
    operationTd.appendChild(createIcon("images/edit.png",edit,itemObject.id));
    updateCount();
}

function createIcon(iconPath,fn,id){
    var img = document.createElement("img");
    img.src=iconPath;
    img.className="icon";
    img.setAttribute("itemid",id);
    img.addEventListener("click",fn);
    return img;
}

function markDelete(event){
    var currentImg = event.srcElement;
    var tr = currentImg.parentNode.parentNode;
    tr.classList.toggle("red");
    var id = currentImg.getAttribute("itemid");
    var itemObject = ItemOperations.searchById(id);
    itemObject.toggle();
    updateCount();
    //tr.className  = "red";
    console.log("Delete Call ",currentImg);

}

function updateCount(){
    var markCount = ItemOperations.countMark();
    var totalRecord = ItemOperations.itemArray.length;
    var unMark = totalRecord - markCount;
    document.getElementById("total").innerHTML = totalRecord;
    document.querySelector("#mark").innerHTML = markCount;
    document.querySelector("#unmark").innerHTML = unMark;
}

function edit(){
    console.log("edit call");
}