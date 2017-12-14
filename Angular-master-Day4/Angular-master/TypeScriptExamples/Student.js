"use strict";
exports.__esModule = true;
var Dept_1 = require("./Dept");
var Dept_2 = require("./Dept");
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.callMe = function () {
        var dept = new Dept_1.Dept();
        dept.print();
        var course = new Dept_2["default"]();
        course.duration();
    };
    return Student;
}());
var studentObject = new Student();
studentObject.callMe();
