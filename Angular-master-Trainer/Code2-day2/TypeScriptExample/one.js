//data type
var a = 100;
//a ="Hello";
console.log("A is ", a);
var b = "hello";
var c = true;
var d = [];
d[0] = "hello";
//d[1] =100;
var row = ["aaa", 9000, true];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var myColor;
console.log(myColor);
//any
var e = "hello";
e = 100;
function add(x, y) {
    return x + y;
}
var z = add(911, 22);
console.log("add is ", z);
