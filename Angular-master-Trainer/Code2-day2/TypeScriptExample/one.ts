//data type
var a:number =100;
//a ="Hello";
console.log("A is ",a);

var b:string ="hello";
var c:boolean = true;
var d:string[]=[];
d[0] ="hello";
//d[1] =100;

var row:[string,number,boolean]=["aaa",9000,true];
enum Color{red,green,blue};
var myColor:Color.red;
console.log(myColor);

//any
var e:any ="hello";
e=100;


function add(x:number, y:number){

    return x+y;
}

function search():void{ //cannot return anything


}
//call to function 
var z:number = add(911,22);
console.log("add is ",z);


/////// variable of function 
var d1:(x:number,y:number)=>number; //last number is return type
d1 = add;

//my variable conains two argument without return
var t1:{id:number,name:string};

function printEmployee(emp:{id:number,name:string}){
console.log(`id is ${emp.id} and name is ${emp.name}`);

}


var obj:{id:number,name:string}={id:100,name:"raman"};
printEmployee(obj);

//alias name 
var myType:{id:number,name:string};

//var obj3:myType={id:11,name:"aa"};

//different type /union type 
var g1:string|number;

//nerver type
function raiseSomeProblem():never{

    throw new Error("transaction failed..");
}


//////class / oops
class Employee{

    //id:number;
    //name:string;

    constructor(private _id:number,protected name:string, public salary:number){

        //not required 
        //this.id=id;
        //this.name=name;
    }
    public set eid(id:number){
        this._id = id;
    }

    public get eid(){

        return this._id;

    }


}

////IS-A / inheritence 
class Account{

    constructor(private accountNumber:number, protected name1:string){


    }

    withDraw():void{

        console.log("Account withdrawn call...");
    }
}

class SavingAccount extends Account{

    constructor(private balance:number){
        super(111,'aaa');
    }

    

    withDraw():void{
        
            super.withDraw();

                console.log("Saving .....");
            }
}


//object
var sa:SavingAccount = new SavingAccount(9000);
sa.withDraw();













