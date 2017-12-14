
interface Person{
    name:string;
    age:number;
}

function oldWay(person:{name:string, age:number}){

}

// Interface with Param
function takeInput(person:Person):void{
    console.log(`Name is ${person.name} and Age is ${person.age}`);
}

var myValue:Person = {name:'Ram',age:21};
takeInput(myValue);

// interface for functions
interface Demo{
    (x:number,y:number):number;
}
var d:Demo = function (a:number, b:number):number{
    return a + b;
}

//var e:Demo = function (a:string):void{

//}
// Interface with classes
interface TestB{
    show():void;
    display():void;
}
interface TestEE{
    print():void;
}
interface TestD extends TestB,TestEE{

}
class TestC implements TestB{
    show():void{
    
    }
    display():void{

    }
}