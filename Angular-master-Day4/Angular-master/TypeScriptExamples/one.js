var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Data Types
var a = 100;
//a= "Hello";
console.log("A is ", a);
var b = "Hello";
var c = true;
var d = [];
d[0] = "hello";
//d[1] = 100;
var row = ["Ram", 9000, true];
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["GREEN"] = 2] = "GREEN";
    Color[Color["BLUE"] = 3] = "BLUE";
})(Color || (Color = {}));
;
var myColor = Color.GREEN;
console.log(myColor);
var e = "Hello";
e = 100;
function add(x, y) {
    return x + y;
}
var z = add(100, 200);
console.log("Add is ", z);
function search() {
}
var d1;
d1 = add;
var t1;
function printEmployee(emp) {
    console.log("Id is " + emp.id + " and Name is " + emp.name);
}
//var obj:{id:number,name:string} = {id:1001,name:"Ram"}; 
var obj = { id: 1001, name: "Ram" };
printEmployee(obj);
var obj3 = { id: 1002, name: "Mike" };
//var obj3:{id:number,name:string} = {id:1001,name:"Ram"}; 
var obj2 = { id: 1002, firstName: "Mike" };
//printEmployee(obj2);
var g1;
g1 = "Hello";
g1 = 20;
//g1 = true; 
function raiseSomeProblem() {
    throw new Error("Transaction Failed...");
}
var Employee = /** @class */ (function () {
    //id:number;
    //name:string;
    function Employee(_id, _name, salary) {
        this._id = _id;
        this._name = _name;
        this.salary = salary;
        //this.id = id;
        //this.name= name;
    }
    Object.defineProperty(Employee.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var empObj = new Employee(1001, "Ram", 9999);
empObj.id = 1002; // setter
console.log(empObj.id); // getter
console.log("IS A DEMO .......................");
var Account = /** @class */ (function () {
    function Account(accountNumber, name) {
        this.accountNumber = accountNumber;
        this.name = name;
    }
    Account.prototype.withDraw = function () {
        console.log("Account WithDraw Call...");
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(balance) {
        var _this = _super.call(this, 1001, "SA") || this;
        _this.balance = balance;
        return _this;
    }
    SavingAccount.prototype.withDraw = function () {
        _super.prototype.withDraw.call(this);
        console.log("This is SavingAccount WithDraw " + this.balance);
    };
    return SavingAccount;
}(Account));
var sa = new SavingAccount(9000);
sa.withDraw();
