// Data Types
var a:number = 100;
//a= "Hello";
console.log("A is ",a);
var b:string= "Hello";
var c:boolean = true;
var d:string[]=[];
d[0]="hello";
//d[1] = 100;
var row:[string,number,boolean]=["Ram",9000,true];
enum Color{RED=1,GREEN,BLUE};
var myColor:Color= Color.GREEN;
console.log(myColor);
var e:any="Hello";
e=100;

function add(x:number,y:number):number{
    return x + y;
}
var z:number = add(100,200);
console.log("Add is ",z);

function search():void{

}

var d1:(x:number,y:number)=>number;
d1 = add;

var t1:{id:number,name:string};

function printEmployee(emp:{id:number,name:string}){
    console.log(`Id is ${emp.id} and Name is ${emp.name}`);

}
type myObjectType= {id:number,name:string};
//var obj:{id:number,name:string} = {id:1001,name:"Ram"}; 
var obj:myObjectType =  {id:1001,name:"Ram"};
printEmployee(obj);

var obj3:myObjectType = {id:1002,name:"Mike"};
//var obj3:{id:number,name:string} = {id:1001,name:"Ram"}; 

var obj2:{id:number,firstName:string} = {id:1002,firstName:"Mike"};
//printEmployee(obj2);

var g1:string|number ;
g1 = "Hello";
g1 = 20;
//g1 = true; 

function raiseSomeProblem():never{
    throw new Error("Transaction Failed...");
}

class Employee{
    //id:number;
    //name:string;
    constructor(private _id:number, protected _name:string, public salary:number){
        //this.id = id;
        //this.name= name;
    }
   public set id(id:number){
        this._id = id;
    }
   public get id(){
        return this._id;
    }
}

var empObj:Employee = new Employee(1001,"Ram",9999);
empObj.id = 1002;  // setter
console.log(empObj.id); // getter

console.log("IS A DEMO .......................");

class Account {
    constructor(private accountNumber:number, protected name:string){

    }
    withDraw():void{
        console.log("Account WithDraw Call...");
    }
}
class SavingAccount extends Account{
    constructor(private balance:number){
        super(1001,"SA");
    }
    withDraw():void{
        super.withDraw();
        console.log("This is SavingAccount WithDraw "+this.balance);
    }
}

var sa:SavingAccount = new SavingAccount(9000);
sa.withDraw();



