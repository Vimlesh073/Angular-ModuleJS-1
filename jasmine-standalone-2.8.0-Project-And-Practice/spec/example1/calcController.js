

window.addEventListener("load",bindEvents);

var imported = document.createElement("script");
imported.src="calcOperation.js";
document.head.appendChild(imported);


function bindEvents(){
 

/*
    document.querySelector("#sumId").addEventListener("click",calcOps);
    document.querySelector("#subId").addEventListener("click",calcOps);
    document.querySelector("#mulId").addEventListener("click",calcOps);

*/


    ////////////////or
    var buttonArr = document.querySelectorAll(".ops");

    Array.prototype.forEach.call(buttonArr,(cb)=>cb.addEventListener("click",calcOps));


    document.querySelector("#clearId").addEventListener("click",clearAll);


    
    console.log("hi");
    

}

function calcOps(e){
    
    console.log("fun");

    var k = e.target.innerHTML;

    console.log("k");

    var operationname = e.target.getAttribute("data-operationname");

    var n1 = document.querySelector("#num1").value; 
    var n2 = document.querySelector("#num2").value;    
    var res =0;
   ///// aprpoach #1
    var calO = new calculator();

    res = calO[operationname](n1,n2);

   /////

   ///// aprpoach #2
   
/*
   if(k==="+")
   {
   
       res =    calO.sumNum( parseInt( n1), parseInt( n2));
   
   }
   else if(k==="-"){
   
       res =    calO.subNum(n1,n2);
   }
   else if(k==="*"){
   
       res =    calO.mulNum(n1,n2);
   
   }
   
  */

///// aprpoach #3




    document.querySelector("#res").value = res; 


}


function clearAll(){
    
        var htmlObject = document.querySelectorAll("input[type='text']");
    
        Array.prototype.forEach.call(htmlObject,(e)=>e.value="");
    
    
    }