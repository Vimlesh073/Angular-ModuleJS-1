"use strict";
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
/// <reference path="produce.ts"/>
//TestA.add();
function show(x, y) {
    var z;
    return z;
}
var x = new Array();
var Stack = /** @class */ (function () {
    function Stack() {
    }
    Stack.prototype.print = function (x, y) {
        this.firstNumber = x;
        this.secondNumber = y;
        console.log("First No " + this.firstNumber + " and Second Number " + this.secondNumber);
    };
    return Stack;
}());
var s = new Stack();
s.print(100, 200);
var d2 = new Stack();
d2.print("1000", "2000");
function oldWay(person) {
}
// Interface with Param
function takeInput(person) {
    console.log("Name is " + person.name + " and Age is " + person.age);
}
var myValue = { name: 'Ram', age: 21 };
takeInput(myValue);
var d = function (a, b) {
    return a + b;
};
var TestC = /** @class */ (function () {
    function TestC() {
    }
    TestC.prototype.show = function () {
    };
    TestC.prototype.display = function () {
    };
    return TestC;
}());
var A;
(function (A) {
    function show() {
        console.log("this is show");
    }
    A.show = show;
})(A || (A = {}));
A.show();
(function (A) {
    var B;
    (function (B) {
        function display() {
            console.log("this is disp");
        }
        B.display = display;
    })(B = A.B || (A.B = {}));
})(A || (A = {}));
A.B.display();
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.draw = function () {
        console.log("Square Draw...");
    };
    return Square;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.radius = function () {
        console.log("Circle Radius");
    };
    Circle.prototype.draw = function () {
        console.log("Circle Draw...");
    };
    return Circle;
}(Shape));
var Drawing = /** @class */ (function () {
    function Drawing() {
    }
    // Upcasting
    Drawing.prototype.drawingObject = function (shape) {
        // Circle / Square / 
        shape.draw();
        if (shape instanceof Circle) {
            var c1 = shape; // Downcasting
            c1.radius();
        }
    };
    return Drawing;
}());
var drawingObj = new Drawing();
drawingObj.drawingObject(new Circle());
drawingObj.drawingObject(new Square());
//# sourceMappingURL=bundle.js.map