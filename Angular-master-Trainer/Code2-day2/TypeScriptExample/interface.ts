interface Person{

    name:string;
    age:number;
}

function takeInput(person:Person):void{


}

var myvalue:Person ={name:"raman",age:21};

takeInput(myvalue);

//////////////

interface Demo{
    (x:number,y:number):number;
}


var dd:Demo = function(a:number,b:number):number{

    return a+b;

}

