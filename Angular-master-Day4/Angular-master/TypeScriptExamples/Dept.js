"use strict";
exports.__esModule = true;
var Dept = /** @class */ (function () {
    function Dept() {
    }
    Dept.prototype.print = function () {
        console.log("Dept Call...");
    };
    return Dept;
}());
exports.Dept = Dept;
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var Course = /** @class */ (function () {
    function Course() {
    }
    Course.prototype.duration = function () {
        console.log("5 days...");
    };
    return Course;
}());
exports["default"] = Course;
